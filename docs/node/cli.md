---
title:  创建脚手架
date: 2022-5-13
categories: 
 - frontend
tags:
- node
- ArrayBuffer
---

## 安装yo
```js
npm install -g yo 
yarn global add yo
```
## 安装对应 generater
```js
npm i generater-node -g 
yarn global add generater-node
```
## yo 运行generator
```js
yo node
```
### Yeoman Sub Generator
Generator不一定都会有子集
[支持子集Generator](https://github.com/yeoman/generator-node)

- 作用：在某些某些项目配置通用的的一些文件
```js
yo node:cli
yarn
yarn link
chen-module  --help
```
## Yeoman 基本使用步骤
1. 明确你的需求
2. 找到合适的Generator
3. 全局安装找到的Generator
4. 通过yo运行对应的Generator
5. 通过命令行交互填写选项
6. 生成项目结构

## 创建 自定义generator
- 安装依赖
```js
//文件名 规范 generator-<name>
mkdir generator-sample
yarn init 
yarn add yeoman-generator
code . //vscode 打开
```
- 目录结构
```
|---generator
    |--- app
        |--- index.js
```
### 写法
index.js 文件是继承入口，返回一个继承yeoman-generator类

基本使用
```js
const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    initianlizing(){
        //获取当前项目状态，获取基本配置参数等
    }
    prompting(){
        //向用户展示交互式问题收集关键参数
    }
    configuring(){
        //保存配置相关信息且生成配置文件（名称多为'.'开头的配置文件,例如.editorconfig）
    }
    default(){
        //未匹配任何生命周期方法的非私有方法均在此环节*自动*执行
    }
    writing(){
        //依据模板进行新项目结构的写操作
    }
    conflicts(){
        //处理冲突(内部调用，一般不用处理）
    }
    install(){
        //使用指定的包管理工具进行依赖安装(支持npm,bower,yarn)
    }
    end(){
        //结束动作，例如清屏，输出结束信息，say GoodBye等等
    }

}
```

