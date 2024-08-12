# Simple React Hooks Uitlity

[![alt Version](https://img.shields.io/npm/v/simple-react-hooks-utility?color=blue)](https://www.npmjs.com/package/simple-react-hooks-utility) [![Publish to npm](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish.yml) [![Publish to npm --dry-run](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml/badge.svg)](https://github.com/ajaxer-org/simple-react-hooks/actions/workflows/publish-dry-run.yml)

---

### useLocalStorage
```javascript
const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage("darkModeEnabled", true);
```

### useDarkMode
```javascript
const [darkMode, setDarkMode] = useDarkMode();
```