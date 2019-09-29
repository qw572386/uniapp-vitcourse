<template>  
    <view class="container">  
		
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="userInfo.portrait || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username">{{userInfo.nickname || '游客'}}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="/static/vip-card-bg.png" mode=""></image>
				<view class="b-btn">
					立即开通
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					有课会员
				</view>
				<text class="e-m">￥68元</text>
				<text class="e-b">开通会员享全站资源终身免费下载特权</text>
			</view>
		</view>
		
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/arc.png"></image>
			
			<!-- 我的关注，收藏，评论 -->
			<view class="opearte-section">
				<view class="opearte-item" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon">0</text>
					<text>关注</text>
				</view>
				<view class="opearte-item"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon">0</text>
					<text>收藏</text>
				</view>
				<view class="opearte-item" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon">0</text>
					<text>评论</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view class="sec-header">
					<text class="yticon icon history"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list" v-if="historyList.length">
					<image v-for="item in historyList" @click="navTo('/pages/product/product')" :key="item.id" src="item.src" mode="aspectFill"></image>
				</scroll-view>
				<view class="no-history" v-else>
					<text>您还没有浏览任何课程</text>
				</view>
				<list-cell icon="fenxiang" iconColor="#9789f7" title="分享" tips="邀请好友赢10万大礼"></list-cell>
				<list-cell icon="set" iconColor="#e07472" title="设置" @eventClick="navTo('/pages/set/set')"></list-cell>
				<list-cell icon="about" iconColor="#000" title="关于" @eventClick="navTo('/pages/about/about')"></list-cell>
			</view>
		</view>
			
		
    </view>  
</template>  
<script>  
	import listCell from '@/components/listCell';
    import {  
        mapState 
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				historyList: []
			}
		},
		onLoad(){
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/login/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss'>
	@import  './my.scss'
</style>