
// 封装请求

const axios = require('./axios')


const baseUrl = "https://api.tf2sc.cn/api/tfcar/car"


// 获取列表
export function getList(obj) {
	return axios({
		url: baseUrl + "/list?",
		...obj
	})
}
// 获取详情
export function getParticulars(obj) {
	return axios({
		url: baseUrl + "/basicInfo/" + obj,
		...obj
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