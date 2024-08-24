import { useState, useEffect } from "react";

/**
 * useDebounce - A custom React hook to debounce a value.
 *
 * This hook returns a debounced version of the input value. The debounced value will only update
 * after a specified delay, avoiding excessive updates or API calls.
 *
 * @param {T} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value.
 *
 * @example
 * // Component to debounce an input value
 * const DebouncedInput = () => {
 *   const [inputValue, setInputValue] = useState('');
 *   const debouncedValue = useDebounce(inputValue, 500);
 *
 *   useEffect(() => {
 *     // Perform an action with the debounced value (e.g., API call)
 *     console.log(debouncedValue);
 *   }, [debouncedValue]);
 *
 *   return (
 *     <input
 *       type="text"
 *       value={inputValue}
 *       onChange={(e) => setInputValue(e.target.value)}
 *     />
 *   );
 * };
 */
export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function abc() {
  
}
