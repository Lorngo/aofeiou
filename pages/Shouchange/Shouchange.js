// pages/Shouchange/Shouchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    label: ["宝贝", "文章",],
    labelIndex: 0,
  },
 
  selectLabel(e) {
    this.setData({ labelIndex: e.currentTarget.dataset.index })
  },

})