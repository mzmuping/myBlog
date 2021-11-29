---
title: select查询语句
date: 2021-11-20
categories: 
 - frontend
tags:
- mysql
- sql
---

## select 查询语句
语法
```js
select {*|[字段列表]} 
from <表1>,<表1>,....
where <表达式>
group by <分组>
having <并且>
order by <排序>
limit <分页>;
```
案例：
创建test_db库
```js
create database test_db;
```
创建表名为fruits，
```js
create table fruits
(
f_id    char(10)        not null  comment "种类",
s_id    int         not null comment "供应商",
f_name  char(255)   not null comment "水果名称",
f_price decimal(8,2)    not null comment "价格",
primary key(f_id)
);
```
插入数据：
```js
insert into fruits (f_id, s_id, f_name, f_price)
     values('a1', 101,'apple',5.2),
     ('b1',101,'blackberry', 10.2),
     ('bs1',102,'orange', 11.2),
     ('bs2',105,'melon',8.2),
     ('t1',102,'banana', 10.3),
     ('t2',102,'grape', 5.3),
     ('o2',103,'coconut', 9.2),
     ('c0',101,'cherry', 3.2),
     ('a2',103, 'apricot',2.2),
     ('l2',104,'lemon', 6.4),
     ('b2',104,'berry', 7.6),
     ('m1',106,'mango', 15.6),
     ('m2',105,'xbabay', 2.6),
     ('t4',107,'xbababa', 3.6),
     ('m3',105,'xxtt', 11.6),
     ('b5',107,'xxxx', 3.6);
```

执行完后，接下来就是查看数据了

- 【例】查看fruits表所有数据
```js
 select * from fruits;
```
- 【例】从fruits表中获取f_name和f_price两列数据
```js
select f_name, f_price from fruits;
```

注意：* 通配符方便，但是查询慢，

### where 子句条件查询
可以使用运算符来查询，大于，小于，等于,不等于....
- 【例】查询价格为10.2元的水果的名称
```js
select f_name ,f_price from fruits where f_price=10.2;
```
- 【例】查询价格小于10的水果的名称
> select f_name ,f_price from fruits where f_price<10.2;

### not in,或者in 

【例】查询所有s_id不等于101也不等于102的记录,
```js
select f_name ,f_price from fruits where s_id  not in (101,102);
```

【例】在于101~102之间
```js
select f_name ,f_price from fruits where s_id  in (101,102);
```

### 带 not / between and  的范围查询

【例】不在范围查询
```js
select f_name ,f_price from fruits where f_price not between 2.00 and 10.20;
```

【例】在范围查询
```js
select f_name ,f_price from fruits where f_price between 2.00 and 10.20;
```

### like 匹配查询，模糊查询
百分号通配符%,匹配任意长度的字符甚至包括零字符，
下划线通配符'_',一次只能匹配任意一个字符。

- 【例】查找所有以’b’字母开头的水果,单个字符
```js
select f_name ,f_price from fruits where f_name like 'b%';
```

- 【例】在fruits表中，查询f_name中包含字母’g’的记录
```js
select f_name ,f_price from fruits where f_name like '%g%';
```

- 【例】查询以’b’开头，并以’y’结尾的水果的名称
```js
select f_name ,f_price from fruits where f_name like 'b%y';
```

- 【例】查询以字母’y’结尾，且’y’前面只有4个字母的记录
```js
select f_name ,f_price from fruits where f_name like '----y';
```

### 查询空值is null 或者 is not null 子句；
查询某字段为空记录。

案例： 创建数据表customers
```js
CREATE TABLE customers
(
  c_id      int       NOT NULL AUTO_INCREMENT,
  c_name    char(50)  NOT NULL,
  c_address char(50)  NULL,
  c_city    char(50)  NULL,
  c_zip     char(10)  NULL,
  c_contact char(50)  NULL,
  c_email   char(255) NULL,
  PRIMARY KEY (c_id)
);
```
插入数据
```js
INSERT INTO customers(c_id, c_name, c_address, c_city, 
c_zip,  c_contact, c_email) 
VALUES(10001, 'RedHook', '200 Street ', 'Tianjin', 
 '300000',  'LiMing', 'LMing@163.com'),
(10002, 'Stars', '333 Fromage Lane',
 'Dalian', '116000',  'Zhangbo','Jerry@hotmail.com'),
(10003, 'Netbhood', '1 Sunny Place', 'Qingdao',  '266000',
 'LuoCong', NULL),
(10004, 'JOTO', '829 Riverside Drive', 'Haikou', 
 '570000',  'YangShan', 'sam@hotmail.com');
```

