
//获取应用实例

Page({
  data: {
    fei3: 300,
    fei4: 150,
    condition: false,
  },
  //事件处理函数

  switch1Change: function (e) {
    this.setData({
      condition: e.detail.value,
      fei3: '',
      fei4: '',
    })
  },



  formSubmit1: function (e) {
    var f = Number(e.detail.value.input1)//标的,强转为数值
    var g = 0//诉讼费
    var h = 0 //减半

    if (f <= 200000)
    { g = 300; }
    else if (f > 200000)
    { g = 0.005 * f; }
    h = 0.5 * g

    this.setData({
      fei3: g.toFixed(2),
      fei4: h.toFixed(2),
    })
  },
  formReset1: function () {
    this.setData({
      condition: false,
      fei3: 300,
      fei4: 150,
    })
  }
})
