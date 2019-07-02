var peopleList = document.querySelector(".people-list"),
    topDroppable = [...document.querySelectorAll(".top-droppable")],
    pos = null,
    flag = false,
    formRight = document.querySelector(".form-right"),
    el;
formRight.addEventListener("click", function (e) {
    var tar = e.target
    if (tar.className === "del") {
        var myClass = tar.parentNode.className
        peopleList.querySelector(`#${myClass}`).style.display = "block"
        console.log(tar.parentNode.parentNode)
        tar.parentNode.parentNode.nextElementSibling.querySelector(".numSpan").innerHTML -= 1
        tar.parentNode.parentNode.removeChild(tar.parentNode)
    }
})
peopleList.addEventListener("mousedown", function (e) {
    e = e || window.event
    var tar = e.target || e.srcElement
    if (tar.className === "name") {
        flag = true
        el = tar.parentNode
        pos = {
            x: peopleList.offsetLeft + el.offsetLeft + e.offsetX,
            y: peopleList.offsetTop + el.offsetTop + e.offsetY,
        }

    }
})

document.addEventListener("mousemove", function (e) {
    if (flag) {
        var left = e.pageX - pos.x,
            top = e.pageY - pos.y;
        el.style.left = left + "px"
        el.style.top = top + "px"
    }
})

document.addEventListener("mouseup", function (e) {
    if (flag) {
        var curPos = {
            x: e.pageX,
            y: e.pageY
        }
        go(curPos)
    }
    flag = false
})

function go(curPos) {
    for (var i = 0; i < topDroppable.length; i++) {
        var obj = topDroppable[i].getBoundingClientRect()
        if (curPos.x > obj.left && curPos.x < obj.right && curPos.y > obj.top && curPos.y < obj.bottom) {
            // 进入指定区域
            var numSpan = topDroppable[i].nextElementSibling.querySelector(".numSpan")
            var totalNum = topDroppable[i].nextElementSibling.querySelector(".totalNum")
            if (!totalNum || numSpan.innerHTML < totalNum.innerHTML) {
                var html = `<div class="${el.id}">${el.firstElementChild.innerHTML}<span class="del"></span></div>`
                numSpan.innerHTML++
                console.log(html)
                topDroppable[i].innerHTML += html
                el.style.display = "none"
            } else {
                alert("多了")
            }
        }
    }
    // 没有进入
    el.style.transition = "all .5s"
    el.style.left = 0
    el.style.top = 0
    setTimeout(function () {
        el.style.transition = ""
    }, 500)
}