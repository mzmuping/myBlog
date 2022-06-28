---
title: webpack
date: 2022-5-17
categories: 
- frontend
tags:
- react，vue，http
- ts
---

## webpack 理解
- 打包js模块化工具，主要使用loader，plugin 两大功能，打包成浏览器能使用的js
- loader主要编译不同文件，解析与加工，this.callback(),可以链式操作，就是rule配置中有多个loader，由下而上，entry 入口递归依赖编译，常用loader：url-loader,file-loader,babel-loader等等
- plugin 提供webpack打包整个生命周期插件，自定义class中apply，webpack 在打包过程中调用apply,参数compiler对象，参透整个流程，常见plugin： ugifly,terser,clean,template等等

常见loader:
babel-loader,url-loader,file-loader
在webpack v5中统一使用assets module

常见plugin:
define-plugin: 定义环境变量，代码变量
common-chunk-plugin: 提取公共代码,webpack v4开始移除，使用 optimization.splitChunks
uglify-webpack-plugin / terser-plugin: 压缩js代码

loader/plugin 区别
webpack默认解析js文件，其他文件不支持，所loader就是用来解析不同文件编译器
plugin 壮大webpack功能，灵活性比较强

性能优化：
- 压缩代码： uglifyjs/terser
- mini-css-extract-plugin,css 文件提取，css-minimizer-webpack-plugin css文件压缩
- cdn 加速： externals配置第三方包，或者loader 配置 publicpath 部分cdn
- 删除死代码tree shaking 与 Scope Hoisting:
    - tree shaking: 配置 optimization.usedExports: false,optimization.minimize: true
    - Scope Hoisting:配置 concatenateModules：true,合拼安全代码
- resole: extensions 配置优化
- common-chunk-plugin: 提取公共代码,webpack v4开始移除，使用 optimization.splitChunks
- Dllplugin / DllReferencePlugin ：拆分 bundles动态链接库，生成manifest.json，DllReferencePlugin
- autoweb多页应用，或者html-webapck-plugin 搭建entry
- babel-plugin-import 按需加载
