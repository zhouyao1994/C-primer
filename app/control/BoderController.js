Ext.define('zhouyao.control.BoderController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.border',
    require:[
		    'Ext.tab.*',
		    'Ext.window.*',
		    'Ext.tip.*',
		    'Ext.layout.container.Border'
	],

    addBoder: function () {
        var cent = Ext.getCmp('centerRegion');
        cent.add({
            xtype:'textfield',
            fieldLabel:'zhou'
        })
    },

    gridWindow:function () {
    	win = Ext.create('widget.window', {
                title: 'Grid',
                header: {
                    titlePosition: 2,
                    titleAlign: 'center'
                },
                closable: true,
                closeAction: 'hide',
                maximizable: true,
                width: 300,
                minWidth: 350,
                height: 350,
                tools: [{type: 'pin'}],
                layout: {
                    type: 'border',
                    padding: 5
                },
                items: [{
                	xtype:'panel',
                    region: 'center',
                    title: '参数',
                    split: true,
                    // collapsible: true,
                    // floatable: false,
                    items: [{
                        	xtype:'textfield',
                			fieldLabel:'行数'
                        },{
                        	xtype:'textfield',
                			fieldLabel:'列数'
                        },{
                        	xtype:'button',
                        	align:'center',
                			text:'确定'
                    }],
                }]
            });
    	win.show();
        },

        dataSourceWindow:function () {
    	win = Ext.create('widget.window', {
                title: 'Grid',
                header: {
                    titlePosition: 2,
                    titleAlign: 'center'
                },
                closable: true,
                closeAction: 'hide',
                maximizable: true,
                width: 300,
                minWidth: 350,
                height: 350,
                tools: [{type: 'pin'}],
                layout: {
                    type: 'border',
                    padding: 5
                },
                buttonAlign:'center',
                items: [{
                	xtype:'panel',
                    region: 'center',
                    title: '参数',
                    split: true,
                    // collapsible: true,
                    // floatable: false,
                    items: [{
                    	xtype:'textfield',
            			fieldLabel:'数据库驱动'
                    },{
                    	xtype:'textfield',
            			fieldLabel:'数据库地址'
                    },{
                    	xtype:'textfield',
            			fieldLabel:'用户名'
                    },{
                    	xtype:'textfield',
            			fieldLabel:'密码'
                    },{
                    	xtype:'button',
                    	align:'center',
            			text:'确定'
                    }
                    ],
                }]
            });
    	win.show();
        },
        
        logout: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});
