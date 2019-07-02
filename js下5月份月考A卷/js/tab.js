function Tab(opt) {
    // 
    this.data = opt.data
    this.box = document.querySelector(opt.box)

    this.headUl = this.box.querySelector(opt.headUl)
    this.contentUl = this.box.querySelector(opt.contentUl)
    this.index = opt.index
    // 初始化
    this.init()
}

Tab.prototype = {
    constructor: Tab,
    init: function () {
        // 渲染
        this.render()
        // 显示默认
        this.headUl.children[this.index].classList.add("active")
        this.contentUl.children[this.index].classList.add("active")
        // 开始Tab切换
        this.addEvent()
    },
    render: function () {
        // 渲染顶部
        this.headUl.innerHTML = this.data.map(function (item, index) {
            return ` <img src="./images/${item.img}" alt="" ind=${index}>`
        }).join("")
        // 渲染内容
        this.contentUl.innerHTML = this.data.map(function (item) {
            return ` <div class="every">
                   ${item.children.map(function(item){
                        return `<ul>
                                <li>${item.time}</li>
                                <li>${item.price}</li>
                                <li><button>买票</button></li>
                            </ul>`
                   }).join("")}
                </div>`
        }).join("")
    },
    addEvent: function () {
        var that = this
        // 点击图片
        this.box.onclick = function (e) {
            var tar = e.target;
            if (tar.nodeName === "IMG") {
                // substr 第一个参数代表截取开始下标  第二个参数截取长度
                that.headUl.style.background = "#" + Math.random().toString(16).substr(2, 6)
                that.headUl.children[that.index].classList.remove("active")
                that.contentUl.children[that.index].classList.remove("active")
                that.index = tar.getAttribute("ind")
                that.headUl.children[that.index].classList.add("active")
                that.contentUl.children[that.index].classList.add("active")
            }

            if (tar.nodeName === "BUTTON") {
                location.href = `座位.html?price=${tar.parentNode.previousElementSibling.innerHTML}`
            }
        }
    }
}