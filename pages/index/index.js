// index.js
// 获取应用实例
const app = getApp()
const {getList} = require('../../plugins/apis')
Page({
    data: {

    },

    onLoad() {
        getList({}).then(res=>{
            console.log(res);
        })
    },

})
