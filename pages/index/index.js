// index.js
// 获取应用实例
const app = getApp()
const { getList } = require('../../plugins/apis')
Page({
    data: {
        content: []
    },
    onLoad() {
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
        })
    }
})
