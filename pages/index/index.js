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
    newPageList: '',
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
    wx.showShareMenu({
      withShareTicket: true
    })
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
  getList: function () {
    var that = this;
    let info = require('./data').data.respBizMsg.pageInfo;
    that.setData({
      newPageList: info.newPageList,
      imgUrls: info.swiperList,
    })
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/wx-list',
    //   method: "POST",
    //   data: "123",
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     console.log(res);

    //     if (res.data.respCode === '01') {
    //       let info = res.data.respBizMsg.pageInfo;
    //       that.setData({
    //         pageList1: info.pageList.page1,
    //         pageList2: info.pageList.page2,
    //         pageList3: info.pageList.page3,
    //         imgUrls: info.swiperList,
    //       })
    //     }
    //   },
    //   fail: function () {
    //     console.log("接口调用失败");
    //   }
    // })
  },
  toDetail: function (e) {
    wx.navigateTo({
      url: '../pageDetail/pageDetail?listId=' + e.currentTarget.dataset['listid'] + '&pageType=' + e.currentTarget.dataset['type'],
    })
  },
  toList: function (el) {
    if (el.currentTarget.dataset['type'] === '3') {
      wx.navigateTo({
        url: '../reasoning/reasoning?listId=' + el.currentTarget.dataset['listid'] + '&pageType=' + el.currentTarget.dataset['type'],
      })
      return
    }
    wx.navigateTo({
      url: '../pageList/pageList?listId=' + el.currentTarget.dataset['listid'] + '&pageType=' + el.currentTarget.dataset['type'],
    })
  }
})
