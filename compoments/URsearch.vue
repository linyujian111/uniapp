<template>
	<view class="search">
		<!-- <uni-icons type="bars" size="30"></uni-icons> -->

		<uni-search-bar class="uni-search-bar" @confirm="search" @input="input"></uni-search-bar>

		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
	</view>
</template>

<script>
	// import {uniList,uniListItem,uniListChat} from '@dcloudio/uni-ui'
	export default {
		// components: {uniList,uniListItem,uniListChat},
		data() {
			return {

				keyword: '遥看瀑布挂前川'
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			search() {

			},
			input() {

			}
		},

		mounted() {

		}
	}
</script>

<style scoped lang="scss">
	.search {
		display: flex;
		align-items: center;
		width: 100%;

		.uni-search-bar {
			flex: 1;
		}
	}
</style>
