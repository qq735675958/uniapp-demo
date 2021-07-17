<template>
	<view class="content">
		<view class="header-top">
			<u-search @focus='focus' @custom='search'  @search='search' @blur='blur' placeholder="输入内容" v-model="keyword" :show-action='showAction'></u-search>
		</view>
		<view class="">
			<u-button type="primary" @click="show">主要按钮</u-button>
		</view>
		<hy-model  v-model="isShow" @cancel='cancel' @confirm='confirm'>
				内容
		</hy-model>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';
	import HyModel from '@/components/hyModel/index.vue'
	export default Vue.extend({
		components:{
			'hy-model':HyModel
		},
		data() {
			return {
				isShow:false,
				keyword: '',
				showAction:false
			}
		},
		methods: {
			cancel(){
				this.isShow = false
			},
			confirm(){
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(() => {
					uni.hideLoading()
					this.isShow = false
				},3000)
			},
			blur(){
				this.showAction = false
			},
			focus(){
				console.log(1)
				this.showAction = true
			},
			search(){
				uni.showToast({
					title: this.keyword,
					duration: 2000
				});
			},
			show(){
				this.isShow = true
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
