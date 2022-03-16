<div align="center">

 <img src="https://github.com/DTStack/molecule/blob/main/website/static/img/logo%403x.png" width="20%" height="20%" alt="molecule" />
 <h1>Molecule</h1>
 <h3>A lightweight Web IDE UI Framework</h3>

[![CI][ci-image]][ci-url] [![Codecov][codecov-image]][codecov-url] [![NPM downloads][download-img]][download-url] [![NPM version][npm-version]][npm-version-url] [![Chat][online-chat-img]][online-chat-url]

</div>

[ci-image]: https://github.com/DTStack/molecule/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/DTStack/molecule/actions/workflows/main.yml
[codecov-image]: https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz
[codecov-url]: https://codecov.io/gh/DTStack/molecule
[download-img]: https://img.shields.io/npm/dm/@dtinsight/molecule.svg?style=flat
[download-url]: https://www.npmjs.com/package/@dtinsight/molecule
[npm-version]: https://img.shields.io/npm/v/@dtinsight/molecule.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/@dtinsight/molecule
[online-chat-img]: https://img.shields.io/discord/920616811261743104?logo=Molecule
[online-chat-url]: https://discord.com/invite/b62gpHwNA7

[中文](./README-zhCN.md) | [English](./README.md) | [한국어](./README-koKR.md)

The **Molecule** is a lightweight **Web IDE UI** framework which is built with React.js and inspired by the VSCode. We have designed the Extension APIs similar to the VSCode, to help developers extend the Workbench in an easier way. It's convenient to integrate the Molecule with React.js applications. It has been applied to many products in [DTStack](https://www.dtstack.com/)

[Online Preview](https://dtstack.github.io/molecule-examples/#/)

## Features

-   Built-in the Visual Studio Code **Workbench** UI
-   Compatible with the Visual Studio Code **ColorTheme**
-   Customize the Workbench via **React Component** easily
-   Built-in Monaco-Editor **Command Palette, Keybinding** features
-   Support the **i18n**, built-in Simplified Chinese, Korean and English
-   Built-in **Settings**, support to edit and extend via the Extension
-   Built-in basic **Explorer, Search** components, and support extending via the Extension
-   **Typescript** Ready

## Installation

```bash
npm install @dtinsight/molecule
# Or
yarn add @dtinsight/molecule
```

## Basic Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

const App = () => (
    <MoleculeProvider extensions={[]}>
        <Workbench />
    </MoleculeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

The `extension` is the Extension applications entry, more details about Extension, please read the [Quick Start](https://dtstack.github.io/molecule/docs/quick-start).

## Document

-   [Introduction](https://dtstack.github.io/molecule/docs/introduction)
-   [Quick Start](https://dtstack.github.io/molecule/docs/quick-start)
-   [API](https://dtstack.github.io/molecule/docs/api)
-   [Extend Workbench](https://dtstack.github.io/molecule/docs/guides/extend-workbench)
-   [Examples](https://github.com/DTStack/molecule-examples)

## Development

```bash
git clone git@github.com:DTStack/molecule.git
```

Clone the source code into your local

**Development Mode**

```bash
yarn # Install dependencies

yarn dev # Start dev mode
```

The Molecule using the **Storybook** to manage and develop the React components, the default visiting address is `http://localhost:6006/`.

**Test**

```bash
yarn test -u
```

**Build & Preview**

```bash
yarn build # Compile to ESM
yarn web # Web Preview Mode
```

We compile the source code into the ES6 modules and output to the **`esm`** folder. Besides the Storybook development mode, there also builtin a **Web Preview** mode using the ESM modules.

## Contributing

Refer to the [CONTRIBUTING](https://github.com/DTStack/molecule/blob/main/CONTRIBUTING.md).

## License

Copyright © DTStack. All rights reserved.

Licensed under the MIT license.