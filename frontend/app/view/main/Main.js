/**
 *
 */
Ext.define('TrxResearch.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'TrxResearch.view.main.MainController',
        'TrxResearch.view.main.MainModel'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    border: true,

    items: [{
        xtype: 'trxresearch-header',
        region: 'north'
    }, {
        xtype: 'tabpanel',
        region: 'center',
        ui: 'navigation',
        headerPosition: 'left',
        header: {
            title: {
                hidden: true
            },
            layout: {
                align: 'stretchmax'
            }
        },
        tabBarHeaderPosition: 0,
        titleRotation: 0,
        tabRotation: 0,
        tabBar: {
            flex: 1,
            layout: {
                align: 'stretch',
                overflowHandler: 'none'
            }
        },
        items: [{
            xtype: 'panel',
            title: 'Авторизации',
            layout: {
                type: 'border'
            },
            items: [{
                xtype: 'trxresearch-search',
                region: 'north'
            }, {
                xtype: 'trxresearch-grid',
                region: 'center'
            }]
        },{
            xtype: 'panel',
            title: 'Клиринг'
        },{
            xtype: 'panel',
            title: 'История запросов'
        }]
    }]
});
