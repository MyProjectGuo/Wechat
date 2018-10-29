const app = getApp()
Page({
  data: {
    routers: [
      {
        name: '新闻',
        url: '/pages/news/course',
        icon: '/image/news/news.png',
        code: 'BA10TA81wangning'
      },
      {
        name: '娱乐',
        url: '/pages/Course/course',
        icon: '/image/news/yule.png',
        code: 'BD2A86BEwangning'
      },
      {
        name: '体育',
        url: '/pages/Course/course',
        icon: '/image/news/tiyu.png',
        code: 'BA8E6OEOwangning'
      },
      {
        name: '财经',
        icon: '/image/news/caijing.png',
        code: 'BA8EE5GMwangning'
      },
      {
        name: '科技',
        url: '/pages/Course/course',
        icon: '/image/news/keji.png',
        code: 'DE0CGUSJwangning'
      },
      {
        name: '图片',
        icon: '/image/news/tupian.png',
        code: '11'
      },
      {
        name: '汽车',
        url: '/pages/Course/course',
        icon: '/image/news/qiche.png',
        code: '10'
      },
      {
        name: '星座',
        icon: '/image/news/xingzuo.png',
        code: '11'
      },
      {
        name: '军事',
        url: '/pages/Course/course',
        icon: '/image/news/junshi.png',
        code: 'BAI67OGGwangning'
      }
    ],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ] ,

    msgList: [
      { id: 1, title: "标题一", time: "2017-3-5 23:01:59", src: "../../images/wechatHL.png" },
      { id: 2, title: "标题二", time: "2017-3-5 23:02:59", src: "../../images/wechatHL.png" },
      { id: 3, title: "标题三", time: "2017-3-5 23:03:59", src: "../../images/wechatHL.png" },
      { id: 4, title: "标题四", time: "2017-3-5 23:04:59", src: "../../images/wechatHL.png" }
    ]


  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },

  bannerUrls: [
    {
      url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
      linkUrl: ''
    },
    {
      url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
      linkUrl: ''
    },
    {
      url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
      linkUrl: ''
    }
  ],
  indicatorDots: true,
  autoplay: true,
  interval: 3000,
  duration: 1000,
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
    //轮播结束
  //轮播高度自适应——获取图片高度
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH//设置高度
    })
  }
})  