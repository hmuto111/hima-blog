-- DB作成
CREATE DATABASE himablog_db;

-- 作成したDBに接続
\c himablog_db;

-- テーブル作成
CREATE TABLE IF NOT EXISTS article (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(512) NOT NULL,
    tag INTEGER[] NOT NULL DEFAULT '{}',
    view INTEGER NOT NULL DEFAULT 0,
    post TIMESTAMP WITH TIME ZONE NOT NULL,
    updated TIMESTAMP WITH TIME ZONE NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tag (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    used INTEGER NOT NULL DEFAULT 0
);

-- インデックスの作成
CREATE INDEX idx_article_post ON article(post);
CREATE INDEX idx_article_tag ON article USING GIN(tag);

-- 外部キー制約を追加（タグ配列の整合性チェック用関数とトリガー）
CREATE OR REPLACE FUNCTION check_tag_exist() RETURNS TRIGGER AS $$
DECLARE
    tag_id INTEGER;
BEGIN
    IF NEW.tag IS NOT NULL THEN
        FOREACH tag_id IN ARRAY NEW.tag LOOP
            IF NOT EXISTS (SELECT 1 FROM tag WHERE id = tag_id) THEN
                RAISE EXCEPTION 'タグID % は存在しません', tag_id;
            END IF;
        END LOOP;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_check_tag_exist
BEFORE INSERT OR UPDATE ON article
FOR EACH ROW
EXECUTE FUNCTION check_tag_exist();

-- タグの使用回数を更新する関数（追加時）
CREATE OR REPLACE FUNCTION update_tag_used_count() RETURNS TRIGGER AS $$
DECLARE
    tag_id INTEGER;
    old_tag_ids INTEGER[] := '{}';
    common_tag_ids INTEGER[] := '{}';
BEGIN
    -- 新しいタグのカウント増加
    IF NEW.tag IS NOT NULL THEN
        -- 更新の場合、古いタグIDを取得
        IF TG_OP = 'UPDATE' AND OLD.tag IS NOT NULL THEN
            old_tag_ids := OLD.tag;
            
            -- 共通のタグ（更新前後で変更がないタグ）を特定
            SELECT array_agg(t) INTO common_tag_ids
            FROM unnest(NEW.tag) t
            WHERE t = ANY(OLD.tag);
            
            -- 古いタグの使用カウントを減少（共通タグ以外）
            FOREACH tag_id IN ARRAY old_tag_ids LOOP
                IF NOT tag_id = ANY(common_tag_ids) THEN
                    UPDATE tag SET used = used - 1 WHERE id = tag_id;
                END IF;
            END LOOP;
        END IF;
        
        -- 新しいタグの使用カウントを増加（共通タグ以外）
        FOREACH tag_id IN ARRAY NEW.tag LOOP
            IF NOT tag_id = ANY(common_tag_ids) THEN
                UPDATE tag SET used = used + 1 WHERE id = tag_id;
            END IF;
        END LOOP;
    ELSIF TG_OP = 'UPDATE' AND OLD.tag IS NOT NULL THEN
        -- 更新でタグが全て削除された場合、古いタグのカウント減少
        FOREACH tag_id IN ARRAY OLD.tag LOOP
            UPDATE tag SET used = used - 1 WHERE id = tag_id;
        END LOOP;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_tag_used
AFTER INSERT OR UPDATE ON article
FOR EACH ROW
EXECUTE FUNCTION update_tag_used_count();

-- 記事削除時にタグ使用回数を減らす関数
CREATE OR REPLACE FUNCTION decrease_tag_used_count() RETURNS TRIGGER AS $$
DECLARE
    tag_id INTEGER;
BEGIN
    -- 削除された記事のタグカウントを減少
    IF OLD.tag IS NOT NULL THEN
        FOREACH tag_id IN ARRAY OLD.tag LOOP
            UPDATE tag SET used = used - 1 WHERE id = tag_id;
        END LOOP;
    END IF;
    
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_decrease_tag_used
AFTER DELETE ON article
FOR EACH ROW
EXECUTE FUNCTION decrease_tag_used_count();

-- タグの追加
INSERT INTO tag (name) VALUES
    ('Python'),
    ('JavaScript'),
    ('TypeScript'),
    ('Docker'),
    ('PostgreSQL');

-- 記事の追加
INSERT INTO article (title, img, tag, view, post, updated, content) VALUES
(
    'Dockerではじめる開発環境',
    'https://example.com/docker.jpg',
    ARRAY[4, 5], -- Docker, PostgreSQL
    100,
    NOW(),
    NOW(),
    '# Dockerではじめる開発環境
## はじめに
Dockerを使った開発環境の構築方法を解説します。
## PostgreSQLコンテナの作成
...'
),
(
    'TypeScriptとPythonで始める Web開発',
    'https://example.com/web-dev.jpg',
    ARRAY[1, 3], -- Python, TypeScript
    150,
    NOW() - INTERVAL '2 days',
    NOW() - INTERVAL '2 days',
    '# TypeScriptとPythonで始める Web開発
## フロントエンド
TypeScriptの基本的な使い方
## バックエンド
Pythonでのサーバー構築
...'
);