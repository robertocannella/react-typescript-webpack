# Webpack with React & TypeScript

# Setup using VS Code
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
select source control > Publish to GitHub > Private/Public >




