



var obj = {
    value: 1
};
var obj2 = obj;
function foo(o) {
    obj.value = {
        a: 1
    };
    console.log(o); //2
}
obj2.value = 3
foo(obj);
console.log(obj.value) // 1
console.log(obj2.value) // 1
