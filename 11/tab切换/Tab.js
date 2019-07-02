// 构造函数
function Tab(opt) {
    // 默认参数
    var defaultObj = {
        index: 0,
        className: "active"
    }
    // 将默认参数和实参合拼
    this.opt = Object.assign({}, defaultObj, opt)
    // 获取dom元素
    this.headPar = document.querySelector(this.opt.headPar)
    this.conPar = document.querySelector(this.opt.conPar)
    this.lis = [...this.headPar.querySelectorAll("li")]
    this.divs = [...this.conPar.querySelectorAll("div")]
    // 取出下标
    this.index = this.opt.index
    // 取出类名
    this.className = this.opt.className

    // 去除顶部原先的样式
    this.lis[this.index].classList.add(this.className)
    // 去除内容原先的样式
    this.divs[this.index].classList.add(this.className)
    // 初始化
    this.init()
}
// Tab的原型
Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.addEvent()
    },
    addEvent: function () {
        var that = this
        this.lis.forEach(function (item, index) {
            item.onclick = function () {
                // 去除顶部原先的样式
                console.log(that)
                that.lis[that.index].classList.remove(that.className)
                // 去除内容原先的样式
                that.divs[that.index].classList.remove(that.className)
                // 改变下标
                that.index = index
                // 去除顶部原先的样式
                that.lis[that.index].classList.add(that.className)
                // 去除内容原先的样式
                that.divs[that.index].classList.add(that.className)
            }
        })
    }
}
// 调通 传参
new Tab({
    headPar: ".header-ul",
    conPar: ".content-div",
    index: 5,
    className: "active1"
})

new Tab({
    headPar: ".header-ul1",
    conPar: ".content-div2",
    index: 1,
    className: "active"
})