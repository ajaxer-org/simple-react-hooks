import useLocalStorage from "./useLocalStorage";

/**
 * useDarkMode - A custom React hook to manage dark mode state using localStorage.
 *
 * This hook manages the state of dark mode (whether the dark mode is enabled or not)
 * and synchronizes it with localStorage. It initializes the dark mode state based on
 * the user's system preference or a previously saved value in localStorage.
 *
 * @returns {[boolean, (value: boolean) => void]} - An array containing:
 *   - `darkMode`: A boolean indicating whether dark mode is enabled.
 *   - `setDarkMode`: A function to toggle the dark mode state and update localStorage.
 *
 * @example
 * // Component to toggle dark mode
 * const DarkModeToggle = () => {
 *   const [darkMode, setDarkMode] = useDarkMode();
 *
 *   const toggleDarkMode = () => setDarkMode(!darkMode);
 *
 *   return (
 *     <div>
 *       <button onClick={toggleDarkMode}>
 *         {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
 *       </button>
 *     </div>
 *   );
 * };
 */
export default function useDarkMode(): [boolean, (value: boolean) => void] {
  // Use the useLocalStorage hook to manage dark mode state
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkModeEnabled", // Key for localStorage
    window.matchMedia("(prefers-color-scheme: dark)").matches // Initial value based on system preference
  );

  // Return the current dark mode state and the function to update it
  return [darkMode, setDarkMode];
}
