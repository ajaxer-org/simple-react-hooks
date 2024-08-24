# Simple React Hooks Uitlity

[![alt Version](https://img.shields.io/npm/v/simple-react-hooks-utility?color=blue)](https://www.npmjs.com/package/simple-react-hooks-utility) [![Publish to npm](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml) [![Publish to npm --dry-run](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml)

---

#### useDarkMode
A custom React hook to manage dark mode state using localStorage.

``` typescript
import { useDarkMode } from 'simple-react-hooks-utility'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
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

// Component to use localStorage for a count value
const Counter = () => {
  const [count, setCount] = useLocalStorage<number>('count', 0);
 
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



#### useQueryParam
A custom React hook to manage query parameters in the URL.

``` typescript
import { useQueryParam } from 'simple-react-hooks-utility'

const ExampleComponent = () => {
  const [queryParam, setQueryParam] = useQueryParam('myParam');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParam(event.target.value);
  };
  
  return (
    <div>
      <input type="text" value={queryParam ?? ''} onChange={handleChange} />
      <p>Current Value: {queryParam}</p>
    </div>
  );
};
```
