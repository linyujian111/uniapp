<template>
	<view>
		<!-- 定位 -->
		<view class="search-view">
			<image src="../../../static/logo.png"></image>
			<text>asdsdasdasdedfs核实到发尾</text>
			<text>></text>
		</view>
		
		<!-- 搜索 -->
		<view class="search-cont">
			<view class="search" @click="">
				<image src="../../../static/logo.png" alt=""></image>
				<input type="text" disabled placeholder="麻辣烫">
			</view>
		</view>
		
		
		<!-- 轮播 -->
		<view>
			<swiper 
			class="swiper" 
			
			>
				<swiper-item v-for="item in data" :key="item">
					<view  v-for="item in data">
						<text>item.img</text>
						<text>item.title</text>
					</view>
				</swiper-item>
				
				
			</swiper>
			
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				lable:[
					[{
						img:"",
						title:'美食'
					}]
				]
			}
		}
	}
</script>

<style scoped>
	.search{
		display:flex;
		height:70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 35upx;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.search-view{
		width: 100%;
	}
	
	.search-view image{
		width:35upx;
		height:35upx;
	}
	
	
		.search-cont{
			background-color: #ccc;
			display: flex;
			justify-content: space-between;
		}
	
	
	.search-cont image{
		width:35upx;
		height:35upx;
	}
	

	.search input{
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		font-size: 25upx;
		color: #666666;
		
	}
	
	
</style>
