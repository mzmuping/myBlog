---
title: linux 安装node
date: 2022-8-25
categories: 
 - frontend
tags:
- npm
- yarn
- pnpm
- 索引
---

###　第一步：下载压缩包并解压

（1）cd /opt ----切换到opt目录下

（2）mkdir software ----创建software文件夹

（3）cd software ----进入到新建的这个文件夹中

（4）`wget https://nodejs.org/dist/v16.3.0/node-v16.3.0-linux-x64.tar.xz` ----这个是直接用命令进行下载，需要注意的是，如果连接不上，需要在windows中访问:`https://nodejs.org/dist/`,然后选择自己需要的node.js版本，再通过xftp软件，上传到 opt/software目录下!

（5）tar xvf node-v15.11.0-linux-x64.tar.xz -----解压，这一步请确保当前所处的位置是在： opt/software/这个目录下

(6) mv node-v16.3.0-linux-x64 node ---改变文件名


### 第二步：配置环境变量
1）vi /etc/profile ----进入配置环境变量的文件中

（2）点击键盘中的 " i "键，进入插入模式

（3）在末尾输入：export PATH=$PATH:/opt/software/node/bin/

（4）按esc键，退出编辑模式，再按shift+“:” 再按wq，回车，保存并退出

（5）sorce /etc/profile -----这个是让配置环境生效，有时候报错（-bash: sorce: command not found）

>在 /etc/profile 里配置的环境变量只要退出后都需要再 source /etc/profile 才会生效

>解决办法：
>编辑vi ~/.bashrc 再最后面增加
```js
if [ -f /etc/profile ]; then
	. /etc/profile
fi

```
>注意：修改完要重启系统

### 第三步：检查安装环境

1）node -v

（2）npm -v

（3）npm install -g cnpm --registry=https://registry.npm.taobao.org -----这个是换成淘宝镜像，因为连接国外的服务器下载很慢
