var t_urlpath="http://testapi.xingxiu.tv/";
var o_urlpath="http://api.xingxiu.tv/";
var vcss='201603171037';//
var vjs='201603171037';
//获取订单列表页面
function getTicketList(url){
	   $.getJSON(url,function(data) {
    	console.log(data);
        if (data.result == "succ") { 
            var tList="";
            if(data.info.length>0){
            	for(var i=0;i<data.info.length;i++){
                    console.log(data.info);
                    if(data.info[i].status=='0'){
                        tList+=''
                        +'<li>'
                        // +'<a href="'+data.info[i].url+'">'
                        +'<ul class="st_myorder_inner">'
                        +'<li class="list_l"><img src="../public/images/body3.png"></li>'
                        +'<li class="list_r">'   
                        +'<h3>中国廊坊国际纹身艺术节<span class="span'+data.info[i].status+'">'+data.info[i].status_msg+'</span></h3>'
                        +'<p><label>数量：</label>'+data.info[i].type+data.info[i].num+'张 </p>'  
                        +'<p><label>金额：</label>¥'+data.info[i].price+'</p>' 
                        +'<p><label>地址：</label>廊坊国际会展中心</p>'
                        +'</li>'
                        +'<div class="clear"></div>'
                        +'</ul>'
                        // +'</a>'
                        +'</li>'
                    }else{
                       tList+=''
                        +'<li>'
                        +'<a href="'+data.info[i].url+'">'
                        +'<ul class="st_myorder_inner">'
                        +'<li class="list_l"><img src="../public/images/body3.png"></li>'
                        +'<li class="list_r">'   
                        +'<h3>中国廊坊国际纹身艺术节<span class="span'+data.info[i].status+'">'+data.info[i].status_msg+'</span></h3>'
                        +'<p><label>数量：</label>'+data.info[i].type+data.info[i].num+'张 </p>'  
                        +'<p><label>金额：</label>¥'+data.info[i].price+'</p>' 
                        +'<p><label>地址：</label>廊坊国际会展中心</p>'
                        +'</li>'
                        +'<div class="clear"></div>'
                        +'</ul>'
                        +'</a>'
                        +'</li>' 
                    }
	        		
	            }

	            $(".st_myorder_warp ul").prepend(tList);
            }else{
            	
            }
        }
    })
}
//订单详情
function getOrderDetail(url){
       $.getJSON(url,function(data) {
        //console.log('data+==='+JSON.stringify(data));
        if (data.result == "succ") { 
            $('.orderD_con_bianhao').text('订单编号：'+data.info.orderID);
            $('.orderD_con_bianzong').text('购买票种：'+data.info.type);
            $('.orderD_con_sum').text('购买数量：'+data.info.num);
            $('.orderD_con_money').text('实付金额：'+data.info.money);
            $('.erweima').attr('src',data.info.code);
            var tList="";
            if(data.info.date.length>0){
                for(var i=0;i<data.info.date.length;i++){
                    tList+='<p>'+data.info.date[i]+'</p>';
                }
                $(".orderD_time_d").append(tList);
            }

        }
    })
}
//购买详情
var sum="";
var st_sum_one="";
var tageskarte=80;
var passTickets=180;
$('.st_buyD_con_time li').on('click',function(e){
    var hsClass=$('.Tageskarte').hasClass('active');
    if(hsClass){
        $(this).addClass('active').siblings().removeClass('active');
    }
})
$('.Tageskarte').on('click',function(){
    var sum=parseInt($('.buySum').text());
    $(this).addClass('active').siblings().removeClass('active');
    $(".st_buyD_con_time li :gt(0)").removeClass('active');
    var moneySum=sum*tageskarte;
    $('.st_sum_one').text(moneySum);
})
$('.passTickets').on('click',function(){
    var sum=parseInt($('.buySum').text());
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.st_buyD_con_time li').addClass('active');
    var moneySum=sum*passTickets;
    $('.st_sum_one').text(moneySum);
})