- 【例】查询 customers 表中c_email为空的记录的c_id、c_name和c_email字段值

```js
select c_id, c_name,c_email from  customers where c_email is null;
```

- 【例】查询customers表中c_email不为空的记录的c_id、c_name和c_email字段值
```js
select c_id, c_name,c_email from  customers where c_email is not null;
```

### and 多条件查询
同时满足多条件查询,
- 【例】fruits表中查询s_id = 101，并且f_price大于等于5的水果价格和名称
```js
select f_id, f_price, f_name from fruits where s_id = '101' and f_price >=5;
```

- 【例】在fruits表中查询s_id = 101或者102，且f_price大于5，并且f_name=‘apple’的水果价格和名称

```js
select f_id, f_price, f_name from fruits 
where s_id IN('101', '102') and f_price >= 5 and f_name = 'apple';
```
### or 查询
满足一个条件即可返回。or也可以连接两个甚至多个查询条件。多个条件表达式用and分开。

- 【例】查询s_id=101或者s_id=102的水果供应商的f_price和f_name
```js
select s_id,f_name, f_price from fruits where s_id = 101 OR s_id = 102;

select s_id,f_name, f_price from fruits where s_id in(101,102);
```

 ### distinct 去重复查询
- 【例】查询fruits表中s_id字段的值，返回s_id字段值且不得重复,desc 降序排序,asc 升序
```js
select distinct s_id from fruits;
```

 
## 对查询结果排序
mysql 中可以通过select 使用order by 子句对查询的结果进行排序
- 单列排序
- 多列排序
- 指定排序方向，升序，降序


1. 查询fruits表的f_name字段值，并对其进行排序,默认升序排序
```js
select f_name from fruits order by f_name;
```

2. 查询fruits表中的f_name和f_price字段，先按f_name排序，再按f_price排序
>SELECT f_name, f_price FROM fruits ORDER BY f_name, f_price;

3. 查询fruits表中的f_name和f_price字段，对结果按f_price降序方式排序
> SELECT f_name, f_price FROM fruits ORDER BY f_price DESC;

4. 查询fruits表，先按f_price降序排序，再按f_name字段升序排序
```js
SELECT f_price, f_name FROM fruits ORDER BY f_price DESC, f_name;
```

### 分组查询

1. 分组查询是对数据按照某个或者多个字段查询进行分组。

2. [group by 字段] [having <条件表达式>]
    - 创建分组
    - 使用having过滤分组
    - 在group by 子句中使用with rollup(总和)
    - 多字段分组
    - group by 和 order by 一起使用


- 【例】根据s_id对fruits表中的数据进行分组
```js
select s_id ,count(*) as total from fruits group by s_id;
```

### group by
- 【例】根据s_id对fruits表中的数据进行分组，将每个供应商的水果名称显示出来,group_concat聚合函数，也可以排序
```js
select s_id, group_concat(f_name order by f_name asc ) as names from fruits group by s_id;
```

### having
having：用于对where和group by查询出来的分组经行过滤，查出满足条件的分组结果。它是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作。
执行顺序：select –>where –> group by–> having–>order by

- 【例】根据s_id对fruits表中的数据进行分组，并显示水果种类大于1的分组信息,count()函数，返回总数
```js
select s_id , group_concat(f_name) as names from fruits group by s_id having count(f_name) > 1;
```

### with rollup， ifnull()
with rollup是用来在分组统计数据的基础上再进行统计汇总

- 【例】根据s_id对fruits表中的数据进行分组，并显示记录数量

```js
select ifnull(s_id,'总数') as s_id , count(*) as total from fruits group by s_id with rollup;
```

### 多字段分组


