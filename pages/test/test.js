// pages/test/test.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      {
        id: 1,
        name: "张三"
      },
      {
        id: 2,
        name: "李四"
      }
    ],
    obj: {
      staffA: { firstName: 'Hulk', lastName: 'Hu' },
      staffB: { firstName: 'Shang', lastName: 'You' },
      staffC: { firstName: 'Gideon', lastName: 'Lin' }
    },
    str: "this is string value!",
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    // console.log(app.global);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  //自定义函数
  getInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  getphonenumber: function (e) {

    console.log(e)
  },
  showName: function (e) {
    console.log("name");
    console.log(e);
  },
  showItem: function (e) {
    console.log("item");
    console.log(e);
  },
  chkchange: function (e) {
    console.log(e)
    console.log(e.detail)
  }
})