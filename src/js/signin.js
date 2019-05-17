//登录功能
var user = document.querySelector('.pw');
var pw = document.querySelector('.pwr');
var btn = document.querySelector('.ljzc')
var data = location.search.slice(1);
user.value = data;
//通过getcookie判断有没有在登录
btn.onclick = function () {
    if (getCookie('user')) {
        alert('请先退出登录')
    } else {
        ajax2({
            type: "post",
            url: '../api/signin.php',
            data: 'name=' + user.value + '&pw=' + pw.value,
            success: function (str) {
                if (str == "yes") {
                    location.href = '../index2.html';
                    setCookie("user", user.value, 1);
                } else {
                    alert('用户名或密码不正确')
                }
            }
        })
    }
}