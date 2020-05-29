# test-browser-cache
Play with node, express, cache... to check if I need to limit the number of ajax calls to an api or rather set the browser cache control.

## Context
Multiple (web) components need some data provided by the same API. 
How to share data between components in an optimized manner?      

### Option 1 - Use localStorage
The first component who gets the data should store it in the localStorage so the other components can access it.

Pros:
- access to data on all opened tabs
- able to extend and apply business logic if is need it

Cons:
- couple the components: define contracts, synch functionality, testing, dependencies ...

### Option 2 - Call the API as may times is need and use cache control 

Pros:
- make use of browser cache (no extra calls are done unless the cache expires) 
- each component will continue to be independent but still having the data
- no "extra" code/functionality required

Cons:
- the data might be old (seconds, minutes ... depending on the cache control setting)

## Install

```
npm run dev
```

```
http://localhost:3000/
http://localhost:3000/api
```

---

![Screenshot with the test results](/docs/screenshot.png)
  
---