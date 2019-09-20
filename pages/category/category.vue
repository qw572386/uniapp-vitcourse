<template>
	<view class="category">
		<view class="category-wrapper" v-if="catrgoryList.length>0">
			<!-- 左边导航 -->
			<scroll-view scroll-y="true" class="left-wrapper" scroll-with-animation="true" :scroll-top="left_scroll">
				<view class="left-content">
					<view class="title-content" :class="select_index === index?'onSelected':''" v-for="(title,index) in catrgoryList"
					 :key="title.id" @tap="choose(index)">{{title.name}}</view>
				</view>
			</scroll-view>
			<!-- 右边内容 -->
			<scroll-view scroll-y="true" class="right-wrapper" scroll-with-animation="true" :scroll-top="right_scroll" @scroll="myscroll">
				<view class="right-content">
					<!-- banner区域 -->
					<view class="banner-wrapper">
						<swiper class="swiper-content" :autoplay="true" :interval="3000" :circular="true">
							<swiper-item class="swiper-item" v-for="imgs in swiperList" :key="imgs.id">
								<image class="swiper-img" :src="imgs.src"></image>
							</swiper-item>
						</swiper>
					</view>
					<!-- 产品区 -->
					<view class="product-wrapper">
						<view class="category-item" :id="'list'+c_index" v-for="(c_item,c_index) in catrgoryList" :key="c_item.id">
							<view class="category-title">{{c_item.name}}</view>
							<view class="category-content">
								<view class="product-item" v-for="(p_item,p_index) in c_item.content" :key="p_item.id">
									<image class="product-img" :src="p_item.thumb"></image>
									<text class="product-title">{{p_item.cname}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windows_height: 0, //屏幕高度
				swiperList: [],
				catrgoryList: [],
				select_index: 0,
				right_height: [], //右侧每个内容的高度集合
				right_scroll: 0, //右侧的滑动值
				left_height: 0, //左侧总高度
				left_scroll: 0, //左侧滑动值
				last: 0,
			}
		},
		onLoad() {
			this.init();
			this.windows_height = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			init() {
				// uni.request({
				// 	url: 'https://www.easy-mock.com/mock/5d351e87b5e1f213739d6498/shop/categoryList', //仅为示例，并非真实接口地址。
				// 	method: 'GET',
				// 	success: (res) => {
				// 		if (res.data.error === 0) {
				// 			this.catrgoryList = res.data.data.list;
				// 			this.swiperList = res.data.data.banner;
				// 			this.$nextTick(() => {
				// 				this.getHeightList();
				// 			})
				// 		}
				// 	}
				// });
				const { data: { list, banner } } = require('../../data/categoryList.json');
				this.catrgoryList = list;
				this.swiperList = banner;
				this.$nextTick(() => {
					this.getHeightList();
				})
			},
			getHeightList() {
				let _this = this;
				let selectorQuery = uni.createSelectorQuery();
				selectorQuery.select('.left-content').boundingClientRect(function(rects) {
					_this.left_height = rects.height;
				});
				selectorQuery.selectAll('.category-item').boundingClientRect(function(rects) {
					_this.right_height = rects.map((item) => item.top);
					console.log(_this.right_height)
				}).exec();
			},
			choose(index) {
				if (this.select_index === index) {
					return;
				}
				this.select_index = index;
				// 加入防抖
				if (this.timeout) {
					clearTimeout(this.timeout); //清除计时器				
				}
				this.timeout = setTimeout(() => {
					this.right_scroll = this.right_height[index] - 110;
				}, 300)
			}, 
			myscroll(e) {
				//引入节流	
				let right_content_height = e.detail.scrollHeight - this.windows_height;
				if (right_content_height == e.detail.scrollTop) {
					return;
				}
				let scroll_top = e.detail.scrollTop + 110; //110是banner图的高度
				//判断当前的scrollTop在哪个区间内;
				let now = +new Date();
				if (now - this.last > 100) {		
					this.last = now;
					let active_index = this.right_height.findIndex((value, index, arr) => value <= scroll_top && scroll_top < arr[index + 1]);
					this.select_index = active_index;
					if (this.left_height - this.windows_height) {
						//如果有超出部分
						let diff = this.left_height - this.windows_height
						this.left_scroll = Math.round((active_index * diff) / (this.catrgoryList.length - 1))
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './category.scss'
</style>
