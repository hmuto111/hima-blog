import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { paths } from "@/config/paths";
import { verifyToken } from "../api/auth";

export const useAuth = (isLogin?: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("admin_token");
      const path = isLogin ? paths.admin.home.path : paths.admin.login.path;

      if (isLogin && token) {
        try {
          const isValid = await verifyToken(token);
          if (isValid) {
            navigate(paths.admin.home.path, { replace: true });
          } else {
            Cookies.remove("admin_token");
          }
        } catch (error) {
          console.error("トークンの検証に失敗しました:", error);
          Cookies.remove("admin_token");
        }
      }

      if (!isLogin && !token) {
        navigate(path, { replace: true });
      } else if (!isLogin && token) {
        try {
          const isValid = await verifyToken(token);
          if (!isValid) {
            Cookies.remove("admin_token");
            navigate(path, { replace: true });
          }
        } catch (error) {
          console.error("トークンの検証に失敗しました:", error);
          Cookies.remove("admin_token");
          navigate(path, { replace: true });
        }
      }
    };

    checkAuth();
  }, [navigate, isLogin]);

  return;
};
