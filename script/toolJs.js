//请求IP
function getUrl() {
    var url;
    url = 'http://39.106.80.203';
    return url;
}
//登录判断是否显示用户名
function show() {
    var loginElement = document.getElementById("loginInput");//登录框
    var userInfoElement = document.getElementById("username");//用户值
    var username = localStorage.getItem("username");//获取登录用户
    var token = localStorage.getItem("token");//获取token
    if (!token) {
        loginElement.style.display = "block";
        userInfoElement.style.display = "none";
    } else {
        loginElement.style.display = "none";
        userInfoElement.style.display = "block";
    }
    return username;
}