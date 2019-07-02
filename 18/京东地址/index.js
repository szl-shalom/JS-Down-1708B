var c = (function (a, b) {
    console.log(this);
    return b;
}).apply(0, [4, 3]);


console.log(c)




// function myCar() {
//     // getCar.call(this)

//     this.type = '大众';
// };



// var car = new myCar();



// console.log(car.type)

// console.log(Object.prototype.toString.call(null))

// var obj = {
//     0: "张三",
//     1: "李四",
//     length: 2
// }

// console.log(Array.prototype.slice.call(obj))
// console.log([].slice.call(obj))
// console.log(Array.from(obj))
// console.log([...obj])

window.val = 1; // 4
var json = {
    val: 10, //20
    dbl: function () {
        this.val *= 2;
    }
}

json.dbl();
var dbl = function () {
    this.val *= 2;
};

dbl();


json.dbl.call(window);


alert(window.val + json.val)


var Abc = function () {
    this.num = 1
}

Abc.prototype['exam'] = function () {
    this.num++;
}


var abc = new Abc();

console.log(abc.exam())


var Name = "花花";
var dog = {
    Name: "旺财",
    prop: {
        Name: "小卡",
        show: function () {
            return this.Name;
        }
    }
}
console.log(dog.prop.show.call(this))