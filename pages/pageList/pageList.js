Page({
  data: {
    listInfo: [],
    headBg: '',
    title: '',
    headOp: '',
    imgHeight:'',
  },
  onLoad: function (option) {
    var that = this;
    var name;
    switch (option.pageType) {
      case '0':
        name = '民间诡事'
        break;
      case '1':
        name = '天下谜团'
        break;
      case '2':
        name = '网友怪谈'
    }
    this.setData({
      title: name
    })
    wx.setNavigationBarTitle({
      title: name
    })
    let val = {
      pageList: option.pageList,
      pageType: option.pageType
    }
    this.getInfo(val);
    const query = wx.createSelectorQuery();
    query.select('.mrgin-no').boundingClientRect(function (res) {
      that.setData({
        imgHeight:res.height
      })
    }).exec()
  },
  getInfo: function (val) {
    let info = require('./data').data.respBizMsg.listInfo;
    this.setData({
      listInfo: info.listArr,
      headBg: info.headBg,
    })
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/wx-list',
    //   method: "POST",
    //   data: val,
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //   },
    //   fail: function () {
    //     console.log("接口调用失败");
    //   }
    // })
  },
  toDetail: function (e) {
    let query = e.currentTarget.dataset['listid'];
    wx.navigateTo({
      url: '../pageDetail/pageDetail?listId=' + query,
    })
  },
  onPageScroll: function (e) {
    let that = this;
    if (e.scrollTop < 150) {
      that.setData({
        headOp: (that.data.imgHeight - e.scrollTop)/that.data.imgHeight
      })
    }
  },
})