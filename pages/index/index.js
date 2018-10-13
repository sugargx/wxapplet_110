Page({
  data: {
    selected0:false,
    selected1: true,
    selected2: false,
    abs:"none",
  },
  selected0: function (e) {
    this.setData({
      selected0: true,
      selected1: false,
      selected2: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected0: false,
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected0: false,
      selected1: false,
      selected2: true
    })
  },
  onLoad: function(e){
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          'longitude':res.longitude,
          'latitude':res.latitude,
        })
      },
    });
    var points = new Array;
    points.push({
        id : 1,
        longitude :118.016556, 
        latitude:36.815959,
        title:"淄博市公安局张店分局西六路派出所",
        name:"淄博市公安局张店分局西六路派出所",
        callout:{
          content:"淄博市公安局张店分局西六路派出所",
          display: 'BYCLICK',
        },
        label:{
          content: "淄博市公安局张店分局西六路派出所",
          color:'#000000',
        }
    });
    points.push({
      id: 2,
      longitude: 118.045545,
      latitude: 36.827447,
      title:"淄博市公安局张店分局-停车场"
    });
    points.push({
      id: 3,
      longitude: 118.059863,
      latitude: 36.806205,
      title: "淄博市公安局张店分局商场派出所"
    });
    this.setData({
      'points':points
    });
  },
  baojing:function(e){
    var ocp = ".ocp";
    var abs = "block";
    this.setData({
      'ocp':ocp,
      'abs': abs,
    });
  },
  quxiao:function(e){
    this.setData({
      'ocp': '',
      'abs': 'none',
    })
  },
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  type3: function (e) {
    // TODO 表单页，调用相册接口
    wx.navigateTo({
      url: '../form/form',
    })
  },
})