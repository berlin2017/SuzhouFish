// pages/yuyue/yuyue.js
var app = getApp();
var request = require('../../utils/Request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  formSubmit:function(e){
    console.log(e);
    var name = e.detail.value.name_input;
    var phone = e.detail.value.phone_input;
    var beizhu = e.detail.value.beizhu_input;
    if(!name){
      wx.showToast({
        title: '姓名不能为空',
      })
      return;
    }

    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
      })
      return;
    }

    if (!beizhu) {
      wx.showToast({
        title: '备注不能为空',
      })
      return;
    }
    request.getWithBaseUrl({ service: 'App.Hong.Form', xingming:name,shouji:phone,beizhu:beizhu},function success(e){
      if(e.data.data.result.code==0){
        wx.showToast({
          title: '预约成功',
        })

      }else{
        wx.showToast({
          title: '预约失败',
        })
      }
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

  back: function (res) {
    wx.navigateBack({

    })
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
    that.setData({
      height: wx.getSystemInfoSync().windowHeight - 40
    });
    if (app.globalData.addressInfo) {
      that.setData({
        addressInfo: app.globalData.addressInfo
      });
    }
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