- 【例】根据s_id和f_name字段对fruits表中的数据进行分组，分析：先按照s_id分组，在f_name分组
```js
select * from fruits group by s_id ,f_name;
```

为了演示效果，首先创建数据表

```js
CREATE TABLE orderitems
(
  o_num      int          NOT NULL,
  o_item     int          NOT NULL,
  f_id       char(10)     NOT NULL,
  quantity   int          NOT NULL,
  item_price decimal(8,2) NOT NULL,
  PRIMARY KEY (o_num,o_item)
) ;
```
然后插入演示数据。SQL语句如下：
```js
INSERT INTO orderitems(o_num, o_item, f_id, quantity, item_price)
VALUES(30001, 1, 'a1', 10, 5.2),
(30001, 2, 'b2', 3, 7.6),
(30001, 3, 'bs1', 5, 11.2),
(30001, 4, 'bs2', 15, 9.2),
(30002, 1, 'b3', 2, 20.0),
(30003, 1, 'c0', 100, 10),
(30004, 1, 'o2', 50, 2.50),
(30005, 1, 'c0', 5, 10),
(30005, 2, 'b1', 10, 8.99),
(30005, 3, 'a2', 10, 2.2),
(30005, 4, 'm1', 5, 14.99);
```

- 【例】查询订单价格大于100的订单号和总订单价格
```js
select o_num , sum(quantity * item_price) as orderTotal 
from orderitems 
group by o_num having sum(quantity * item_price) >= 100;
```

###  group by 和 order by一起使用
- 【例】可以看到，返回的结果中orderTotal列的总订单价格并没有按照一定顺序显示，接下来，使用ORDER BY关键字按总订单价格排序显示结果

```js
 select o_num ,sum(quantity*item_price) as orderTotal 
 from orderitems 
 group by o_num having sum(quantity*item_price) >= 100 order by orderTotal;
 ```


### 用limit 限制查询结果的数量
1. limit 关键字可以用放回指定位置的记录
2. limit [位置偏移量，]行数


- 【例】限制返回前4行，
``` js
select * from fruits limit 4;
```

- 【例】返回从第5个记录开始的，行数长度为3的记录，索引重0开始。
```js
select * from fruits limit 4 ,3;
```

## 使用集合函数查询
1. count() 函数
    - 统计数据表中包含的记录行的总数，或者根据查询结果返回的列中包含数据行数
    - count(*)
    - count(字段名)
2. sum() 函数
    - sum()是一个求总和的函数，返回指定列值的总和。
3. avg() 函数
    - avg()函数通过计算返回的行数和每一行数据的和，就得指定列数据的平均值。
4. max() 函数
    - 返回指定列中的最大值
5. min() 函数
    - 返回指定列中的最小值

### count()使用
- 【例】查询customers表中总的行数
```js
select count(*) as total from customers;
```
- 【例】查询customers表中有电子邮箱的顾客的总数
```js
select count(c_email) as emailTotal from customers;
```
- 【例】在 orderitems 表中，使用COUNT()函数统计不同订单号中订购的水果种类,水果种类进行升序排序
```js
select o_num ,count(f_id) as f_id_num from orderitems group by o_num order by f_id_num;

### sum()使用
```
- 【例】在 orderitems 表中查询30005号订单一共购买的水果总量
```js
select o_num , sum(quantity) as items_total from orderitems where o_num = '30005';
```
- 【例】在 orderitems 表中，使用SUM()函数统计不同订单号中订购的水果总量
```js
select o_num , sum(quantity) as items_total from orderitems group by o_num order by items_total;
```
### avg()使用
- 【例】在 fruits 表中，查询每一个供应商的水果价格的平均值,平均值保留两位小数点
```js
select s_id, cast(avg(f_price) as decimal(8,2)) as avg,avg(f_price),sum(f_price),count(s_id) from fruits group by s_id;
```

### max()使用
- 【例】在 fruits 表中查找市场上价格最高的水果
```js
select s_id,f_name, max(f_price) from fruits group by s_id;
```
- 【例】在 fruits 表中查找 f_name 的最大值
```js
select s_id, max(f_name) from fruits group by s_id;
```
### min()使用
- 【例】在 fruits 表中查找市场上价格最低的水果
```js
select min(f_price) from fruits;
```
- 【例】在 fruits 表中查找不同供应商提供的价格最低的水果
```js
select s_id, min(f_price) from fruits group by s_id;
```

