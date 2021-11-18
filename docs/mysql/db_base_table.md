### 数据库操作步骤

- 登录 msyql

  > msyql -u root -p

- 创建数据库

  > CREATE DATABASE database_name

- 删除数据库，注意没有提示的

  > DROP DATABASE database_name;

- 查看数据库的定义信息，

  > SHOW CREATE DATABASE database_name \G;

- 查看当前所有存在的数据库

  > SHOW databases;

- 查看存储引擎
  > SHOW ENGINES \G;

## 数据表基本操作

  创建数据表基本要领，关键字使用
  - 创建表的语法形式
  - 使用主键约束
  - 使用外键约束
  - 使用非空约束
  - 使用唯一性约束
  - 使用默认值约束
  - 设置表属性值自动增加

 ### 1、创建表的语法形式

  ```
      CREATE TABLE <表名> (
        列名 数据类型 [列级别约束条件] [默认值],
        列名 数据类型 [列级别约束条件] [默认值],
        ......
        [表级别约束条件]
      )

  ```

首先创建数据库test_db，SQL语句如下：

  > CREATE  DATABASE test_db;

  > USE test_db;//使用test_db数据库

  创建tb_emp1表
```
CREATE TABLE tb_emp1
    (
    id      INT(11),
    name   VARCHAR(25),
    deptId  INT(11),
    salary  FLOAT
    );
```

### 2、使用主键约束

  - 主键又称主码，是表中一列或者多列的组合，主键约束要求数据唯一，并且不为空。
  - 使用关键字 PRIMARY KEY;
  - 用法：
    - 单字段主键
      - 字段名 数据类型 PRIMARY KEY
    - 多字段主键
      - PRIMARY KEY [字段1,字段2,....] 
  - 使用DDL增加唯一约束.
    - alter table my_table add primary key (id);
  - 删除主键
    - alter table 表名 drop primary key;

案例（单字段主键 ）：
```
CREATE TABLE tb_emp2
(
id      INT(11) PRIMARY KEY,
name    VARCHAR(25),
deptId  INT(11),
salary  FLOAT
);
```
案例（多字段主键） ：
```
CREATE TABLE tb_emp4
 (
name VARCHAR(25),
deptId INT(11),
salary FLOAT,
PRIMARY KEY(name,deptId)
);
```

### 3、使用外键约束
  
- 外键用来在两表的数据之间建立链接，它可以是一列或者多列。一个表可以有一个或者多个外键。一个表的外键可以为空值，若不为空值，则每一个外键值必须等于另一个表中主键的某个值。不可以删除关联表对于列, 关联的列数据类型要一样。
- 语法： CONSTRAINT <外键名> FOREIGN KEY(字段名1,字段名2, ...) REFERENCES <主表名>(主键列1,主键列2,...)


案例：

```
//创建一个部门表tb_dept1，SQL语句如下：
CREATE TABLE tb_dept1
(
id       INT(11) PRIMARY KEY,
name    VARCHAR(22)  NOT NULL,
location  VARCHAR(50)
);

//定义数据表tb_emp5，让它的键deptId作为外键关联到tb_dept1的主键id，SQL语句为：
CREATE TABLE tb_emp5 
(
id      INT(11) PRIMARY KEY,
name   VARCHAR(25),
deptId  INT(11), 
salary   FLOAT,
CONSTRAINT fk_emp_dept1 FOREIGN KEY(deptId) REFERENCES tb_dept1(id)
);
```
注释：在表tb_emp5上添加了名称为fk_emp_dept1的外键约束，外键名称为deptId，其依赖于表tb_dept1的主键id。


### 4、使用非空约束

- 非空约束指的是表中的某一个字段的内容不允许为空，如果要使用非空约束.

- 关键字：NOT NULL
- 具体： 字段名 数据类型 NOT NULL

案例：

```
CREATE TABLE tb_emp6 
(
id     INT(11) PRIMARY KEY,
name   VARCHAR(25) NOT NULL,
deptId  INT(11), 
salary  FLOAT
);
```

### 5、使用唯一性约束
- 唯一性约束要求该列唯一，允许为空，但只能出现一个空值。唯一约束可以确保一列或者几列不出现重复值。
- 语法：字段名 数据类型 UNIQUE
- 后面添加：CONSTRAINT 约束名 UNIQUE 字段名

