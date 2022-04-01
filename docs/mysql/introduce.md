---
title: 文件配置
date: 2022-01-11
categories: 
 - frontend
tags:
- mysql
- 索引
---

## 文件配置

安装完成后，在my.ini文件中可以设置mysql
目录：C:\ProgramData\MySQL\MySQL Server 8.0\my.ini

```
#代码开始
[Client]
#设置3306端口
port = 3306
 
[mysqld]
skip-grant-tables
#设置3306端口
port = 3306
# 设置mysql的安装目录
basedir="C:/Program Files/MySQL/MySQL Server 8.0/"
# 设置mysql数据库的数据的存放目录
datadir=C:/ProgramData/MySQL/MySQL Server 8.0\Data
# 允许最大连接数
max_connections=151
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
sql-mode="STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION"
 
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
#代码结束
```

## 启动mysql
cd C:\Program Files\MySQL\MySQL Server 8.0\bin
```
net start mysql;
```
##  关闭 
cd C:\Program Files\MySQL\MySQL Server 8.0\bin
```
net stop mysql;
```
## MySQL连接管理
- 自带工具
  - cd C:\Program Files\MySQL\MySQL Server 8.0\bin
  > mysql -h localhost -u root -p

  注释：常见的特定于客户机的连接选项：-u：指定用户-p：指定密码-h：指定主机-P：指定端口-S：指定sock-e：指定SQL--protocol=name：指定连接方式

- 第三方的连接工具sqlyog、navicat，mysql workbench。

## 切换数据库
> use <数据库名称>
> 例如：use mysql;

mysql库是系统库来的。user表就管理用户，下面创建用户就用到它。
### 创建用户
> create user myuser identified by 'myuser123';


### 查看用户
authentication_string 是msyql 8.0.11，5.7的password
> select user,host,authentication_string from user where user='myuser';

### 修改用户密码
>update user set authentication_string='' where user='myuser';

>ALTER USER 'myuser'@'%' IDENTIFIED BY 'mypass';

注释：@'%'表示从任意ip都可以访问到这个数据库

### 删除用户
>drop user <用户名>;

>案例： drop user myuser;

### 查看权限
查看当前用户权限
> show grants ;

查看指定用户
> show grants for myuser;

### 授予权限
 授予myuser用户全局级全部权限：

> grant all privileges ON *.* TO 'myuser'@'%';

授予myuser用户指定库权限：
>grant all privileges on databasename.tablename to 'myuser'@'host';
> grant select,insert,update,delete,create,drop ON blog.* TO 'myuser'@'%';


生效(刷新权限)

>FLUSH PRIVILEGES;

撤销全部权限
>revoke all privileges on *.* from myuser@'%';

撤销指定库语法：
>revoke privileges on databasename.tablename from 'myuser'@'host';

### MySQL各种权限：

- **usage**

  - 连接（登陆）权限，建立一个用户，就会自动授予其usage权限（默认授予）
该权限只能用于数据库登陆，不能执行任何操作；且usage权限不能被回收，也即REVOKE用户并不能删除用户。
<a data-fancybox title="p" href="./assets/create_database.png">![p](./assets/create_database.png)</a>

- **select**
    - 必须有select的权限，才可以使用select table;
    - mysql> grant select on pyt.* to ‘p1′@’localhost’;
    - mysql> select * from shop;

- **create**
  - 必须有create的权限，才可以使用create table

- **update**
  - 必须有update的权限，才可以使用update table

- **delete**
  - 必须有delete的权限，才可以使用delete from ….where….(删除表中的记录)

- **drop**
  - 必须有drop的权限，才可以使用drop database db_name; drop table tab_name;

- **show database**
  - 通过show database只能看到你拥有的某些权限的数据库，除非你拥有全局SHOW DATABASES权限。


### MySQL常用的命令

- 使用数据库
    > use mysql;
- 查看数据库列表
    > show databases;
- 查看表列
    >show tables;
- 显示数据表的属性，属性类型
    > show columns from 表名
    >或者 desc 表名;
- 显示数据表的详细索引信息
    > show index from 表名
    >或者 show create table <表名> \g;
- 查看使用哪个数据库

    > select database();