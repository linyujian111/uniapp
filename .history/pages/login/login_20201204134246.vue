<template>
	<view>

		<view>
			<view>
				<view class='header'>
					<!-- <image src='../../static/img/wx_login.png'></image> -->
				</view>
				<view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
					授权登录
				</button>
				
				<button @click="getRegeo">
					获取地址
				</button>
				
				<button @click="clicksNumber">
					获取地址
				</button>
				
				<!-- <URaddress></URaddress> -->
			</view>
		</view>

	</view>
</template>

<script>
	
	// import URaddress from '../../compoments/URaddress'
	export default {
		components:{
			// URaddress
		},
		data() {
			return {
				position:'',
				
				
				amapPlugin: null,
				key: '981aeb7ed773a795f25e742b7cb05950',

				addressName: '',
				weather: {
					hasData: false,
					data: []
				},


				SessionKey: '',
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				isCanUse: uni.getStorageSync('isCanUse') || true //默认为true
			};
		},
		methods: {
		
			//第一授权获取用户信息===》按钮触发
			wxGetUserInfo() {

				uni.getUserInfo({
					provider: 'weixin',
					success: (infoRes) => {
						this.nickName = infoRes.userInfo.nickName; //昵称
						this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
							this.updateUserInfo();
						} catch (e) {}
					},
					fail(res) {}
				});
			},

			//登录
			login() {
				// let _this = this;
				uni.showLoading({
					title: '登录中...'
				});

				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						let code = loginRes.code;

						if (!this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: (infoRes) => {

									console.log(infoRes)
									//获取用户信息后向调用信息更新方法
									this.nickName = infoRes.userInfo.nickName; //昵称
									this.avatarUrl = infoRes.userInfo.avatarUrl; //头像


									this.updateUserInfo(); //调用更新信息方法
								}
							});
						}

						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						uni.request({
							url: 'xxxxx',
							data: {
								code: code,
							},
							method: 'GET',
							header: {
								'content-type': 'application/json'
							},
							success: (res) => {
								uni.showModal()
								//openId、或SessionKdy存储//隐藏loading
								uni.hideLoading();
							},
							fail: (err) => {
								console.log(err)
								uni.hideLoading();
							}
						});
					},
				});
			},

			//向后台更新信息
			updateUserInfo() {


				console.log(this.$store.state.appKey)
				console.log(this.customerId)
				console.log(this.nickName)
				console.log(this.avatarUrl)

				uni.request({
					url: 'url', //服务器端地址
					data: {
						appKey: this.$store.state.appKey,
						customerId: this.customerId,
						nickName: this.nickName,
						headUrl: this.avatarUrl
					},
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						if (res.data.state == "success") {
							uni.reLaunch({ //信息更新成功后跳转到小程序首页
								url: '/pages/index/index'
							});
						}
					}

				});
			}
		},
		onLoad() { //默认加载
	
			this.login();

		}
	}
</script>
<style>
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
	}

	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}

	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>
