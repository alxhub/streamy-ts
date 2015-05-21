# broccoli-lodash

The broccoli-lodash plugin renders [lodash templates](https://lodash.com/docs/#template).

This plugin is designed to compile a single, primary input file
into a single output file.

## Installation

```bash
npm install --save-dev broccoli-lodash
```

## Usage

```js
var renderLodashTemplate = require('broccoli-lodash');

var outputTree = renderLodashTemplate(sourceTrees, options)
```

* **`inputTree`**: A tree to search for files.

* **`options.files`**: An array of blob patterns to match templates.

* **`options.context`**: A context used to render each template.

Output files are named the same as inputs, but with the extension removed, i.e.

- `index.html.template` → `index.html`
- `index.template` → `index`
- `index` → `index`

### Example

```js
var lodash = require("broccoli-lodash");
// Write index.html
var index = lodash("src", {
  files: ["index.html.template"],
  context: {
    env: "production",
    version: "0.1.0"
  }
});
```
