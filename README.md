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
```javascript
import { useLocalStorage } from 'simple-react-hooks-utility'

const [storedValue, setStoredValue] = useLocalStorage('key', 'default');
```



#### useObjectState
```javascript
import { useObjectState } from 'simple-react-hooks-utility'

const [state, setState] = useObjectState({ key1: 'value1', key2: 'value2' });

setState({key2: 'new-value2'})
```
