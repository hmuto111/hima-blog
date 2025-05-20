import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api-client";
import Spinner from "@/components/spinner/spinner";
import styles from "@/features/admin/styles/login.module.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await api.post("/auth/login", { username, password });
      // トークンを保存
      localStorage.setItem("authToken", response.data.token);
      // 管理者ダッシュボードへリダイレクト
      navigate("/admin");
    } catch (err) {
      console.error("ログインエラー:", err);
      setError("ログインに失敗しました。再試行してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>管理者ログイン</h1>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? <Spinner size="small" /> : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
