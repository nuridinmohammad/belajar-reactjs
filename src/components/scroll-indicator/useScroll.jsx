import { useEffect, useState } from "react";

export default function useScroll() {
  const [percenTage, setPercentage] = useState(0);

  function handleScroll() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const result = (scrollTop / height) * 100;

    setPercentage(result);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return percenTage;
}
