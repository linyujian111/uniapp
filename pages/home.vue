<template>
	<view class="page">
		<URbanner></URbanner>
	<view class="cardbox">
			<view class="URtitle">热门电影</view>
			<template>
				<u-grid :col="2">
					<u-grid-item>
						<u-image border-radius="10rpx" width="320rpx" height="200rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"
						 :fade="true" duration="450"></u-image>
						<view class="grid-text">图片</view>
					</u-grid-item>
					<u-grid-item>
						<u-image border-radius="10rpx" width="320rpx" height="200rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"
						 :fade="true" duration="450"></u-image>
						<view class="grid-text">锁头</view>
					</u-grid-item>
					<u-grid-item>
						<u-image border-radius="10rpx" width="320rpx" height="200rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"
						 :fade="true" duration="450"></u-image>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
					<u-grid-item>
						<u-image border-radius="10rpx"width="320rpx" height="200rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"
						 :fade="true" duration="450"></u-image>
						<view class="grid-text">沙漏</view>
					</u-grid-item>
				</u-grid>
			</template>
		</view>


		<u-grid :col="5" class="nav3box" :border="false">
			<u-grid-item>
				<u-image border-radius="50%" width="100rpx" height="100rpx" class="nav4img" src="https://cdn.uviewui.com/uview/example/fade.jpg"
				 :fade="true" duration="450"></u-image>

				<view class="grid-text">最新电影</view>
			</u-grid-item>
			<u-grid-item>
				<u-image border-radius="50%" width="100rpx" height="100rpx" src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/4b313f6304a4f683cca23f7426dc37f0_254_144.png"
				 :fade="true" duration="450"></u-image>

				<view class="grid-text">最热电影</view>
			</u-grid-item>
			<u-grid-item>
				<u-image border-radius="50%" width="100rpx" height="100rpx" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2731367530,4214910307&fm=26&gp=0.jpg"
				 :fade="true" duration="450"></u-image>

				<view class="grid-text">欧美大片</view>
			</u-grid-item>
			<u-grid-item>
				<u-image border-radius="50%" width="100rpx" height="100rpx" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=359295276,750227806&fm=26&gp=0.jpg"
				 :fade="true" duration="450"></u-image>

				<view class="grid-text">国产电影</view>
			</u-grid-item>
			<u-grid-item>
				<u-image border-radius="50%" width="100rpx" height="100rpx" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2582098631,558775931&fm=26&gp=0.jpg"
				 :fade="true" duration="450"></u-image>

				<view class="grid-text">日本动漫</view>
			</u-grid-item>
		</u-grid>
	<view class="cardbox">
			<view class="URtitle">热门电影</view>
			<URscrollY></URscrollY>
		</view>
	
	


		<view class="cardbox">
			<view class="URtitle">热门电影</view>
			<URscrollY></URscrollY>
		</view>






		<URpopup :show="showURpopup" @closeURpopup="closeURpopup"></URpopup>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapState,
		mapActions,
		mapMutations
	} from "vuex"

	import homeApi from "../api/home/homeApi.js"
	import URbanner from "../compoments/URbanner.vue"
	import URscrollY from "../compoments/URscrollY.vue"

	export default {
		components: {
			URbanner,
			URscrollY
		},
		methods: {
			...mapActions(['handleSetNum2']), // 引入store/modules/home.js的方法
			...mapMutations(['handleSetNum1']), // 引入store/modules/home.js的方法
			setNum1() {
				// this.$store.commit('handleSetNum1','hello')
				this.handleSetNum1('1') // 调用，传值
			},
			setNum2() {
				this.handleSetNum2('2') // 调用，传值
			},


			nav() {
				console.log('44')
				uni.navigateTo({
					url: '../my/my'
				})
			},


			// 关闭URpopop
			closeURpopup(val) {
				this.showURpopup = val;
			},


		},
		computed: {
			...mapState({
				num: state => state.home.num,
				name: state => state.home.name
			})
		},
		mounted() {

			this.showURpopup = false;
		},

		data() {
			return {
				// 随意填充一些模拟数据，以撑开元素，供骨架组件查询和模拟块状数据
				userInfo: {
					avatarUrl: 'https://qlogo2.store.qq.com/qzone/1416956117/1416956117/100?1531323520',
					nickName: 'uView'
				},
				lists: [
					'君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。',
					'人生得意须尽欢，莫使金樽空对月',
					'天生我材必有用，千金散尽还复来',
				],
				loading: true, // 是否显示骨架屏组件

				isfixed: false,
				isfixed1: false,
				mytop: '',
				show: true,
				list: [{
						id: '_1',
						name: '热门商品'
					},
					{
						id: '_2',
						name: '热门店铺'
					},
					{
						id: '_3',
						name: '热门电影'
					}, {
						id: '_4',
						name: '热门电影'
					},
					{
						id: '_5',
						name: '热门电影'
					}
				],
				value: 'hello',
				current: 0,
				showURpopup: false,
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		},
		onLoad() {
			// 通过延时模拟向后端请求数据，调隐藏骨架屏
			setTimeout(() => {
				this.loading = false;
			}, 4000)
		}
	}
</script>

<style scoped lang="scss">
	.URtitle {
		height: 80rpx;
		max-width: 100%;
		background: white;
		line-height: 80rpx;
		padding-left: 20rpx;
		margin: 10upx 0upx;
		font-size: 16px;
		font-weight: bold;
	}

	.container {
		padding: 20rpx 60rpx;
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	.lists {
		margin: 10px 0;
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}

	.nav3box .grid-text {
		margin-top: 20rpx;
	}

	.cardbox {
		margin: 15rpx 0;
		max-width: 100%;
		background-color: white;
		padding: 10rpx;
		border-radius: 10upx;
	}
</style>
