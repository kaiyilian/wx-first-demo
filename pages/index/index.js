//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //生命周期函数
  onLoad: function () {
    console.log(0)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    console.log(1)
  },
  onShow: function () {
    console.log(2)
  },
  onHide: function () {
    console.log(3)
  },
  onUnload: function () {
    console.log(4);
  },

//页面相关事件处理函数
  onPullDownRefresh: function () {
    console.log(4);
  },
  onPageScroll: function () {
    console.log(5)
    // Do something when page scroll
  },
  // onTabItemTap: function () {
  //   console.log(6);
  // },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/index/index?id=123'
    }
  },
  //事件处理函数
  bindViewTap: function () {
    console.log("bindTap")
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
