# Webpack with React & TypeScript

## File Structure using VS Code
* Make directory
```
mkdir react-typescript-webpack
```
* open directory in VS Code:
```
code react-typescript-webpack
```
* initialize node package manager:
```
npm init -y
```
* install webpack & webpack-cli as developer dependencies:
```
npm i webpack -D webpack cli
```
* create ```src``` folder in root of project, then insdide this folder create a file called ```index.js```:
```
mkdir src && echo "alert('Hello, world!');" > src/index.js
```
* add build script inside package.json:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
  },
```
* run build command:
```
npm run build
```
* Publish to github.com

Select source control > Publish to GitHub > Private/Public > Uncheck ```node_modules``` & ```dist``` folders. This last part creates a ```.gitignore``` file

## Setup ~ html-webpack-plugin:
Add ```index.html``` with general HTML template to ```src/``` directory.

Install Html-Webpack-Plugin as a Dev Dependency:
```
npm i -D html-webpack-plugin
```
Create file ```webpack.config.js``` in project root directory.  This is a CommonJS module which exports the configuration object.

add the Html-Webpack-Plugin to this file:

```
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false
        })
    ]
}
```
* build the project to generate ```dist``` folder with ```index.html``` template.
```
npm run build
```

## Setup ~ webpack-dev-server
Install webpack-dev-server as a Dev Dependency:
```
npm i -D webpack-dev-server
```
add script to ```package.json```:
```
  "scripts": {
    ...
    "start": "webpack serve --mode development"
  },
```
## Setup ~ ts-loader

Install typescript and ts-loader as Dev Dependencies:
```
npm i -D typescript ts-loader
```

Create ```tsconfgi.json```:
```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "es6",
        "strict": true, 
    }
}
```
note* may need ot restart VSCode if getting a include error. Alternatively you may restart TS Server (cmd/shift/p) 

Change entry file to ```index.ts``` in ```webpack.config.js```:
```
module.exports = {
    entry: './src/index.ts',
```
resolve filename extensions:
```
module.exports = {
    entry: './src/index.tx',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
```
Add ts-loader:
```
module.exports = {
...
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
  ...
```

Change the TypeScript Compiler from the default VSCode version to the one just install: 

Select a typescript file in the explorer > select ```{ }``` on the bottom toolbar > select version > Use Workspace version.


## Setup ~ bable-loader
If using @babel project (next.js)
```
npm i -D @babel/core @babel/preset-env @babel/preset-typescript
```
Register presets with @babel:
create ```.babelrc``` in project root:

```
{
    "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```
Install babel-loader:
```
npm i -D babel-loader
```
Change reference in webpack for typescript files if using babel-loader:
```
...
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    ]
...
```
The @babel/preset-typescript does not check for error. It simply removes the types.  In order to typecheck the code the typescript compiler needs to be run in sequence.  To address this, tweek ```tsconfig.json```:

```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "es6",
        "strict": true, 
        "noEmit": true,
        "isolatedModules": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
    },
    "include": ["./src/**/*"]
}
```


To type check before each build, adjust the following scripts in ```package.json```

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npm run type-check && webpack --mode production",
    "start": "webpack-dev-server -open --mode development",
    "type-check": "tsc"
  },
  ```

## Setup ~ react react-dom
Install react and react-dom as Normal Dependencies
```
npm i -S react react-dom
```
Install @babel types for typechecking as Dev Dependencies:

```
npm i -D @types/react @types/react-dom
```
tweak ```tsconfig.json``` for .jsx extensions:

```
    ...
        "skipLibCheck": true,
        "jsx": "react",
    },
```
update the entry point inside  ```webpack.config.js```



```
    entry: "./src/index.tsx",
```

rename ```index.js``` to ```index.tsx``` and replace contents as: 

```
import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
    return <div>Hello World</div>;
}

const root= createRoot(document.getElementById('root') as HTMLElement)
root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
);
```
Add root div to index.html:
```
...
<body>
    <div id="root"></div>
</body>
...
```
Install react preset 

```
npm i -D @babel/preset-react
```
...and enable it in ```.babelrc```
```
{
    "presets": 
    [
        "@babel/preset-env",
        "@babel/preset-react",
         "@babel/preset-typescript"
     ]
}
```
## eval-source-map
for mapping errors in the browser to the original source file line code, adjust ```webpack.config.js```:
```
module.exports = {
    entry: './src/index.tsx',
    devtool: 'eval-source-map',
    resolve: {
```
If using ```ts-loader``` adjust tsconfig.json as well:

```
"compilerOptions": {
    ...
    "jsx": "react",
    "sourceMap": true,
},
```