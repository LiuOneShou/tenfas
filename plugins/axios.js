
// 封装axios
module.exports = obj => {
	return new Promise((res, rej) => {
		wx.showLoading({
			title: '正在可劲加载~ ~',
		})
		wx.request({
			...obj,
			header: {
				"User-Agent":
					"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
				PlatformType: "h5"
			},
			success(data) {
				res(data)
				wx.hideLoading()
			},
			fail(err) {
				rej(err)
				wx.hideLoading()
			}
		})
	})
}