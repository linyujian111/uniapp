import {myHttp}from "../api.js";

export default {
	// 首页数据
	getHomeData:(params)=>{
		return myHttp({url:'/api/bannerdata',method:'GET',data:params})
	}
}

