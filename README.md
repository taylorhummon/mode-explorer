# Mode Explorer

This app is a companion to <emph>Taylor's Guide to Scales</emph>. You can find the guide and this 
app running live at [https://scales.taylorhummon.com](https://scales.taylorhummon.com).

## Installation

This project requires [Node.js](https://nodejs.org) v20.9 or higher. I recommend using 
[nvm](https://github.com/nvm-sh/nvm) to install a recent version of node. Here are its 
[installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script).

We'll be using [Yarn](https://yarnpkg.com/) to track dependencies. Yarn is included with node, 
but you may need to [enable it](https://yarnpkg.com/getting-started/install).

To install this application's dependencies, change into the project directory and run yarn:
```
cd mode-explorer
yarn
```

## Usage

To start a development server:
```
yarn start
```

To run tests:
```
yarn test
```

To create a production build:
```
yarn build
```

## Note

I'm using [Parcel](https://parceljs.org/) to build this application. It seems to have an issue 
invalidating its cache when I make significant structural changes to the codebase. If it's acting 
up, removing the `.parcel-cache` directory seems to fix things.

Also, Parcel does it's own transpiling so Babel is not necessary in most circumstances. However, 
our test runner Jest needs Babel so we allow Babel to run when executing the test suite.
