const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    reasoningList:'',
    questionIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   userInfo : app.globalData.userInfo
    // })
    this.getInfo();
  },
  getInfo:function(){
    //获取页面信息
    var data = require('./data').data.respBizMsg.reasoningInfo;
    this.setData({
      reasoningList:data.reasoningList
    })
  },
  toPrev:function(){
    this.setData({
      questionIndex:--this.data.questionIndex
    })
  },
  toNext:function(){
    if(this.data.questionIndex==this.data.reasoningList.nv_length-1) return
    this.setData({
      questionIndex:++this.data.questionIndex
    })
  },
  // radioIndex:e.target.dataset.index,
  choice:function(e){
    var key = "reasoningList["+this.data.questionIndex+"].radioIndex"
    this.setData({
      [key]:e.target.dataset.index
    })
  },
  clue:function(){
    console.log('展示线索');
  },
})