## 连表查询
### 内连接查询
- 内连接使用比较运算符进行表间某些列数据的比较操作，并列出这些表中与连接条件相匹配的数据行，组合成新的记录，也就是说，在内连接查询中，只有满足条件的记录才能出现在结果关系中。

案例：

为了演示的需要，首先创建数据表suppliers，SQL语句如下：
```js
create table suppliers(
  s_id       int  not null auto_increment comment '供应商id',
  s_name     char(50) not null comment '供应商名称',
  s_city     char(50) null,
  s_zip      char(50) null,
  s_call     char(50) not null,
  primary key (s_id)
);

```

插入需要演示的数据，SQL语句如下：
```js
INSERT INTO suppliers(s_id, s_name,s_city,  s_zip, s_call)
VALUES(101,'FastFruit Inc.','Tianjin','300000','48075'),
(102,'LT Supplies','Chongqing','400000','44333'),
(103,'ACME','Shanghai','200000','90046'),
(104,'FNK Inc.','Zhongshan','528437','11111'),
(105,'Good Set','Taiyuang','030000', '22222'),
(106,'Just Eat Ours','Beijing','010', '45678'),
(107,'DK Inc.','Zhengzhou','450000', '33332');
```

- 在fruits表和suppliers表之间使用内连接查询。

注释：查询之前，查看两个表的结构：

```js
desc fruits;
desc suppliers;
```
由结果可以看到，fruits表和suppliers表中都有相同数据类型的字段s_id,两个表通过s_id字段建立联系。接下来从fruits表中查询f_name、f_price字段，从suppliers表中查询s_id、s_name。sql语句：

```js
select suppliers.s_id,s_name,f_name,f_price 
from 
fruits ,suppliers where fruits.s_id = suppliers.s_id;
```

#### 同表别名内连接
- 【例】查询供应f_id= ‘a1’的水果供应商提供的其他水果种类
```js
select f1.f_id,f1.f_name from 
fruits as f1,fruits as f2 where f1.s_id = f2.s_id and f2.f_id = 'a1';
```

### 外连接查询
- 返回到查询结果集合中的不仅包含符合连接条件的行，而且还包括左表（左外连接或者左连接）、右表（右外连接或右连接）或者两个边接表（全外连接）中的所有数据行。
  - leet jion (左连接，返回左表所有的行)
  - right jion (右连接，返回右表所有的行)

案例：

首先创建表orders
```js
create table orders (
  o_num   int      not null auto_increment comment '订单num',
  o_date  datetime not null,
  c_id    int      not null,
  primary key (o_num)
);
```
插入数据
```js
insert into orders(o_num,o_date,c_id)  values (30002, '2008-09-12', 10003),
(30003, '2008-09-30', 10004),
(30004, '2008-10-03', 10005),
(30005, '2008-10-08', 10001);
```

- 左连接

【例】在 customers 表和 orders 表中，查询所有客户，包括没有订单的客户。

```js
SELECT customers.c_id , orders.o_num FROM
 customers LEFT OUTER JOIN orders ON customers.c_id = orders.c_id;
```

- 右连接

右连接是左连接的反向连接，将返回右表的所有行。如果右表的某行在左表中没有匹配行，左表将返回空值。

```js
SELECT customers.c_id ,orders.o_num FROM customers RIGHT OUTER JOIN orders ON customers.c_id = orders.c_id;
```

### 复合条件连接查询
 - 复合条件连接查询是在连接查询的过程中，通过添加过滤条件，限制查询的结果。
  - 语法：inner join

案例：

在customers表和orders表中，使用INNER JOIN语法查询customers表中ID为10001的客户的订单信息。
```js
SELECT * FROM customers INNER JOIN orders ON 
customers.c_id = orders.c_id AND customers.c_id =10001;
```

- 【例】在 fruits 表和 suppliers 表之间，使用INNER JOIN语法进行内连接查询，并对查询结果排序

