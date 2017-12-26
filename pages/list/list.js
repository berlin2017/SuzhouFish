// pages/list/list.js
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
    addressInfo: null
  },

  showNav: function () {
    this.setData({
      style: 12,
    });
  },

  toDetail:function(e){
    if(e.currentTarget.dataset.id){
      wx.navigateTo({
        url: '../detail/detail' + '?id=' + e.currentTarget.dataset.id,
      })
    }
  },

  call: function (e) {
    var phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  goMap: function (e) {
    var lat = e.currentTarget.dataset.lat;
    var lng = e.currentTarget.dataset.lng;
    lat = 31.8183600000;
    lng = 117.2309800000;
    wx.navigateTo({
      url: '../map/map_index' + '?lat=' + lat + '&lng=' + lng,
    })
  },

  navigationTo: function (e) {
    var index = e.currentTarget.dataset.index;
    var url = null;
    switch(index){
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
    });
    this.closeNav();
  },

  closeNav: function () {
    this.setData({
      style: 0,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // if(options.category){
    //   request.getWithBaseUrl({ service: 'App.Hong.GetCategoryInfo', id: options.category, table: '3_share_category' }, function (e) {
    //     console.log(e);
    //     that.setData({
    //       listInfo: e.data.data.result
    //     });
    //   });
    // }

    if(options.id){
      request.getWithBaseUrl({ service: 'App.Hong.Index', id: options.id, table: '3_news' }, function (e) {
        console.log(e);
        that.setData({
          listInfo: e.data.data.result
        });
      });
    }
    
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

  toYuyue:function(){
    wx.navigateTo({
      url: '../yuyue/yuyue',
    })
  },

  back: function (res) {
    wx.navigateBack({

    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})