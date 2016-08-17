
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
    layout: 'form',
    //制定默认类型，如果不指定，就会被当做panel类型
    defaultType: 'textfield',

    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}' // uses "test" ViewModel from parent
    },{
        fieldLabel: 'Last Name',
        bind: '{lastName}'
    }]
    
});
