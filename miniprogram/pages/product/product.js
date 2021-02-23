// pages/product/product.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		windowWidth: 0, // 屏幕宽度
		ctx: '', // canvas实例对象
		x: 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.getSystemInfo({
			success: (res) => {
				console.log(res)
				this.data.windowWidth = res.windowWidth;
				this.canvasInit();
			},
		})
	},

	canvasInit() {
		this.ctx = wx.createCanvasContext('waveCanvas');

		setInterval(() => {
			this.data.x = this.data.x -= 4
			if (this.data.x <= -320) {
				this.data.x = 0
			}
			this.runWave(this.data.x)
		}, 50)
	},

	runWave(x) {
		console.log(x)
		this.ctx.setFillStyle('#58c9fd')
		this.ctx.fillRect(0, 70, this.data.windowWidth, 400)

		for (let i = 0; i < 10; i++) {
			this.ctx.beginPath()
			this.ctx.moveTo(x + i * 320, 70)
			this.ctx.quadraticCurveTo(x + (i + 1) * 80, 60, x + i * 320 + 160, 70)
			this.ctx.setFillStyle('#58c9fd')
			this.ctx.fill()
		}

		// for (let i = 2; i < 10; i += 2) {
		// 	this.ctx.beginPath()
		// 	this.ctx.moveTo(x + (i * 2 + 1) * 160, 70)
		// 	this.ctx.quadraticCurveTo(x + (i * 3 + 4) * 80, 80, x + 320, 70)
		// 	this.ctx.setFillStyle('#fff')
		// 	this.ctx.fill()
		// }

		// this.ctx.beginPath()
		// this.ctx.moveTo(x + 320, 70)
		// this.ctx.quadraticCurveTo(x + 400, 60, x + 480, 70)
		// this.ctx.setFillStyle('#58c9fd')
		// this.ctx.fill()

		// this.ctx.beginPath()
		// this.ctx.moveTo(x + 480, 70)
		// this.ctx.quadraticCurveTo(x + 560, 80, x + 640, 70)
		// this.ctx.setFillStyle('#fff')
		// this.ctx.fill()

		// this.ctx.beginPath()
		// this.ctx.moveTo(x + 640, 70)
		// this.ctx.quadraticCurveTo(x + 720, 60, x + 800, 70)
		// this.ctx.setFillStyle('#58c9fd')
		// this.ctx.fill()

		// this.ctx.beginPath()
		// this.ctx.moveTo(x + 800, 70)
		// this.ctx.quadraticCurveTo(x + 880, 80, x + 960, 70)
		// this.ctx.setFillStyle('#fff')
		// this.ctx.fill()

		this.ctx.draw()
	},

	// 手持弹幕
	toBarrageModule() {
		wx.navigateTo({
			url: '/pages/barrage/barrage',
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})