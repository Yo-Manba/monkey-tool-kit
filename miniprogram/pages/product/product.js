// pages/product/product.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// windowWidth: 0, // 屏幕宽度
		// ctx: '', // canvas实例对象
		// offsetX1: 0, // canvas波浪图向左偏移的量
		// offsetX2: 0, // canvas波浪图向左偏移的量
		// offsetX3: 0, // canvas波浪图向左偏移的量
		// interval: null, // 定时器
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// // 获取设备信息
		// wx.getSystemInfo({
		// 	success: (res) => {
		// 		console.log(res)
		// 		this.data.windowWidth = res.windowWidth;
		// 	},
		// });
		// // 初始化canvas画布
		// this.canvasInit();
	},

	// // 初始化canvas画布
	// canvasInit() {
	// 	this.ctx = wx.createCanvasContext('waveCanvas');
	// },

	// // 执行定时器
	// runInterval() {
	// 	this.data.interval = setInterval(() => {
	// 		this.data.offsetX1 = this.data.offsetX1 -= 6
	// 		if (this.data.offsetX1 <= -320) {
	// 			this.data.offsetX1 = 0
	// 		}
	// 		this.data.offsetX2 = this.data.offsetX2 -= 4
	// 		if (this.data.offsetX2 <= -320) {
	// 			this.data.offsetX2 = 0
	// 		}
	// 		this.data.offsetX3 = this.data.offsetX3 -= 1
	// 		if (this.data.offsetX3 <= -320) {
	// 			this.data.offsetX3 = 0
	// 		}

	// 		// 执行绘制
	// 		this.runOneWave(this.data.offsetX1)
	// 		this.runTowWave(this.data.offsetX2)
	// 		this.runThreeWave(this.data.offsetX3)
	// 		this.ctx.draw()
	// 	}, 50)
	// },

	// // 绘制第一道波浪
	// runOneWave(offsetX) {
	// 	// console.log(offsetX)
		
	// 	this.ctx.beginPath()
	// 	// 绘制上波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320, 70)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 70)
	// 	}

	// 	// 绘制下波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320 + 160, 70)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 85, offsetX + i * 320 + 320, 70)
	// 	}

	// 	// 绘制矩形封闭
	// 	this.ctx.lineTo(this.data.windowWidth, 300)
	// 	this.ctx.lineTo(0, 300)
	// 	this.ctx.lineTo(0, 70)
	// 	this.ctx.setGlobalAlpha(0.9)
	// 	this.ctx.fillStyle = "#fff"
	// 	this.ctx.fill()
	// },

	// // 绘制第二道波浪
	// runTowWave(offsetX) {
	// 	console.log(offsetX)

	// 	this.ctx.beginPath()
	// 	// 绘制上波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320, 65)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 65)
	// 	}

	// 	// 绘制下波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320 + 160, 65)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 75, offsetX + i * 320 + 320, 65)
	// 	}

	// 	// 绘制矩形封闭
	// 	this.ctx.lineTo(this.data.windowWidth, 300)
	// 	this.ctx.lineTo(0, 300)
	// 	this.ctx.lineTo(0, 65)
	// 	this.ctx.setGlobalAlpha(0.6)
	// 	this.ctx.fillStyle = "#fff"
	// 	this.ctx.fill()
	// },

	// // 绘制第三道波浪
	// runThreeWave(offsetX) {
	// 	console.log(offsetX)

	// 	this.ctx.beginPath()
	// 	// 绘制上波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320, 60)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 60)
	// 	}

	// 	// 绘制下波浪
	// 	for (let i = 0; i < 5; i++) {
	// 		this.ctx.moveTo(offsetX + i * 320 + 160, 60)
	// 		this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 65, offsetX + i * 320 + 320, 60)
	// 	}

	// 	// 绘制矩形封闭
	// 	this.ctx.lineTo(this.data.windowWidth, 300)
	// 	this.ctx.lineTo(0, 300)
	// 	this.ctx.lineTo(0, 60)
	// 	this.ctx.setGlobalAlpha(0.3)
	// 	this.ctx.fillStyle = "#fff"
	// 	this.ctx.fill()
	// },

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
		// this.runInterval();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		// 清除定时器
		// clearInterval(this.data.interval)
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