// pages/details/details.js
const { getParticulars } = require('../../plugins/apis')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        particulars: {},
        index: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '车辆详情'
        })
        // console.log(options.id);
        this.Particulars(options.id)
        //  获取 eventChannel 对象
        // const eventChannel = this.getOpenerEventChannel()
        // eventChannel.on("id",  (data) => {
        //     console.log(data);
        //     // this.Rankingdetails(data)
        // })
    },
    Particulars(id) {
        getParticulars(id).then(res => {
            res.data.data.photoVo.carousel = (res.data.data.photoVo.carousel).split(",")
            res.data.data.photoVo.detail = (res.data.data.photoVo.detail).split(",")
            console.log(res.data.data);
            this.setData({
                particulars: res.data.data
            })
        })
    }
})