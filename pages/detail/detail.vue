<template>
	<view>
		详情页，ID为：{{ id }}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: ''
			};
		},
		onLoad(options) {
			this.id = options.id
			uni.setNavigationBarTitle({
				title: `${this.id}详情`
			})
		}
	}
</script>

<style lang="scss">

</style>
