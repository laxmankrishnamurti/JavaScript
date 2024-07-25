# How Web-pack works? Step-By-Step Guide

- 1. Project initialization

```javascript
npm init -y
```

- 2. Install Webpack

```javascript
npm install webpack webpack-cli --save-dev
```

- 3. Create Project files

```javascript
mkdir src dist
```

- 4. Create an entry javascript file in src directory

```javascript
import { greeting } from "./module.js";

console.log(greeting);
```

- 5. Create a secondary javascript file in src directory

```javascript
export const greeting = "Hello, Webpack!";
```

- 6. Create an HTML file in dist directory

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web-pack demo app</title>
  </head>
  <body>
    <h1>Webpack demo app</h1>

    <script src="bundle.js"></script>
    <--- The JS file will available when bulild command will run ->
  </body>
</html>
```

- 7. Webpack configuration

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
```

- 8. Add a build script to the package.json file

```javascript
"scripts": {
    "build": "webpack"
  },
```

- 9. Run the build script to bundle all JavaScript files which is in the src directory

```javascript
npm run build
```

- 10. Open the HTML file which is in the dist directory
