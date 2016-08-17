
Ext.define('zhouyao.view.mygrid.Mygrid',{
    extend: 'Ext.panel.Panel',
    xtype:'Mygrid',

    requires: [
        'zhouyao.view.mygrid.MygridController',
        'zhouyao.view.mygrid.MygridModel'
    ],

    controller: 'mygrid-mygrid',
    viewModel: {
        type: 'mygrid-mygrid'
    },
    bind: {
            // title: 'Hello {name}',
            html: 'Hello, {firstName}!!'
    },
    
});
