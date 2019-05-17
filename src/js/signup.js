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
        } else {
            $('.dongtaiyzm span').html("验证码错误");
            setInterval(() => {
                location.reload();
            }, 1000);
            isOK1 = false;
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
        }, 1000)
    }
}
let signupInputSjh = document.querySelectorAll(".signup input")[1];
let btn = document.querySelector('.dxyam');
signupInputSjh.onfocus = function () {
    $('.sjh span').html('请正确输入手机号，用来接收验证码')
}
$('.dxyam').click(function () {
    valsjh = signupInputSjh.value.trim();
    if (/^1[34578]\d{9}$/.test(valsjh)) {
        //验证手机号是否存在
        ajax2({
            type: 'post',
            url: '../api/user.php',
            data: 'name=' + valsjh,
            success: function (str) {
                if (str == "yes") {
                    $('.sjh span').html('可以注册')
                    time(btn);
                    isOK2 = true;
                } else {
                    $('.sjh span').html('用户存在')
                    isOK2 = false;
                }
            }
        })
    } else if (valsjh == '') {
        $('.sjh span').html('请输入有效的手机号')
    } else {
        $('.sjh span').html('手机号格式不正确')
    }
})
//接受短信验证码
var dx = document.querySelector('.dx');
dx.onblur = function () {
    var dxval = dx.value;
    if (dxval == 1111) {
    } else {
        alert('请输入1111')
    }
}
//密码是否一致
var pw = document.querySelector('.pw')
var pwr = document.querySelector('.pwr')
pwr.onblur = function () {
    var pwval = pw.value;
    pwrval = pwr.value;
    if (pwval == pwrval) {
        $('.mm').html('确认通过')
        isOK3 = true;
    } else {
        $('.mm').html('两次 密码不一致')
        isOK3 = false;
    }
}
//注册功能
var ljzc = document.querySelector('.ljzc');
ljzc.onclick = function () {
    if (isOK1 && isOK2 && isOK3) {
        ajax2({
            type: 'post',
            url: '../api/ljzc.php',
            data: 'name=' + valsjh + '&psw=' + pwrval,
            success: function (str) {
                if (str == 'yes') {
                    //可以注册跳转到登录
                    location.href = '../html/signin.html?' + valsjh;
                } else {
                    alert('注册失败')
                }
            }
        })
    } else {
        alert('请完善信息')
    }
}

