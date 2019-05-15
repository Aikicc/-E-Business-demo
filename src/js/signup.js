//动态验证码
var isOK1 = false;
var isOK2 = false;
var isOK3 = false;
var isOK4 = false;
let captcha1 = new Captcha();
captcha1.draw(document.querySelector('#captcha1'), r => {
    var yzm = r;
    let signupInputy = document.querySelectorAll(".signup input")[0];
    signupInputy.onfocus = function () {
        $('.dongtaiyzm span').html('请输入图片验证码(区分大小写)').css('color', 'red');;
    }
    signupInputy.onblur = function () {
        if (signupInputy.value == yzm) {
            $('.dongtaiyzm span').html("验证码正确").css('color', 'green');
            isOK1 = true;
        } else if (signupInputy.value == '') {
            $('.dongtaiyzm span').html("验证码不能为空");
            isOK1 = false;
        } else {
            $('.dongtaiyzm span').html("验证码错误");
            setInterval(() => {
                location.reload();
            }, 1000);

        }
    }
});
//手机号，请求短信验证
//验证码倒计时
var wait = 4;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "免费获取验证码";
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新发送(" + wait + ")";
        wait--;
        setTimeout(function () {
            time(o)
        },1000)}
}
let signupInputSjh = document.querySelectorAll(".signup input")[1];
let btn = document.querySelector('.dxyam');
signupInputSjh.onfocus = function () {
    $('.sjh span').html('请正确输入手机号，用来接收验证码')
}
$('.dxyam').click(function () {
    valsjh = signupInputSjh.value.trim();
    if (/^1[34578]\d{9}$/.test(valsjh)) {
        time(btn);
        isOK2=true;
    } else if (valsjh=='') {
        $('.sjh span').html('请输入有效的手机号')
    } else {
        $('.sjh span').html('手机号格式不正确')
        isOK2 =false;
    }
})
//接受短信验证码
var dx = document.querySelector('.dx');
dx.onblur = function(){
var dxval = dx.value;
if(dxval== 1111){
    alert('验证码正确')
}else{
    alert('请输入1111')
}
}
//设置密码

