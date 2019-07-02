function CarShopping(opt) {
    // 获取dom元素
    this.cartTable = document.querySelector(opt.cartTable)
    console.log(this.cartTable)
    this.tbody = this.cartTable.querySelector("tbody")
    this.data = opt.data //获取数据
    // 初始化
    this.init()
}

CarShopping.prototype = {
    constructor: CarShopping,
    init: function () {
        // 数据渲染
        this.render()
        // 添加事件
        this.addEvent()

    },
    render: function () {
        // 数据渲染
        this.tbody.innerHTML = this.data.map(function (item) {
            return `
            <tr>
                <td class="checkbox"><input class="check-one check" type="checkbox" /></td>
                <td class="goods"><img src="images/${item.img}" alt="" /><span>${item.name}</span></td>
                <td class="price">${item.price}</td>
                <td class="count">
                    <span class="reduce"></span>
                    <input class="count-input" type="text" value="${item.num}" />
                    <span class="add">+</span></td>
                <td class="subtotal">${(item.num * item.price).toFixed(2)}</td>
                <td class="operation"><span class="delete">删除</span></td>
            </tr>
            `
        }).join("")
    },
    addEvent: function () {
        var that = this
        this.cartTable.onclick = function (e) {
            // 获取事件源
            var tar = e.target;

            switch (tar.className) {
                case "delete":
                    // 删除开始
                    tar.parentNode.parentNode.parentNode.removeChild(tar.parentNode.parentNode)
                    break;
                case "add":
                    // 数量++
                    tar.previousElementSibling.value++
                    // 小计计算
                    tar.parentNode.nextElementSibling.innerHTML = (tar.parentNode.previousElementSibling.innerHTML * tar.previousElementSibling.value).toFixed(2)
                    break;
                case "reduce":
                    // 数量--
                    if (tar.nextElementSibling.value > 1) {
                        tar.nextElementSibling.value--
                    }
                    // 小计计算
                    tar.parentNode.nextElementSibling.innerHTML = (tar.parentNode.previousElementSibling.innerHTML * tar.nextElementSibling.value).toFixed(2)
                    break;
                case "check-one check":
                    // 单选开始
                    var inputs = [...that.tbody.querySelectorAll(".check-one")]
                    var inputAll = that.cartTable.querySelector(".check-all")
                    console.log(inputs, inputAll)
                    inputAll.checked = inputs.every(function (item) {
                        return item.checked
                    })
                    break;
                case "check-all check":
                    // 全选开始
                    // 获取input框
                    var inputs = [...that.tbody.querySelectorAll(".check-one")]
                    // console.log(inputs)
                    inputs.forEach(function (item) {
                        item.checked = tar.checked
                    })
                    break;
            }

            var inputs = [...that.tbody.querySelectorAll(".check-one")]
            var obj = inputs.reduce(function (obj, item) {
                if (item.checked) {
                    obj.count += +item.parentNode.parentNode.querySelector(".count-input").value
                    obj.price += +item.parentNode.parentNode.querySelector(".subtotal").innerHTML
                }
                return obj
            }, {
                count: 0,
                price: 0
            })
            priceTotal.innerHTML = obj.price.toFixed(2)
            selectedTotal.innerHTML = obj.count.toFixed(0)

            // var priceAll = 0
            // var count = 0
            // inputs.forEach(function (item) {
            //     if (item.checked) {
            //         var countOne = +item.parentNode.parentNode.querySelector(".count-input").value
            //         var priceOne = +item.parentNode.parentNode.querySelector(".subtotal").innerHTML
            //         priceAll += priceOne
            //         count += countOne
            //     }
            // })
            // var priceTotal = document.querySelector("#priceTotal")
            // var selectedTotal = document.querySelector("#selectedTotal")
            // priceTotal.innerHTML = priceAll.toFixed(2)
            // selectedTotal.innerHTML = count.toFixed(0)

        }
    }
}

// document.body.pre