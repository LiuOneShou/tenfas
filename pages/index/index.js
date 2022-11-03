// index.js
import * as echarts from '../../ec-canvas/echarts';

// 获取应用实例
const app = getApp()
const { getList } = require('../../plugins/apis')
function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        title: {
            text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    chart.setOption(option);
    return chart;
}

Page({
    data: {
        latitude: '',
        longitude: '',
        content: [],
        ec: {
            onInit: initChart
        }
    },

    onLoad() {
        wx.getLocation({
            type: 'gcj02',
            success: res => {
                //赋值经纬度
                console.log(res.latitude);
                console.log(res.longitude);
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                })
            }
        })
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
    },


})
