# browserify-high-priority-extensions
![Build Status](https://travis-ci.org/shaochuancs/browserify-high-priority-extensions.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/shaochuancs/browserify-high-priority-extensions/badge.svg?branch=master)](https://coveralls.io/github/shaochuancs/browserify-high-priority-extensions?branch=master)

When using browserify to bundle up dependencies, `extensions` option can be used to define extra module filename extension. However, the default module filename extension will always have highest priority (`.js, .json`), which may not be the choice.

With browserify-high-priority-extension, custom `extensions` option can have higher priority than the default ones.

## Installation
```sh
$ npm install browserify-high-priority-extensions
```

## Usage
To provide custom `extensions` option with higher priority:
```js
var hpe = require('browserify-high-priority-extensions');
hpe.enable();
```

To reset to the default behaviour:
```js
hpe.disable();
```

## License
(The MIT License)

Copyright (c) 2016 Chuan Shao &lt;shaochuancs@gmail.com&gt;