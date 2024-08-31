import { useSearchParams, useNavigate } from "react-router-dom";

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

/**
 * Custom hook for getting and setting query parameters.
 * @param key - The key of the query parameter to read or update.
 * @returns [value, setValue] - The current value of the query parameter and a setter function to update it.
 */
export default function useQueryParam(key: string): [string | null, (value: string | null) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get the current value of the query parameter
  const value = searchParams.get(key);

  // Function to set a new value for the query parameter
  const setValue = (newValue: string | null) => {
    // Create a new searchParams object to avoid mutating the original one
    const newParams = new URLSearchParams(searchParams);

    if (newValue === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, newValue);
    }

    // Update the URL with the new search parameters
    navigate(`?${newParams.toString()}`, { replace: true });
  };

  return [value, setValue];
}
