<template>
	<view class="card-head">
		<slot></slot>
	</view>
</template>

<script>
export default {
		data() {
			return {
				
			}
		},
		methods: {
		
		}
	}
</script>

<style>
.card-head{
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		width:100%;
		font-size: 16px;
		font-weight: bold;
		background-color:white;
	}
</style>
