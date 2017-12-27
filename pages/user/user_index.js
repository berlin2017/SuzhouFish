// pages/jingguan/jingguan_index.js
var app = getApp();
var request = require('../../utils/Request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listInfo:null,
    height: 0,
    navigations: ['首页', '景观', '锦鲤', '设备', '我们'],
    style: 0,
    addressInfo:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    request.getWithBaseUrl({ service: 'App.Hong.GetCategoryInfo', id: 4, table: '3_share_category' }, function (e) {
      that.setData({
        listInfo: e.data.data.result
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight - 40
    });
    if (app.globalData.addressInfo) {
      this.setData({
        addressInfo: app.globalData.addressInfo
      });
    }
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
 

  share:function(e){
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  toList: function (e) {
    if (e.currentTarget.dataset.content) {
      wx.navigateTo({
        url: '../detail2/detail' + '?index=' + e.currentTarget.dataset.index,
      })
      return;
    }
    if (e.currentTarget.dataset.id) {
      wx.navigateTo({
        url: '../list/list' + '?id=' + e.currentTarget.dataset.id,
      })
    }
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

  onShareAppMessage:function(options){
    
  }
})