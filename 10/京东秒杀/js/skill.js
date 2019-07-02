
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
    }],
    next = document.getElementById('next'), // 下一个
    prev = document.getElementById('prev'), // 前一个
    num = 0,
    pAll = document.querySelector('.p_all'),
    total = productData.length / 4;
// 渲染产品数据
function render() {
    pAll.innerHTML = productData.map(function (item) {
        // console.log(item)
        return `<dl>
                <dt><img src="img/${item.src}"></dt>
                <dd>${item.name}</dd>
            </dl>`;
    }).join('');
}

// 倒计时 = 结束时间 - 现在时间
function countTime(endTime) {
    endTime = new Date(endTime);
    var boxs = [...document.querySelectorAll('#cTime>span')];
    sub()
    setInterval(sub, 1000);

    function sub() {
        var subTime = parseInt((endTime - new Date()) / 1000); // 时间差
        // console.log(subTime)
        // 转换时间的格式
        var Time = {
            0: parseInt(subTime / 86400), // 天
            1: parseInt(subTime % 86400 / 3600), // 小时
            2: parseInt(subTime % 86400 % 3600 / 60), // 分
            3: parseInt(subTime % 86400 % 3600 % 60) // 秒
        };
        boxs.forEach(function (item, i) {
            item.innerHTML = Time[i];
        })
    }
}
// 点击滚动效果
function scroll() {
    // 父盒子
    var w = document.querySelector('.product').offsetWidth;
    console.log(w)
    pAll.style.transform = `translateX(${-num * w}px)`;
}
// 下一个
next.onclick = function () {
    num++;
    if (num === total - 1) {
        this.style.cssText = 'background:#ccc;cursor:not-allowed';
    }
    scroll();
};
prev.onclick = function () {

};
countTime("2019-05-18 10:00")
render();