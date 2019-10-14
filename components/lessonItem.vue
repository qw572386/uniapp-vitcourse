<template>
	<view class="lesson-item" @click="handleLesson">
		<image :src="lesson.src" mode="" class="lesson-item-img"></image>
		<view class="lesson-item-content">
			<view class="lesson-item-content-title">
				{{lesson.title}}
			</view>
			<view class="lesson-item-content-detail">
				<view class="views count">
					<view class="icon md-eye"></view>
					<text>{{lesson.view}}</text>
				</view>
				<view class="attentions count">
					<view class="icon attention"></view>
					<text>{{lesson.attention}}</text>
				</view>
				<view class="comments count">
					<view class="icon comment"></view>
					<text>{{lesson.comment}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			lesson: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			handleLesson() {
				this.$emit('goToDetail', this.lesson.id)
			}
		}
	}
</script>

<style lang="scss">
.lesson-item{
	width: 330upx;
	height: 330upx;
	box-sizing: border-box;
	margin: 10upx;
	box-shadow: 0 1px 2px 0px rgba(0,0,0,.1);
	background: #fff;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	&:hover{
		box-shadow: 0 1px 5px 0px rgba(0,0,0,.2);
	}
	&-img{
		width: 100%;
		height: 200upx;
	}
	.lesson-item-content{
		width: 100%;
		box-sizing: border-box;
		padding: 10upx;
		height: 130upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&-title{
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		&-detail{
			display: flex;
			justify-content: space-between;
			font-size: .5rem;
			color: #999;
			.count{
				display: flex;
				align-items: center;
				.icon{
					font-size: .5rem;
					color: #999;
					margin-right: 5upx;
				}
			}
		}
	}
}
</style>
