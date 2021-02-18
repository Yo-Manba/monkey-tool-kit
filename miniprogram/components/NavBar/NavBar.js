// components/NavBar/navBar.js

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
		// 设置有无返回按钮
		hasBack: {
			type: Boolean,
			value: false
		},
		// 标题
		title: {
			type: String,
			value: ""
		},
		// 标题颜色
		color: {
			type: String,
			value: "#373737"
		},
		// 导航栏背景色
		bgColor: {
			type: String,
			value: "#fff"
		},
		// 导航栏背景图，背景图优先级高于背景色
		bgImg: {
			type: String,
			value: ""
		},
		// 导航栏背景图位置
		bgPosition: {
			type: String,
			value: "center center"
		},
		// 导航栏是否占位
		occupied: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		StatusBarH: app.globalData.StatusBarH,
		NavBarH: app.globalData.NavBarH,
		MenuButtonPos: app.globalData.MenuButtonPos,
		NavBarStyle: `
			height: ${app.globalData.NavBarH}px; 
			background-color: #fff; 
			background-image: ; 
			background-position: center center;
		`,
		navBarContentStyle: `
			height: ${app.globalData.NavBarH}px;
			padding-top: ${app.globalData.StatusBarH}px;
		`
	},

	// 在组件实例进入页面节点树时执行
	attached() {
		this.setData({
			NavBarStyle: `
				background-color: ${this.data.bgColor}; 
				background-image: ${this.data.bgImg};
				background-position: ${this.data.bgPosition};
			`
		})
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		goBack() {
			wx.navigateBack({
				delta: 1
			});
		}
	}
})