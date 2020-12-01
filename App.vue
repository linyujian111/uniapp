<script>
	import '.env.js'
	
	export default {
		
		globalData: process.uniEnv,

		
		onLaunch: function() {
			console.log(process.uniEnv)
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="scss">
	.page{
		width:100%;
		height: 100%;
		background-color: white;
		position: absolute;
	}
	
	.page-block{
		background-color: white;
	}
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>

