import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

/**
 * useQueryParam - A custom React hook to manage query parameters in the URL.
 *
 * This hook extracts the value of a specified query parameter from the URL and provides
 * a function to update or remove the query parameter. It uses `react-router-dom` hooks
 * to interact with the browser's URL and manage the state of query parameters.
 *
 * @param {string} param - The name of the query parameter to manage.
 * @returns {[string | null, (newValue: string | null) => void]} - An array containing:
 *   - `value`: The current value of the query parameter, or null if not present.
 *   - `setQueryParam`: A function to update the query parameter in the URL.
 *
 * @example
 * // Component to display and update a query parameter
 * const ExampleComponent = () => {
 *   const [queryParam, setQueryParam] = useQueryParam('myParam');
 *
 *   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 *     setQueryParam(event.target.value);
 *   };
 *
 *   return (
 *     <div>
 *       <input type="text" value={queryParam ?? ''} onChange={handleChange} />
 *       <p>Current Value: {queryParam}</p>
 *     </div>
 *   );
 * };
 */
export default function useQueryParam(param: string) {
  const [value, setValue] = useState<string | null>(null);
  const location = useLocation();
  const history = useHistory();

  /**
   * Extracts the value of the specified query parameter from the URL
   * and updates the `value` state.
   */
  useEffect(() => {
    // Create a URLSearchParams object to work with query parameters
    const searchParams = new URLSearchParams(location.search);

    // Update the state with the current value of the query parameter
    setValue(searchParams.get(param));
  }, [location.search, param]);

  /**
   * Updates the query parameter in the URL.
   * If `newValue` is null, the query parameter is removed from the URL.
   * Otherwise, the query parameter is updated with the new value.
   *
   * @param {string | null} newValue - The new value for the query parameter, or null to remove it.
   */
  const setQueryParam = (newValue: string | null) => {
    // Create a URLSearchParams object to work with query parameters
    const searchParams = new URLSearchParams(location.search);

    if (newValue === null) {
      // Remove the query parameter if newValue is null
      searchParams.delete(param);
    } else {
      // Update the query parameter with the new value
      searchParams.set(param, newValue);
    }

    // Navigate to the updated URL with the new query parameter values
    history.push(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };

  // Return the current value of the query parameter and the function to update it
  return [value, setQueryParam] as const;
}
