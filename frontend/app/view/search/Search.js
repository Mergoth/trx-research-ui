/**
 *
 */
Ext.define('TrxResearch.view.search.Search', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.trxresearch-search',
    
    requires: [
        'Ext.form.field.ComboBox'
    ],

    controller: 'trxresearch-search',
    viewModel: {
        type: 'trxresearch-search'
    },

    layout: 'vbox',

    defaults: {
        xtype: 'form',
        flex: 1,
        layout: {
            type: 'hbox',
            layout: 'stretch'
        },
        defaults: {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            width: 350,
            labelWidth: 150
        }
    },

    items:[{
        items: [{
            fieldLabel: 'Полный номер карты',
            bind: '{txnF2}'
        }]
    }, {
        items: [{
            fieldLabel: 'Начальная дата поиска',
            xtype: 'datefield',
            bind: '{txnF7Begin}'
        }, {
            fieldLabel: 'Конечная дата поиска',
            xtype: 'datefield',
            bind: '{txnF7End}'
        }]
    }]
});