/**
 *
 */
Ext.define("TrxResearch.view.clearing.grid.Grid",{
    extend: "Ext.grid.Panel",
    alias: 'widget.trxresearch-clearing-grid',

    controller: "trxresearch-clearing-grid",
    viewModel: {
        type: "trxresearch-clearing-grid"
    },

    bufferedRenderer: false,
//    seems broken
//    sortableColumns: false,

    bind: '{clearing_records}',

    columns: {
        defaults: {
            sortable: false
        },
        items:[{
            xtype:'actioncolumn',
            width:20,
            menuDisabled:true,
            items: [{
                icon: 'resources/images/expand_basic_red.png',  // Use a URL in the icon config
                tooltip: 'Edit',
                handler: 'onDetailsClick'
            }]

        }, {
            dataIndex: 'mti',
            text: 'Тип операции',
            flex: 1
        }, {
            dataIndex: 'pds0025',
            text: 'Признак реверсала',
            flex: 1
        }, {
            dataIndex: 'de3',
            text: 'Процессинговый код операции',
            flex: 1
        }, {
            dataIndex: 'de63',
            text: 'Идентификатор операции',
            flex: 1
        }, {
            dataIndex: 'de31',
            text: 'Номер ARN',
            flex: 1
        }, {
            dataIndex: 'de2',
            text: 'Номер карты',
            flex: null,
            width: 160
        }, {
            dataIndex: 'de12',
            text: 'Дата операции',
            flex: 1
        }, {
            dataIndex: 'hcpd',
            text: 'Бизнес-дата',
            flex: 1
        }, {
            dataIndex: 'de4',
            text: 'Сумма',
            flex: 1
        }, {
            dataIndex: 'de49',
            text: 'Валюта',
            flex: 1
        }, {
            dataIndex: 'de22',
            text: 'POS Entry Mode',
            flex: 1
        }, {
            dataIndex: 'de26',
            text: 'MCC',
            flex: 1
        }, {
            dataIndex: 'de38',
            text: 'Код авторизации',
            flex: 1
        }, {
            dataIndex: 'de93',
            text: 'Идентификационный номер Эмитента ',
            flex: 1
        }, {
            dataIndex: 'de94',
            text: 'Идентификационный номер Эквайрера',
            flex: 1
        }]
    }
});
