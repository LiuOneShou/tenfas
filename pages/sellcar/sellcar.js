// pages/sellcar/sellcar.js
const { getsell } = require('../../plugins/apis')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '请选择时间',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    formSubmit(e) {
        console.log(e.detail.value)
        getsell({
            data: e.detail.value
        }).then(res => {
            console.log(res);
        })
    },
    bindDateChange(e) {
        this.setData({
            date: e.detail.value
        })
    },
})