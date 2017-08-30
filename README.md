## psi-local

Use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights) locally!

#### Using

- `npm install psi-local --save-dev`
- run your application locally (e.g. http://localhost:3000)
- create `.js` file and require module:
  ```js
    const psi = require('psi-local');

    psi(3000)
      .then(data => {
        // do something with results ...
      });
  ```
- run `node <your-file>.js`

#### Additional

Module contains the only function and returns `Promise` for more the best usability. You can easily use ES2017 syntax for working with `psi-local` as this `promise` is never rejected. If some errors occur, it will return object `{ err: Error }`

```js
  (async function() {
    const port = 3000;
    const stats = await psi(port);

    if (stats.err) return handleError(stats);
    return handleResults(stats);
  })()
```

#### MIT License
Fill free to use and contribute
