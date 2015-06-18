Ext.define('TrxResearch.view.main.Header', {
    extend: 'Ext.Container',

    xtype: 'trxresearch-header',

    cls: 'app-header',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        cls: 'app-header-logo'
    },{
        xtype: 'component',
        cls: 'app-header-title',
        bind: '{title}',
        flex: 1
    },{
       xtype: 'button',
       text     : 'Выход',
        listeners: {
            click: 'onLogout'
        }
    }
    ]
});
