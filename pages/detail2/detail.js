// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var request = require('../../utils/Request.js');
var app = getApp();
// var article = '<div class="g-mall-content" ><img src= "http://fuguangjun.0512iis.com/images/chuang/chuang1.jpg" /></div><div class="g-desc" ><h2>喜上眉梢1.8M床+ 顶箱柜（雕花）</h2><p> 老挝大红酸枝木材具有花纹漂亮，层次感分明，油性大，密度大，有光泽，不易裂等特点 </p><h2> Abstract:</h2><p> 苏州红状元家具股份有限公司为客户提供喜上眉梢1.8M床+ 顶箱柜（雕花）报价、哪家好、哪里有、厂家、价格、批发、配送、供应商，产品销往蠡口、浙江、江苏、相城、上海、杭州、全国等地区。</p></div><div class="g-mall-content" ><img src="http://fuguangjun.0512iis.com/images/chuang/chuang9.jpg" /></div><div class="g-desc" ><h2 class="nearbg-title" > 产品详情 </h2><p> 产品全实物拍摄, 雕花精美，工艺精湛，百分百老挝大红酸枝老料精心制作而成，并采用榫卯工艺结构，确保坚固耐用，本品全部是红酸枝木材本色，原枝原味，色泽自然，入手温润，健康环保。</p><p> 产品名称：喜上眉梢1.8M床+ 顶箱柜（雕花）</p><p> 品        牌：红状元 </p><p> 产品系列：书房系列 </p><p> 产品风格：明清古典 </p><p> 产品材质：老挝大红酸枝 </p><p> 产品产地：江苏苏州 </p><p> 产品尺寸：床180 * 200 * 36 / 116  柜238* 238 * 60（单位：cm）</p><p> 温馨提示：由于产品的特殊性，手工测量稍有误差，请以实物为主 </p><p> 老挝大红酸枝雕花古典四门实木中式组合大衣柜卧室组合床柜 </p><p> 浓郁的明清古典风格，各部位均以活隼连接，工艺精湛，用大红酸枝木制作，更具富贵气象。</p><p> 精雕百载良材，细刻千年文化，演绎自然古朴的中国家居文化，从选材到成品，精益求精的雕刻与揣摩，无不浓缩了明清文盛之精髓。</p></div><div class="g-mall-content" ><img src="http://fuguangjun.0512iis.com/images/chuang/chuang2.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang3.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang4.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang5.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang6.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang7.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang8.jpg" /></div>';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    navigations: ['首页', '景观', '锦鲤', '设备', '我们'],
    style: 0,
    addressInfo: null,
    newsDetailInfo:null,
  },

  showNav: function () {
    this.setData({
      style: 12,
    });
  },

  navigationTo: function (e) {
    var index = e.currentTarget.dataset.index;
    var url = null;
    switch (index) {
      case 0:
        url = '../home/home_index';
        break;
      case 1:
        url = '../jingguan/jingguan_index';
        break;
      case 2:
        url = '../jinli/jinli_index';
        break;
      case 3:
        url = '../devices/devices_index';
        break;
      case 4:
        url = '../user/user_index';
        break;
    }
    wx.switchTab({
      url: url,
    })
    this.closeNav();
  },


  closeNav: function () {
    this.setData({
      style: 0,
    });
  },

  call: function (e) {
    var phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  goMap: function (e) {
    var dizhi = e.currentTarget.dataset.dizhi;
    var lat = dizhi.split(',')[0];
    var lng = dizhi.split(',')[1];
    wx.navigateTo({
      url: '../map/map_index' + '?lat=' + lat + '&lng=' + lng,
    })
  },

  toYuyue:function(){
    wx.navigateTo({
      url: '../yuyue/yuyue',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    request.getWithBaseUrl({ service: 'App.Hong.GetCategoryInfo', id: 4, table: '3_share_category' }, function (e) {
      WxParse.wxParse('article', 'html', e.data.data.result.child[options.index].content, that, 5);
    });
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.setData({
      height: wx.getSystemInfoSync().windowHeight - 40
    });
    if (app.globalData.addressInfo) {
      that.setData({
        addressInfo: app.globalData.addressInfo
      });
    }
    
  },

  back:function(res){
    wx.navigateBack({
      
    })
  },

  
})