import useLocalStorage from "./useLocalStorage";

export default function DarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div onClick={handleTheme}>{theme === "light" ? "LIGHT" : "DARK"}</div>
  );
}
