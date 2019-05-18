//用户名
var cookie = getCookie('user');
$('.username').text(cookie)
$('.out').click(function(){
    removeCookie("user");
})
//数量的加减
$('.shuliang').on('click',".add",function(){
    var num =$(this).prev().val()*1;
    num++;
    if(num>=100){
        num=100    }
    $(this).prev().val(num);
    xiaoji($(this))
})
$('.shuliang').on('click',".cut",function(){
    var num =$(this).next().val()*1;
    num--;
    if(num<=0){
        num=1    }
    $(this).next().val(num)
    xiaoji($(this))
})
//加减变化，小计跟着变化
function xiaoji(now){
    var num = now.parent().find('input').val();
    var parse = now.parent().prev().text().slice(1);
    var xiaoji= (num*parse).toFixed(2);
    now.parent().next().text("￥"+xiaoji);
    allthing();
}
//手动修改数量小计变
$('.shuliang').on('blur','.slvalue',function(){
    var num = $(this).val();
    if(num>=100){
        num= 100;
        $(this).val(100);
    }else if(num<=0){
        num= 1
        $(this).val(1);
    }
    
    var parse = $(this).parent().prev().text().slice(1);
    var total = num*parse;   
     console.log(total)
    $(this).parent().next().text("￥"+total)
})
//删除一行，及底部
$(".contentcart").on('click','.doing',function(){
    
    $(this).parent().remove();
    var nodel =$('.doing').size();
    console.log(nodel)
    if(nodel<=0){
    $('.jiesuancont').css('display','none')
}
    if(nodel==0){
    $('.noen').css('display','block')

}   
allthing(); 
})
//全选，全部不选 prop（），checked= cheacked
$('.allpro').click(function(){
    if($('.allpro').prop('checked')){
        $(':checkbox').prop('checked',true)
    }else{
        $(':checkbox').prop('checked',false)

    }
    allthing();
})
$('.allpro1').click(function(){
    if($('.allpro1').prop('checked')){
        $(':checkbox').prop('checked',true)
    }else{
        $(':checkbox').prop('checked',false)

    }
})
//选中所有，全选选中
$('.tbody .xuanzhe').on('click',function(){
    var siger = $('.tbody .xuanzhe:checked').size();
    if(siger==$('.tbody .xuanzhe').size()){
        $('.allpro').prop('checked',true)
        $('.allpro1').prop('checked',true)

    }else{
        $('.allpro').prop('checked',false)
        $('.allpro1').prop('checked',false)

    }
    allthing();
}) 
//计算总数量和总计
//找的每一项的索引
function allthing(){
    var arr = [];
    $('.tbody .xuanzhe').each(function(i,item){
          if($('.tbody .xuanzhe').eq(i).prop('checked')){
              arr.push(i)
          }
    })
    var num= 0;//总数
    var total = 0;//总计
    arr.forEach(function(item){
        num+=$('.slvalue').eq(item).val()*1;
        total+=$('.minctotal').eq(item).text().slice(1)*1;
    })
    $('.zgs').html(num);
    $('.zje').html(total)
}