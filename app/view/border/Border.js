/**
 * 把元素分开写，有助于代码理解 
 * 
 * 
 * 
 */

var boarderNorth={
	title:'上边栏',
	region:'north',
	height:'100',
	minHeight:'100',
	maxHeight:'150',
	collapsible:true,
	items: [{
		xtype:'button',
		text:'退出',
		handler:'logout'
	}]
};

var boarderSouth={
	title:'底部栏',
	region:'south',
	height:'75',
	split:false
};
var boarderCenter={
	xtype:'container',
	id:'centerRegion',
	title:'center pannel',
	region:'center',
	items: [{
		xtype:'button',
		text:'ckicme',
		handler: 'addBoder'
	}]
};
//至少可以解决输入
var boarderWest={
	title:'菜单栏',
	width:'200',
	region:'west',
	collapsible:false,
	layout: 'column',
	items: [{
			xtype:'button',
			text:'数据源',
			handler:'dataSourceWindow',
			columnWidth: 0.5
		},{
			xtype:'button',
			text:'网格',
			handler:'gridWindow',
			columnWidth: 0.5
	}]
};

//其实这个没有必要~
// var boderAll= [
// 		boarderNorth,
// 		boarderSouth,
// 		boarderCenter,
// 		boarderWest
// 	];

Ext.define('zhouyao.view.border.Border', {
	extend: 'Ext.container.Viewport',
	xtype: 'Extappviewbordermain',
	/**
	 * @requires 
	 */
	requires: [
		'zhouyao.control.BoderController'
	],

	//控制器，与controler中的alias相对应
	//只有在alias中定义来的，这里才能正常使用
	controller: 'border',
	//布局
	layout:{
		type:'border'
	},
	defaults:{
		frame:true,
		split:true
	},
	// items: boderAll
	items: [
		boarderNorth,
		boarderSouth,
		boarderCenter,
		boarderWest
	]
});