```js
select suppliers.s_id, s_name,f_name, f_price from fruits 
INNER JOIN suppliers ON fruits.s_id = suppliers.s_id order by fruits.s_id;
```

## 子查询
### 带any ,some 关键字的子查询

any 和some 关键字是同义词，表示满足其中任一条件，他们允许创建一个表达式对子查询的返回值列表进行比较，只要满足内层子查询中的任何一个比较条件，就返回一个结果作为外层查询的条件。

案例：

下面定义两个表tb1和tb2：
```js
CREATE table tbl1 ( num1 INT NOT NULL);
CREATE table tbl2 ( num2 INT NOT NULL);
```
分别向两个表中插入数据：
```js
INSERT INTO tbl1 values(1), (5), (13), (27);
INSERT INTO tbl2 values(6), (14), (11), (20);
```
ANY关键字接在一个比较操作符的后面，表示若与子查询返回的任何值比较为TRUE，则返回TRUE。

- 【例】返回tbl2表的所有num2列，然后将tbl1中的num1的值与之进行比较，只要大于num2的任何1个值，即为符合查询条件的结果
```js
SELECT num1 FROM tbl1 where num1 > ANY (SELECT num2 FROM tbl2);

SELECT num1 FROM tbl1 where num1 > SOME (SELECT num2 FROM tbl2);
```

### 带all 关键字查询
all 关键字与any,some不同，使用all是需要同时满足所有内层查询的条件。

案例：

- 返回tbl1表中比tbl2表num2 列所有值都大的值
```js
select num1 from tbl1 where num1 > all (select num2 from tbl2);
```

### 带exists 关键字的子查询
exists关键字后面的参数是一个任意的子查询，系统对子查询进行运算以判断它是否返回行，如果至少返回一个，那么exists的结果为true,此时外层查询语句将进行查询；如果子查询没有返回任何行，那么exists返回的结果是false,此时外层语句将不进行查询

案例：

- 【例】查询suppliers表中是否存在s_id=107的供应商，如果存在，则查询fruits表中的记录,
(SELECT s_name FROM suppliers WHERE s_id = 107)有结果，所以执行SELECT * FROM fruits;
```js
 SELECT * FROM fruits
     WHERE EXISTS
     (SELECT s_name FROM suppliers WHERE s_id = 107);
```

- 【例】查询suppliers表中是否存在s_id=107的供应商，如果存在，则查询fruits表中的f_price大于10.20的记录
```js
select * from fruits where f_price > 10.20 and exists 
(select * from suppliers where s_id=107);
```
- 【例】查询suppliers表中是否存在s_id=107的供应商，如果不存在则查询fruits表中的记录
```js
select * from fruits where not exists (select * from suppliers where s_id=107);
```
### 带in 关键字的子查询
in 关键字进行子查询时，内层查询语句仅仅返回一个数据列，这个数据列里的值将提供给外层查询语句进行比较操作。

案例：
- 【例】在orderitems表中查询f_id为c0的订单号(o_num)，并根据订单号orders表查询具有订单号的客户c_id。
```js
select c_id from orders where o_num IN (select o_num from orderitems where f_id='c0');
```

select o_num  from orderitems where f_id = 'c0';
可以看到，符合条件的o_num列的值有两个：30003和30005，然后执行外层查询，在orders表中查询订单号等于30003或30005的客户c_id。嵌套子查询语句还可以写为如下形式，实现相同的效果：
 select c_id from orders where o_num IN (30003, 30005);

 - 与前一个例子类似，但是在SELECT语句中使用NOT IN关键字;
 ```js
 select c_id from orders where o_num NOT IN (select o_num from orderitems where f_id='c0');
 ```

### 带比较运算符的子查询
在前面介绍的带any,all关键字的子查询时，使用了'>'比较运算符，子查询时还可以使用其他的比较运算符，如<、<=、=、>=和!= 等。

案例：

- 【例】在suppliers表中查询s_city等于“Tianjin”的供应商s_id，然后在fruits表中查询所有该供应商提供的水果的种类
```js
select * from fruits where s_id = (select su1.s_id from suppliers as su1 where su1.s_city='Tianjin');
```

