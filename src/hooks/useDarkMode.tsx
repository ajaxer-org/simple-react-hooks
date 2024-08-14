import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(): [boolean, (value: boolean) => void] {
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkModeEnabled",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return [darkMode, setDarkMode];
}
