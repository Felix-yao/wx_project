// pages/kuaidi/kuaidi.js
const Constant = require('../../common/constant.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rsData: [],
    array: ['申通', 'EMS', '顺丰', '圆通', '中通', '韵达', '天天', '汇通'],
    inputValue: "", //输入的内容
    modalHidden: true, //模态框弹出状态,
    index: '',
  },

  /**申通="shentong" EMS="ems" 顺丰="shunfeng" 圆通="yuantong" 中通="zhongtong" 韵达="yunda" 天天="tiantian" 汇通="huitongkuaidi" 全峰="quanfengkuaidi" 德邦="debangwuliu" 宅急送="zhaijisong"*/

  bindKeyInput: function(e){

    var danhao = e.detail.value;

    this.setData({
        
      inputValue: danhao,
    })

  },

  /** 查询 */
  search : function(e){
    
    let that = this;//保留page函数中object的引用，这个地方非常重要
    var danhao = that.data.inputValue;

    console.log(danhao)

    wx.request({
      url: Constant.KUAI_DI_URL, //仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        
        // that.data.rsData = res.data.data;
        
        // var rsData = that.data.rsData;
        that.setData({

          rsData: res.data.data,
        })
        
      }
    })


  },

  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },


  bindPickerChange: function(e){

    this.setData({

      index: e.detail.value,

    })
  }

})