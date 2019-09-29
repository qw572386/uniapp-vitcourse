<template>
	<view class="login-box">
		<image src="../../static/logo.png" mode='aspectFit' class="logo"></image>
		<view class="logo-title">有课</view>
		<view class="login-form">
			<input class="input" placeholder-class placeholder="请输入用户名" />
			<input class="input" placeholder-class password placeholder="请输入密码"/>
			<view class="forget-password label">忘记密码？</view>
			<button class="btn">立即登录</button>
			<navigator url="../register/register" class="label">还没有账号？点此注册.</navigator>
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
	@import './login.scss'
</style>