## union , union all合并查询结果
1. 利用union关键字，可以给出多条select语句，并将它们的结果组合成单个结果集。合并时，两个表对于的列数和数据类型必须相同。各个select语句之间使用union或者union all 关键字分隔。

1. union all是不处理重复值的。


案例：

- 【例】查询所有价格小于9的水果的信息，查询s_id等于101和103所有的水果的信息，使用UNION连接查询结果。

```js
select s_id , f_name , f_price from fruits 
where f_price < 9.0 
union all SELECT s_id ,f_name ,f_price FROM fruits WHERE s_id IN (101,103);
```
返回结果：
```
+------+------------+---------+
| s_id | f_name     | f_price |
+------+------------+---------+
|  101 | apple      |    5.20 |
|  103 | apricot    |    2.20 |
|  104 | berry      |    7.60 |
|  107 | xxxx       |    3.60 |
|  105 | melon      |    8.20 |
|  101 | cherry     |    3.20 |
|  104 | lemon      |    6.40 |
|  105 | xbabay     |    2.60 |
|  102 | grape      |    5.30 |
|  107 | xbababa    |    3.60 |
|  101 | apple      |    5.20 |
|  103 | apricot    |    2.20 |
|  101 | blackberry |   10.20 |
|  101 | cherry     |    3.20 |
|  103 | coconut    |    9.20 |
+------+------------+---------+
15 rows in set (0.00 sec)
```
注：UNION将多个SELECT语句的结果组合成一个结果集合。
可以分开查看每个SELECT语句的结果：
```js
select s_id , f_name , f_price from fruits where f_price < 9.0 ;
```
返回结果：
```
+------+---------+---------+
| s_id | f_name  | f_price |
+------+---------+---------+
|  101 | apple   |    5.20 |
|  103 | apricot |    2.20 |
|  104 | berry   |    7.60 |
|  107 | xxxx    |    3.60 |
|  105 | melon   |    8.20 |
|  101 | cherry  |    3.20 |
|  104 | lemon   |    6.40 |
|  105 | xbabay  |    2.60 |
|  102 | grape   |    5.30 |
|  107 | xbababa |    3.60 |
+------+---------+---------+
10 rows in set (0.00 sec)
```
```js
SELECT s_id ,f_name ,f_price FROM fruits WHERE s_id IN (101,103);
```
返回结果：
```
+------+------------+---------+
| s_id | f_name     | f_price |
+------+------------+---------+
|  101 | apple      |    5.20 |
|  103 | apricot    |    2.20 |
|  101 | blackberry |   10.20 |
|  101 | cherry     |    3.20 |
|  103 | coconut    |    9.20 |
+------+------------+---------+
5 rows in set (0.00 sec)
```

然后两个合拼一起返回结果。



## 为表和字段取别名

- 为表取别名
    - 语法： 表名 [AS] 表别名
- 为字段取别名
    - 语法： 字段名 [AS] 字段别名

为表取别名 案例 ：

- 【例】为orders表取别名o，查询30001订单的下单日期,SQL语句如下

```js
select * from orders AS o where o.o_num = 30001;
```
- 【例】为customers和orders表分别取别名，并进行连接查询,SQL语句如下
```js
select c.c_id,o.o_num from customers as c  LEFT OUTER JOIN  orders as o on c.c_id = o.c_id;
```
由结果看到，MySQL可以同时为多个表取别名，而且表别名可以放在不同的位置，如WHERE子句、SELECT列表、ON子句以及ORDER BY子句等。
在前面介绍内连接查询时指出自连接是一种特殊的内连接，在连接查询中的两个表都是同一个表

为字段取别名 案例 ：

- 【例】查询fruits表，为f_name取别名fruit_name，f_price取别名fruit_price，为fruits表取别名f1，查询表中f_price < 8的水果的名称

```js
select f1.f_name as fruit_name ,f1.f_price as fruit_price 
from fruits as f1 where f1.f_price < 8;
```
- 【例】查询suppliers表中字段s_name和s_city，使用CONCAT函数连接这两个字段值，并取列别名为suppliers_title。
注：函数结果集取别名
```js
select CONCAT(trim(s_name),'(',trim(s_city),')') as suppliers_title
from suppliers order by s_name;
```

