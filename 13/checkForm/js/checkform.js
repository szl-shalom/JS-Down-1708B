/**
 * 用户名失去焦点验证
 *     获取用户输入的用户名
 *     创建用户名的正则
 *     通过test()方法检测是否匹配
 *          T 隐藏错误
 *          F 显示错误
 * 密码失去焦点验证
 * 验证码失去焦点验证
 * 换验证码
 * 点“登录”验证：
 *  通过：跳转成功页，并将用户名显示到该页面中
 *  
 */
var UserName = document.getElementById('UserName'); // 用户名

addEvent();
// 监听事件
function addEvent() {
    var PassWord = document.getElementById('PassWord'), // 密码
        ValidateCode = document.getElementById('ValidateCode'), // 验证码
        ValidateHref = document.getElementById('ValidateHref'),
        LoginSubmit = document.getElementById('LoginSubmit'); // 登录按钮
    UserName.addEventListener('blur', checkUser);
    PassWord.addEventListener('blur', checkPwd);
    ValidateCode.addEventListener('blur', checkCode);
    ValidateHref.addEventListener('click', changeCode);
    LoginSubmit.addEventListener('click', checkAll);
}
// 验证用户名
function checkUser() {
    //获取用户输入的用户名
    var val = UserName.value.trim();
    // 创建用户名正则
    var reg = /(^1[3-9]\d{9}$)|(^\w+@\w+\.(com|cn|net)$)|(^\d{17}[a-z\d]$)/;
    var info = UserName.nextElementSibling;

    // 检测
    if (reg.test(val)) { // 隐藏错误
        info.style.display = 'none';
        return true;
    } else { // 显示错误
        info.style.display = 'block';
        return false;
    };
}
// 验证密码
function checkPwd() {
    //获取密码
    var val = PassWord.value.trim();
    // 3-6创建密码正则  不能纯数字   不能纯字母
    var regNum = /\D/;
    var regSym = /[^a-zA-Z]/;
    var info = PassWord.nextElementSibling;
    if (regNum.test(val)) {
        // 判断是不是纯字母     [^a-zA-Z]  非括号内的字符  
        if (regSym.test(val)) {
            if (val.length > 6 || val.length < 3) { // 长度不是3-6
                info.style.display = 'block';
                return false;
            } else { // 通过验证
                info.style.display = 'none';
                return true;
            }
        } else { // 纯字母
            info.style.display = 'block';
            return false;
        }
    } else { // 是纯数字
        info.style.display = 'block';
        return false;
    }
    // 检测
    // if (reg.test(val)) { // 隐藏错误
    //     info.style.display = 'none';
    // } else { // 显示错误
    //     info.style.display = 'block';
    // };
}
// 验证验证码
function checkCode() {
    //获取用户输入的验证码
    var val = ValidateCode.value.trim().toLowerCase();
    // 获取验证码
    var code = document.querySelector('.test-wrap').innerHTML.toLowerCase();
    var info = ValidateCode.parentNode.lastElementChild;

    // 检测
    if (val === code) { // 隐藏错误
        info.style.display = 'none';
        return true;
    } else { // 显示错误
        info.style.display = 'block';
        return false;
    };
}
// 换验证码
function changeCode() {
    document.querySelector('.test-wrap').innerHTML = Math.random().toString(36).substr(2, 4);
}

//点登陆验证全部
function checkAll() {
    var userRs = checkUser(),
        pwdRs = checkPwd(),
        codeRs = checkCode();
    if (userRs && pwdRs && codeRs) { // 全部通过验证
        // 跳转页面 login.html
        location.href = "login.html?username=" + UserName.value;
    }
}