// pages/map/map_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    lat:0,
    lng:0,
    markers:[{
      id:0,
      latitude: 31.8183600000,
      longitude: 117.2309800000,
      width:50,
      height:50,
      title:'安徽新媒体',
      callout: { 
        content: '安徽新媒体',
        borderRadius:10,
        bgColor:"#fff",
        display:'ALWAYS',
        padding:10,
        color:'#000',
        fontSize:17
      },
      label: '安徽新媒体',
      iconPath: '../../resources/ic_marker.png',
    }],
   
  },

  openLocation:function(){
    var that = this;
    wx.openLocation({
      latitude: that.data.markers[0].latitude,
      longitude: that.data.markers[0].longitude,
      name:that.data.markers[0].title,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options){
      this.setData({
        lat: options.lat,
        lng: options.lng,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      height:wx.getSystemInfoSync().windowHeight
    });
  },


})