import { decimal_place, accAdd, accMul } from '../../utils/util'
import initComputed from '../../utils/wxComputed.min'


Page({
  data: {
    label: ["宝贝","文章"],
    labelIndex: 0,//标签索引
    orderList: [ //订单列表
      {
        id: 1,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 2,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 3,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 4,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 5,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 6,
        type: 1,
        orders: [{
          id: 1,
          img: '../../static/images/shop2.png',
          name: '方兜连袖短大衣',
          size : '175',
          color : '深灰色',
          price : 139,
          num : 1
        }]
      },
      {
        id: 7,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 8,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 9,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '方兜连袖短大衣'
        }, ]
      },
      {
        id: 10,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 10,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 10,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 10,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
      {
        id: 10,
        type: 2,
        orders: [{
          id: 1,
          img: '../../static/images/shop4.png',
          name: '茧型大翻领中长大衣'
        }, ]
      },
    ]
  },
  onLoad() {
    initComputed(this)//初始化计算属性
    this.orderCalc()
  },
  //计算属性
  computed: {
    /*待付款列表*/
    unpaidList() {
      return this.data.orderList.filter(item => { return item.type == 1 })
    },
    /*待发货列表*/
    deliverGoodsList() {
      return this.data.orderList.filter(item => { return item.type == 2 })
    },
    /*待收货列表*/
    receiptGoodsList() {
      return this.data.orderList.filter(item => { return item.type == 3 })
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
    console.log(e.currentTarget.dataset.index )
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