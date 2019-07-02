function GetCode(opt) {
    // 合拼参数
    this.opt = Object.assign({}, {
        time: 60000,
        size: 4
    }, opt)
    // 获取dom
    this.getCode = document.querySelector(".getCode")
    console.log(this.opt)
    // 倒计时多少秒
    this.sec = this.opt.time / 1000
    // 初始化
    this.init()
}

GetCode.prototype = {
    constructor: GetCode,
    init: function () {
        this.addEvent()
    },
    getMyCode: function () {
        // 随机数
        this.code = Math.random().toString(36).substr(2, this.opt.size)
    },
    addEvent: function () {
        //添加点击事件 
        var that = this
        this.getCode.onclick = function () {
            that.getMyCode()
            console.log(that.code)
            this.disabled = true
            var timer = setInterval(function () {
                that.sec--
                that.getCode.innerHTML = `还剩${that.sec}秒`
                if (that.sec <= 0) {
                    that.getCode.disabled = false
                    that.getCode.innerHTML = "获取验证码"
                    that.sec = that.opt.time / 1000
                    // console.log(123)
                    
                    clearInterval(timer)
                }
            }, 1000)
        }
    }
}