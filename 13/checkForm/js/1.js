var UserName = document.querySelector("#UserName")

var reg = /^(1[3-9]\d{9})|(\w+@\w+\.(com|cn|net))|(\d{17}[a-z\d])$/;
var input_tip = document.querySelectorAll(".input_tip")
var testWrap = document.querySelector(".test-wrap")

var PassWord = document.querySelector("#PassWord")
var regPassWord = /^[^a-zA-Z]{3,6}$/
var loginbtn = document.querySelector(".loginbtn")

var ValidateHref = document.querySelector("#ValidateHref")
var ValidateCode = document.querySelector("#ValidateCode")
ValidateHref.onclick = function () {
    testWrap.innerHTML = Math.random().toString(36).substr(2, 4)
}


loginbtn.onclick = function () {
    if (ValidateCode.value === testWrap.innerHTML) {
        alert("ok")
    }else{
        alert("验证码不正确")
    }
}

PassWord.onblur = function () {
    var flag = regPassWord.test(this.value)
    if (flag) {
        input_tip[1].style.display = "none"
    } else {
        input_tip[1].style.display = "block"

    }
}

UserName.onblur = function () {
    var flag = reg.test(this.value);
    if (flag) {
        input_tip[0].style.display = "none"
    } else {
        input_tip[0].style.display = "block"
    }
}