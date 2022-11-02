// componet/List/List.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        content: Array
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        details(e) {
            wx.navigateTo({
                url: '/pages/details/details',
                success: res => {
                    // 通过 eventChannel 向被打开页面传送数据
                    res.eventChannel.emit('id', e.currentTarget.dataset.id)
                }
            })
            // console.log(e.currentTarget.dataset.id);
        }
    }
})
