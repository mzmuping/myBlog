---
title: webpack
date: 2022-5-25
categories: 
 - frontend
tags:
- webpack
- 索引
---

## webpack5 的核心
webpack 默认

npx 映射node_modules/.bin命令

```js
npx webpack
or 
npx webpack --config webapck.config.js
```
npx webpack 默认读取配置在根目录 webapck.config.js, 
```js
//webapck.config.js 基本配置
const path = require('path');
module.exports = {
    //入口
    entry:'./src/main.js',//相对路径，文件入口
    //输出
    output:{
        path:path.resole(__dirname,'dist'),//绝对路径
        filename:'bundle.js'
    },
    //loader
    module:{
        rules:[

        ]
    },
    plugin:[

    ],
    mode:'development'

}

```

### eslint 
1. 配置文件
配置文件有几种写法

- `.eslintrc.*`: 新建文件，在根目录
    - `.eslintrc.`
    - `.eslintrc.js`
    - `.eslintrc.json`
    - `package.json` 文件里的 `eslintConfig`

具体配置
以.eslintrc.js 配置文件

"off" 或 0 - 关闭规则

"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)

"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

如果有些文件不需要检，在.eslintignore文件

```js
module.exports = {
  env: {//可以在那些环境运行
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'], //继承其他规则
  parserOptions: {//解析选项
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',//babel 解析
    ecmaFeatures:{
         "jsx": true//启用 JSX
    }
  },
  rules: {//具体rules 优先级高于extends
    'prettier/prettier': ['error'],
    eqeqeq: 'off',
    'prefer-const': 'off',
    'no-empty': 'off',
    'no-unused-vars': 'off',
    'no-debugger': 'off',
  },
};

```

## webpack 中使用
在webpack4中loader使用eslint-loader,webpack5中plugin使用eslint-webpack-plugin
```js
//eslint-loader,在module
module.exports = {
    module:[
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
                {
                loader: 'babel-loader',
                // options:{}放在 .babelrc
                },
                {
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
                },
        ],
        enforce: 'pre',
        }
    ]
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```


