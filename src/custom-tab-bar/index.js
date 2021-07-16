Component({
  data: {
    selected: 0,
    color: "#909399",
		selectedColor: "#1E1E1E",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/static/common/home.png",
        selectedIconPath: "/static/common/active-home.png",
        text: "首页"
      },
      {
        pagePath: "/pages/my/my",
        iconPath: "/static/common/my.png",
        selectedIconPath: "/static/common/active-my.png",
        text: "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
    handleScan() {
		wx.scanCode({
		  success: (res) => {
			var result = res.result;
			wx.navigateTo({
			  url: `/pages/scanPage/scanPage?res=${result}`
			})
		  }
		})
    }
  }
})