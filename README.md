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
            template: './src/index.html'
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






