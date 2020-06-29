
Page({
  data: {
    label: ["邀请人员", "购买列表"],//标签列表
    labelIndex: 0,//标签索引
    yaoList: [{ id: 1, img: '../../static/images/avatr2.png', name: '安徒生先生', time: "2020.01.01"},{ id: 2, img: '../../static/images/avatr1.png', name: 'Rocco', time: "2020.01.01"},{ id: 3, img: '../../static/images/avatr3.png', name: '今天你好吗', time: "2020.01.01"},{ id: 4, img: '../../static/images/avatr4.png', name: '喜你而欢', time: "2020.01.01"},{ id: 5, img: '../../static/images/avatr5.png', name: '难遇', time: "2020.01.01"}],
    gouList:[{
      avatUrl : '../../static/images/avatr2.png',
      name : '安徒生先生',
      price : 20,
      num   : 1,
      heji  : 100
    },
    {
      avatUrl : '../../static/images/avatr1.png',
      name : 'Rocco',
      price : 20,
      num   : 1,
      heji  : 100
    },
    {
      avatUrl : '../../static/images/avatr3.png',
      name : '今天你好吗',
      price : 20,
      num   : 1,
      heji  : 100
    },
    {
      avatUrl : '../../static/images/avatr4.png',
      name : '喜你而欢',
      price : 20,
      num   : 1,
      heji  : 100
    },
    {
      avatUrl : '../../static/images/avatr5.png',
      name : '难遇',
      price : 20,
      num   : 1,
      heji  : 100
    }
  ]//购买列表
  },
   
  onLoad() {
    initComputed(this)//初始化计算属性
    this.orderCalc()
  },
  
 
 
  operation(e) {
    let { index, type } = e.currentTarget.dataset
    switch(type) {
      case '1':
        console.log("删除订单")
        break
      case '2':
        console.log("去付款")
        break
      case '3':
        console.log("取消订单")
        break
      case '4':
        console.log("提醒发货")
        break
      case '5':  
        console.log("查看物流")
        break  
      case '6':  
        console.log("确认收货")
        break       
    }
  },
  //订单计算
  orderCalc() {
    let { orderList } = this.data
    orderList.forEach(item => {
      item.numTotal = item.orders.reduce((total, items) => { return (total.num + items.num) })
      item.prizeTotal = item.orders.reduce((total, items) => { return decimal_place(accAdd(accMul(total.num, total.prize), accMul(items.num, items.prize))) })
    })
    this.setData({ orderList })
  },
  //点击选择label
  selectLabel(e) {
    this.setData({ labelIndex: e.currentTarget.dataset.index })
  },
  //swiper切换
  bindchangeSwiper(e) {
    this.setData({ labelIndex: e.detail.current })
  },
  //scroll-view上拉触底
  bindscrolltolower(e) {
    console.log("上拉触底", e.currentTarget.dataset.index)
  }
})