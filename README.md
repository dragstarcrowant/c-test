# react-starter-boilerplate-hmr

> React Starter Boilerplate with Hot Module Replacement and Webpack 4
Used starter kit by Esau Silva, with few my modifications

## Features

- React 16
- React Router 4
- Hot Module Replacement
- CSS Autoprefixer
- CSS Modules with SourceMap
- @babel/plugin-proposal-class-properties
- @babel/plugin-syntax-dynamic-import
- Webpack 4
- Code splitting by Route and Vendor
- [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)
- Take a look at [package.json](https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json)

### Usage

Install dependencies

```
$ yarn
```

Run development server

```
$ yarn dev
```

### Building

```
$ yarn build
```

Will create a `dist` directory containing your compiled code.

Depending on your needs, you might want to do more optimization to the production build.

## Webpack Bundle Analyzer

Run in development

```
$ yarn dev:bundleanalyzer
```

Run on the production oprimized build

```
$ yarn build:bundleanalyzer
```
