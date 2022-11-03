const { getList, brand, price, vehicle, brandclicnd } = require('../../plugins/apis')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: "",
        brandlist: "",
        brandclicnd: "",
        flagg: "true",
        flaggg: "",
        flag: "",
        price: "",
        pticeflag: "",
        vehiclelist: "",
        vehicleflag: "",
        content: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        getList({}).then(res => {
            res.data.data.content.forEach(ele => {
                let date = new Date(ele.dateOfRegistration);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
                ele.dateOfRegistration = Y + M + D
            });
            this.setData({
                content: res.data.data.content
            })
            // console.log(res.data.data.content);
        }),
            //车辆请求
            brand({}).then(res => {
                this.setData({
                    brandlist: res.data.data.content
                })
            })
        //价格请求
        price({}).then(res => {
            res.data.data.forEach(e => {
                let query = e.queryRules
                query.replace(" ", "")
                e.queryRules = JSON.parse(query)
            })
            this.setData({
                price: res.data.data
            })
        })
        //车型
        vehicle({}).then(res => {
            this.setData({
                vehiclelist: res.data.data.content
            })
        })
    },
    //显示品牌
    dian() {
        this.setData({
            flag: "true",
            flagg: "true",
            flaggg: ""
        })
    },
    //品牌点击事件
    branddian(e) {
        this.setData({
            flagg: "",
            flaggg: "true"
        })
        console.log(e.currentTarget.dataset.id);
        brandclicnd({ brandId: e.currentTarget.dataset.id }).then(res => {
            this.setData({
                brandclicnd: res.data.data.content
            })
        })
    },
    //品牌点点点事件
    transfer(e) {
        getList({
            Page: "1",
            carSeries: e.currentTarget.dataset.id
        }).then(res => {
            res.data.data.content.forEach(ele => {
                let date = new Date(ele.dateOfRegistration);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
                ele.dateOfRegistration = Y + M + D
            });
            this.setData({
                flag: "",
                content: res.data.data.content
            })
        })
    },
    //价格显示事件
    pricedian() {
        this.setData({
            pticeflag: "true"
        })
    },
    //价格点击事件
    ptices() {
        this.setData({
            pticeflag: ""
        })
    },
    //车型显示事件
    vehcledian() {
        this.setData({
            vehicleflag: "true"
        })
    },
    //车型点击事件
    vehcledians(e) {
        this.setData({
            vehicleflag: ""
        })
        getList({
            Page: "1",
            carModel: e.currentTarget.dataset.id
        }).then(res => {
            res.data.data.content.forEach(ele => {
                let date = new Date(ele.dateOfRegistration);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
                ele.dateOfRegistration = Y + M + D
            });
            this.setData({
                flag: "",
                content: res.data.data.content
            })
        })
    },

    //
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})