import { useRef, useEffect } from "react";

/**
 * usePrevious - A custom React hook to track the previous value of a state or prop.
 *
 * This hook returns the previous value of the state or prop after the component renders.
 *
 * @param {T} value - The current value to track.
 * @returns {T | undefined} - The previous value, or `undefined` if it doesn't exist yet.
 *
 * @example
 * // Component to track the previous value of a counter
 * const CounterComponent = () => {
 *   const [count, setCount] = useState(0);
 *   const previousCount = usePrevious(count);
 *
 *   return (
 *     <div>
 *       <p>Current Count: {count}</p>
 *       <p>Previous Count: {previousCount}</p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 */
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
