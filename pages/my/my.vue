<template>
	<URtabsSwiper></URtabsSwiper>
</template>

<script>
	import URtabsSwiper from "../../compoments/URtabsSwiper"
	
	// import {uniList,uniListItem,uniListChat} from '@dcloudio/uni-ui'
	export default {
		components: {
		
			URtabsSwiper,
			
		},
		data() {
			return {
				list: [{
									name: '待收货'
								}, {
									name: '待付款'
								}, {
									name: '待评价',
									count: 5
								}],
								current: 0
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			change(index) {
							this.current = index;
						}
		},

		mounted() {

		}
	}
</script>

<style scoped>

	.swiperTabs{
		height: 100vh;
		width: 100%;
		background-color: red;
		overflow:auto;
	}
</style>
