# @webreflection/php
Re-packaged [php-wasm](https://github.com/seanmorris/php-wasm#readme) for ESM.

```js
import { PhpWeb } from 'https://cdn.jsdelivr.net/npm/@webreflection/php/es.js';

const php = new PhpWeb({
  print: console.log,
  printErr: console.error,
  locateFile: () => 'https://cdn.jsdelivr.net/npm/@webreflection/php/php-web.wasm'
});

php.addEventListener('ready', () => {
  php.run('<?php echo "Hello World!";');
});
```
