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
				<swiper-item v-for="item in carouselList" :key="item.id" @click.stop="goToDetail(item.id)"  class="carousel-content-item">
					<image :src="item.src" class="image-item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="floor-content hot-tag">
			<floor-title title="热门标签" type="hotTags" />
			<scroll-view scroll-x="true" class="scroll-view-content tags-content">
				<view class="tags-content-item" v-for="item in tagList" :key="item" @click.stop="getCoursesByTag(item)">
					{{item}}
				</view>
			</scroll-view>
		</view>
		<view class="floor-content good-lessons">
			<floor-title title="精选好课" type="goodLessons" />
			<scroll-view scroll-x="true" class="scroll-view-content">
				<view class="good-lessons-content">
					<lesson-item v-for="lesson in lessonList" :key="lesson.id" :lesson="lesson" @goToDetail="goToDetail(lesson.id)" />
				</view>
			</scroll-view>
		</view>
		<view class="floor-content new-lessons">
			<floor-title title="近期上新" type="newLessons" />
			<view class="new-lessons-content">
				<lesson-item v-for="lesson in lessonList" :key="lesson.id" :lesson="lesson" @goToDetail="goToDetail(lesson.id)" />
			</view>
		</view>
		<view class="floor-content basic-lessons">
			<floor-title title="新手入门" type="basicLessons" />
			<scroll-view scroll-x="true" class="scroll-view-content">
				<view class="basic-lessons-content">
					<lesson-item v-for="lesson in lessonList" :key="lesson.id" :lesson="lesson" @goToDetail="goToDetail(lesson.id)" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import FloorTitle from '../../components/floorTitle.vue'
	import LessonItem from '../../components/lessonItem.vue'
	import { baseUrl } from '../../config/config.js'
	export default {
		components: {
			FloorTitle,
			LessonItem
		},
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
				},
				tagList: ['vue', 'react', '前端', 'java', 'springBoot', 'MySQL', '大数据', '算法', 'web', 'PHP'],
				lessonList: [
					{
						id: '10001',
						title: 'Java编程基础',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					},
					{
						id: '10002',
						title: 'Java编程基础',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					},
					{
						id: '10003',
						title: 'Java编程基础',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					},
					{
						id: '10004',
						title: 'Java编程基础',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					},
					{
						id: '10005',
						title: 'Java编程基础',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					},
					{
						id: '10006',
						title: 'Java编程基础dsfsdfdsfgsdgf',
						src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
						view: 2000,
						attention: 1000,
						comment: 598
					}
				]
			}
		},
		methods: {
			goToDetail(id) {
				id && uni.navigateTo({
					url: '../detail/detail?id=' + id
				})
			},
			changeSwiper(e) {
				this.currentCarousel = this.carouselList[e.target.current]
			},
			getCoursesByTag(tag) {
				console.log(tag)
			}
		},
		onLoad() {
			this.$get('/carousel').then(res => {
				this.carouselList = res.data.data;
				this.currentCarousel = res.data.data[0]
			}).catch(err => {
				
			})
		}
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>
