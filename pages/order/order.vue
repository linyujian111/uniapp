<template>
	<view class="full">
		
		<view class="" v-for="i in 50" :key="i">
			22222222222
		</view>
		
		<view class="sticky-box">
			<view style="width: 250upx;text-align: center;"><text class="textcenter">条件1</text></view>
			<view style="width: 250upx;text-align: center;"><text class="textcenter">条件2</text></view>
			<view style="width: 250upx;text-align: center;"><text class="textcenter">条件3</text></view>
		</view>
		
		<view class="" v-for="i in 50" :key="i">
			22222222222
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style>
.full{
	width: 750upx;
	margin: 0;
	padding: 0;
}

.sticky-box {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	position: -webkit-sticky;
	/* #endif */
	position: sticky;
	top: var(--window-top);
	z-index: 99;
	flex-direction: row;
	margin: 0px;
	padding: 15px 0 15px 0;
	background-color: #F4F5F6;
	border-bottom-style: solid;
	border-bottom-color: #E2E2E2;
}

.textcenter{
	text-align: center;
	font-size: 18px;
}
</style>
