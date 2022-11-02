// pages/details/details.js
const { getParticulars } = require('../../plugins/apis')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        particulars: {},
        save: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '车辆详情'
        })
        // console.log(options.id);
        // this.Particulars(options.id)
        //  获取 eventChannel 对象
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on("id", (data) => {
            // console.log(data);
            this.Particulars(data)
        })
    },
    Particulars(id) {
        getParticulars(id).then(res => {
            res.data.data.photoVo.carousel = (res.data.data.photoVo.carousel).split(",")
            res.data.data.photoVo.detail = (res.data.data.photoVo.detail).split(",")
            // console.log(res.data.data);
            let num = (res.data.data.priceVo.carNetPrice - res.data.data.priceVo.caHallPrice).toFixed(2)

            let apply = (res.data.data.dateOfRegistration).split('-')
            if (apply[1][0]) {
                res.data.data.dateOfRegistration = apply[0] + '年' + apply[1].substr(1) + '月'
            }

            if (res.data.data.parameterVo.deliveryTime) {
                let deliveryTime = (res.data.data.parameterVo.deliveryTime).split('-')
                res.data.data.parameterVo.deliveryTime = deliveryTime[0] + '年' + deliveryTime[1].substr(1) + '月'
            }
            res.data.data.carId = (res.data.data.carId).substr(8)
            this.setData({
                particulars: res.data.data,
                save: num
            })
        })
    }
})