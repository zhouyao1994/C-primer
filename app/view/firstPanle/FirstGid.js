
Ext.define('zhouyao.view.firstPanle.FirstGid',{
    extend: 'Ext.panel.Panel',

    requires: [
        'zhouyao.view.firstPanle.FirstGidController',
        'zhouyao.view.firstPanle.FirstGidModel'
    ],

    controller: 'firstpanle-firstgid',
    viewModel: {
        type: 'firstpanle-firstgid'
    },

    html: 'Hello, World!!'
});
