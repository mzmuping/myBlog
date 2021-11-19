### 基本查询语句
语法
```
select {*|[字段列表]} 
from <表1>,<表1>,....
where <表达式>
group by <分组>
having <expression>
order by <描述>
limit <分页>;
```
案例：

创建表名为fruits，
```
create table fruits
(
f_id    char(10)        not null,
s_id    int         not null,
f_name  char(255)   not null,
f_price decimal(8,2)    not null,
primary key(f_id)
);
```
插入数据：
```
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

- 查看fruits表所有数据
> select * from fruits;
- 从fruits表中获取f_name和f_price两列数据
> select f_name, f_price from fruits;

注意：* 通配符方便，但是查询慢，

## where 子句条件查询
可以使用运算符来查询，大于，小于，等于,不等于....
- 查询价格为10.2元的水果的名称
>select f_name ,f_price from fruits where f_price=10.2;
- 查询价格小于10的水果的名称
> select f_name ,f_price from fruits where f_price<10.2;

### not in,或者in 

查询所有s_id不等于101也不等于102的记录,
> select f_name ,f_price from fruits where s_id  not in (101,102);

在于101~102之间
>select f_name ,f_price from fruits where s_id  in (101,102);

### 带 not / between and  的范围查询

不在范围查询
>select f_name ,f_price from fruits where f_price not between 2.00 and 10.20;

在范围查询
> select f_name ,f_price from fruits where f_price between 2.00 and 10.20;

### like 匹配查询，模糊查询
百分号通配符%,匹配任意长度的字符甚至包括零字符，
下划线通配符'_',一次只能匹配任意一个字符。

- 查找所有以’b’字母开头的水果,单个字符
> select f_name ,f_price from fruits where f_name like 'b%';

- 在fruits表中，查询f_name中包含字母’g’的记录
>select f_name ,f_price from fruits where f_name like '%g%';

- 查询以’b’开头，并以’y’结尾的水果的名称
>select f_name ,f_price from fruits where f_name like 'b%y';

- 查询以字母’y’结尾，且’y’前面只有4个字母的记录
>select f_name ,f_price from fruits where f_name like '----y';

### 查询空值is null 或者 is not null 子句；
查询某字段为空记录。

案例： 创建数据表customers
```
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
```
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

- 查询 customers 表中c_email为空的记录的c_id、c_name和c_email字段值

> select c_id, c_name,c_email from  customers where c_email is null;

- 查询customers表中c_email不为空的记录的c_id、c_name和c_email字段值
> select c_id, c_name,c_email from  customers where c_email is not null;

### and 多条件查询
同时满足多条件查询,
- fruits表中查询s_id = 101，并且f_price大于等于5的水果价格和名称
> select f_id, f_price, f_name from fruits where s_id = '101' and f_price >=5;

- 在fruits表中查询s_id = 101或者102，且f_price大于5，并且f_name=‘apple’的水果价格和名称

> select f_id, f_price, f_name from fruits where s_id IN('101', '102') and f_price >= 5 and f_name = 'apple';

### or 查询
满足一个条件即可返回。or也可以连接两个甚至多个查询条件。多个条件表达式用and分开。

- 查询s_id=101或者s_id=102的水果供应商的f_price和f_name
>select s_id,f_name, f_price from fruits where s_id = 101 OR s_id = 102;
>select s_id,f_name, f_price from fruits where s_id in(101,102);

 ### distinct 去重复查询
- 查询fruits表中s_id字段的值，返回s_id字段值且不得重复,desc 降序排序,asc 升序
> select distinct s_id from fruits;

 
## 对查询结果排序
mysql 中可以通过select 使用order by 子句对查询的结果进行排序
- 单列排序
- 多列排序
- 指定排序方向，升序，降序


1. 查询fruits表的f_name字段值，并对其进行排序,默认升序排序
> select f_name from fruits order by f_name;

2. 查询fruits表中的f_name和f_price字段，先按f_name排序，再按f_price排序
>SELECT f_name, f_price FROM fruits ORDER BY f_name, f_price;

3. 查询fruits表中的f_name和f_price字段，对结果按f_price降序方式排序
> SELECT f_name, f_price FROM fruits ORDER BY f_price DESC;

4. 查询fruits表，先按f_price降序排序，再按f_name字段升序排序
> SELECT f_price, f_name FROM fruits ORDER BY f_price DESC, f_name;

## 分组查询

1. 分组查询是对数据按照某个或者多个字段查询进行分组。

2. [group by 字段] [having <条件表达式>]
    - 创建分组
    - 使用having过滤分组
    - 在group by 子句中使用with rollup(总和)
    - 多字段分组
    - group by 和 order by 一起使用


- 根据s_id对fruits表中的数据进行分组
> select s_id ,count(*) as total from fruits group by s_id;

### group by
- 根据s_id对fruits表中的数据进行分组，将每个供应商的水果名称显示出来,group_concat聚合函数，也可以排序
> select s_id, group_concat(f_name order by f_name asc ) as names from fruits group by s_id;

### having
having：用于对where和group by查询出来的分组经行过滤，查出满足条件的分组结果。它是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作。
执行顺序：select –>where –> group by–> having–>order by

- 根据s_id对fruits表中的数据进行分组，并显示水果种类大于1的分组信息,count()函数，返回总数
>select s_id , group_concat(f_name) as names from fruits group by s_id having count(f_name) > 1;

### with rollup， ifnull()
with rollup是用来在分组统计数据的基础上再进行统计汇总

- 根据s_id对fruits表中的数据进行分组，并显示记录数量

> select ifnull(s_id,'总数') as s_id , count(*) as total from fruits group by s_id with rollup;

### 多字段分组


- 根据s_id和f_name字段对fruits表中的数据进行分组，分析：先按照s_id分组，在f_name分组
> select * from fruits group by s_id ,f_name;

为了演示效果，首先创建数据表

```
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
```
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

- 查询订单价格大于100的订单号和总订单价格
> select o_num , sum(quantity * item_price) as orderTotal from orderitems group by o_num having sum(quantity * item_price) >= 100;

###  group by 和 order by一起使用
- 可以看到，返回的结果中orderTotal列的总订单价格并没有按照一定顺序显示，接下来，使用ORDER BY关键字按总订单价格排序显示结果

> select o_num ,sum(quantity*item_price) as orderTotal from orderitems group by o_num having sum(quantity*item_price) >= 100 order by orderTotal;


### 用limit 限制查询结果的数量
1. limit 关键字可以用放回指定位置的记录
2. limit [位置偏移量，]行数


- 限制返回前4行，
select * from fruits limit 4;

- 返回从第5个记录开始的，行数长度为3的记录，索引重0开始。
> select * from fruits limit 4 ,3;

## 使用集合函数查询
1. count() 函数
2. sum() 函数
3. avg() 函数
4. max() 函数
5. min() 函数



