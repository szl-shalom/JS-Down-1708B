function Swiper(el, opt) {

    // 默认参数处理
    this.opt = Object.assign({}, {
        autoplay: 2000,
        index: 0,
    }, opt)

    // 获取下标
    this.index = this.opt.index
    // 获取dom
    this.el = document.querySelector(el)
    this.slides = [...this.el.querySelectorAll(".swiper-slide")]
    // 设置默认显示第几张
    this.slides[this.index].classList.add("active")
    console.log(this.opt)
    // 获取分页器
    this.pagination = this.el.querySelector(".pagination")
    // 初始化
    this.init()
}

Swiper.prototype = {
    constructor: Swiper,
    init: function () {
        // 渲染分页器
        this.renderPagaination()
        // 获取分页器
        this.lis = [...this.pagination.querySelectorAll("li")]
        this.lis[this.index].classList.add("active")
        // 开始轮播
        this.startBanner()
    },
    startBanner: function () {
        var that = this
        setInterval(function () {
            that.slides[that.index].classList.remove("active")
            that.lis[that.index].classList.remove("active")
            that.index++
            that.index >= 4 ? that.index = 0 : null
            that.slides[that.index].classList.add("active")
            that.lis[that.index].classList.add("active")
        }, this.opt.autoplay)
    },
    renderPagaination: function () {
        var ul = document.createElement("ul")
        ul.innerHTML = this.slides.map(function () {
            return `
                <li></li>
            `
        }).join("")
        this.pagination.appendChild(ul)
    }

}