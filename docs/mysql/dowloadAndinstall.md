## MySQL安装及基本使用教程

### 下载MySQL

首先，去数据库的[官网](http://www.mysql.com)下载MySQL。

然后点击downloads，MySQL Community (GPL) Downloads，选择MySQL Community Server。
如下图：
![d](./assets/download_2.png)
![d](./assets/download_3.png)
![d](./assets/download_4.png)
![d](./assets/download_5.png)

注：我选择最新的安装包，如果有需要指定版本可以点击【Archives】，选择更多的

下载完后，双击安装,出现下面
，这里选择Developer Default，然后点击next进入下一步。注：如果有特定可以选择【custom】安装
![d](./assets/install_1.png)

这一步是检查安装条件，直接点击next进入下一步就可以了。
![d](./assets/install_2.png)

直接点击yes进入下一步就可以

![d](./assets/install_3.png)

直接点击execute执行,点击execute后，正式安装了，需要点时间，耐心等待，执行完后点击next进入下一步
![d](./assets/install_4.png)

安装完后，点击next进入下一步，在next
![d](./assets/install_5.png)

然后点击next进入下一步 ,默认端口
![d](./assets/install_6.png)
点击next进入下一步 
![d](./assets/install_7.png)
设置root密码,然后点击next进入下一步
![d](./assets/install_8.png)
点击next进入下一步。
![d](./assets/install_9.png)
继续点击next
![d](./assets/install_10.png)
点击execute执行

![d](./assets/install_11.png)

继续点击finish

![d](./assets/install_12.png)
继续点击next

![d](./assets/install_13.png)
继续点击next
![d](./assets/install_14.png)
继续点击next,检查root密码
![d](./assets/install_15.png)

一路点击next，并check你的root密码，MySQL就成功在你的电脑上安装完成了。

安装完成后，mysql默认启动服务了
![d](./assets/install_19.png)



## 测试msyql

**1、用【管理员身份】运行【命令提示符】**

![d](./assets/install_20.png)

**2、打开Mysql的bin目录**

切换到 cd C:\Program Files\MySQL\MySQL Server 8.0\bin

启动服务net start mysql80，关闭服务 net stop mysql80

![d](./assets/install_21.png)

**3、进入msyql命令模式**
先启动 net start mysql80
输入 mysql -u root -p  ，输入当初设置的Mysql root的密码 ,然后回车

![d](./assets/install_23.png)

输入密码回车后报错 :Access denied for user 'root'@'localhost' (using password: YES)
![d](./assets/install_24.png)

解决问题：

- 首先安装mysqld服务器，输入命令：mysqld --install

- 接下来就是启动服务器了，输入命令：net start mysql

  ![d](./assets/install_25.png)

- 输入命令：mysqld --initialize-insecure

- 完了再次输入：net start mysql

  ![d](./assets/install_26.png)



第四部修改密码：

   1.  use mysql 

   2. update user set authentication_string='' where user='root'; 如果这个字段有值，先置为空

   3. flush privileges;刷新权限表

   4. ALTER user 'root'@'localhost' IDENTIFIED BY 'Tianya1234'; 修改root 密码

   ### 连接Navicat 报错

  ![d](./assets/install_27.png)

  解决问题：
  - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; #修改加密规则 

  - ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #更新一下用户的密码 
  - FLUSH PRIVILEGES; #刷新权限 

  注释：
  - 'root'   为你自己定义的用户名；
  - 'localhost' 指的是用户开放的IP，可以是'localhost'(仅本机访问，相当于127.0.0.1)，
  - 'password' 是你想使用的用户密码