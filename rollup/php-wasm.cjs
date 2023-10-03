const { copyFile } = require('fs');
const { join } = require('path');

copyFile(
  join(__dirname, '..', 'node_modules', 'php-wasm', 'php-web.wasm'),
  join(__dirname, '..', 'php-web.wasm'),
  Object
);
