// pages/product/product.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.ctx = wx.createCanvasContext('cardCanvas');	
		this.ctx.beginPath();
		this.ctx.moveTo(0, 45);
		this.ctx.quadraticCurveTo(50, 20, 100, 45);
		// this.ctx.strokeStyle = "#000"
		this.ctx.setStrokeStyle('yellow')
		this.ctx.stroke()
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