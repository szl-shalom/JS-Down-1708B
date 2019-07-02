// 格式化地址参数
function getUrlParams() {
    var params = location.search.slice(1);
    return JSON.parse('{"' + params.replace(/=/g, '":"').replace(/&/g, '","') + '"}');
}
var params = getUrlParams();
// 将用户名显示到页面中
document.getElementById('username').innerHTML = params.username;