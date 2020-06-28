// pages/Fenxiang/Fengxiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yqList: [{
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '安徒生',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '柚子',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '今天你好吗',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '食草贝',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      },
      {
        name: '我是小凯',
        jf: '+100积分',
        time: "2020.04.26"
      }
    ], //邀请的列表
    top: 0,
  },


  // onShareAppMessage: function (ops) {
  //   if (ops.from === 'button') {
  //     console.log(ops.target)
  //     console.log(this.data.id)

  //   }
  //   return {
  //     title: '标签',
  //     path: '/pages/detail/detail?id='+this.data.id,
  //     success: function (res) {
  //       console.log(res);
  //       console.log("转发成功:" + JSON.stringify(res));
  //     },
  //     fail: function (res) {
  //       console.log("转发失败:" + JSON.stringify(res));
  //     }
  //   }
  // }

  onLoad() {
       setInterval(()=>{
     this.setData({
       top : this.data.top - 75
     })
     console.log(this.data.yqList)
    var obj = this.data.yqList.splice(1,1)
   
       },4000)
  }
})