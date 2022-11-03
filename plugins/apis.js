
// 封装请求

const axios = require('./axios')


const baseUrl = "https://api.tf2sc.cn/api/tfcar/car"
const baseUrls = "https://api.tf2sc.cn"

// 获取列表
export function getList(obj) {
	return axios({
		url: baseUrl + "/list?",
		data: {
			...obj
		}
	})
}
// 获取详情
export function getParticulars(obj) {
	return axios({
		url: baseUrl + "/basicInfo/" + obj,
		...obj
	})
}

//获取地区
export function area(obj) {
	return axios({
		url: baseUrls + "/api/tfcar/city/treeList",
		data: {
			...obj
		}
	})
}
//搜索接口
export function seach(obj) {
	return axios({
		url: baseUrls + "/api/tfcar/car/list",
		data: {
			...obj
		}
	})
}
//车辆品牌接口
export function brand(obj) {
	return axios({
		url: baseUrl + "/brand300",
		data: {
			...obj
		}
	})
}
//车辆品牌子集接口
export function brandclicnd(obj) {
	return axios({
		url: baseUrl + "/series300?",
		data: {
			...obj
		}
	})
}
//价格请求接口
export function price(obj) {
	return axios({
		url: baseUrl + "/price?",
		data: {
			...obj
		}
	})
}
//车型请求接口
export function vehicle(obj) {
	return axios({
		url: baseUrl + "/model",
		data: {
			...obj
		}
	})
}
// 卖车
export function getsell(obj) {
	return axios({
		url: baseUrl + "/estimate",
		method: "POST",
		...obj
	})
}
