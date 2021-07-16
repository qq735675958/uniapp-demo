<template>
	<view class="content">
		<view class="header-top">
			<u-search @focus='focus' @custom='search'  @search='search' @blur='blur' placeholder="输入内容" v-model="keyword" :show-action='showAction'></u-search>
		</view>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				keyword: '',
				showAction:false
			}
		},
		methods: {
			blur(){
				this.showAction = false
			},
			focus(){
				console.log(1)
				this.showAction = true
			},
			search(){
				console.log(this.keyword)
				uni.showToast({
					title: this.keyword,
					duration: 2000
				});
			}
		}
	});
</script>

<style lang='scss' scoped>
	.header-top{
		height: 100rpx;
		width: 100%;
		background: #fff;
		line-height: 100rpx;
		padding: 0 16rpx;
	}
</style>
