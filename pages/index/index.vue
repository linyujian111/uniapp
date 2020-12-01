<template>
	<view class="content">
		<Search></Search>
		<Title></Title>
		<Preference></Preference>
		<delicacy></delicacy>
	</view>
</template>

<script>
	import Search from './commonents/search.vue'
	import Title from './commonents/title.vue'
	import Preference from './commonents/preference.vue'
	import delicacy from './commonents/delicacy.vue'
	export default {
		components:{
			Search,Title,Preference,delicacy
		},
		data() {
			return {
				title: 'Hello12'
			}
		},
		onLoad() {
			console.log('222')
			console.log(process.uniEnv.BASE_API) 
			alert(process.uniEnv.BASE_API)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		margin:0 15upx;
		display: flex;
		flex-direction: column;
		
		
	}

</style>
