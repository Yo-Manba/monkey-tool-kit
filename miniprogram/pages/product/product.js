// pages/product/product.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		windowWidth: 0, // 屏幕宽度
		ctx: '', // canvas实例对象
		offsetX: 0, // canvas波浪图向左偏移的量
		interval: null, // 定时器
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 获取设备信息
		wx.getSystemInfo({
			success: (res) => {
				console.log(res)
				this.data.windowWidth = res.windowWidth;
			},
		});
		// 初始化canvas画布
		this.canvasInit();
	},

	// 初始化canvas画布
	canvasInit() {
		this.ctx = wx.createCanvasContext('waveCanvas');
	},

	// 执行定时器
	runInterval() {
		this.data.interval = setInterval(() => {
			this.data.offsetX = this.data.offsetX -= 4
			if (this.data.offsetX <= -320) {
				this.data.offsetX = 0
			}
			// 执行绘制
			this.runWave(this.data.offsetX)
		}, 50)
	},

	// 执行绘制
	runWave(offsetX) {
		console.log(offsetX)
	
		// 绘制上波浪
		// this.ctx.setGlobalAlpha(0.1)
		for (let i = 0; i < 5; i++) {
			this.ctx.moveTo(offsetX + i * 320, 70)
			this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 60, offsetX + i * 320 + 160, 70)
			// this.ctx.strokeStyle = '#58c9fd'
			// this.ctx.stroke()
		}

		// 绘制下波浪
		// this.ctx.setGlobalAlpha(0.1)
		for (let i = 0; i < 5; i++) {
			this.ctx.moveTo(offsetX + i * 320 + 160, 70)
			this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 80, offsetX + i * 320 + 320, 70)
			// this.ctx.strokeStyle = '#000'
			// this.ctx.stroke()
		}

		// 绘制矩形封闭
		this.ctx.lineTo(this.data.windowWidth, 300)
		this.ctx.lineTo(0, 300)
		this.ctx.lineTo(0, 70)
		this.ctx.setGlobalAlpha(0.3)
		this.ctx.fillStyle = "#58c9fd"
		this.ctx.fill()

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
		// 执行定时器
		this.runInterval();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		// 清除定时器
		clearInterval(this.data.interval)
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