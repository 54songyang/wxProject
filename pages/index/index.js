//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // userInfo: {},
    // hasUserInfo: false,
    // current: 'homepage',
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //swiper
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    //tab列表
    current: 'tab1',
    current_scroll: 'tab1',
    pageList1: '',
    pageList2:'',
    pageList3:'',
    menuTop:'',
    menuFixed:'',
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // bindViewTap2: function () {
  //   wx.navigateTo({
  //     url: '../page3/page3'
  //   })
  // },
  onLoad: function () {
    this.getList();
    this.initClientRect();
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  handleChangeScroll({ detail }) {
    this.setData({
      current_scroll: detail.key
    });
  },
  getList: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/wx-list',
      method: "POST",
      data: "123",
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res);
        
        if (res.data.respCode === '01') {
          let info = res.data.respBizMsg.pageInfo;
          that.setData({
            pageList1: info.pageList.page1,
            pageList2: info.pageList.page2,
            pageList3: info.pageList.page3,
            imgUrls: info.swiperList,
          })
        }
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  },
  initClientRect: function () {
    var that = this;
    var query = wx.createSelectorQuery()
    query.select('#affix').boundingClientRect()
    query.exec(function (res) {
      that.setData({
        menuTop: res[0].top
      })
    })
  },
  onPageScroll: function (scroll) {
    var that = this;
    if (scroll.scrollTop > that.data.menuTop){
      that.setData({
        menuFixed: true
      })
    }else{
      that.setData({
        menuFixed: false
      })
    }
  }
})
