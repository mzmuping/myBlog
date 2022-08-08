---
title: npm & yarn & pnpm
date: 2022-7-27
categories: 
 - frontend
tags:
- npm
- yarn
- pnpm
- 索引
---

### npm查看、设置镜像源
查看当前镜像源
```js
npm get registry
```

### 全局设置taobao镜像源

```js
npm config set registry https://registry.npmmirror.com/
```

### nrm镜像源管理工具
全局安装 nrm
```js
npm install nrm -g
```
###　查看当前可使用的镜像源
```js
nrm ls
```
以下图片
![](./nrm.png)
### 切换镜像源
```js
nrm use yarn
```