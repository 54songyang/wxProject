Page({
  data: {
    pageId:'',
    title: "",
    author: "",
    address: "",
    date: "",
    pageType: "",
    answerNum: "",
    readNum: "",
    articleDetails: "",
    answerList: [],
    article: '',
    pageBg: '',
    comment: "",
  },
  onLoad: function (e) {
    var title;
    switch (e.pageType) {
      case '0':
        title = '民间诡事'
        break;
      case '1':
        title = '天下谜团'
        break;
      case '2':
        title = "网友怪谈"
    }
    wx.setNavigationBarTitle({
      title: title
    })
    this.getInfo(e);
  },
  getInfo: function (val) {
    const that = this;
    console.log(val);
    var info = require('./data').data.respBizMsg
    that.setData({
      pageId:info.pageId,
      title: info.title,
      author: info.author,
      address: info.address,
      date: info.date,
      pageType: info.pageType,
      answerNum: info.answerNum,
      readNum: info.readNum,
      articleDetails: info.articleDetails,
      answerList: info.answerList,
      pageBg: info.pageBg
    })
    const WxParse = require('../../wxParse/wxParse.js');
    WxParse.wxParse('article', 'html', info.articleDetails, that, 5)
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/wx-list',
    //   method: "POST",
    //   data: val,
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     console.log(res);

    //     if (res.data.respCode === '01') {

    //     }
    //   },
    //   fail: function () {
    //     console.log("接口调用失败");
    //   }
    // })
  },
  toHome: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  setComment: function (e) {
    this.setData({
      comment: e.detail.value
    })
  },
  sendInfo: function (e) {
    let that = this;
    if (that.data.comment) {
      const userInfo = e.detail.userInfo;
      let data = {
        pageId:that.data.pageId,
        userInfo,
        comment:that.data.comment
      }
      console.log(data);
      // !!!返回内容为评论列表
      // wx.request({
      //   url: 'https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/wx-list',
      //   method: "POST",
      //   data: data,
      //   header: {
      //     'Content-Type': 'json'
      //   },
      //   success: function (res) {
      //     console.log(res);

      //     if (res.data.respCode === '01') {

      //     }
      //   },
      //   fail: function () {
      //     console.log("接口调用失败");
      //   }
      // })
    }
  },
})