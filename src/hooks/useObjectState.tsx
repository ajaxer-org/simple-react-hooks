import { useState } from "react";

/**
 * useObjectState - A custom React hook to manage state as an object.
 *
 * This hook allows you to manage a state object and provides a function to update
 * the state with partial updates or with a function that computes the new state
 * based on the previous state.
 *
 * @template T - The type of the state object. It should extend `object`.
 * @param {T} initialValue - The initial state object.
 * @returns {[T, (newValue: Partial<T> | ((prevState: T) => Partial<T>)) => void]} - An array containing:
 *   - `value`: The current state object.
 *   - `updateObject`: A function to update the state with partial values or a function.
 *
 * @example
 * // Component to manage and update an object state
 * const ExampleComponent = () => {
 *   const [state, updateState] = useObjectState<{ count: number; name: string }>({ count: 0, name: '' });
 *
 *   const incrementCount = () => {
 *     updateState({ count: state.count + 1 });
 *   };
 *
 *   const updateName = (name: string) => {
 *     updateState({ name });
 *   };
 *
 *   return (
 *     <div>
 *       <p>Count: {state.count}</p>
 *       <button onClick={incrementCount}>Increment</button>
 *       <input
 *         type="text"
 *         value={state.name}
 *         onChange={(e) => updateName(e.target.value)}
 *       />
 *     </div>
 *   );
 * };
 */
export default function useObjectState<T extends object>(initialValue: T) {
  // State to store the object value
  const [value, updateValue] = useState<T>(initialValue);

  /**
   * Updates the state object with partial values or a function that computes
   * the new state based on the previous state.
   *
   * @param {Partial<T> | ((prevState: T) => Partial<T>)} newValue - The new values to merge into the state object,
   *   or a function that returns the new values based on the previous state.
   */
  function updateObject(newValue: Partial<T> | ((prevState: T) => Partial<T>)) {
    updateValue((prevValue) => {
      if (newValue instanceof Function) {
        // If newValue is a function, call it with the previous state
        return { ...prevValue, ...newValue(prevValue) };
      }
      // Otherwise, treat newValue as a partial state to merge
      return { ...prevValue, ...newValue };
    });
  }

  // Return the current state and the function to update it
  return [value, updateObject] as const;
}
