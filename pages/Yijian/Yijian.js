// pages/Yijian/Yijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     Txtlength:0,//输入字数,
     Txt : ''
  },
  //动态字数
  changeTxt(e){
    var len = parseInt(e.detail.value.length)
    this.setData({
      Txtlength : len
    })
  },
//判断字数
  tijiao(){
    if(this.data.Txtlength == 0){
       wx.showToast({
         icon : 'none',
         title: '填写意见不能为空',
       })
    }else{
      wx.showToast({
        title: '感谢您的意见',
      })
      this.setData({
        Txt : '',
        Txtlength : 0
      })
    }
  }
})