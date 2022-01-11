---
title: 插入，修改，删除
date: 2021-11-25
categories: 
 - frontend
tags:
- mysql
- sql
---

## 插入数据
使用insert插入数据,
向表中所有字段插入值的方法有两种：一种是指定所有字段名，另一种是完全不指定字段名。
使用INSERT插入数据时，允许列名称列表column_list为空，此时，值列表中需要为表的每一个字段指定值，并且值的顺序必须和数据表中字段定义时的顺序相同
```js

//先创建数据库person
create table person(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name char(40)  NOT NULL default '',
    age INT NOT NULL default 0,
    info char(50) null,
    primary key (id)
);
```
- 【例】在person表中，插入一条新记录，id值为1，name值为Green，age值为21，info值为Lawyer
```js
insert into person (id,name,age) values(1,'Green',21);
```

- 【例】在person表中，插入一条新记录，id值为3，name值为Mary，age值为24，info值为Musician
```js
insert into person values(3,'mary',24,'Musician');
```
- 【例】在person表中，在name、age和info字段指定插入值，同时插入3条新记录
```js
insert into person (name,age,info) values ('Evans',27, 'secretary'),
('Dale',22, 'cook'),
('Edison',28, 'singer');
```
- 【例】在person表中，在name、age和info字段指定插入值，同时插入3条新记录
```js
insert into person (name,age,info) values ('Evans',27, 'secretary'),
('Dale',22, 'cook'),
('Edison',28, 'singer');
```
- 【例】从person_old表中查询所有的记录，并将其插入到person表中。

```js
//创建person_old的数据表
CREATE TABLE person_old
(
id     INT UNSIGNED NOT NULL AUTO_INCREMENT,
name   CHAR(40) NOT NULL DEFAULT '',
age    INT NOT NULL DEFAULT 0,
info   CHAR(50) NULL,
PRIMARY KEY (id)
);

//插入数据
 INSERT INTO person_old
     VALUES (11,'Harry',20, 'student'), (12,'Beckham',31, 'police');
//查询person_old数据直接插入person中，person_old 字段要和person一样，如果不一样要使用 as 修改成一样,假如person_old字段 name_old ,person字段name ,这样就 name_old as name 
INSERT INTO person(id, name, age, info)
SELECT id, name, age, info FROM person_old;
//or
INSERT INTO person(id, name, age, info)
SELECT id3 as id, name3 as name, age3 as age, info3 as inof FROM person_old3;
```

### 更新数据
通过update语句更新表数据
语法：update <表名> set 字段1=新值 ,字段2=新值 where <条件>

- 【例】在person表中，更新id值为3的记录，将age字段值改为15，将name字段值改为LiMing
```js
update person set age=15,name='Liming' where id = 3;
```

- 【例】在person表中，更新age值为19~25的记录，将info字段值都改为student

```js
update person set info ='student' where age between 19 and 25;
//同效果
update person set info = 'student--1' where age > 19 and age <25;
```
### 删除数据
语法： delete from <表名> where <条件>;

- 【例】在person表中，删除id等于11的记录
```js
delete from person where id =11;
```
- 【例】在person表中，使用DELETE语句同时删除多条记录，在前面UPDATE语句中将age字段值在19~22之间的记录的info字段值修改为student，在这里删除这些记录

```js
delete from person where age between 19 and 22;
```
- 删除person表中所有记录
```js
delete from person ;
```