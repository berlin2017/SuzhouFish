// pages/home/home_index.js
var request = require('../../utils/Request.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeInfo: {},
    first_css: ['10px 0 0 10px','0 10px 10px 0'],
    secend_css: [
      '10px 0 0 0',
      '0 10px 0 0',
      '0 0 0 10px',
      '0 0 10px 0'
    ],
    addressInfo:null,
  },
  

  toDetail:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail'+'?id='+id,
    })
  },

  toForm:function(e){
    var url = e.currentTarget.dataset.url;
    if(url == 'form'){
      wx.navigateTo({
        url: '../yuyue/yuyue' + '?id=' + e.currentTarget.dataset.id,
      })
    }else{
      wx.navigateTo({
        url: '../list/list' + '?id=' + e.currentTarget.dataset.id,
      })
    }
  },

  navigationTo: function (e) {
    var index = e.currentTarget.dataset.index;
    var url = null;
    switch (index) {
      case '0':
        url = '../home/home_index';
        break;
      case '1':
        url = '../jingguan/jingguan_index';
        break;
      case '2':
        url = '../jinli/jinli_index';
        break;
      case '3':
        url = '../devices/devices_index';
        break;
      case '4':
        url = '../user/user_index';
        break;
    }
    wx.switchTab({
      url: url,
    })
  },

  call:function(e){
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    if (app.globalData.addressInfo){
      this.setData({
        addressInfo: app.globalData.addressInfo
      });
    }else{
      request.get(
        'https://hzy.api.szjisou.com/',
        { table: '3_block', service: 'App.Hong.GetBase' },
        function (res) {
          that.setData({
            addressInfo: res.data.data.result
          });
        });
    }
    request.getWithBaseUrl({ service:'App.Hong.IndexInfo',siteid:3},function success(e){
      console.log(e);
      that.setData({
        homeInfo:e.data.data.result
      });
    });
  
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