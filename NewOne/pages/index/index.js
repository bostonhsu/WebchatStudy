var newnote
var nickName
var imageurl
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this
    //微信登录授权，获取用户信息
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            nickName = res.userInfo.nickName
            imageurl = res.userInfo.avatarUrl
          }
        })
      }
    }),
      wx.request({
      url: 'https://66910603.qcloud.la/xcx/list.php', //服务器列表地址
        success: function (res) {
                   that.setData({
            array: res.data           
          })
        }
      })
  },


  // 输入完成
  confirm: function (e) {
    newnote = e.detail.value
  },
  //留言
  click: function (e) {
    var that = this
    wx.request({
      url: 'https://66910603.qcloud.la/xcx/note.php', //服务器留言地址
      data: {
        name: nickName,
        content: newnote,
        imageurl: imageurl
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.request({
          url: 'https://66910603.qcloud.la/xcx/list.php', //上线换为为https
          success: function (res) {
            that.setData({
              array: res.data
            })
          }
        })
      }
    })
  }
})