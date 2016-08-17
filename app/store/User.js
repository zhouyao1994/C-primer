//创建user的store存储
Ext.create('zhouyao.store.User', {
	extend:'Ext.data.store',
	alias:'store.User',
	fields:[
		"name","email","phone"
	],
	data:{
		items: [{
			name:'zhouyao',email:'xxxxxxx',phone:'yyyyy'
		},{
			name:'zhouyao1',email:'xxxxxxx1',phone:'yyyyy1'
		},{
			name:'zhouyao2',email:'xxxxxxx2',phone:'yyyyy2'
		},{
			name:'zhouyao3',email:'xxxxxxx3',phone:'yyyyy3'
		},],
	},
	proxy: {
	    type: 'memory',
	    reader: {
	        type: 'json',
	        rootProperty: 'items'
	    }
	}

});