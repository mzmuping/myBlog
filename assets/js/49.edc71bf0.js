(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{459:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"node-js开发的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js开发的特点"}},[s._v("#")]),s._v(" Node.js开发的特点")]),s._v(" "),t("p",[s._v("Node.js开发的时候，我们要启动一个服务，使用的是 node 命令:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("node server.js\n")])])]),t("p",[s._v("然而，node告诉我们，服务端的js代码只有在node第一次引用，才会重新加载；如果node已经加载了某个文件，即使我们对它进行了修改， node也不会重新加载这个文件")]),s._v(" "),t("p",[s._v("开发过程中,修改代码，不能热更新")]),s._v(" "),t("p",[s._v("方法有很多，比如使用 pm2、forever 等来管理，比如使用今天要介绍的 supervisor。")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install -g supervisor\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("在这种安装方式下，supervisor将被安装到默认的全局文件夹中；如果你不希望这样，可以修改全局路径为当前路径[1]：")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" prefix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("你的路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),t("p",[s._v("最常用、最快捷的方式，就是直接进入你的网站根目录，执行")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("supervisor server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])])]),t("p",[s._v("举个例子，Express4.0中，启动文件位于 ./bin/www 中，则我们启动时，必须在 ./ 中执行")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("supervisor bin/www\n")])])]),t("p",[s._v("而不能进入 bin 目录执行： supervisor www。这样虽然有可能也能启动，但这么做相当于把 bin 目录当作了服务的根目录了，一旦有涉及到文件目录的操作，一定会出错的")]),s._v(" "),t("p",[s._v("可以知道，如果想不监控某一些文件夹，可以使用 -i 参数。如：我们要忽略根目录下的 private 文件夹，可以这样启动")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("supervisor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" myapp\n")])])]),t("p",[s._v("如果要忽略多个文件夹，则用英文的逗号,分隔：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("supervisor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("otherdir myapp\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);