<template>
	<view id="fixedHeaderRoot">
	  <view id="knowPointHeader" class="knowPointHeader" :class="headerFixed?'isFixed':''">
	    <view><text>知识模块</text></view>
	    <view><text>知识点</text></view>
	    <view><text>能力要求</text></view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFixed: false,
				offsetTop: 0
			}
		},
		
	
	
		
		destroyed(){
		
		},
		
		mounted(){
			
		},
		methods:{
			
		}
		

	}
</script>

<style scoped lang="scss">
	.knowPointHeader {
		background-color: white;
	}
	.isFixed{
	  position: fixed;
	  top: px2rem(110);
	  left: px2rem(20);
	  right: px2rem(20);
	}
</style>
