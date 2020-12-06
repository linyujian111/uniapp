<script>
	import '.env.js'
	
	export default {
		
		globalData: process.uniEnv,

		
		onLaunch: function() {
			// console.log(process.uniEnv)
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError:function(error){
			console.log('报错了，报错提示为:'+error)
		}
	}
</script>

<!-- 全局样式 -->
<style lang="scss">
	@import url("./static/fonts/iconfont.css");
	.page{
		width:100%;
		height: 100%;
		background-color:$u-type-info-light;
		position: absolute;
		overflow: auto;
	}
	
	.page-block{
		background-color: white;
	}
	
	.styleClass{
			width: 375rpx;
			height: 375rpx;
			background-color: blue;
		}
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	
	
</style>

