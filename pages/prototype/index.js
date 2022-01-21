function doSomething() { }
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);


console.log(doSomething.apply())
/**
 * ### 使用构造器创建的对象
 * 在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造方法（构造函数）
 */

function Graph() {
    this.vertices = [];
    this.edges = [];
    this.eat = function () { }
}

Graph.prototype = {
    addVertex: function (v) {
        this.vertices.push(v);
    }
};

var g = new Graph();
g.addVertex('sdfa')
console.log(g)
console.log(g.hasOwnProperty('vertices'))
console.log(g.hasOwnProperty('eat'))
console.log(g.hasOwnProperty('addVertex'))
// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。


class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.scale = 1
    }

    getsk() {
        console.log('getskgetsk')
    }
}

var polygon = new Polygon()

class Square extends Polygon {
    sk = 'afd'
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.rado = 'adf'
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);
square.sideLength = 4
console.log(square)
console.log('getPrototypeOf=', Object.getPrototypeOf(square), Object.getPrototypeOf(square) === Square.prototype)

function Anima() {

    this.name = 'cat'
}

var anima = new Anima();

console.log(Anima.age)


function a() {
    console.log('函数this====', this)

}

a();

var a1 = new a();

var b = () => {
    console.log('箭头this====', this)
}

b();

/**
 * 类继承
 * 派生类继承 extends 关键字继承
 * 派生类 如果有 constructor 需要实现 super(),或者返回一个对象，或者不要constructor
 */
class Base { }

class Good extends Base { }

class AlsoGood extends Base {
    constructor() {
        return {
            a: 5
        }
    }
}

class Bad extends Base {
    constructor() {
        super()
    }
}
new Good();
new AlsoGood();
new Bad(); // ReferenceError

//构造函数
function Person(name, age) {
    this.name = name;
    this.age = age
    this.sayName = function () {
        console.log(this.name)
    }
}

var person = new Person('小明', 18)
console.log(person)
console.log('构造函数=', person.constructor === Person)

function Dog(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

var dog = new Dog('小狗', 8, '雄性')

console.log(dog)

// function Anima() { }
// var anima = new Anima();
//
console.log('anima.__proto__====', anima.__proto__ === Anima.prototype)//true
console.log('anima.constructor', anima.constructor === Anima.prototype.constructor)//true
//es5方法获取原型对象
console.log(Object.getPrototypeOf(anima) === Anima.prototype)//true

class Cat {

}
var cat = new Cat()

console.log('Cat构造器====', Function === Cat.constructor);
console.log('cat====', cat.__proto__ === Cat.prototype);