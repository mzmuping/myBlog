(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{477:function(e,l,i){"use strict";i.r(l);var n=i(45),a=Object(n.a)({},(function(){var e=this,l=e.$createElement,i=e._self._c||l;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"webpack-理解"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webpack-理解"}},[e._v("#")]),e._v(" webpack 理解")]),e._v(" "),i("ul",[i("li",[e._v("打包js模块化工具，主要使用loader，plugin 两大功能，打包成浏览器能使用的js")]),e._v(" "),i("li",[e._v("loader主要编译不同文件，解析与加工，this.callback(),可以链式操作，就是rule配置中有多个loader，由下而上，entry 入口递归依赖编译，常用loader：url-loader,file-loader,babel-loader等等")]),e._v(" "),i("li",[e._v("plugin 提供webpack打包整个生命周期插件，自定义class中apply，webpack 在打包过程中调用apply,参数compiler对象，参透整个流程，常见plugin： ugifly,terser,clean,template等等")])]),e._v(" "),i("p",[e._v("常见loader:\nbabel-loader,url-loader,file-loader\n在webpack v5中统一使用assets module")]),e._v(" "),i("p",[e._v("常见plugin:\ndefine-plugin: 定义环境变量，代码变量\ncommon-chunk-plugin: 提取公共代码,webpack v4开始移除，使用 optimization.splitChunks\nuglify-webpack-plugin / terser-plugin: 压缩js代码")]),e._v(" "),i("p",[e._v("loader/plugin 区别\nwebpack默认解析js文件，其他文件不支持，所loader就是用来解析不同文件编译器\nplugin 壮大webpack功能，灵活性比较强")]),e._v(" "),i("p",[e._v("性能优化：")]),e._v(" "),i("ul",[i("li",[e._v("压缩代码： uglifyjs/terser")]),e._v(" "),i("li",[e._v("mini-css-extract-plugin,css 文件提取，css-minimizer-webpack-plugin css文件压缩")]),e._v(" "),i("li",[e._v("cdn 加速： externals配置第三方包，或者loader 配置 publicpath 部分cdn")]),e._v(" "),i("li",[e._v("删除死代码tree shaking 与 Scope Hoisting:\n"),i("ul",[i("li",[e._v("tree shaking: 配置 optimization.usedExports: false,optimization.minimize: true")]),e._v(" "),i("li",[e._v("Scope Hoisting:配置 concatenateModules：true,合拼安全代码")])])]),e._v(" "),i("li",[e._v("resole: extensions 配置优化")]),e._v(" "),i("li",[e._v("common-chunk-plugin: 提取公共代码,webpack v4开始移除，使用 optimization.splitChunks")]),e._v(" "),i("li",[e._v("Dllplugin / DllReferencePlugin ：拆分 bundles动态链接库，生成manifest.json，DllReferencePlugin")]),e._v(" "),i("li",[e._v("autoweb多页应用，或者html-webapck-plugin 搭建entry")]),e._v(" "),i("li",[e._v("babel-plugin-import 按需加载")])])])}),[],!1,null,null,null);l.default=a.exports}}]);