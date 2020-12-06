<template>
	<view>
		<text>详情页1</text>
		<text>详情页2</text>
		<text>详情页3</text>
		<!-- space显示连续空格 emsp中文字符-->
		<!-- selectable是否可选中 -->
	
		
		<view>
			<text  space="ensp">详情  页4</text>
			
		</view>
		
		<view>
			<text selectable space="emsp" style="font-size:30px">详情  页4</text>
			
		</view>
		<view class="boxi">
			3333333333
			
			<view class="box" hover-class="active" :hover-start-time="2000" :hover-stay-time="2000">
				222222222222222222
			</view>
		</view>
		
		<view>
			按钮
		<button type="primary" @click="goto">按钮</button>
		<button type="default" @click="goto1('20',$event)">按钮</button>
		<button type='warn'>按钮</button>
		<button type='warn' plain disabled="">按钮</button>
		<button type='warn'  disabled>按钮</button>
		<button type='warn'  loading>按钮</button>
		</view>
		
		<br>
		
		
		<view>
			图片
		<image mode='aspectFill' src="http://www.nczwz.com/public/Home/images/bg/error-bg.jpg"></image>
		<image mode="scaleToFill" src="http://www.nczwz.com/public/Home/images/bg/error-bg.jpg"></image>
		<image  src="http://www.nczwz.com/public/Home/images/bg/error-bg.jpg"></image>
		
		</view>
		
		
		<view class="styleClass iconfont icon-leimupinleifenleileibie"  >
			
		
		</view>
		
		<view class="iconfont icon-leimupinleifenleileibie">
			
		</view>
		
		<view class="mybox"  >
			<view class="item">
				
			</view>
		
		</view>
		
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		// 页面生命周期
		
		// 监听页面加载,其参数为上一个页面传递的参数,参数类型为object(用于页面传参)
		onLoad(options){
			console.log('onLoad： 页面加载')
			console.log(options)
			
			
		},
		
		// 监听页面先死,页面每次出现在屏幕上都触发,包括下级页面点返回露出当前页面
		onShow(){
			console.log('onShow：页面显示')
		},
		
		//监听页面初次渲染完成
		onReady(){
			console.log('onReady：页面初次渲染完成')
		},
		//监听页面隐藏
		onHide(){
			console.log('onHide：页面隐藏')
		},
		
		onUnload(){
			console.log('onUnload：页面卸载')
		},
		
		created(){
			console.log('created')
		},
		
		mounted(){
			console.log('mounted')
		},
		onResize() {
			console.log('onPullDownRefresh: 页面窗口尺寸')
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh: 页面下拉刷新')
			
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			goto(e){
				console.log(e)
			},
			goto1(val,e){
				console.log(val)
				console.log(e)
			}
		}
	
		// 应用生命周期
		
		// uniapp 初始化完成时触发，（全局只触发一次）
		// onLaunch(){},
		
		// // uniapp启动时触发，后台进入前台显示时触发
		// onShow(){},
		
		// // 前台进入后台
		// onHide(){},
		
		// uniapp报错触发
		// onError(){},
		
	
		
	}
</script>


<!-- 局部样式 -->
<style lang="scss">
	
	@import url("./detail.css");
	.mybox{
		width: 750rpx;
		height: 375rpx;
		background: $global-color;
		.item{
			width: 375rpx;
			height: 100rpx;
			background-color: red;
		}
	}
	.boxi{
		width: 150rpx;
		height: 150rpx;
		background-color: red;
	}
.box{
	width: 100rpx;
	height: 100rpx;
	background-color: skyblue;
}

.active{
		background-color: red;
	}
	
	
</style>
