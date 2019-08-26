<template>
	<view class="content">
		<view class="top-bar">
			<view class="searchbar">
				<input type="text" value="" class="searchbar-input" confirm-type="search" placeholder="请输入搜索内容" placeholder-style="color:#c0c0c0;font-size: 30upx" />
				<view class="icon search"></view>
			</view>
			<view class="icon cart"></view>
		</view>
		<view class="carousel">
			<view class="carousel-background" :style="{backgroundImage: `url(${currentCarousel.src})`}"></view>
			<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel-content" @change="changeSwiper">
				<swiper-item v-for="item in carouselList" :key="item.id" @click="goToDetail(item.id)"  class="carousel-content-item">
					<image :src="item.src" class="image-item"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouselList: [
					{
						id: '10001',
						src: '//img.mukewang.com/5d26efae0001f8fb18720632.jpg'
					},
					{
						id: '10002',
						src: '//img.mukewang.com/5cf63a960001340f18720632.jpg'
					},
					{
						id: '10003',
						src: '//img.mukewang.com/5d4164f40001e2e716000540.jpg'
					},
					{
						id: '10004',
						src: '//img.mukewang.com/5d5a6bbc00013ebf09360316.jpg'
					},
					{
						id: '10005',
						src: '//img.mukewang.com/5d5b59460001ea1d18720632.jpg'
					},
				],
				currentCarousel: {
					id: '10001',
					src: '//img.mukewang.com/5d26efae0001f8fb18720632.jpg'
				}
			}
		},
		methods: {
			goToDetail(id) {
				uni.navigateTo({
					url: '../detail/detail?id=' + id
				})
			},
			changeSwiper(e) {
				this.currentCarousel = this.carouselList[e.target.current]
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>
