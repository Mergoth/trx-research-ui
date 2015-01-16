/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
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
        xtype: 'panel',
        region: 'center',
        layout: {
            type: 'border'
        },
        items: [{
            xtype: 'trxresearch-search',
            region: 'north'
        } ,{
            xtype: 'trxresearch-grid',
            region: 'center'
        }]
    }]
});
