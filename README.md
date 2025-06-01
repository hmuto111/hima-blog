# Hima Blog

## 概要

HimaBlog は、@hmuto111 の個人的なブログサイトです。主に私が暇なときや気が向いたときに日々の学びや技術的な知見を共有する目的で運用されています。

## 技術スタック

### フロントエンド

- React + TypeScript
- Vite
- React Router
- Axios

### バックエンド

- Hono + TypeScript
- Prisma (PostgreSQL)
- Docker (PostgreSQL)
- JWT 認証 (hono/jwt)

## ディレクトリ構成

### フロントエンド

```
.
├── app                   # アプリケーションのルートディレクトリ
│   └── routes            # アプリケーションの各ページを格納する
│       ├── admin         # 管理者用ページを格納する
│       └── app           # アプリケーションページを格納する
├── assets                # 画像やフォントなど静的なファイルを格納する
├── components            # アプリケーションに共通なコンポーネントを格納する
├── config                # パスなどのグローバルな設定を格納する
├── features              # 機能ごとのモジュールを格納
│   ├── admin
│   │   ├── api           # 機能で使用するAPI関連のモジュールを格納する
│   │   ├── components    # 機能で使用するコンポーネントを格納する
│   │   ├── hooks         # 機能で使用するフックスを格納する
│   │   ├── styles        # 機能で使用するスタイルを格納する
│   │   ├── types         # 機能で使用する型定義を格納する
│   │   └── utils         # 機能で使用するユーティリティ関数を格納する
│   └── blog
├── lib                   # ライブラリ等を格納する
│   └── api-client.ts
└── types                 # アプリケーションに共通な型定義を格納する
```

### バックエンド

```
.
├── docker                # dockerに関するファイルを格納する
│   ├── compose.yml       # docker-composeファイル
│   ├── image             # 各イメージを格納する
│   └── postgres          # postgresDBの初期化SQLを格納する
│       └── init
│           └── init.sql
├── prisma                # prismaのスキーマ設定を格納する
│   └── schema.prisma
├── public                # 外部に公開する画像を格納する
│   └── images
└── src
    ├── domain            # 共通するアプリケーションの処理を格納する
    │   ├── article
    │   │   ├── createArticle.ts
    │   │   ├── deleteArticle.ts
    │   │   ├── getArticle.ts
    │   │   └── updateArticle.ts
    │   └── auth.ts
    ├── lib               # ライブラリ等を格納する
    │   └── prisma-client.ts
    ├── routes            # 各エンドポイント等を格納する
    │   ├── admin
    │   │   ├── adminRouter.ts
    │   │   ├── api       # 機能で使用するエンドポイントを格納する
    │   │   └── types     # 機能で使用する型定義を格納する
    │   └── web
    │       ├── api
    │       ├── types
    │       └── webRouter.ts
    ├── schema            # prismaのスキーマを格納する
    ├── scripts           # 定期実行するスクリプトを格納する
    │   └── cleanup-unused-images.ts
    ├── utils             # ユーティリティ関数を格納する
    │
    └── index.ts          # サーバー設定を記述する
```

## セットアップ

### 環境変数

各.env.sample を参照

### インストール・起動

```bash
# フロントエンド
cd frontend
pnpm i
pnpm run dev

# バックエンド
cd backend
pnpm i
npx prisma generate
pnpm run dev

# DB
cd backend/docker

docker compose up -d
# または
docker compose up
```

## API 仕様

- `/api/v1/*` - 一般ユーザー向け API
- `/admin/v1/*` - 管理者向け API

## 機能

### ユーザー側

- 記事の閲覧機能
- タグ・複数単語による記事検索機能

### 管理者側

- JWT 認証によるログイン機能
- 記事の投稿・削除・編集機能
- 画像アップロード機能
