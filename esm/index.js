import { PhpBase } from 'php-wasm/PhpBase.js';
import PhpBinary from 'php-wasm/php-web.js';

export class PhpWeb extends PhpBase {
  constructor(...args) {
    super(PhpBinary, ...args);
  }
}
