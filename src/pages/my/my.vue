<template>
  <view>
    <u-field
			v-model="mobile"
			label="手机号"
			placeholder="请填写手机号"
      @focus='focus'
		>
		</u-field>
    <u-keyboard mode="number" safe-area-inset-bottom @change="valChange" @backspace="backspace" v-model="show"></u-keyboard>
  </view>
</template>

<script>

export default {
  components: {},
  data: () => ({
    mobile:'',
    value: '',
		show: false
  }),
  computed: {},
  methods: {
    focus(){
      this.show = true;
    },
    valChange(val) {
				// 将每次按键的值拼接到value变量中，注意+=写法
			this.mobile += val;
			console.log(this.mobile);
		},
			// 退格键被点击
    backspace() {
      // 删除value的最后一个字符
      if(this.value.length) this.value = this.value.substr(0, this.value.length - 1);
      console.log(this.value);
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
    
    
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() {
  },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {
    setInterval(function(){
        uni.hideKeyboard();//隐藏软键盘
        // plus.key.hideSoftKeybord();
    },50);
  },
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style></style>
