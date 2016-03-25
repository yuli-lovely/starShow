var turl="http://testapi.xingxiu.tv/";
var aurl="http://api.xingxiu.tv/";
var type = location.search.replace(/\?type=(\d+).*/,'$1');
var id = location.search.slice(location.search.indexOf("&id")+4).split("&")[0];
console.log(id+'+========+'+type);
var url=aurl+'index.php?app=mobile&mod=WeChat&act=sign&url='+encodeURIComponent(location.href)+'&id='+id+'&type='+type+'&returntype=jsonp&callback=?'
//alert(url);
$.getJSON(url,function(d){
if(d.info.status){
   console.log(JSON.stringify(d)+'=====d');
    wx.config({
    debug: false,
    appId: d.info.appId,
    timestamp: d.info.timestamp,
    nonceStr: d.info.nonceStr,
    signature: d.info.signature,
    jsApiList: [    
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
    ]
    });

   wx.ready(function(){                        
    // 在这里调用 API
      wx.onMenuShareAppMessage({
        title: d.share.title,
        desc: d.share.desc,
        // link: d.info.link,
        imgUrl: d.share.thumb,
       
        trigger: function (res) {
        },
        success: function (res) {
        // alert('已分享');
        },
        cancel: function (res) {
        // alert('已取消');
        },
        fail: function (res) {
        // alert(JSON.stringify(res));
        }
      });
      wx.onMenuShareTimeline({
        title: d.share.title,
        desc: d.share.desc,
        // link: d.info.link,
        imgUrl: d.share.thumb,
        trigger: function (res) {
        },
        success: function (res) {
        // alert('已分享');
        },
        cancel: function (res) {
        // alert('已取消');
        },
        fail: function (res) {
        // alert(JSON.stringify(res));
        }
      });
    });
} else {
  // alert(d.status);
}
})