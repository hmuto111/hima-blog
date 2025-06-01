import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "ページが見つかりません - Hima Blog";

    return () => {
      document.title = "Hima Blog";
    };
  }, []);

  return <div>notfound</div>;
};

export default NotFound;
