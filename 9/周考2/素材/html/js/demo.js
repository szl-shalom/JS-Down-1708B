function getDom(el) {
    return document.querySelector(el)
}

var leaderWrapper = getDom("#leader-wrapper"),
    peopleList = getDom(".people-list"),
    topDroppable = [...document.querySelectorAll(".top-droppable")],
    flag = false,
    pos = null,
    oriPos = null,
    el;

leaderWrapper.onmousedown = function (e) {
    e = e || window
    var tar = e.target || e.srcElement
    if (tar.className === "name") {
        flag = true
        el = tar.parentNode
        console.log(el)
        elPos = {
            x: peopleList.offsetLeft + el.offsetLeft + e.offsetX,
            y: peopleList.offsetTop + el.offsetTop + e.offsetY,
        }
    }
}

document.onmousemove = function (e) {
    if (flag) {
        var curPos = {
            x: e.pageX,
            y: e.pageY
        }
        el.style.left = curPos.x - elPos.x + "px"
        el.style.top = curPos.y - elPos.y + "px"
    }
}

document.onmouseup = function (e) {
    flag = false
    var curPos = {
        x: e.pageX,
        y: e.pageY,
    }
    // topDroppable.forEach(function (item) {
    //     var obj = item.getBoundingClientRect()
    //     var a = curPos.x > obj.left,
    //         b = curPos.x > obj.top,
    //         c = curPos.x < obj.right,
    //         d = curPos.y < obj.bottom;
    //     if (a && b && c && d) {
    //         item.appendChild(el)
    //     } else {
    //         // 原路返回
    //         el.style.transition = "all .5s"
    //         el.style.top = 0
    //         el.style.left = 0
    //     }
    // })
    append(curPos)
}

function append(curPos) {
    for (var i = 0; i < topDroppable.length; i++) {
        var obj = topDroppable[i].getBoundingClientRect()
        var a = curPos.x > obj.left,
            b = curPos.x > obj.top,
            c = curPos.x < obj.right,
            d = curPos.y < obj.bottom;
        if (a && b && c && d) {
            topDroppable[i].appendChild(el)
            return
        }

    }
    el.style.transition = "all .5s"
    el.style.top = 0
    el.style.left = 0
}