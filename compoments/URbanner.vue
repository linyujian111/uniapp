<template>
	<view class="banner">
		<u-swiper effect3d-previous-margin="60" height="400" :list="list" :effect3d="true"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		},

		mounted() {

		}
	}
</script>

<style lang="scss" scoped>

	

	/deep/ uni-swiper .uni-swiper-wrapper {
		background-color: white !important;
	}

	/deep/ swiper {
		background-color: white !important;

	}
</style>
