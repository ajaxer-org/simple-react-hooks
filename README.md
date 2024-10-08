# Simple React Hooks Uitlity

[![alt Version](https://img.shields.io/npm/v/simple-react-hooks-utility?color=blue)](https://www.npmjs.com/package/simple-react-hooks-utility) [![Publish to npm](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml) [![Publish to npm --dry-run](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml)

---

### useFormState
A function to update the form state in a React component.  
This function allows for flexible updates to the form state by specifying a particular field, merging partial state updates, or applying a function to derive new state based on the previous state.

``` typescript
const UserProfileForm = () => {
    const [formState, updateFormState] = useFormState<UserProfile>({ name: "", email: "", bio: "" });

    // Handle input changes and update state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      updateFormState(name, value); // Updates a specific field
    };

    // Increment a counter value based on the previous state
    const incrementCounter = () => {
      updateFormState((prevState) => ({ count: (prevState.count || 0) + 1 }));
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log("Form submitted:", formState);
      // Submit form logic here
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formState.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formState.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Bio:
            <textarea name="bio" value={formState.bio} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={incrementCounter}>
          Increment Counter
        </button>
      </form>
    );
};
```


#### useDarkMode
A custom React hook to manage dark mode state using localStorage.

``` typescript
import { useDarkMode } from 'simple-react-hooks-utility'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
      <div>
        <button onClick={toggleDarkMode}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
      </div>
    );
};
```



#### useDebounce
A custom React hook to debounce a value.  
This hook returns a debounced version of the input value. The debounced value will only update after a specified delay, avoiding excessive updates or API calls.

``` typescript
import { useDebounce } from 'simple-react-hooks-utility'

const DebouncedInput = () => {

    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);

    useEffect(() => {
      // Perform an action with the debounced value (e.g., API call)
      console.log(debouncedValue);
    }, [debouncedValue]);

    return <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
};
```



#### useFetch
A custom React hook to fetch data from a given URL.

```javascript
import { useFetch } from 'simple-react-hooks-utility'

const { data, error, loading, statusCode } = useFetch<ResponseType>('https://api.myserver.com');
```



#### useLocalStorage
useLocalStorage - A custom React hook to manage state with localStorage.

``` typescript
import { useLocalStorage } from 'simple-react-hooks-utility'

const Counter = () => {

    const [count, setCount] = useLocalStorage<number>("count", 0);

    const increment = () => setCount(count + 1);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
```



#### useObjectState
A custom React hook to manage state as an object.

``` typescript
import { useObjectState } from 'simple-react-hooks-utility'

const ExampleComponent = () => {
    const [state, updateState] = useObjectState<{ count: number; name: string }>({ count: 0, name: "" });

    const incrementCount = () => {
      updateState({ count: state.count + 1 });
    };

    const updateName = (name: string) => {
      updateState({ name });
    };

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={incrementCount}>Increment</button>
        <input type="text" value={state.name} onChange={(e) => updateName(e.target.value)} />
      </div>
    );
};
 ```



#### usePrevious
A custom React hook to manage query parameters in the URL.

``` typescript
import { useQueryParam } from 'simple-react-hooks-utility'

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    return (
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {previousCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
};
```



#### useQueryParam
A custom React hook to manage query parameters in the URL.

``` typescript
import { useQueryParam } from 'simple-react-hooks-utility'

const ExampleComponent = () => {
    
    const [queryParam, setQueryParam] = useQueryParam("myParam");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQueryParam(event.target.value);
    };

    return (
      <div>
        <input type="text" value={queryParam ?? ""} onChange={handleChange} />
        <p>Current Value: {queryParam}</p>
      </div>
    );
};
```
