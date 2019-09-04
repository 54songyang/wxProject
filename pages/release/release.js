Page({
  data: {
    readOnly: false,
    test:"http://img4.imgtn.bdimg.com/it/u=3135402106,3540163108&fm=26&gp=0.jpg",
  },
  onLoad: function () {
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    console.log('format', name, value)
    this.editorCtx.format(name, value)
  },
  // 点击图片将图片插入富文本编辑器里面
  insertImage() {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res.tempFilePaths, '上传图片')



        that.editorCtx.insertImage({
          src: 'http://img5.imgtn.bdimg.com/it/u=3976365452,3683195683&fm=26&gp=0.jpg',
          success: function () {
            console.log('插入图片内容')
          }
        })
        


        // wx.uploadFile({
        //   url: '自己的图片上传地址',
        //   filePath: res.tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     app_token: app.data.userInfo.app_token,
        //   },
        //   success: function (res) {
        //     console.log(res.data, '图片上传之后的数据')
        //     var data = JSON.parse(res.data)
        //     console.log(data.data.url)
        //     that.editorCtx.insertImage({
        //       src: data.data.url,
        //       success: function () {
        //         console.log('insert image success')
        //       }
        //     })
        //   }
        // })
      }
    })
  },
  submit:function(){
    this.editorCtx.getContents({
      success(res) {
        console.log('提交',res)
      }
    })
  },
  preservation:function(){
    this.editorCtx.getContents({
      success(res) {
        console.log('保存',res)
      }
    })
  },
  changeBg:function(e){
    this.setData({
      editorBg:e.currentTarget.dataset.src
    })
  }
})