## 使用正则表达式查询
语法：REGEXP
- 查询以特定字符或者字符串开头‘^’的记录
- 查询以特定字符或者字符串结尾‘$’的记录
- 用符合‘.’来代替字符串中的任意一个字符
- 使用‘*’ 和‘+’ 来匹配多个字符
- 匹配指定字符串
- 匹配指定字符中的任意一个
- 匹配指定字符以外的字符
- 使用{m}或者{m,n}来指定字符串连续出现的次数

### 以‘^’开头，匹配以特定字符或者字符串开头的文本。
- 【例】在fruits表中，查询f_name字段以字母’b’开头的记录
```js
select * from fruits where f_name regexp '^b';
```
- 【例】在fruits表中，查询f_name字段以“be”开头的记录
```js
select * from fruits where f_name regexp '^be';
```

### 查询以特定字符或者字符串结尾‘$’的记录
- 【例】在fruits表中，查询f_name字段以字母’y’结尾的记录
```js
select * from fruits where f_name regexp 'y$';
```
-【例7.71】在fruits表中，查询f_name字段以字符串“rry”结尾的记录
```js
select * from fruits where f_name regexp 'rry$';
```

### 用符合‘.’来代替字符串中的任意一个字符
- 【例7.72】在fruits表中，查询f_name字段值包含字母’a’与’g’且两个字母之间只有一个字母的记录
```js
select * from fruits where f_name regexp 'a.g';
```
### 使用‘*’ 和‘+’ 来匹配多个字符
星号’*’匹配前面的字符任意多次，包括0次。加号’+’匹配前面的字符至少一次。
- 【例】在fruits表中，查询f_name字段值以字母’b’开头，且’b’后面出现字母’a’的记录
```js
select * from fruits where f_name regexp '^ba*';
```
- 【例】在fruits表中，查询f_name字段值以字母’b’开头，且’b’后面出现字母’a’至少一次的记录
```js
select * from fruits where f_name regexp '^ba+';
```
### 匹配指定字符串
正则表达式可以匹配指定字符串，只要这个字符串在查询文本中即可，如要匹配多个字符串，多个字符串之间使用分隔符’|’隔开

- 【例】在fruits表中，查询f_name字段值包含字符串“on”的记录
```js
select * from fruits where f_name regexp 'on';
```
- 【例】在fruits表中，查询f_name字段值包含字符串“on”或者“ap”的记录
```js
select * from fruits where f_name regexp 'on|ap';
```
- 【例】在fruits表中，使用LIKE运算符查询f_name字段值为“on”的记录
```js
select * from fruits where f_name like 'on';
//相当于
select * from fruits where f_name = 'on';
```
### 匹配指定字符中的任意一个
方括号“[]”指定一个字符集合，只匹配其中任何一个字符，即为所查找的文本。

- 【例】在fruits表中，查找f_name字段中包含字母’o’或者’t’的记录
```js
select * from fruits where f_name regexp '[ot]';
```
所有返回的记录的f_name字段的值中都包含有字母o或者t，或者两个都有。

- 【例】在fruits表，查询s_id字段中数值中包含4、5或者6的记录
```js
select * from fruits where s_id regexp '[456]';
```

###　匹配指定字符以外的字符

“[^字符集合]”匹配不在指定集合中的任何字符。
- 【例】在fruits表中，查询f_id字段包含字母a~e和数字1~2以外的字符的记录
```js
select * from fruits where f_id regexp '[^a-e1-2]';
```

### 使用{m}或者{m,n}来指定字符串连续出现的次数

- 【例】在fruits表中，查询f_name字段值出现字母’x’至少2次的记录
```js
select * from fruits where f_name regexp 'x{2,}';
//结果
+------+------+--------+---------+
| f_id | s_id | f_name | f_price |
+------+------+--------+---------+
| b5  |  107 | xxxx  |   3.60 |
| m3  |  105 | xxtt  |  11.60 |
+------+-------+--------+---------+
```
- 【例】在fruits表中，查询f_name字段值出现字符串“ba”最少1次，最多3次的记录
```js
select * from fruits where f_name regexp 'ba{1,3}';
```