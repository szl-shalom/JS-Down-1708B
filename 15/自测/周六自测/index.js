function ToDoList(opt) {
    // 获取数据和dom
    this.data = opt.data
    this.box = document.querySelector(opt.box)
    this.tbody = this.box.querySelector("tbody")
    this.btn = this.box.querySelector(".btn")
    this.bx = document.querySelector(".bx")
    this.btn1 = document.querySelector(".btn1")
    this.in1 = document.querySelector(".in1")
    this.in2 = document.querySelector(".in2")
    this.in3 = document.querySelector(".in3")
    this.id = this.data.length
    this.search = this.box.querySelector(".search")
    // 初始化
    this.init()
}

ToDoList.prototype = {
    constructor: ToDoList,
    init: function () {
        // 渲染
        this.render(this.data)
        // 添加事件
        this.addEvent()
    },
    render: function (data) {
        this.tbody.innerHTML = data.map(function (item, index) {
            return `
            <tr>
                <td>${item.id}</td>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td>${item.username}</td>
                <td>
                    <b class="write" ind ="${index}">编辑</b><span class="delate" ind="${index}">删除</span></td>
            </tr>
            `
        }).join("")
    },
    addEvent: function () {
        var that = this
        // 给新增按钮添加事件
        this.btn.onclick = function () {
            that.in1.value = ""
            that.in2.value = ""
            that.in3.value = ""


            that.bx.classList.add("active")
            // 给确定按钮重新添加事件
            that.btn1.onclick = function () {
                var obj = {
                    id: ++that.id,
                    firstName: that.in1.value,
                    lastName: that.in2.value,
                    username: that.in3.value,
                }
                that.data.push(obj)
                that.render(that.data)
                that.bx.classList.remove("active")
            }
        }

        //编辑委托事件到父元素tbody
        that.tbody.onclick = function (e) {
            var tar = e.target;

            switch (tar.className) {
                case "write":
                    var tds = [...tar.parentNode.parentNode.querySelectorAll("td")]
                    that.in1.value = tds[1].innerHTML
                    that.in2.value = tds[2].innerHTML
                    that.in3.value = tds[3].innerHTML
                    that.bx.classList.add("active")
                    that.btn1.onclick = function () {
                        var index = tar.getAttribute("ind")
                        console.log(index)
                        var obj = {
                            firstName: that.in1.value,
                            lastName: that.in2.value,
                            username: that.in3.value,
                        }
                        Object.assign(that.data[index], obj)
                        that.render(that.data)
                        that.bx.classList.remove("active")
                    }
                    break;
                case "delate":
                    var index = tar.getAttribute("ind")
                    that.data.splice(index, 1)
                    that.render(that.data)
                    break;
            }

        }

        this.search.oninput = function () {
            this.value
            var a = that.data.filter(function (item) {
                return item.firstName.toString().includes(that.search.value)
            })
            that.render(a)
        }
    }
}