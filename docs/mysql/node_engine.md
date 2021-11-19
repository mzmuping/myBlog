## 数据库 增删改查
使用node 链接mysql实现 增删改查
## 安装node版Mysql数据库的驱动模块

```
 npm install mysql
```

//引入msyql
单个连接池
```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '用户名',
  password : '密码',
  database : '数据库'
});

connection.connect();

connection.query('sql语句',function(error, results, fields){
    if (error) throw error;
  console.log('The solution is: ', results[0].solution);
})

connection.end();//断开连接
```

多个连接池

```
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,//最多连接数
  host            : 'localhost',
  user            : '用户名',
  password        : '密码',
  database        : '数据库名'
});
 
pool.query('sql 语句', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});


```

### 案例：
创建数据库db_test;
> create database db_test;

查看是数据库

>show databases;

使用 db_test;
> use db_test;

创建一个数据表 tb_test,字段列（id 自增，name 20字，age ）都不为空;
```
create table tb_test(id int primary key auto_increment, name varchar(20) not null,age smallint not null);

```
查看是否有tb_test表；

>show tables;

创建test-mysql.js，测试是连接数据库

```
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a12345',
    database: 'db_test'
});

connection.connect();

connection.query('select * from tb_test', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
})

connection.end();

```

在终端进入

输入
```
node E:\其他\node\admin\router\testmysql.js
```
![w](./assets/con_mysql.png)

可以到连接成功了