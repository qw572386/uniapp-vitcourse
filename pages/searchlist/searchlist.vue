<template>
	<view class="search-container">
		<lesson-item @goToDetail="goToDetail" v-for="lesson in resultList" :key="lesson.id" :lesson="lesson" v-if="resultList.length"></lesson-item>
		<view class="no-result" v-else>
			<text>没有搜到相关产品，请换个关键词试试</text>
			<view class="related-lessons">
				<lesson-item @goToDetail="goToDetail" v-for="lesson in relatedLessons" :key="lesson.id" :lesson="lesson"></lesson-item>
			</view>
		</view>
	</view>
</template>

<script>
	import LessonItem from '../../components/lessonItem.vue';
	export default {
		components: {
			LessonItem
		},
		data() {
			return {
				resultList: [
					// {
					// 	id: '10001',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10002',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10003',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10004',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// }
				],
				relatedLessons: [
					// {
					// 	id: '10001',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10002',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10003',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// },
					// {
					// 	id: '10004',
					// 	title: 'Java编程基础',
					// 	src: 'https://img.mukewang.com/5d26efae0001f8fb18720632.jpg',
					// 	view: 2000,
					// 	attention: 1000,
					// 	comment: 598
					// }
				]
			};
		},
		methods: {
			goToDetail(id) {
				console.log(id)
			}
		}
	}
</script>

<style lang="scss">
@import './searchlist.scss'
</style>
