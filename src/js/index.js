// 轮播图
function imgscroll(id, active) {	//找元素
    var box = document.getElementById(id);
    var imglist = box.children[0];
    var light = box.children[1]; //焦点
    var posibtn = box.children[2];
    var prevbtn = posibtn.children[0]; //上一张
    var nextbtn = posibtn.children[1]; //下一张
    var lis = imglist.getElementsByTagName('li');
    var iw = lis[0].offsetWidth;
    var now = 0; //存可视区的下标

    //1.图片放在右侧，第一个图放在可视区
    for (var li of lis) {
        li.style.left = iw + 'px';
    }
    lis[0].style.left = 0;

    //2.自动轮播
    var timer = null;
    timer = setInterval(next, 2000); //图片切换的间隔时间

    function next() {
        //旧图挪走
        startMove(lis[now], {
            'left': -iw
        }); //0

        //新图进入可视区  1
        now++;
        if (now >= lis.length) {
            now = 0;
        }
        lis[now].style.left = iw + 'px'; //快速把新图放在右侧
        startMove(lis[now], {
            'left': 0
        });
        lightmove(); //焦点跟随
    }

    function prev() {
        //旧图挪走:挪到右侧
        startMove(lis[now], {
            'left': iw
        });
        //新图进入可视区
        now--;
        if (now <= -1) { //临界值
            now = lis.length - 1;
        }
        lis[now].style.left = -iw + 'px';
        startMove(lis[now], {
            'left': 0
        });
        lightmove(); //焦点跟随
    }

    //3.点击左右按钮可以切换上下张

    //鼠标移入可视区就停止定时器，移出就继续运动
    box.onmouseover = function () {
        clearInterval(timer);
    }

    box.onmouseout = function () {
        timer = setInterval(next, 2000);
    }

    //另类需求：点击多次，两次点击的间隔时间太短，第二次点击无效

    //下一张
    var oldtime = new Date();
    nextbtn.onclick = function () {
        if (new Date() - oldtime > 800) {
            next();
        }
        oldtime = new Date();
    }

    //上一张
    prevbtn.onclick = function () {
        prev();
    }

    //3.焦点跟随
    //创建焦点
    var html = '';
    for (var i = 0; i < lis.length; i++) {
        html += '<li></li>';
    }
    light.innerHTML = html;
    light.children[0].className = 'active';

    function lightmove() {
        //排他
        for (var i = 0; i < lis.length; i++) {
            light.children[i].className = '';
        }
        light.children[now].className = 'active';
    }

    //4.点击焦点切换到对应的图片

    for (let i = 0; i < light.children.length; i++) {
        light.children[i].onclick = function () {
            //			console.log(i);
            if (i > now) {
                //新图从右边进入
                //旧图挪走
                startMove(lis[now], {
                    'left': -iw
                });
                //新图进入可视区
                lis[i].style.left = iw + 'px'; //快速放在右侧
            }
            if (i < now) {
                //新图从左边进入
                //旧图挪走
                startMove(lis[now], {
                    'left': iw
                });
                //新图进入可视区
                lis[i].style.left = -iw + 'px'; //快速放在左侧		
            }

            startMove(lis[i], {
                'left': 0
            });
            now = i; //新图变旧图
            lightmove();
        }
    }
}
//倒计时
//1.设置终点时间
window.onload = function () {
    //1.设置终点时间
    var endtime = '2019-5-14 21:47:00';
    var end = Date.parse(endtime);

    var msinfo = document.querySelector('#main .miaosha h2');
    var shi = document.querySelector('#shi');
    var feng = document.querySelector('#feng');
    var miao = document.querySelector('#miao');
    function showtime() {
        var nowtime = Date.now();//获取系统当前时间，并转成毫秒数
        var dix = parseInt((end - nowtime) / 1000);//两个时间相隔的秒数
        if (dix <= 0) {
            //到达临界点
            clearInterval(timer);//关闭定时器
            msinfo.innerHTML = '秒杀结束';
        } else {
            //没到达终点
            var time = setTime(dix);
            var hours = time.hours;
            var mins = time.mins;
            var secs = time.secs;
            shi.innerHTML = hours;
            feng.innerHTML = mins;
            miao.innerHTML = secs;
        }
    }
    showtime();
    var timer = setInterval(showtime, 1000);
}

// 特价列表数据请求
var teijialist = document.querySelector(".tejialist");
var url = '../api/tejia.php';
ajax('get', url, "", function (str) {
    var obj = JSON.parse(str);
    var teijia = obj.map(function (item) {
        return `<li data-id ="${item.id}"><a href="#"><img src="${item.img}" alt="" ></a>
                <h2>${item.name}</h2>
                <p><del class="">${item.yuajia}元</del></p>
                <div class="chongzi">
                <p class="fl" style="color: #B81B22;
                ">￥${item.dazhe}元</p><p class="fr">充值后<span style="color:#B81B22;font-size: 24px;">${item.chongzi}</span>元</p>
                </div> 
                </li>`
    }).join('');
    teijialist.innerHTML = teijia;
    //点击跳转到详情页
    var imgList = teijialist.children;
    for(var i =0;i<imgList.length;i++){
        imgList[i].index =i;
        imgList[i].onclick = function(){
            console.log(obj [this.index])//点击谁，就用那条数据
         var str = objToStr(obj [this.index]);
         location.href ='../html/goodslist.html?' + str;
        }
    }
});
// t恤上新数据请求
var sxnode =document.querySelector('#sx');
// var url2 ='../api/sx.php';
// ajax('get',url2,"",function(str){
//     //转json格式
//     var obj = JSON.parse(str)
//     var sx = obj.map(function(item){
//         return `<img src="${item.img}" alt="">`
//     }).join('');
// jq AJAX写法
  $.get('../api/sx.php',function(str){
      var obj = JSON.parse(str);
      var sx = obj.map(function(item){
           return `<img src="${item.img}" alt="">`
      }).join('');
      sxnode.innerHTML = sx;
  })
   
// });
