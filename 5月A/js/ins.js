function Ins(opt) {
    // 获取数据节点
    this.box = document.querySelector(opt.box)
    this.dataLeft = opt.dataLeft
    this.dataRight = opt.dataRight
    this.leftUl = this.box.querySelector(".left-ul")
    this.rightWrap = this.box.querySelector(".right-wrap")
    this.mym = this.box.querySelector(".mym")
    // 初始化
    this.init();
}

Ins.prototype = {
    constructor: Ins,
    init: function () {
        //调用左侧渲染函数
        this.renderLeft()
        // 调用右侧渲染函数
        this.renderRight()
        // 调用事件函数
        this.addEvent()
    },
    renderLeft: function () {
        this.leftUl.innerHTML = this.dataLeft.map(function (item) {
            return `
            <li>
                <img src="./images/${item.img}" alt="">
                <dl>
                    <dt>
                        <img src="./images/${item.img}" alt="">
                    </dt>
                    <dd>
                        <h2>${item.title}</h2>
                        <p>${item.fens}粉丝</p>
                        <p>${item.content}</p>
                    </dd>
                </dl>
            </li>
            `
        }).join("")
    },
    renderRight: function () {
        this.rightWrap.innerHTML = this.dataRight.map(function (item) {
            return `
                <div>
                    <img src="./images/${item.img}" alt="">
                    <b>${item.name}</b>
                    <span>${item.respond}</span>
                    <p><span>点赞</span><button>回复</button></p>
                </div>
            `
        }).join("")
    },
    addEvent: function () {
        // 添加回车事件
        var that = this
        this.mym.onkeydown = function (e) {
            if (e.keyCode === 13) {
                that.addChild(that.rightWrap, this.value)
                this.value = ""
            }
        }
        // 委托事件
        this.rightWrap.onclick = function (e) {
            var tar = e.target;
            if (tar.nodeName === "BUTTON") {
                // 创建input元素
                var input = document.createElement("input")
                var yeye = tar.parentNode.parentNode;
                yeye.appendChild(input)
                // 给创建出来的input添加回车事件
                input.onkeydown = function (e) {
                    if (e.keyCode === 13) {
                        that.addChild(yeye, this.value)
                        input.parentNode.removeChild(input)
                    }
                }

            }
        }
    },
    addChild: function (el, con) {
        var div = document.createElement("div")
        div.innerHTML = `
        <img src="./images/1.jpg" alt="">
            <b>特朗普</b>
            <span>${con}</span>
            <p><span>点赞</span><button>回复</button></p>
        `
        el.appendChild(div)
    }
}