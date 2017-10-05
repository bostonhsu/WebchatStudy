//index.js
var newnote
var nickName
var imageurl
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this
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
      url: 'https://82446561.qcloud.la/xcx/list.php',
      success: function (res) {
        that.setData({
          array: res.data
        })
      }
    })
  },
  confirm: function (e) {
    newnote = e.detail.value
  },
  click: function (e) {
    var that = this
    wx.request({
      url: 'https://82446561.qcloud.la/xcx/note.php',
      data: {
        name: nickName,
        content:newnote,
        imageurl: imageurl
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.request({
          url: 'https://82446561.qcloud.la/xcx/list.php',
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