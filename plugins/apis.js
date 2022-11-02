
// 封装请求

const axios = require('./axios')


const baseUrl = "https://api.tf2sc.cn"


// 登录
export function getList(obj) {
	return axios({
		
		url: baseUrl + "/api/tfcar/car/list?",
		...obj
	})
}