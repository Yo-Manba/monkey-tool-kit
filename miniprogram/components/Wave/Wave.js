// components/Wave.js
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
		windowWidth: 0, // 屏幕宽度
		ctx: '', // canvas实例对象
		offsetX1: 0, // canvas波浪图向左偏移的量
		offsetX2: 0, // canvas波浪图向左偏移的量
		offsetX3: 0, // canvas波浪图向左偏移的量
		interval: null, // 定时器
	},

	// 在组件实例进入页面节点树时执行
	attached() {
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

	// 组件所在页面的生命周期
	pageLifetimes: {
		// 页面被展示
		show: function () {
			// 执行定时器
			this.runInterval();
		},

		// 页面被隐藏
		hide: function () {
			// 清除定时器
			clearInterval(this.data.interval)
		},

		// 页面尺寸变化
		resize: function (size) {}
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		// 初始化canvas画布
		canvasInit() {
			this.ctx = wx.createCanvasContext('waveCanvas', this);
		},

		// 执行定时器
		runInterval() {
			this.data.interval = setInterval(() => {
				this.data.offsetX1 = this.data.offsetX1 -= 6
				if (this.data.offsetX1 <= -320) {
					this.data.offsetX1 = 0
				}
				this.data.offsetX2 = this.data.offsetX2 -= 4
				if (this.data.offsetX2 <= -320) {
					this.data.offsetX2 = 0
				}
				this.data.offsetX3 = this.data.offsetX3 -= 1
				if (this.data.offsetX3 <= -320) {
					this.data.offsetX3 = 0
				}

				// 执行绘制
				this.runOneWave(this.data.offsetX1)
				this.runTowWave(this.data.offsetX2)
				this.runThreeWave(this.data.offsetX3)
				this.ctx.draw()
			}, 50)
		},

		// 绘制第一道波浪
		runOneWave(offsetX) {
			// console.log(offsetX)

			this.ctx.beginPath()
			// 绘制上波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320, 70)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 70)
			}

			// 绘制下波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320 + 160, 70)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 85, offsetX + i * 320 + 320, 70)
			}

			// 绘制矩形封闭
			this.ctx.lineTo(this.data.windowWidth, 300)
			this.ctx.lineTo(0, 300)
			this.ctx.lineTo(0, 70)
			this.ctx.setGlobalAlpha(0.9)
			this.ctx.fillStyle = "#fff"
			this.ctx.fill()
		},

		// 绘制第二道波浪
		runTowWave(offsetX) {
			console.log(offsetX)

			this.ctx.beginPath()
			// 绘制上波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320, 65)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 65)
			}

			// 绘制下波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320 + 160, 65)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 75, offsetX + i * 320 + 320, 65)
			}

			// 绘制矩形封闭
			this.ctx.lineTo(this.data.windowWidth, 300)
			this.ctx.lineTo(0, 300)
			this.ctx.lineTo(0, 65)
			this.ctx.setGlobalAlpha(0.6)
			this.ctx.fillStyle = "#fff"
			this.ctx.fill()
		},

		// 绘制第三道波浪
		runThreeWave(offsetX) {
			console.log(offsetX)

			this.ctx.beginPath()
			// 绘制上波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320, 60)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 80, 55, offsetX + i * 320 + 160, 60)
			}

			// 绘制下波浪
			for (let i = 0; i < 5; i++) {
				this.ctx.moveTo(offsetX + i * 320 + 160, 60)
				this.ctx.quadraticCurveTo(offsetX + i * 320 + 240, 65, offsetX + i * 320 + 320, 60)
			}

			// 绘制矩形封闭
			this.ctx.lineTo(this.data.windowWidth, 300)
			this.ctx.lineTo(0, 300)
			this.ctx.lineTo(0, 60)
			this.ctx.setGlobalAlpha(0.3)
			this.ctx.fillStyle = "#fff"
			this.ctx.fill()
		},
	},
})