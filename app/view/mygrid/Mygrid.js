
Ext.define('zhouyao.view.mygrid.Mygrid',{
    extend: 'Ext.panel.Panel',

    requires: [
        'zhouyao.view.mygrid.MygridController',
        'zhouyao.view.mygrid.MygridModel'
    ],

    controller: 'mygrid-mygrid',
    viewModel: {
        type: 'mygrid-mygrid'
    },

    html: 'Hello, World!!'
});
