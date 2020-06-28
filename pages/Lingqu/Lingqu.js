// pages/Lingqu/Lingqu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     date : '请选择生日享受生日折扣'
  },

  changeDate(e){
   this.setData({
     date : e.detail.value
   })
  }
})