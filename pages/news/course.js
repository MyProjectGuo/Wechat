// pages/news/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  sendRequest: function (code) {
    var that = this;//获取到全局变量

    wx.request({
      url: 'https://3g.163.com/touch/reconstruct/article/list/BAI67OGGwangning/0-5.html',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (e) {
        var res = e.data;
        var a1 = 'artiList({"' + code + '":[';
        var str2 = res.replace(a1,' ')
        console.log("截取："+str2)
        var jsonStr = JSON.stringify(str2)
        var jj = JSON.parse(jsonStr);
        console.log(jj)
        that.setData({ msgList:jj})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.code)
    this.sendRequest(options.code)
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      wx.showToast({
        title: '到底啦，~QAQ~',
        icon: 'success',
        duration:2000
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})