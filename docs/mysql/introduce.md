## 简介

本章主要简述数据库基础知识点汇总。

### 数据库技术构成

* 数据库系统
  - 数据库：用于储存数据地方
  - 数据管理系统： 用于管理数据库的软件
  - 数据库应用程序：为了提高数据库系统的处理能力锁使用的管理数据库的软件补充
    
* SQL语言
    - 对数据进行查询和修改操作语言。
    - 数据定义语言（DDL）
    - 数据操作语言（DML）
    - 数据查询语言（DQL）
    - 数据控制语言（DCL）

    ``` 
        //数据定义语言, 创建表
        CREATE TABLE students
        (
            student_id INT UNSIGNED,
            name VARCHAR(30),
            sex CHAR(1),
            birth DATE,
            PRIMARY KEY (student_id)
        );
        // 数据操作语言 ，插入数据
        INSERT INTO students (student_id, name, sex, birth) VALUES (41048101, 'Lucy Green', '1', '1990-02-14');
        // 数据查询语言，查询数据
        SELECT name FROM students WHERE student_id = 41048101;
    ```

* 数据访问技术

