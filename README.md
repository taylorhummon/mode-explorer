# Mode Explorer

Explore musical modes!

This app is a companion to <emph>Taylor's Guide to Scales</emph>. You can find the guide and this 
app running live at [https://scales.taylorhummon.com](https://scales.taylorhummon.com).

## Installation

This project requires node v20 or higher - use nvm to install a recent version of node.

To install dependencies:
```
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

I'm using [Parcel](https://parceljs.org/) as my build tool. It seems to have an issue invalidating
its cache when I make significant structural changes to the codebase. If it's acting up,
removing the .parcel-cache directory seems to fix things.

Also, Parcel does it's own transpiling so Babel is not necessary in most circumstances. I've
made Babel run only for tests because Jest needs it.

## To Do

I'm currently linting and type checking in VSCode. It would be nice to add scripts to perform
these activities from the command line via yarn.
