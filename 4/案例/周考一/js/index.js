// 模拟数据
var arr = ["1.webp", "2.jpg", "3.jpg", "4.png", "5.webp"]
// 获取dom 
var swiperWrapper = getDom(".swiper-wrapper");

var curIndex = 0
var swiperContainer = getDom(".swiper-container")
var swiperbuttonPre = getDom(".swiper-button-pre")
var swiperbuttonNext = getDom(".swiper-button-next")
var timer
// var swiperPagination = getDom(".swiper-pagination")
// var lis


function getDom(el) {
    return document.querySelector(el)
}
// 渲染
function render() {
    swiperWrapper.innerHTML = arr.map(function (item) {
        return `
        <div class="swiper-slide">
            <img src="./images/${item}" alt="">
        </div>

        `
    }).join("")

    swiperWrapper.style.width = 1200 * arr.length + "px"
}
// 开启轮播
function startBanner() {

    timer = setInterval(function () {
        curIndex++
        if (curIndex > arr.length - 1) {
            curIndex = 0
        }
        swiperWrapper.style.marginLeft = -1200 * curIndex + "px"

    }, 1000)

}
// 添加事件
function addEvent() {
    swiperContainer.onmouseenter = function () {
        clearInterval(timer)
    }

    swiperContainer.onmouseleave = function () {
        // clearInterval(timer)
        startBanner()
    }

    swiperbuttonPre.onclick = function () {
        curIndex--
        if (curIndex < 0) {
            curIndex = arr.length - 1
        }
        swiperWrapper.style.marginLeft = -1200 * curIndex + "px"

    }

    swiperbuttonNext.onclick = function () {
        curIndex++
        if (curIndex > arr.length - 1) {
            curIndex = 0
        }
        swiperWrapper.style.marginLeft = -1200 * curIndex + "px"

    }
}


render()

startBanner()

addEvent()