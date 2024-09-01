import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  statusCode: number | null;
}

/**
 * useFetch - A custom React hook to fetch data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {UseFetchResult<T>} - An object containing:
 *   - data: The fetched data, or null if not yet available.
 *   - error: An error message if the request fails, or null.
 *   - loading: A boolean indicating if the request is in progress.
 *   - statusCode: The HTTP status code returned by the request, or null.
 *
 * @example
 * const { data, error, loading, statusCode } = useFetch<GitHubUser>('https://api.github.com/user/1');
 *
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error} (Status Code: {statusCode})</div>;
 * return <div>{data?.login}</div>;
 */
export default function useFetch<T>(url: string): UseFetchResult<T> {
  // State to store the fetched data
  const [data, setData] = useState<T | null>(null);

  // State to store any error message
  const [error, setError] = useState<string | null>(null);

  // State to track the loading status of the request
  const [loading, setLoading] = useState<boolean>(true);

  // State to store the HTTP status code of the response
  const [statusCode, setStatusCode] = useState<number | null>(null);

  useEffect(() => {
    // Perform the fetch request
    fetch(url)
      .then((response) => {
        // Set the HTTP status code
        setStatusCode(response.status);

        // Throw an error if the response is not successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Parse and return the response JSON data
        return response.json();
      })
      .then((fetchedData) => {
        // Update the data state with the fetched data
        setData(fetchedData);

        // Set loading to false as the request is complete
        setLoading(false);
      })
      .catch((err) => {
        // Set the error message if the request fails
        setError(err.message);

        // Set loading to false as the request is complete
        setLoading(false);
      });
  }, [url]);

  // Return the current state of the request
  return { data, error, loading, statusCode };
}