$('.plus').on('click',function(){
    // console.log(parseInt($('.buySum').text()));
    if(parseInt($('.buySum').text())<5){
        var sum=parseInt($('.buySum').text())+1;
        $('.buySum').text(sum);
        var hsClass=$('.Tageskarte').hasClass('active');
        if(hsClass){
            var moneySum=sum*tageskarte;
        }else{
            var moneySum=sum*passTickets;
        }
        $('.st_sum_one').text(moneySum);
    }else{
         $('.buySum').text(5);
         alert("单个订单最多购买5张");
    }
    
})
$('.minus').on('tap',function(){
    if(parseInt($('.buySum').text())>1){
        var sum=parseInt($('.buySum').text())-1;
        $('.buySum').text(sum);
        var hsClass=$('.Tageskarte').hasClass('active');
        if(hsClass){
            var moneySum=sum*tageskarte;
        }else{
            var moneySum=sum*passTickets;
        }
        $('.st_sum_one').text(moneySum);

    }else{
        $('.buySum').text(1);
    }
})
$('.st_orderC_pay li').on('tap',function(){
    $(this).addClass('active').siblings().removeClass('active');
})

$('.st_sum a').on('tap',function(){
    // var uid="114655";
    var type=$('.st_buyD_con_piao .active').attr('typeId');
    var date=$('.st_buyD_con_time .active').attr('date');
    var num=parseInt($('.st_buyD_con_sum .buySum').text());
    // var order_id = location.search.replace(/\?order_id=(\d+).*/,'$1');
    var uid = location.search.slice(location.search.indexOf("&uid") + 5).split("&")[0];
    //console.log(uid);
    var postUrl=t_urlpath+'index.php?app=mobile&mod=Activity&act=tattoo_post&uid='+uid+'&type='+type+'&date='+date+'&num='+num+'t='+Math.random()*1000+'&returntype=jsonp&callback=?';
    $.getJSON(postUrl,function(data){
        if (data.result == "succ") { 
            console.log(data);
            var order_id=data.info;
            //var uid = location.search.slice(location.search.indexOf("&uid=") + 5).split("&")[0];
            console.log(uid);
            location.href="orderConfirm.html?order_id="+order_id+'&uid='+uid+'&time='+Math.random()*1000;
        }
        else if(data.result == "fail"){
            alert(data.msg);
        }
    })
})
//订单支付
//倒计时
function formatSeconds(value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
            if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
            }
    }
    if(theTime<10){
        var result = "0"+parseInt(theTime)+"";
    }else{
        var result = ""+parseInt(theTime)+"";
    }
        if(theTime1 > 0) {
        result = ""+parseInt(theTime1)+":"+result;
        }
        if(theTime2 > 0) {
        result = ""+parseInt(theTime2)+"小时"+result;
        }
    return result;
}
function getConfirmInfo(url){
    $.getJSON(url,function(data){
         if (data.result =="succ") { 
            var timeNum=data.info.create_at;
            var wait=timeNum;
            function time() {
              if (wait == 0) {
               wait =timeNum;
              } else {
               $('.st_orderC_where p span').text(formatSeconds(wait));
               wait--;
               setTimeout(function() {
                time()
               },
               1000)
              }
             }
           time();
            $('.st_orderC_detail .money').text('¥'+data.info.price);
            $('.st_orderC_detail .sum').text('x'+data.info.num);
            $('.st_orderC_detail .piaoClass').text(data.info.type);
            $('.st_orderC_pay p').text(data.info.money);
            var tList="";
            if(data.info.date.length>0){
                for(var i=0;i<data.info.date.length;i++){
                    tList+='<p>'+data.info.date[i]+'</p>';
                }
                $(".time_list").append(tList);
            }
        }
    })
}
$('.st_ba_top p').on('tap',function(){
    window.location.href="?action=myOrder";
})
$('.st_ba_join img').on('tap',function(){
    window.location.href="?action=joinImmediately";
})
$('.st_orderC_gopay .gopay').on('tap',function(){
    var order_id = location.search.replace(/\?order_id=(\d+).*/,'$1');
    var type=$('.st_orderC_pay .active').attr('type');
    window.location.href="?action=pay&type="+type+'&orderId='+order_id;
})
$('.st_orderC_gopay .gocancel').on('click',function(){
    var order_id = location.search.replace(/\?order_id=(\d+).*/,'$1');
     var uid = location.search.slice(location.search.indexOf("&uid") + 5).split("&")[0];
    console.log(uid+order_id);
    var postUrl=t_urlpath+'index.php?app=mobile&mod=Activity&act=tattoo_order_delete&order_id='+order_id+'&uid='+uid+'&t='+Math.random()*1000+'&returntype=jsonp&callback=?';
    $.getJSON(postUrl,function(data){
        console.log(data);
        if (data.result == "succ") { 

          window.location.href="index.html";
        }
        else if(data.result == "fail"){
            alert(data.msg);
        }
    })
})
    