案例：
```
CREATE TABLE tb_dept2 
(
id      INT(11) PRIMARY KEY,
name    VARCHAR(22) UNIQUE,
location  VARCHAR(50)
);


CREATE TABLE tb_dept3 
(
id      INT(11) PRIMARY KEY,
name    VARCHAR(22),
location  VARCHAR(50),
CONSTRAINT STH UNIQUE(name)
);
```
### 5、使用默认值约束
- 当用户进行数据插入时，如果用户未指定字段的值，则使用默认值来插入数据，如果字段未使用defalt来约束，则默认值为NULL，如果字段指定默认值，则使用指定的默认值。

- 语法： 字段名 数据类型 DEFUALT 默认值
CREATE TABLE tb_emp7 
(
id      INT(11) PRIMARY KEY,
name   VARCHAR(25) NOT NULL,
deptId  INT(11) DEFAULT 1111, 
salary  FLOAT
);

### 6、设置表属性值自动增加
- 希望在每次插入新纪录时，系统自动生成字段的主键值。一个表只有一个字段使用自动添加约束，而且该字段必须为主键一部分。
- 语法： 字段名 数据类型 AUTO_INCREMENT

案例： 
```
CREATE TABLE tb_emp8 
(
id      INT(11) PRIMARY KEY AUTO_INCREMENT,
name   VARCHAR(25) NOT NULL,
deptId  INT(11), 
salary  FLOAT
);
```

## 操作数据表
### 查看数据表定义信息
- 查看表基本结构语句 DESCRIBE(describe)
  - DESCRIBE <表名>或者 DESC <表名>
- 查看表详细结构语句SHOW CREATE TABLE
  - show create table <表名>\g
  
### 修改表名
- 语法
  ALTER TABLE <原表名> RENAME <要修改表名>;
- 案例 ：将数据表tb_dept3改名为tb_deptment3。

  ```
  alter table tb_dept3 rename tb_deptment3;
  ```
### 修改字段的数据类型
- 语法： alter table <表名> modify <字段名> <数据类型>

案例：
```
desc tb_dept1;//查看结构
alter table tb_dept1 modify name varchar(30);
```

### 修改字段名称
- 语法： alter table <表名> change 原字段 修改字段 数据类型;

案例：
```
  alter table tb_dept1 change location loc varchar(50);
```

### 添加字段名
 -语法： alter table <表名> add manageId int(10);

案例： 在数据表tb_dept1中添加一个没有完整性约束的INT类型的字段managerId（部门经理编号）；

```
alter table tb_dept1 add managerId int(10) ;
```
也可以用约束

```
//不能为空的int(10)类型的字段column1
alter table tb_dept1 add column1 int(10) not null;
//数据表首位添加一个INT类型的字段column2
alter table tb_dept1 add  colmun2 int(10) first;
//数据表name后添加一个INT类型的字段column3
alter table tb_dept1 add  colmun3 int(10) after name;
```

### 删除数据表字段
- 语法： alter table <表名> drop 字段名；

案例： 
```
alter table tb_dept1 drop colmun2;
```

### 调整字段位置
- 语法： alter table 表名 modify 数据类型 first;

案例：
```
//放在首位
alter table tb_dept1 modify id int(10) first;
//colmun2字段插入到location字段后面
alter table tb_dept1 modify colmun2 int(10) after location;
```

###　数据表修改存储引擎
- 先查看引擎 show create table 表名 \G;

  +----------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| tb_dept1 | CREATE TABLE `tb_dept1` (
  `id` int NOT NULL,
  `name` int DEFAULT NULL,
  `location` varchar(30) NOT NULL,
  `colmun3` int DEFAULT NULL,
  `managerId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |;

注释：ENGINE=InnoDB 引擎

- 修改存储引擎，为 MyISAM
  - 语法： alter table 表名 engine=引擎名;

案例： 
```
//注意有外键约束的，修改不了
alter table tb_dept1 engine=MyISAM;
```

### 删除外键约束

首先创建表tb_emp9，创建外键deptId关联tb_dept1表的主键id，SQL语句如下：
```
CREATE TABLE tb_emp9 
(
id      INT(11) PRIMARY KEY,
name   VARCHAR(25),
deptId  INT(11),
salary   FLOAT,
CONSTRAINT fk_emp_dept  FOREIGN KEY (deptId) REFERENCES tb_dept1(id)
);
```
- 删除外键约束

  语法： alter table 表名 drop foreign key 外键别名;

  案例：
  ```
  alter table tb_emp9 drop foreign key fk_emp_dept;
  ```

### 删除数据表
  - 外键约束时，主表不能被直接删除

  - 语法：drop table if exists 表名;

  案例：

  ```
    drop table if exists tb_emp9;
  ```










