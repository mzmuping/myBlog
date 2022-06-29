---
title: iterator 迭代器
date: 2022-06-28
categories:
  - frontend
tags:
  - Set
  - amd
  - esm
---

## 简介
Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用

Iterator 的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

## 原生具备 Iterator 接口的数据结构如下
- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

## 其他场合
- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
- Promise.all()
- Promise.race()

## 案例
```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
```
自定义 迭代器

```js
// 自定义 迭代器

class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let counter = 1;
    let limit = this.limit;
    return {
      next() {
        if (counter <= limit) {
          return { done: false, value: counter++ };
        }
        return { done: true, value: undefined };
      },
      return() {
        console.log('Exiting early');
        return { done: true };
      },
    };
  }
}
```