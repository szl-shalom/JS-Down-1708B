// 初始化数据 => 渲染数据
var dataBanner = ["1.webp", "2.jpg", "3.jpg", "4.png", "5.webp"],
    swiperContainer = getDom(".swiper-container"),
    swiperWappper = getDom(".swiper-wrapper"),
    swiperPagination = getDom(".swiper-pagination"),
    swiperButtonPrev = getDom(".swiper-button-prev"),
    swiperButtonNext = getDom(".swiper-button-next"),
    swiperPaginationLi,
    curIndex = 0,
    swiperSlide,
    timer;


// 封装获取DOM方法
function getDom(el, parentNode) {
    // 设置默认参数
    parentNode = parentNode || document
    // 返回节点
    return parentNode.querySelector(el)
}
// 渲染数据
function renderBanner() {
    swiperWappper.innerHTML = dataBanner.map(function (item) {
        return `
            <div class="swiper-slide">
                <img src="./images/${item}" alt="">
            </div>
        `
    }).join("")

    var ul = document.createElement("ul")
    ul.innerHTML = dataBanner.map(function (item, index) {
        return `
            <li ${index===curIndex?"class=active":""}></li>
        `
    }).join("")
    swiperPagination.appendChild(ul)

    swiperPaginationLi = [...swiperPagination.querySelectorAll("li")]
}
// 初始化样式
function initCss() {
    swiperWappper.style.width = (1200 * dataBanner.length) + "px"
}

// 添加事件
function addEvent() {
    // 开启轮播功能
    swiperBanner()
    // 添加鼠标划入事件
    swiperContainer.onmouseover = function () {
        clearInterval(timer)
        swiperButtonPrev.style.width = "80px"
        swiperButtonNext.style.width = "80px"


    }
    // 添加鼠标划出事件
    swiperContainer.onmouseout = function () {
        swiperBanner()
        swiperButtonPrev.style.width = 0
        swiperButtonNext.style.width = 0
    }
    // 添加鼠标点击事件  分页器
    swiperPaginationLi.forEach(function (item, index) {
        item.onclick = function () {
            swiperWappper.style.marginLeft = -(1200 * index) + "px"
            swiperPaginationLi[curIndex].classList.remove("active")
            curIndex = index
            swiperPaginationLi[curIndex].classList.add("active")
        }
    })
    // 添加上一页
    swiperButtonPrev.onclick = function () {
        swiperPaginationLi[curIndex].classList.remove("active")
        curIndex--
        if (curIndex < 0) {
            curIndex = dataBanner.length - 1
        }
        swiperWappper.style.marginLeft = -(1200 * curIndex) + "px"
        swiperPaginationLi[curIndex].classList.add("active")
    }
    // 下一页事件
    swiperButtonNext.onclick = function () {
        swiperPaginationLi[curIndex].classList.remove("active")
        curIndex++
        if (curIndex === dataBanner.length) {
            curIndex = 0
        }
        swiperWappper.style.marginLeft = -(1200 * curIndex) + "px"
        swiperPaginationLi[curIndex].classList.add("active")
    }
    // 鼠标划入显示标签

    // 鼠标划出隐藏标签

}

function swiperBanner() {
    timer = setInterval(function () {
        swiperPaginationLi[curIndex].classList.remove("active")
        curIndex++
        if (curIndex === dataBanner.length) {
            curIndex = 0
        }
        swiperWappper.style.marginLeft = -(1200 * curIndex) + "px"
        swiperPaginationLi[curIndex].classList.add("active")
    }, 2000)
}


function init() {
    renderBanner()
    initCss()
    addEvent()
}

init()