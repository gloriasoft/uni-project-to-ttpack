const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  defaultTap () {
    console.log(2222)
    tt.navigateTo({
      url: 'index' // 指定页面的url
    });
  }
})
