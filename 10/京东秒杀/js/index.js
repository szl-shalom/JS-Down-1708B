/*
 * @Description: 京东秒杀 !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-06-15 15:57:37
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-06-19 08:02:25
 */

var productData = [{
    "_id": "sdfdsfsdfsadf719",
    "src": "597a89ebNb71f475c.jpg!q90.webp",
    "name": "百岁山"
}, {
    "_id": "sdfdsfsdfsadf720",
    "src": "597a89ebNb71f475c.jpg!q90.webp",
    "name": "每日坚果"
}, {
    "_id": "sdfdsfsdfsadf721",
    "src": "57de2444Ndd53815f.jpg!q90.webp",
    "name": "电磁炉"
}, {
    "_id": "sdfdsfsdfsadf722",
    "src": "597a89ebNb71f475c.jpg!q90.webp",
    "name": "防水电动表"
}, {
    "_id": "sdfdsfsdfsadf723",
    "src": "5af14ab8N4478f4a2.jpg!q90.webp",
    "name": "电冰箱"
}, {
    "_id": "sdfdsfsdfsadf724",
    "src": "5af8e949N22da0a17.jpg!q90.webp",
    "name": "拉裴尔"
}, {
    "_id": "sdfdsfsdfsadf725",
    "src": "5aeaec77N647550e9.jpg!q90.webp",
    "name": "海尔空调"
}, {
    "_id": "sdfdsfsdfsadf726",
    "src": "5adf2e6bN3e152213.jpg!q90.webp",
    "name": "海尔空调"
}, {
    "_id": "sdfdsfsdfsadf720",
    "src": "5add5799N144bf05e.jpg!q90.webp",
    "name": "生鲜鳞片"
}, {
    "_id": "sdfdsfsdfsadf721",
    "src": "5acdb33bN5bd7aa93.jpg!q90.webp",
    "name": "东芝显示器"
}, {
    "_id": "sdfdsfsdfsadf722",
    "src": "5a702953Nd8d2a314.jpg!q90.webp",
    "name": "高端服务器"
}, {
    "_id": "sdfdsfsdfsadf723",
    "src": "5a7187e3N3cd35556.jpg!q90.webp",
    "name": "美白面膜"
}];


function Banner() {
    this.data = productData
    this.p_all = document.querySelector(".p_all")
    this.prev = document.querySelector(".prev")
    // 初始化

    this.init()
}

Banner.prototype = {
    init: function () {
        // 渲染数据
        this.render(this.data)
        // 加事件
        this.addEvent()
    },
    render: function (arr) {
        // console.log(arr)
        this.p_all.innerHTML = arr.map(function (item) {
            return `
            <dl>
                <dt><img src="img/${item.src}"></dt>
                <dd>${item.name}</dd>
            </dl>
            `
        }).join("")
    },
    addEvent: function () {
        this.prev.onclick = function () {
            console.log(this)
        }

    }
}


console.log(new Banner())