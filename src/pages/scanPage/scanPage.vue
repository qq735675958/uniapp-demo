<template>
	<view>
		结果:{{res}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				res:''
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.res = options.res
			console.log(options.res)
		}
	}
</script>

<style>

</style>
