//获取参与人数
function getEntries(url) {
    $.getJSON(url,function(data) {
    	//console.log('data+==='+JSON.stringify(data));
        if (data.result = "succ") {
          $('.canyu').text('参加'+data.info.canyu);
        }else{
            alert();
        }
    })
}
//获取订单列表页面
function getTicketList(url){
	   $.getJSON(url,function(data) {
    	console.log('data+==='+JSON.stringify(data));
        if (data.result = "succ") { 
            var tList="";
            if(data.info.length>0){
            	for(var i=0;i<data.info.length;i++){
	        		tList+=''
	        			+'<li>'
	                    +'<ul class="st_myorder_inner">'
	                    +'<li class="list_l"><img src="../public/images/body3.png"></li>'
	                    +'<li class="list_r">'   
	                    +'<h3>时尚纹身艺术展</h3>'
	                    +'<p><label>数量：</label>通票3张 </p>'  
	                    +'<p><label>金额：</label>¥360</p>' 
	                    +'<p><label>地址：</label>北京市海淀区五棵松体育馆北京市海淀区五棵松体育馆</p>'
	                    +'</li>'
	                    +'<div class="clear"></div>'
	                	+'</ul>'
                        +'</li>'
	            }
	            $(".st_myorder_warp ul").prepend(tList);
            }else{
            	// $('.st_hot_c').hide();
             //    $('.hd_list').css('padding-bottom','73px');
            }
        }
    })
}
function getOrderDetail(url){
       $.getJSON(url,function(data) {
        console.log('data+==='+JSON.stringify(data));
        if (data.result = "succ") { 
            $('.orderD_con_bianhao').text('订单编号：'+data.info.open);
            $('.orderD_con_bianzong').text('购买票种：'+data.info.open);
            $('.orderD_con_sum').text('购买数量：'+data.info.open);
            $('.orderD_con_money').text('实付金额：'+data.info.open);
            $('.erweima').attr('src',data.info.a);
            var tList="";
            if(data.info.length>0){
                for(var i=0;i<data.info.length;i++){
                    tList+='<p>2016-03-02  9:00-18:00</p>';
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
var passTickets=150;
$('.st_buyD_con_time li').on('click',function(e){
    var hsClass=$('.Tageskarte').hasClass('active');
    //console.log(hsClass);
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
    var sum=parseInt($('.buySum').text())+1;
    $('.buySum').text(sum);
    var hsClass=$('.Tageskarte').hasClass('active');
    if(hsClass){
        var moneySum=sum*tageskarte;
    }else{
        var moneySum=sum*passTickets;
    }
    $('.st_sum_one').text(moneySum);
})
$('.minus').on('click',function(){
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
$('.st_orderC_pay li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})
//
function getConfirmInfo(){
    $.getJSON(url,function(data){
         if (data.result = "succ") { 
            $('.st_orderC_where p span').text(data.info.open);
            $('.st_orderC_detail money').text(data.info.open);
            $('.st_orderC_detail sum').text('购买数量：'+data.info.open);
            $('.st_orderC_detail piaoClass').text('实付金额：'+data.info.open);
            $('.st_orderC_pay p').text(data.info.a);
            var tList="";
            if(data.info.length>0){
                for(var i=0;i<data.info.length;i++){
                    tList+='<p>2016-03-02  9:00-18:00</p>';
                }
                $(".time_list").append(tList);
            }

        }
    })
}
/*倒计时函数*/
var display = function (obj)
    {
        var reg = /^(\-?)(\d)$/;
        var n = new Date;
        var str = n.getFullYear () + "/" + (n.getMonth () + 1) + "/" + n.getDate () + " " + obj.value;
        var end = new Date (str);
        var now = document.getElementById ('now').innerHTML = n.toLocaleTimeString ();
        var h = Math.floor ((end.getTime () - n.getTime ()) / 1000 / 60 / 60) + "";
        h = reg.test (h) ? h.replace (reg, "$10$2") : h;
        var m = Math.floor ((end.getTime () - n.getTime ()) / 1000 / 60 % 60) + "";
        m = reg.test (m) ? m.replace (reg, "$10$2") : m;
        var s = Math.floor ((end.getTime () - n.getTime ()) / 1000 % 60) + "";
        s = reg.test (s) ? s.replace (reg, "$10$2") : s;
        document.getElementById ('other').innerHTML = h + ":" + m + ":" + s;
        clearTimeout (this.timer);
        this.timer = setTimeout (function ()
        {
            display (obj);
        }, 1000);
    }
    