$('.st_invite').on('click',function(){
    $('.st_mark').show().next().show();
})
$('.st_mark').on('click',function(){
    $(this).hide().next().hide();
})
function getDetail(url){
  $.getJSON(q_url,function(data){
    if(data.result=='succ'){
        $('.st_rank_img img').attr('src',data.info.star.banner);
        $('.st_rank_con h2').html(data.info.star.uname);
        $('.st_rank_con h3').html(data.info.star.group);
        $('.st_rank_con h4 span').html(data.info.star.grade);
        $('.st_rank_geshu h6').html(data.info.star.digg_count);
        $('.st_rank_geshu h2 span').html(data.info.star.uname);
        $('.st_prize a').attr('href','prize.htm?id='+data.info.star.uid+'&uid=1');
        $('.st_prize a span').html(data.info.star.uname);
        var fList=""
        for(var i=0;i<data.info.friends.length;i++){
            fList+='<li><img src="'+data.info.friends[i].avatar+'"><span>'+data.info.friends[i].uname+'</span><span>'+data.info.friends[i].ctime+'</span></li>'
        }
        $('.st_rank_list ul').append(fList);
    }

});  
}

//打榜授权
var id = location.search.slice(location.search.indexOf("&id=") + 4).split("&")[0];
var uid = location.search.slice(location.search.indexOf("&uid=") + 5).split("&")[0];
// var id="114693";
// var uid="114655";
var lurl="http://star.xingxiu.tv/star?star_id="+id+"&uid="+uid+"&returntype=jsonp&callback=?";

$('#rank').on('click',function(){
    $.getJSON(lurl,function(data){
    //console.log("111"+JSON.stringify(data));
      var v = data.resultCode;
      if(v=='2'){
        location.href = data.info ;
        }
    // }

});
})

//礼物页面
function getPrize(p_url){
    $.getJSON(p_url,function(data){
    if(data.result=='succ'){
        //console.log(data);
        var pList=""
        for(var i=0;i<data.info.length;i++){
            var a=data.info[i].thumb==""? '../public/images/defaultimage_65x65.png':data.info[i].thumb;
            console.log(a);
            pList+='<li><p>'+data.info[i].score+'</p><div><img src="'+a+'"></div><h2>'+data.info[i].name+'</h2></li>'
        }
        $('.st_peize_list ul').append(pList);
    }

});
}