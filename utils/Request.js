function get(url,data,callBack){
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: url,
    data:data,
    success:function(res){
      callBack(res);
    },
    complete:function(res){
      wx.hideLoading();
    }
  })
}

function post(url, data, callBack) {
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: url,
    method:'POST',
    data: data,
    success: function (res) {
      callBack(res);
    },
    complete:function (res) {
      wx.hideLoading();
    }
  })
}

function getWithBaseUrl(data, callBack) {
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: 'https://hzy.api.szjisou.com/',
    data: data,
    success: function (res) {
      callBack(res);
    },
    complete: function (res) {
      wx.hideLoading();
    }
  })
}

module.exports.get = get;
module.exports.post = post;
module.exports.getWithBaseUrl = getWithBaseUrl;

