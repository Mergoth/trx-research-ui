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

    bodyPadding: '20 10 0 10',

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
            bind: '{PAN}'
        }]
    }, {
        items: [{
            fieldLabel: 'Начальная дата поиска',
            xtype: 'datefield',
            bind: '{dateBegin}'
        }, {
            fieldLabel: 'Конечная дата поиска',
            xtype: 'datefield',
            bind: '{dateEnd}'
        }]
    }]
});