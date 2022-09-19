# D3 Hooks

Hooks for integrating [D3.js](https://d3js.org/) and [Observablehq Notebook](https://observablehq.com/) into your React Project.

[![npm version](https://badge.fury.io/js/@vincecao%2Fuse-d3.svg)](https://badge.fury.io/js/@vincecao%2Fuse-d3)
[![npm checks](https://badgen.net/github/checks/vincecao/use-d3)](https://github.com/vincecao/use-d3/actions)

| Hooks      | Description |
| ----------- | ----------- |
| [useD3][useD3-link] | Attach d3 function into a hook and render data-driven documents.  |
| [useD3Notebook][useD3Notebook-link] | Embed notebook into a hook with `Observablehq` Runtime and Inspector. |

<small>_This repo was initially inspired by following posts, but with enhancement and packaged as a reusable library_</small>
- <small>[React Hooks and D3 🎣](https://observablehq.com/@herrstucki/react-hooks-and-d3)</small>
- <small>[How to: Embed a Notebook in a React App](https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app)</small>

## Installation
```bash
# Install latest package
# npm
npm i @vincecao/use-d3
# yarn
yarn add @vincecao/use-d3
# pnpm
pnpm i @vincecao/use-d3
```

This package is automatically published in [NPMJS](https://www.npmjs.com/package/@vincecao/use-d3) and [GITHUB](https://github.com/vincecao/use-d3/pkgs/npm/use-d3) npm registry.

_To install package from Github npm registry, add below file in your repo before run `npm i` or `yarn add`_.

```bash
# .npmrc
@vincecao:registry=https://npm.pkg.github.com
```

You can also install directly from current repo master
```bash
# npm
npm i vincecao/use-tools
npm i github:vincecao/use-tools

# yarn
yarn add vincecao/use-tools
yarn add github:vincecao/use-tools
```

## Live Demo
- [**Demo Site**](https://vince-amazing.com/use-d3/)
- [Code Example](https://github.com/vincecao/use-d3/tree/master/example)

## Development
```bash
# clone the repo
git clone https://github.com/vincecao/use-d3.git && cd use-d3

# install needed package for library
yarn

# local test library hooks
yarn start

# local test examples
cd example

# install needed package for library examples
yarn
# local test library examples
yarn start

# Now you can open example in localhost:1234

# build the demo example page
yarn build

cd ..
# build the @vincecao/use-d3 hooks library
yarn build
```

[useD3-link]: https://github.com/vincecao/use-d3/tree/master/src/use-d3
[useD3Notebook-link]: https://github.com/vincecao/use-d3/tree/master/src/use-d3-notebook