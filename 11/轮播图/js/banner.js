function Banner(el, opt) {
    // 获取基本参数
    this.el = this.getDom(el)
    this.swiperWrapper = this.getDom(".swiper-wrapper", this.el)
    this.autoPlay = opt.autoPlay
    this.pagiation = opt.pagiation
    this.btn = opt.btn
    // 定时器
    this.timer;
    // 当前下标
    this.index = 0
    // 初始化
    this.init()
}

Banner.prototype = {
    constructor: Banner,
    getDom: function (el, parentNode) {
        return parentNode ? parentNode.querySelector(el) : document.querySelector(el)
    },
    init: function () {
        this.autoPlay ? this.startBanner() : null

        this.addEvent()
    },
    startBanner: function () {
        var that = this
        this.timer = setInterval(function () {
            that.lis[that.index].classList.remove("active");
            that.index++
            if (that.index > 4) {
                that.index = 0
            }
            that.lis[that.index].classList.add("active")
            that.swiperWrapper.style.marginLeft = -that.index * 1200 + "px"
        }, 2000)
    },
    addEvent: function () {
        var that = this
        this.el.onmouseenter = function () {
            clearInterval(that.timer)
        }
        this.el.onmouseleave = function () {
            that.startBanner()
        }
        // 是否要按钮
        if (this.btn) {
            var btn = document.createElement("button")
            btn.classList.add("button-prev")
            btn.innerHTML = "<"
            this.el.appendChild(btn)
            var btn = document.createElement("button")
            btn.classList.add("button-next")
            btn.innerHTML = ">"
            this.el.appendChild(btn)
            this.prev = this.getDom(".button-prev", this.el)
            this.next = this.getDom(".button-next", this.el)

            this.prev.onclick = function () {
                that.lis[that.index].classList.remove("active")
                that.index--
                if (that.index < 0) {
                    that.index = 4
                }
                that.lis[that.index].classList.add("active")
                that.swiperWrapper.style.marginLeft = -that.index * 1200 + "px"
            }
            this.next.onclick = function () {
                that.lis[that.index].classList.remove("active")
                that.index++
                if (that.index > 4) {
                    that.index = 0
                }
                that.lis[that.index].classList.add("active")
                that.swiperWrapper.style.marginLeft = -that.index * 1200 + "px"
            }
        }

        // 分页器
        if (this.pagiation) {
            var div = document.createElement("div")
            div.classList.add("pagiation")
            div.innerHTML = `
            <ul>
                <li class="active" ind="0"></li>
                <li ind="1"></li>
                <li ind="2"></li>
                <li ind="3"></li>
                <li ind="4"></li>
            </ul>
            `
            this.el.appendChild(div)
            this.lis = [...div.querySelectorAll("li")]
            div.onclick = function (e) {
                var tar = e.target
                if (tar.nodeName === 'LI') {
                    that.lis[that.index].classList.remove("active")
                    console.log(that.lis[that.index])
                    that.index = tar.getAttribute("ind")
                    that.lis[that.index].classList.add("active")
                    that.swiperWrapper.style.marginLeft = -that.index * 1200 + "px"
                }
            }

        }
    }
}