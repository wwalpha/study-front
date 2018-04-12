# Study Front
SPA学習用のプロジェクトでもあるため、環境設定なども紹介します。

## 学習ポイント
多数技術が入ってます

### 言語
* ECMAScript 2015(ES6)
* JSX
* HTML
* CSS

### フレームワーク(ライブラリ)
* react
* react-router
* redux
* redux-form
* redux-api-middleware

### 開発環境
* Visual Studio Code (VSCode)
* EsLint
* webpack
* babel
* Hot module reload (HMR)

## 開発環境

### Node.js
[Node.js](https://nodejs.org/ja/download/)をダウンロードし、インストールしてから、インストール先をWindowsの環境変数に追加する

### 開発エディター
[Visual Studio Code](https://code.visualstudio.com/download/)をダウンロードし、インストールする

## プロジェクト作成
必要なライブラリが多いため、少し時間かかります。下記記述は全部コマンドで実行する

### 雛形作成
```
mk StudyFront
cd StduyFront
npm init
```

### フレームワーク(React)
* react
* react-dom
* prop-types (プロパティ型チェック)

```js
npm install --save react react-dom prop-types
```

### Store管理(Redux)
* redux
* redux-actions (Action作成)
* redux-logger (reduxのログ出力)
* react-redux

```js
npm install --save redux redux-actions redux-logger react-redux
```

### 画面遷移(router)
* react-router
* react-router-dom
* react-router-redux

```js
npm install --save react-router react-router-dom react-router-redux
```

### Form管理(redux-form)
* redux-form
* redux-immutable
* immutable

```js
npm install --save redux-form redux-immutable immutable@4.0.0-rc.9
```

### 通信処理(redux-api-middleware)
* redux-api-middleware

```js
npm install --save redux-api-middleware
```

### UI部品(material-ui)
* material-ui@next
* material-ui-icons

```js
npm install --save material-ui@next material-ui-icons
```

### モジュールバンドラー(webpack)
JavaScriptファイルをまとめる高機能なモジュールバンドラー

* webpack
* webpack-cli
* webpack-dev-middleware

```js
npm install --save-dev webpack webpack-cli webpack-dev-middleware
```

### JavaScriptトランスパイラ(babel)
ブラウザにまだサポートされていないようなJavaScriptの次世代の標準機能を、現在のブラウザでも使えるようにするNode.js製のトランスパイラです

* babel-cli
* babel-core
* babel-loader
* babel-preset-env
* babel-preset-react
* babel-plugin-transform-class-properties (class property support)
* babel-plugin-transform-object-rest-spread (rest property, spread property support)

```js
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react 
npm install --save-dev babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread
```

### HMR関連(Hot Module Reload)
* webpack-hot-middleware (HMR Enable)
* react-hot-loader (react HMR)
* redux-devtools-extension (immutable HMR)

```js
npm install --save-dev webpack-hot-middleware react-hot-loader
```

### スタイルチェック(ESLint)
* eslint
* eslint-cli
* eslint-loader
* eslint-config-airbnb
* eslint-plugin-react
* eslint-plugin-jsx-a11y
* eslint-plugin-import
* eslint-import-resolver-webpack
* babel-eslint

```js
npm install --save-dev eslint eslint-cli eslint-loader eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y 
npm install --save-dev eslint-plugin-import eslint-import-resolver-webpack babel-eslint
```

### Debug関連
* immutable-devtools (immutable format)
* source-map-loader (support debug javascript)

```js
npm install --save-dev immutable-devtools source-map-loader
```

### その他
* cross-env (環境変数)
* html-webpack-plugin (index.html自動生成)
* express (ローカルサーバー)
* file-loader (ファイル読込)

```js
npm install --save-dev cross-env html-webpack-plugin express file-loader
```

## 環境設定

### ESLint
`eslint-import-resolver-webpack`、`eslint-plugin-import`、`airbnb`の設定が入ってます。
```js
{
  "env": { "browser": true, "es6": true },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "globals": { "module": true, "require": true },
  "plugins": [ "react", "import" ], 
  "rules": {
      "indent": ["error", 2],
      "linebreak-style": [ "error","unix"],
      "quotes": ["error","single"],
      "semi": ["error","always"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0],
      "react/require-default-props": [0],
      "max-len": ["error", 160]
  },
  "settings": {
      "import/resolver": {
          "webpack": {
            "config": "webpack.config.js"
          }
      },
      "import/extensions": ["js", "jsx"]
  }
}
```

### Babel
HMR、`babel-plugin-transform-class-properties`、` babel-plugin-transform-object-rest-spread`の設定が入ってます。
```js
{
  "presets": [
    "react",
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      },
      "modules": false
    }]
  ],
  "plugins": [
    "react-hot-loader/babel",
    "transform-class-properties",
    ["transform-object-rest-spread", { "useBuiltIns": true }]
  ]
}
```

### express
```js
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const path = require('path');

const compiler = webpack(webpackConfig);
const express = require('express');

const app = express();

// hot deploy
app.use(dev(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(hot(compiler));

// html-webpack-plugin設定したから、特別な対策が必要です
app.use('*', (req, res, next) => {
  const fileName = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(fileName, (err, result) => {
    if (err) {
      next(err);
      return;
    }

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

// ポート3000で起動する
app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

### webpack
`html-webpack-plugin`、`babel-loader`、`source-map-loader`、`eslint-loader`、`webpack-hot-middleware`の設定が入ってます
```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
      ui: path.resolve(__dirname, 'src/components/common/'),
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      constant: path.resolve(__dirname, 'src/constant/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['source-map-loader', 'eslint-loader'],
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ API_URL }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Study Front',
      filename: 'index.html',
      template: path.join(__dirname, 'index.template.ejs'),
      minify: false,
      hash: true,
      inject: 'body',
    }),
  ],
};
```

### jsconfig.json
VSCodeの設定ファイル、jsxファイルの有効とパス別名の設定
```js
{
    "compilerOptions": {
        "jsx": "react",
        "allowSyntheticDefaultImports": true,
        "baseUrl": ".",
        "paths": {
            "src/*": ["./src/*"],
            "ui/*": ["./src/components/common/*"],
            "components/*": ["./src/components/*"],
            "utils/*": ["./src/utils/*"],
            "constant/*": ["./src/constant/*"],
            "containers/*": ["./src/containers/*"],
            "reducers/*": ["./src/reducers/*"]
        }
    },
    "exclude": [
        "node_modules"
    ]
}

