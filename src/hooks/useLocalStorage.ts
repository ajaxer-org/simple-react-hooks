import React from "react";

/**
 * useLocalStorage - A custom React hook to manage state with localStorage.
 *
 * This hook synchronizes a state value with the localStorage. It initializes the state
 * from localStorage or a provided initial value and updates localStorage whenever the
 * state changes.
 *
 * @param {string} key - The key used to store and retrieve the value from localStorage.
 * @param {T | null} [initialValue] - The initial value to use if there is no value in localStorage.
 * @returns {[T, (value: T) => void]} - An array containing:
 *   - `value`: The current state value.
 *   - `setValue`: A function to update the state and localStorage.
 *
 * @example
 * // Component to use localStorage for a count value
 * const Counter = () => {
 *   const [count, setCount] = useLocalStorage<number>('count', 0);
 *
 *   const increment = () => setCount(count + 1);
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={increment}>Increment</button>
 *     </div>
 *   );
 * };
 */
export default function useLocalStorage<T>(key: string, initialValue?: T | null): [T, (value: T) => void] {
  // Initialize the state with the value from localStorage or the provided initial value
  const [value, setValue] = React.useState(() => {
    // Retrieve the value from localStorage
    const localData = localStorage.getItem(key);

    // Parse and return the value if it exists, otherwise use the initial value
    if (localData !== null) return JSON.parse(localData);

    if (initialValue !== null) return JSON.parse(JSON.stringify(initialValue));

    // Return null if no initial value is provided
    return null;
  });

  // Update localStorage whenever the state changes
  React.useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  // Return the current value and a function to update it
  return [value, setValue];
}
