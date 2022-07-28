---
title: rollup
date: 2022-7-27
categories: 
 - frontend
tags:
- rollup
- 索引
---

## 介绍rollup
Rollup 是一个 JavaScript 模块打包器,打造一款简单易用的 ES 模块打包工具，不必配置,打包 CommonJS 模块, rollup 继承了esm 优势，Tree-shaking功能。
本章内容为 0 到 1 搭建一个 Rollup + TypeScript 工具库模板工程
[官网](https://rollupjs.org/guide/en/)
## 安装 rollup
```js
//
npm i rollup -D or npm install --global rollup 
//
```
## 创建项目
```js
mkdir rollup-ts-template 
```
## 创建package.json
```js
npm init or  yarn init or pnpn init 
```
## 创建目录结构

目前工程下仅有一个 `package.json` 文件,添加基本文件
- README.md 文件可用来描述工具库的用途，使用方式等
- `rollup.config.js` 文件维护 rollup 配置
- tsconfig.json 文件维护 ts 配置（tsc --init 生成）
- 添加scr文件夹,添加index.ts作为主要入口
- 添加test文件夹,添加index.ts作为测试入口


## 安装基本依赖
- rollup
- @rollup/plugin-node-resolve：解析第三方库依赖（即 node_module 内的依赖）
- @rollup/plugin-commonjs：识别 commonjs 格式依赖
- rollup-plugin-terser：（可选）代码压缩
-   编译json文件
```js
npm i --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-terser @rollup/plugin-json
```
### 安装TypeScript 相关
- typescript
- rollup-plugin-typescript2 编译 TypeScript
- @rollup/plugin-typescript 官网支持的，编译 TypeScript，二选一
```js
npm i --save-dev typescript rollup-plugin-typescript2
```

###babel 相关
- @rollup/plugin-babel：rollup babel 插件
- @babel/preset-env：babel 预设
- @babel/plugin-transform-runtime：转义代码
- @babel/core : babel 核心包
```js
npm i --save-dev @rollup/plugin-babel @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

## 编译配置
rollup.config.js： rolup 配置文件
首先明确下我们要使用 rollup 来做什么，简单点说当然是打包。但是打包后的输出文件模式有 commonjs，es module，umd 等，我们要选择哪种格式呢？小孩子才做选择，我们成年人，全都要。下面的配置比较简单的实现输出以上三种模式的文件（注释说明一切）:

```js
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import pkg from "./package.json"; // 当前运行环境，可通过 cross-env 命令行设置
import json from "@rollup/plugin-json";
import { builtinModules } from "module";
import { terser } from "rollup-plugin-terser"; // 读取 package.json 配置
const env = process.env.NODE_ENV; // umd 模式的编译结果文件输出的全局变量名称
const name = "RollupTsTemplate";
const resolveFild = (filepath) => {
  return path.resolve(__dirname, filepath);
};
const external = Object.keys(pkg.dependencies || {}).concat(builtinModules);
const config = {
  // 入口文件，src/index.ts
  input: resolveFild("src/index.ts"),
  // 输出文件
  output: [
    // commonjs
    {
      // package.json 配置的 main 属性
      file: resolveFild(pkg.main),
      format: "cjs",
    },
    // es module
    {
      // package.json 配置的 module 属性
      file: resolveFild(pkg.module),
      format: "es",
    },
    // umd
    {
      // umd 导出文件的全局变量
      name,
      // package.json 配置的 umd 属性
      file: resolveFild(pkg.umd),
      format: "umd",
    },
  ],
  plugins: [
    //解析json
    json(),
    // 解析第三方依赖
    resolve(),
    // 识别 commonjs 模式第三方依赖
    commonjs(),
    // rollup 编译 typescript
    rollupTypescript(),
    // babel 配置
    babel({
      // 编译库使用
      babelHelpers: "runtime",
      // 只转换源代码，不转换外部依赖
      exclude: "node_modules/**",
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, ".ts"],
    }),
  ],
  external, //指出应将哪些模块视为外部模块
};
// 若打包正式环境，压缩代码
if (env === "production") {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  );
}

export default config;


```
### tsconfig.json 及类型编译配置 tsconfig.types.json
```js
{
  "compilerOptions": {
    /* 基础选项 */
    "target": "esnext" /* 指定 ECMAScript 目标版本：'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
    "module": "esnext" /* 输出的代码使用什么方式进行模块化： 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": [/* 指定引用的标准库 */ "esnext", "dom", "dom.iterable"],
    "allowJs": true /* 允许编译 js 文件 */,
    "removeComments": true /* 输出不包含注释 */,
    /* 严格类型检查选项 */
    "strict": true /* 启用所有严格类型检查选项 */,
    "noImplicitAny": true /* 检查隐含 any 类型的表达式和声明 */,
    "strictNullChecks": false /* 严格空检查. */,
    /* 额外检查 */
    "noUnusedLocals": true /* 检查无用的变量. */,
    /* Module Resolution Options */
    "moduleResolution": "node" /* 指定模块查找策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6) */,
    "resolveJsonModule": true, //解析json模块
    "allowSyntheticDefaultImports": true, // 标志时进行默认导入
    "baseUrl": "./" /* 查找模块的基础目录 */,
    "paths": {
      "@/*": ["src/*"]
    } /* 记录 baseUrl 的模块路径查找别名 */,
    "types": [] /* 类型声明文件 */
  },
  "include": [
    /* 指定编译处理的文件列表 */
    "src/**/*.ts",
    "src/types.ts"
  ]
}


```
```js
// tsconfig.types.json 
{ 
    // 继承 tsconfig.json 中的通用配置 
    "extends": "./tsconfig.json", 
    "compilerOptions": { 
        "declaration": true, /* 生成相应的 '.d.ts' file. */ 
        "declarationDir": "./dist/types", /* 类型声明文件输出目录 */
        "emitDeclarationOnly": true, /* 只生成声明文件，不生成 js 文件*/ 
        "rootDir": "./src", /* 指定输出文件目录（用于输出），用于控制输出目录结构 */ 
    } 
}

```
### babel 配置

```js
//.babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        /* Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败 */
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      // 与 babelHelpers: 'runtime' 配合使用
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false, // boolean或者string，默认为false。
        "corejs": 3, // false, 2,3或{ version: 2 | 3, proposals: boolean }, 默认为false, 对promis ,Set ,Map ,Symbol d等api
        "helpers": true, // boolean, 默认为true.切换内联的 Babel 助手（classCallCheck,extends等）是否替换为对 的调用moduleName
        "regenerator": true // 切换生成器函数是否转换为使用不污染全局范围的再生器运行时。默认为true
        // version: '7.0.0-beta.0',
      }
    ]
  ]
}


```
### package.json 文件
```js
{
  "name": "rollup-test2",
  "version": "1.0.0",
  "main": "dist/index.ejs",
  "module": "dist/index.esm.js",
  "umd": "dist/index.umd.js",
  "license": "MIT",
  "types": "./dist/types/index.d.ts",
  "scripts": {
    "clean:dist": "rimraf dist",
    "build:types": "npm run clean:dist && tsc -b ./tsconfig.types.json",
    "build": "npm run build:types && rollup -c",
    "dev": "rollup -c -w",
    "test": "node ./test/index.js"
  },
  "devDependencies": {
    "@babel/core": "^7.18.9",
    "@babel/plugin-transform-runtime": "^7.18.9",
    "@babel/preset-env": "^7.18.9",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^22.0.1",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-node-resolve": "^13.3.0",
    "rimraf": "^3.0.2",
    "rollup": "^2.77.2",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.32.1",
    "typescript": "^4.7.4"
  }
}

```