```

### User Settings(ctrl + ,)
```js
{
    "window.zoomLevel": 0,
    // フォルダアイコン
    "workbench.iconTheme": "vscode-icons",
    "editor.tabSize": 2,
    "editor.fontSize": 12,
    // 亀使うため、builtinを無効する
    "git.enabled": false
}
```

### Workspace Settings(ctrl + ,)
```js
{
  // 保存時自動整形する
  "eslint.autoFixOnSave": true,
  // 改行コード CRLF -> LF
  "files.eol": "\n",
  // 表示しないファイル
  "files.exclude": {
    ".vscode": true,
    "node_modules": true,
    ".gitignore": true,
    ".eslintignore": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  }
}
```

### package.json
```js
{
  "name": "studyfront",
  "version": "2.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-eslint": "^8.2.2",
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "cross-env": "^5.1.4",
    "eslint": "^4.19.1",
    "eslint-cli": "^1.1.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-import-resolver-webpack": "^0.8.4",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-import": "^2.9.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-react": "^7.7.0",
    "express": "^4.16.3",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.1.0",
    "immutable-devtools": "^0.1.3",
    "source-map-loader": "^0.2.3",
    "webpack": "^4.3.0",
    "webpack-cli": "^2.0.13",
    "webpack-dev-middleware": "^3.1.0",
    "webpack-hot-middleware": "^2.21.2"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.9",
    "material-ui": "^1.0.0-beta.38",
    "material-ui-icons": "^1.0.0-beta.36",
    "prop-types": "^15.6.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-hot-loader": "^4.0.1",
    "react-redux": "^5.0.7",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-router-redux": "^4.0.8",
    "redux": "^3.7.2",
    "redux-actions": "^2.3.0",
    "redux-api-middleware": "^2.3.0",
    "redux-form": "^7.3.0",
    "redux-immutable": "^4.0.0",
    "redux-logger": "^3.0.6"
  }
}
```