<template>
	<view class="floor-title">
		<view class="floor-title-left">
			{{ title }}
		</view>
		<view class="floor-title-right" @click="handleShowMore">
			<text>更多</text><view class="icon more"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			}
		},
		methods: {
			handleShowMore() {
				console.log(this.type)
			}
		}
	}
</script>

<style lang="scss">
	.floor-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 10upx 20upx;
		font-size: .8rem;
		&-right{
			color: #999999;
			font-size: .65rem;
			display: flex;
			align-items: center;
			.icon{
				color: #999999;
				font-size: .65rem;
				margin-left: 5upx;
			}
		}
	}
</style>
