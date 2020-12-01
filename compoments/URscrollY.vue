<template>
	<view>
	
		<scroll-view  scroll-x="true" class="page-block scroll-Y">
			
			<view class="card" v-for="i in 10" :key="i">
				<view class="card-box">
					<image class="card-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1396906246,2703692697&fm=26&gp=0.jpg" mode=""></image>
					<view class="card-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="card-star">
						<image class="card-star-img"  src="../static/xx.png"></image>
						<image class="card-star-img"  src="../static/xx.png"></image>
						<image class="card-star-img"  src="../static/xx.png"></image>
						<image class="card-star-img"  src="../static/xx.png"></image>
						<image class="card-star-img"  src="../static/xx.png"></image>
						<view class="card-star-score">9.1</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style>
	
	.scroll-Y {
		width: 100%;
		white-space: nowrap;
		
	
	}
	.card{
		display: inline-block;
		margin-right: 20upx;
		
	}
	.card-box{
		display: flex;
		flex-direction: column;
	}
	.card-img{
		width:200upx;
		height:270upx;
		border-radius: 10upx;
	}
	
	.card-name{
		width:200upx;
		margin-top: 10upx;
		font-size: 14px;
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card-star{
		margin-top: 6upx;
		display: flex;
		flex-direction: row;
	
		align-items: center;
	}
	.card-star-img{
		width: 20upx;
		height: 20upx;
		margin-left: 3upx;
	}
	.card-star-score{
		margin-left: 8upx;
		color: gray;
	}
</style>
