<template>
	<vit-form class="vit-form-container">
		<input class="input" placeholder-class placeholder="请输入用户名" />
		<input class="input" placeholder-class password placeholder="请输入密码"/>
		<input class="input" placeholder-class password placeholder="请再次输入密码"/>
		<button class="btn login">立即注册</button>
		<navigator url="../login/login" class="label">已有账号，点此去登录</navigator>
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
	@import './register.scss';
</style>
