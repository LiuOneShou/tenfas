const { seach } = require('../../plugins/apis')
Component({
    /**
     * 组件的属性列表 
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        inputvalue: '',
        page:'1',
        content: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tiao() {
            wx.navigateTo({
                url: '/pages/area/area',
            })
        },
        bindKeyInput(e) {
            this.setData({
                inputvalue: e.detail.value
            })
        },
        seachs(){
            console.log(1);
            seach({page:this.data.page,carName:this.data.inputvalue}).then(res => {
                console.log(res);
            })
        },
    },
    lifetimes: {
       
    }
})
