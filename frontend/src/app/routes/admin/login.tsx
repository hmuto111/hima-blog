import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/spinner/spinner";
import { paths } from "@/config/paths";
import styles from "@/features/admin/styles/login.module.css";
import { login } from "@/features/admin/api/auth";
import Cookies from "js-cookie";
import { useAuth } from "@/features/admin/hooks/useAuth";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useAuth(true);

  const MAX_ATTEMPTS = 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (attempts >= MAX_ATTEMPTS) {
      setError(
        "ログイン試行回数が制限を超えました。しばらくしてから再試行してください。"
      );
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const token = await login(username, password);

      if (!token) {
        throw new Error("トークンが取得できませんでした。");
      }

      Cookies.set("admin_token", token, {
        expires: 1,
        secure: import.meta.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      navigate(paths.admin.home.path);
    } catch (err) {
      console.error("ログインエラー:", err);
      setAttempts((prev) => prev + 1);
      setError("ログインに失敗しました。再試行してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>管理者ログイン</h1>

        {error && <div className={styles.error_message}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="username">ユーザー名</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
              className={styles.input}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || attempts >= MAX_ATTEMPTS}
            className={styles.submit_button}
          >
            {isLoading ? <Spinner size="small" /> : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
