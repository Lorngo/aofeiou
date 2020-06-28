// pages/Card/Card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cardImg : 1,//卡片类型
     cardTitle : ''//卡片文字
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.cardImg == 1){
         this.setData({
           cardTitle : '金卡'
         })
    }else if(this.data.cardImg == 2){
      this.setData({
        cardTitle : '钻卡'
      })
    }else if(this.data.cardImg == 3){
      this.setData({
        cardTitle : '奥莱卡'
      })
    }else if(this.data.cardImg == 4){
      this.setData({
        cardTitle : '限量卡'
      })
    }else if(this.data.cardImg == 5){
      this.setData({
        cardTitle : '大众卡'
      })
    }
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

  }
})