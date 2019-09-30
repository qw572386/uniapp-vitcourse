<template>
	<view class="container">
		<image src="../../static/logo.png" mode='aspectFit' class="logo"></image>
		<view class="logo-title">有课</view>
		<view class="form-box">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import './form.scss'
</style>

