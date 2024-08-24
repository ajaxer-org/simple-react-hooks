# Simple React Hooks Uitlity

[![alt Version](https://img.shields.io/npm/v/simple-react-hooks-utility?color=blue)](https://www.npmjs.com/package/simple-react-hooks-utility) [![Publish to npm](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml) [![Publish to npm --dry-run](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml)

---

#### useDarkMode
```javascript
import { useDarkMode } from 'simple-react-hooks-utility'

const [theme, toggleTheme] = useDarkMode();
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
```javascript
import { useObjectState } from 'simple-react-hooks-utility'

const [state, setState] = useObjectState({ key1: 'value1', key2: 'value2' });

setState({key2: 'new-value2'})
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
