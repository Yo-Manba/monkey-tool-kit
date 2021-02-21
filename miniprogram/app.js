//app.js
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                // env: 'my-env-id',
                traceUser: true,
            })
        }

        wx.getSystemInfo({
            success: res => {
                // console.log(res)
                // 获取该设备的rpx与px的比例
                const ratio = 750 / res.windowWidth;
                // 状态栏高度，单位rpx
                this.globalData.statusBarHeight = res.statusBarHeight * ratio;
                // 获取胶囊按钮的位置信息
                let menuButtonPos = wx.getMenuButtonBoundingClientRect();
                // 全局储存胶囊按钮位置信息
                this.globalData.MenuButtonPos = menuButtonPos;
                /**
                 * 当小程序进入小窗模式时，以小米手机为例，此时状态栏高度为零，小程序获取胶囊位置信息大概率会出错，
                 * 导致最终呈现的导航栏高度异常，暂时区分写法，小窗模式时固定导航栏为40
                 */
                if (this.globalData.statusBarHeight === 0) {
                    // 计算导航栏高度，单位rpx
                    this.globalData.NavBarHeight = 40 * ratio;
                } else {
                    // 计算导航栏高度，单位rpx
                    this.globalData.NavBarHeight = (menuButtonPos.top - res.statusBarHeight + menuButtonPos.bottom) * ratio;
                }
            }
        })
    },

    globalData: {}
})