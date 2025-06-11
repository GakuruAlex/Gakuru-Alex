import { useEffect } from "react";

const LoadFontAwesome = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(link);
  }, []);

  return null;
};

export default LoadFontAwesome;
