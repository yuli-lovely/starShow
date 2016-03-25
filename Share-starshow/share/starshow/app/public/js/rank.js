$('.st_invite').on('click',function(){
    $('.st_mark').show().next().show();
})
$('.st_mark').on('click',function(){
    $(this).hide().next().hide();
})

// var id = location.search.replace(/\?id=(\d+).*/,'$1');
var id = location.search.slice(location.search.indexOf("&id=") + 4).split("&")[0];
var uid = location.search.slice(location.search.indexOf("&uid=") + 5).split("&")[0];
// var id="114693";
// var uid="111236";
$(function(){
var w=document.body.clientWidth||document.documentElement.clientWidth;
$('.st_rank_img').css('width',w);
var q_url="http://testapi.xingxiu.tv/index.php?app=mobile&mod=Star&act=inviteFriends&star_id="+id+"&uid="+uid+"&returntype=jsonp&callback=?"
$.getJSON(q_url,function(data){
    if(data.result=='succ'){
        console.log(data);
        $('.st_rank_img img').attr('src',data.info.star.banner);
        $('.st_rank_con h2').html(data.info.star.uname);
        $('.st_rank_con h3').html(data.info.star.group);
        $('.st_rank_detail h2 span').html(data.info.star.uname);
        $('.st_prize a').attr('href','prize.htm?uid=1&star_id='+data.info.star.uid);
        $('.st_prize a span').html(data.info.star.uname);
        var fList=""
        for(var i=0;i<data.info.friends.length;i++){
            fList+='<li><img src="'+data.info.friends[i].avatar+'"><span>'+data.info.friends[i].uname+'</span><span>'+data.info.friends[i].ctime+'</span></li>'
        }
        $('.st_rank_list ul').append(fList);
    }

});

//礼物页面
var p_url="http://testapi.xingxiu.tv/index.php?app=mobile&mod=Star&act=exchange&star_id="+id+"&uid="+uid+"&returntype=jsonp&callback=?"
$.getJSON(p_url,function(data){
    if(data.result=='succ'){
        console.log(data);
        var pList=""
        for(var i=0;i<data.info.length;i++){
            pList+='<li><p>'+data.info[i].score+'</p><img src="'+data.info[i].thumb+'"><h2>'+data.info[i].name+'</h2></li>'
        }
        $('.st_peize_list ul').append(pList);
    }

});
})
//打榜授权
// var id="114693";
// var uid="114655";
var lurl="http://star.xingxiu.tv/star?star_id="+id+"&uid="+uid+"&returntype=jsonp&callback=?";
//alert("111"+lurl);
$('#rank').on('click',function(){
    $.getJSON(lurl,function(data){
        //alert("111"+data);
    if(data.result=='succ'){
      var v = data.resultCode;
      if('2' == v){
            location.href = data.info ;
        }else if ('1' == v) {
           
        } else if ('0' == v) {
          
        }
    }

});
})