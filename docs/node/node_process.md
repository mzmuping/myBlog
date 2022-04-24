---
title: 守护Node.js进程
date: 2022-4-24
categories: 
 - frontend
tags:
- node
- ArrayBuffer
---

### Node.js开发的特点

Node.js开发的时候，我们要启动一个服务，使用的是 node 命令:
```
node server.js
```
然而，node告诉我们，服务端的js代码只有在node第一次引用，才会重新加载；如果node已经加载了某个文件，即使我们对它进行了修改， node也不会重新加载这个文件

开发过程中,修改代码，不能热更新

方法有很多，比如使用 pm2、forever 等来管理，比如使用今天要介绍的 supervisor。

### 安装

```
npm install -g supervisor
```

:::tip
在这种安装方式下，supervisor将被安装到默认的全局文件夹中；如果你不希望这样，可以修改全局路径为当前路径[1]：
:::

```js
npm config set prefix <你的路径>
```

### 基本使用

最常用、最快捷的方式，就是直接进入你的网站根目录，执行

```js
supervisor server.js
```

举个例子，Express4.0中，启动文件位于 ./bin/www 中，则我们启动时，必须在 ./ 中执行

```
supervisor bin/www
```

而不能进入 bin 目录执行： supervisor www。这样虽然有可能也能启动，但这么做相当于把 bin 目录当作了服务的根目录了，一旦有涉及到文件目录的操作，一定会出错的

可以知道，如果想不监控某一些文件夹，可以使用 -i 参数。如：我们要忽略根目录下的 private 文件夹，可以这样启动

```js
supervisor -i ./private myapp
```

如果要忽略多个文件夹，则用英文的逗号,分隔：

```js
supervisor -i ./private,./otherdir myapp
```