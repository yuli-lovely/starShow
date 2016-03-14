$.getJSON('http://api.xingxiu.tv/index.php?app=mobile&mod=WeChat&act=sign&url='+encodeURIComponent(location.href)+'&returntype=jsonp&callback=?',function(d){
if(d.info.status){
    alert(d+'=====d');
    wx.config({
    debug: false,
    appId: "wxff356e127c0ecb9e",
    timestamp: d.info.timestamp,
    nonceStr: "xingxiu2015",
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
        title: d.info.title,
        desc: d.info.desc,
        link: d.info.link,
        imgUrl: d.info.imgUrl,
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
        title: "来自苏芒的时尚星秀年度星秀人物盛典邀请",
        link: "http://star.xingxiu.tv/oauth2",
          imgUrl: "http://share.xingxiu.tv/yqh/ship/images/icon.jpg",
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