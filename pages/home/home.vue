<template>
	<view class="home">
		<URsearch></URsearch>
		<URbanner></URbanner>


		<URpopup :show="showURpopup" @closeURpopup="closeURpopup"></URpopup>

		<view class="sticky-box">
			<u-tabs class="tabsbox" name="cate_name" count="cate_count" :list="list" :is-scroll="false" :current="current"
			 @change="change"></u-tabs>

		</view>
		
		<view v-show="current==0">
			
			<view class="card" v-for="i in 100" :key="i">
				{{i++}}
			</view>
		</view>
	
	
	<view v-show="current==1">
		
		<view class="card" v-for="i in 80" :key="i">
				{{i++}}
		</view>
	</view>
		
	</view>
</template>

<script>
	import {
		mapGetters,
		mapState,
		mapActions,
		mapMutations
	} from "vuex"
	import homeApi from "../../api/home/homeApi.js"
	import URbanner from "../../compoments/URbanner"
	import URsearch from "../../compoments/URsearch"
	import URgrid from "../../compoments/URgrid"
	import URtabsSwiper from "../../compoments/URtabsSwiper"
	import URpopup from "../../compoments/URpopup"
	import URscrollY from "../../compoments/URscrollY"
	import URtitle from "../../compoments/URtitle"
	import URxd from "../../compoments/URxd.vue"

	export default {
		components: {
			URbanner,
			URsearch,
			URgrid,
			URtabsSwiper,
			URpopup,
			URscrollY,
			URtitle,
			URxd
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
		}
	}
</script>

<style>
	.full {
		/* width: 750upx;
	margin: 0;
	padding: 0; */
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
		/* 	margin: 0px;
	padding: 15px 0 15px 0; */
		background-color: #F4F5F6;
		border-bottom-style: solid;
		border-bottom-color: #E2E2E2;
	}



	.textcenter {
		text-align: center;
		font-size: 18px;
	}

	.tabsbox {
		width: 100%
	}
</style>
