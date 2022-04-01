---
title: 跨域造成原因和解决方法
date: 2022-4-1
categories: 
- frontend
tags:
- react，vue，http
- ts
---

### 跨域指？

跨域是指浏览器的不执行其他网站脚本的，由于浏览器的同源策略造成，是对JavaScript的一种安全限制

说白点理解，当你通过浏览器向其他服务器发送请求时，不是服务器不响应，而是服务器返回的结果被浏览器限制了。

**同源策略的同源**
同源指的是协议、域名、端口 都要保持一致

### 跨域的解决方案

- JSONP方式，只支持GET请求，不支持POST请求。
    - 请求后面携带一个回调函数（callback）,相对src,href
- 反向代理，nginx
- 后台配置请求head
    - header('Access-Control-Allow-Origin:*');//允许所有来源访问
    - header('Access-Control-Allow-Method:POST,GET');//允许访问的方式

- 开发服务器代理（vue 项目跨域配置 webpack-dev-server）

- 配置浏览器（我配置了谷歌，属性->目标> 在后面追加 --args --disable-web-security --user-data-dir  注意有个空格）。设置成功打开浏览器是出现已栏提示证明已成功配置。

###  跨域请求如何携带 cookie 
- 前端请求时在request对象中配置"withCredentials": true；

- 服务端在response的header中配置"Access-Control-Allow-Origin", "http://xxx:${port}";

- 服务端在response的header中配置"Access-Control-Allow-Credentials", "true"
- [参考](https://juejin.cn/post/7066420545327218725)