<template>

	<u-popup v-model="show" mode="left">
		<view style="width: 50vw">
			
			<button @click="closeURpopup">关闭</button>
		<view style="width:100%;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;">
			<view>我的订单</view>
			<view>></view>
		</view>
		
		<view style="width:100%;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;">
			<view>我的钱包</view>
			<view>></view>
		</view>
		
		<view style="width:100%;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;">
			<view>我的设置</view>
			<view>></view>
		</view>
		

		</view>
	</u-popup>
</template>

<script>
	// import {uniList,uniListItem,uniListChat} from '@dcloudio/uni-ui'
	export default {
		// components: {uniList,uniListItem,uniListChat},
		props:{
			show:{
				type: [Boolean],
				default:false
			}
		},
		data() {
			return {
				
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			closeURpopup(){
				this.$emit('closeURpopup',false)
			}
		},

		mounted() {

		}
	}
</script>

<style scoped>

</style>
