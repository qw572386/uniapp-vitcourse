<template>
	<vit-form class="login-contaner vit-form-container">
		<input class="input" placeholder-class placeholder="请输入用户名" />
		<input class="input" placeholder-class password placeholder="请输入密码"/>
		<view class="forget-password label">忘记密码？</view>
		<button class="btn">立即登录</button>
		<navigator url="../register/register" class="label">还没有账号？点此注册</navigator>
	</vit-form>
</template>

<script>
	import VitForm from '../../components/form/form.vue'
	export default {
		components: {
			VitForm
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
	@import '../../components/form/formsolt.scss';
	@import './login.scss';
</style>