# Multiple Select filter

[![Build Status](https://travis-ci.org/AhmadKabakibi/search-items.svg?branch=master)](https://travis-ci.org/AhmadKabakibi/search-items)
[![codecov](https://codecov.io/gh/AhmadKabakibi/search-items/branch/master/graph/badge.svg)](https://codecov.io/gh/AhmadKabakibi/search-items)
[![dependencies Status](https://david-dm.org/AhmadKabakibi/search-items/status.svg)](https://david-dm.org/AhmadKabakibi/search-items)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

Setup for a webapp has a multiple-select-filter component using react and typescript.
This project is based on an ejected [Create React App 2.0](https://github.com/facebookincubator/create-react-app).

#### A note on ejecting

This Base project has intentionally been ejected. Using rewired (Override create-react-app webpack configs without ejecting) did not work as intended together with Typescript.<br> Therefore the decision was made to eject the app and add the desired config overrides within the configs directly.

## 🚀 Quick start

1. Clone the repo on your machine
2. Navigate to this repo in your terminal
3. `yarn && yarn start` will install dependencies && Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scripts

- `yarn start`: Start development server with hot reloading. It runs on `localhost:3000`
- `yarn build`: Build a Production version of your app and build Storybook for your components,
- `yarn lint` Test Typescript and Styled Components CSS for linting errors but don't fix them
- `yarn lint:ts`: Test Typescript for linting errors but don't fix them
- `yarn lint:css`: Test Styled Components CSS for linting errors but don't fix them
- `yarn format`: Test Typescript for formatting errors and fix them
- `yarn test`: Run all unit tests
- `yarn test:watch`: Start a test watcher that will continuously run tests on every file change
- `yarn test:coverage`: Create a coverage report for your code and determine whether your coverage is high enough


### `CI/CD`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>

### Travis-ci

[Travis-ci](https://travis-ci.org/) will trigger build for each PR and on merge to Master.

### Netlify

[Netlify](https://www.netlify.com) will trigger deploy for each PR and for the master branch.



## Technologies used

### Babel

[Babel](https://babeljs.io/) as included in CRA.

### Webpack

Just like Create React App this project uses [Webpack](https://webpack.js.org/) under the hood to bundle assets.

CRA's Webpack configuration has sensible defaults so in most cases you'll won't need to to change it. There are cases where the defaults just won't cut it.

### Styled Components

[Styled Components](https://www.styled-components.com/) is used to keep the CSS of your React components closer together without extra files. Write your CSS from within your React component.

There are helper utilities available in the `/styles/` folder to allow easily to write media query statements.

### Helmet

[React Helmet](https://github.com/nfl/react-helmet) helps us to change the _head_ of the webpage. Explanation and documentation on how this can be used within the project can be found on their webpage.

## Code Hygiene

To keep the code hygiene of everyone involved with a project in line, I've added testing, linting and formatting libraries to this to the project. These are made required by precommit hook.

### TSLint

[TSLint](https://palantir.github.io/tslint/) checks your typescript for linting errors.

the 'Javascript Standard Style' rules. Additional configuration can be done in `tslint.json.`

`yarn lint:ts`

### Prettier

[Prettier](https://prettier.io/) formats your code so it looks pretty and is readable.

Prettier is included in a commit hook so your code will be checked for formatting every time you try to commit. Therefore it is highly recommended you install Prettier as an extension in your code editor so Prettier will automatically format your code on every save. When you do, make sure your IDE plugin uses the same settings as defined in the project.

`yarn format`

### StyleLint

[Stylelint](https://stylelint.io/) checks CSS in the project. This has been setup to check within the syntax of Styled-Components.

`yarn lint:css`

### Jest

Testing has become a requirement for all projects, therefore it's implemented as a base in this project.

The threshold to which your components need to comply has been set to a base value of **80%**. This can be changed in the _package.json_ file.

To test the components [Jest](https://facebook.github.io/jest/).

The following commands are some of the possible commands but these will get you started to becoming a testing star!

`yarn test`
This will start a full project test run. All the files that can be tested will be checked.

`yarn test:watch`
This will start a full project test run, but will trigger a new test run when a file that can be tested has been changed.

`yarn test:coverage`
This will start a full project test run, but will also give you a detailed table with every file that was tested and how they perform based on the _threshold_.

