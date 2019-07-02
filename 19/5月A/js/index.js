function Ins(opt) {
    this.box = document.querySelector(opt.box)
    this.leftData = opt.leftData
    this.rightData = opt.rightData
    this.user = opt.user
    this.left = this.box.querySelector(".left")
    this.bottom = this.box.querySelector(".right .bottom")
    this.addContent = this.box.querySelector(".addContent")
    this.init()
}


Ins.prototype = {
    constructor: Ins,
    init: function () {
        this.render()
        this.addEvent()
    },
    render: function () {
        this.left.innerHTML = this.leftData.map(function (item) {
            return `
            <div class="every">
                <img src="./images/${item.img}" alt="">
                <dl>
                    <dt>
                        <img src="./images/${item.img}" alt="">
                    </dt>
                    <dd>
                        <p>${item.title}</p>
                        <span>${item.fens}</span>位粉丝
                        <p>${item.content}</p>
                    </dd>
                </dl>
            </div>
            `
        }).join("")

        this.bottom.innerHTML = this.rightData.map(function (item) {
            return `
            <div>
                <dl>
                    <dt>
                        <img src="./images/${item.img}" alt="">
                    </dt>
                    <dd>
                        <span>${item.name}:</span>
                        <span>${item.content}</span>
                    </dd>
                </dl>
                <div><span>攒</span><button class="say">回复</button></div>

            </div>
            `
        }).join("")
    },
    addEvent: function () {
        var that = this;
        this.addContent.onkeydown = function (e) {
            if (e.keyCode === 13) {
                var div = document.createElement("div")
                div.innerHTML = `
                <dl>
                    <dt>
                        <img src="./images/${that.user.img}" alt="">
                    </dt>
                    <dd>
                        <span>${that.user.name}:</span>
                        <span>${this.value}</span>
                    </dd>
                </dl>
                <div><span>攒</span><button class="say">回复</button></div>
                `
                that.bottom.appendChild(div)
            }
        }

        this.bottom.onclick = function (e) {
            var tar = e.target;
            if (tar.className === "say") {
                var input = document.createElement("input")
                tar.parentNode.parentNode.appendChild(input)

                input.onblur = function () {
                    console.log(this)
                    if (this.value) {
                        var div = document.createElement("div")
                        div.innerHTML = `
                        <dl>
                            <dt>
                                <img src="./images/${that.user.img}" alt="">
                            </dt>
                            <dd>
                                <span>${that.user.name}:</span>
                                <span>${this.value}</span>
                            </dd>
                        </dl>
                        <div><span>攒</span><button class="say">回复</button></div>
                        `
                        this.parentNode.appendChild(div)
                    }
                    this.parentNode.removeChild(this)
                }
            }
        }
    }
}