function Car(opt) {
    // 获取数据和DOM
    this.data = opt.data //获取数据
    this.el = document.querySelector(opt.el) //获取最大的父元素
    this.ul = this.el.querySelector(".ul")
    this.checkCount = this.el.querySelector(".check-count")
    this.allPrice = this.el.querySelector(".all-price")
    //初始化
    this.init()
}

Car.prototype = {
    constructor: Car,
    init: function () {
        this.render(this.data)

        this.addEvent()
    },
    render: function (data) {
        this.ul.innerHTML = data.map(function (item) {
            return `
            <li>
                <span class="check"></span>
                <img src="./images/${item.img}" alt="">
                <div>
                    <p>${item.title}</p>
                    <p>￥<span class="one-price">${item.price}</span></p>
                </div>
                <button class="del">删除</button>
                <div>
                    <button class="reduce">-</button>
                    <span class="one-count">${item.count}</span>
                    <button class="add">+</button>
                </div>
            </li>
            `
        }).join("")
    },
    addEvent: function () {
        var that = this
        this.el.onclick = function (e) {
            var tar = e.target;
            switch (tar.className) {
                case "check":
                    tar.style.background = tar.style.background === "red" ? "" : "red"
                    var checks = [...that.el.querySelectorAll(".check")]
                    var flag = checks.every(function (item) {
                        return item.style.background === "red"
                    })
                    var allCheck = that.el.querySelector(".all-check")
                    allCheck.style.background = flag ? "red" : ""
                    break;

                case "all-check":
                    tar.style.background = tar.style.background === "red" ? "" : "red"
                    var checks = [...that.el.querySelectorAll(".check")]
                    checks.forEach(function (item) {
                        item.style.background = tar.style.background
                    })
                    break;
                case "del":
                    var flag = confirm("确定要删除吗？")
                    if (flag) {
                        tar.parentNode.parentNode.removeChild(tar.parentNode)
                    }
                    break;
                case "add":
                    tar.previousElementSibling.innerHTML++
                    break;
                case "reduce":
                    if (tar.nextElementSibling.innerHTML > 1)
                        tar.nextElementSibling.innerHTML--
                    break

            }
            that.getAllPrice()

        }
    },
    getAllPrice: function () {
        var checks = [...this.el.querySelectorAll(".check")]

        var data = checks.reduce(function (obj, item) {
            var flag = item.style.background === "red";
            if (flag) {
                obj.count += +item.parentNode.querySelector(".one-count").innerHTML
                obj.allPrice += item.parentNode.querySelector(".one-price").innerHTML * item.parentNode.querySelector(".one-count").innerHTML
            }
            return obj
        }, {
            count: 0,
            allPrice: 0,
        })

        console.log(data)
        this.checkCount.innerHTML = data.count
        this.allPrice.innerHTML = data.allPrice
    }
}

// document.body.previousElementSibling