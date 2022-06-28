---
title: 手写一个Set集合
date: 2022-06-28
categories:
  - frontend
tags:
  - Set
  - amd
  - esm
---

## Set 集合
Set对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的

## 属性
- size 大小

## 方法
- [Symbol.iterator] 迭代器
- add 添加
- has 是否有
- entries 返回【键、值】迭代器
- delete 删除
- values 返回【值】迭代器

### 代码 实现
```js

class MySet {
  constructor() {
    this.set = [];
    this.size = 0;
  }

  // 迭代器
  [Symbol.iterator]() {
    let index = 0;
    let size = this.size;
    return {
      next() {
        if (index < size) {
          let data = { done: false, value: this.set[index] };
          index++;
          return data;
        } else {
          return { done: false, value: undefined };
        }
      },
    };
  }

  add(data) {
    if (!this.has(data)) {
      this.set.push(data);
      this.size++;
    }
    return this;
  }

  clear() {
    this.set.length = 0;
    this.size = 0;
  }

  has(data) {
    return this.set.includes(data);
  }

  delete(value) {
    let index = this.set.indexOf(value);
    this.set.splice(index, 1);
    this.size--;
  }

  *entries() {
    let index = 0;
    let size = this.size;
    while (index < size) {
      let value = this.set[index];
      yield [value, value];
      index++;
    }
    
  }

  *values() {
    let index = 0;
    let size = this.size;
    while (index < size) {
      let value = this.set[index];
      yield value;
      index++;
    }
  }
}

let set1 = new MySet();
set1.add(1);
set1.add('adfad');
set1.add('adfad');
set1.add('adfad');
set1.add('dd');
set1.add('fgg');
set1.add({ a: 1 });
set1.add({ a: 1 });
// set1.clear();
let setIterator = set1.entries();
let setValues = set1.values();

// console.log(setIterator.next());
console.log(Array.from(setIterator));
console.log(Array.from(setValues));
console.log(set1.size);

```