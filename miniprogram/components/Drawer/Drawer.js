// components/drawer/drawer.js

const app = getApp();

Component({
    /**
     * 组件的一些选项
     */
    options: {
        multipleSlots: true
    },

    /**
     * 组件的属性列表
     */
    properties: {
        // 导航栏
        navBack: {
            type: Boolean,
            value: true
        },
        navTitle: {
            type: String,
            value: '标题'
        },
        navColor: {
            type: String,
            value: "#fff"
        },
        navBgColor: {
            type: String,
            value: "#f5f5f5"
        },
        navBgImg: {
            type: String,
            value: ""
        },

        // 主页面
        mainPageBgColor: {
            type: String,
            value: '#fff'
        },

        // 抽屉页面
		drawerPageWidth: {
			type: String,
			value: '90'
		},
        drawerPageBgColor: {
            type: String,
            value: '#fff'
        },

        // 背景
        pageBgColor: {
            type: String,
            value: '#ccc'
        },
        pageBgImg: {
            type: String,
			value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        NavBarH: app.globalData.NavBarH,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showDrawer(e) {
            this.setData({
                showDrawer: true,
                showMask: true
            })
        },

        closeDrawer() {
            this.setData({
                showDrawer: false,
                showMask: false
            })
        },
    }
})