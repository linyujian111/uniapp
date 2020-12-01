<template>
	<view class="banner">
		<swiper class="swiper" @change="change" :effect3d="true">
			<swiper-item>
				<u-grid :col="3" @click="click" hover-class="hover-class">
					<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="3" @click="click">
					<u-grid-item v-for="(item, index) in list" :index="index + 9" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="3" @click="click">
					<u-grid-item v-for="(item, index) in list" :index="index + 18" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
		</swiper>
		<view class="indicator-dots" v-if="isSwiper">
			<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
			</view>
			<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
			</view>
			<view class="indicator-dots-item" :class="[current == 2 ? 'indicator-dots-active' : '']">
			</view>
		</view>
	</view>
</template>

<script>
	// import uniGrid from "@/components/uni-grid/uni-grid.vue"
	// import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		data() {
			return {
				isSwiper:true,
				value: 'hello',
				current: 0,
				list: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list']
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
		
		},

		mounted() {

		}
	}
</script>

<style scoped lang="scss">
	.badge-icon {
		position: absolute;
		top: 14rpx;
		right: 40rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
	
		.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
		
		/deep/ .swiper {
		    min-height: 430upx;
		}
		
		.indicator-dots {
			margin-top: 0rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		.indicator-dots-item {
			background-color: $u-tips-color;
			height: 6px;
			width: 6px;
			border-radius: 10px;
			margin: 0 3px;
		}
		
		.indicator-dots-active {
			background-color: $u-type-primary;
		}
</style>
