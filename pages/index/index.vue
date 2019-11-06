<template>
	<view class="content">
		<view class="top-bar">
			<view class="searchbar" @click="handleSearch">
				<input type="text" value="" class="searchbar-input" confirm-type="search" placeholder="请输入搜索内容" disabled placeholder-style="color:#c0c0c0;font-size: 30upx" />
				<view class="icon search"></view>
			</view>
			<view class="icon cart"></view>
		</view>
		<view class="swiper">
			<view class="swiper-background" :style="{backgroundImage: currentCarousel && currentCarousel.src ? `url(${ currentCarousel.src })` : ''}"></view>
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="changeSwiper" :interval="4000" :duration="1000" >
					<swiper-item v-for="item in carouselList" :key="item.id" @click.stop="goToDetail(item.id)">
						<image :src="item.src"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view
						class="dots"
						v-for="(swiper, index) in carouselList"
						:class="[currentSwiper >= index ? 'on' : '']"
						:key="index"
					></view>
				</view>
			</view>
		</view>
		<view class="floor-content hot-tag">
			<floor-title title="热门标签" type="hotTags" />
			<scroll-view scroll-x="true" class="scroll-view-content tags-content">
				<view class="tags-content-item" v-for="item in tagList" :key="item._id" @click.stop="getCoursesByTag(item.name)">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<view class="floor-content good-lessons">
			<floor-title title="精选好课" type="goodLessons" />
			<scroll-view scroll-x="true" class="scroll-view-content">
				<view class="good-lessons-content">
					<lesson-item v-for="lesson in goodLessons" :key="lesson._id" :lesson="lesson" @goToDetail="goToDetail" />
				</view>
			</scroll-view>
		</view>
		<view class="floor-content new-lessons">
			<floor-title title="近期上新" type="newLessons" />
			<view class="new-lessons-content">
				<lesson-item v-for="lesson in newLessons" :key="lesson._id" :lesson="lesson" @goToDetail="goToDetail" />
			</view>
		</view>
		<view class="floor-content basic-lessons">
			<floor-title title="新手入门" type="basicLessons" />
			<scroll-view scroll-x="true" class="scroll-view-content">
				<view class="basic-lessons-content">
					<lesson-item v-for="lesson in basicLessons" :key="lesson._id" :lesson="lesson" @goToDetail="goToDetail" />
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
				currentSwiper: 0,
				carouselList: [
				],
				currentCarousel: {
				},
				tagList: [],
				goodLessons: [],
				newLessons: [],
				basicLessons: []
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
				this.currentSwiper = e.detail.current;
			},
			getCoursesByTag(tag) {
				console.log(tag)
			},
			handleSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			}
		},
		onLoad() {
			const that = this;
			that.$get('/carousel').then(res => {
				that.carouselList = res.data.data;
				that.currentCarousel = res.data.data[0]
			}).catch(err => {
				
			});
			that.$get('/tags').then(res => {
				that.tagList = res.data.data;
			}).catch(err => {
				
			});
			that.$post('/lesson', {
				type: '精选好课',
				pageNo: 1,
				pageSize: 6
			}).then(res => {
				that.goodLessons = res.data.data;
			}).catch(err => {
				
			})
			that.$post('/lesson', {
				type: '近期上新',
				pageNo: 1,
				pageSize: 6
			}).then(res => {
				that.newLessons = res.data.data;
			}).catch(err => {
				
			})
			that.$post('/lesson', {
				type: '新手入门',
				pageNo: 1,
				pageSize: 6
			}).then(res => {
				that.basicLessons = res.data.data;
			}).catch(err => {
				
			})
		}
	}
</script>

<style lang="scss">
	@import './index.scss'
</style>
