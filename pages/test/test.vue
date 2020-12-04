<template>
	<view>
		<button @click="clicksNumber">手动获取地理位置</button>
		<view>地理位置：{{position}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				position:'',
				key:'981aeb7ed773a795f25e742b7cb05950'
			}
		},
		computed: {
			...mapState({
				num: state => state.home.num,
				name: state => state.home.name
			})
		},
			
		onLoad() {
			//微信
			// #ifdef MP-WEIXIN
			
			
			uni.login({
				success(res) {
					console.log(res)
				}
			})
	
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			
				// #endif
		},
		
		
		mounted(){
			this.getRegeo()
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
			
			
			
			// 自动获取地理位置
			getRegeo() {
				uni.showLoading({
					title: '获取信息中'
				});
				this.amapPlugin.getRegeo({
					success: (data) => {
						console.log(data)
						this.position = data[0].name;
						uni.hideLoading();
					}
				});
			
			},
			// 手动获取地理位置
			clicksNumber() {
				let that = this;
				uni.chooseLocation({ //打开地理位置
					success: (res) => { //调用成功打印回调
						console.log(res) //此时会得到所有的：经度、纬度、地理位置、和详细的城市位置
						console.log('位置名称' + res.name);
						console.log('详细地址' + res.address);
						console.log('纬度' + res.latitude);
						console.log('经度' + res.longitude);
						that.position = res.address; //得到详细地址
					}
				})
			},
		}
	}
</script>

<style>

</style>
