/**
 *
 */
Ext.define("TrxResearch.view.grid.Grid",{
    extend: "Ext.grid.Panel",
    alias: 'widget.trxresearch-grid',

    controller: "trxresearch-grid",
    viewModel: {
        type: "trxresearch-grid"
    },

    bufferedRenderer: false,
//    seems broken
//    sortableColumns: false,

    bind: '{records}',

    tbar: [{
        text: 'Search',
        handler: 'onSearchClick'
    }],

    columns: {
        defaults: {
            flex: 1,
            hidden: true,
            sortable: false
        },
        items:[{
            dataIndex: 'recordId',
            text: 'Record Id',
            hidden: false
        }, {
            dataIndex: 'envId',
            text: 'Env Id',
            hidden: false
        }, {
            dataIndex: 'envTimeIn',
            text: 'Env Time In',
            hidden: false
        }, {
            dataIndex: 'safPlanId',
            text: 'Saf Plan Id',
            hidden: false
        }, {
            dataIndex: 'txnMti',
            text: 'Txn Mti',
            hidden: false
        }, {
            dataIndex: 'issuerBin',
            text: 'Issuer Bin',
            hidden: false
        }, {
            dataIndex: 'issuerId',
            text: 'Issuer Id',
            hidden: false
        }, {
            dataIndex: 'serviceCode',
            text: 'Service Code',
            hidden: false
        }, {
            dataIndex: 'eciInd',
            text: 'Eci Ind',
            hidden: false
        }, {
            dataIndex: 'ucafInd',
            text: 'Ucaf Ind',
            hidden: false
        }, {
            dataIndex: 'pinInd',
            text: 'Pin Ind',
            hidden: false
        }, {
            dataIndex: 'inGateId',
            text: 'InGate Id'
        }, {
            dataIndex: 'outGateId',
            text: 'OutGate Id'
        }, {
            dataIndex: 'inNodeId',
            text: 'InNode Id'
        }, {
            dataIndex: 'outNodeId',
            text: 'OutNode Id'
        }, {
            dataIndex: 'inGateTimeIn',
            text: 'InGate Time In'
        }, {
            dataIndex: 'inGateTimeOut',
            text: 'InGate Time Out'
        }, {
            dataIndex: 'outGateTimeIn',
            text: 'OutGate Time In'
        }, {
            dataIndex: 'outGateTimeOut',
            text: 'OutGate Time Out'
        }, {
            dataIndex: 'exportStatus',
            text: 'Export Status',
            renderer: 'renderStatus',
            hidden: false
        }, {
            dataIndex: 'txnF1',
            text: 'txnF1'
        }, {
            dataIndex: 'txnF2',
            text: 'txnF2'
        }, {
            dataIndex: 'txnF3',
            text: 'txnF3'
        }, {
            dataIndex: 'txnF4',
            text: 'txnF4'
        }, {
            dataIndex: 'txnF5',
            text: 'txnF5'
        }, {
            dataIndex: 'txnF6',
            text: 'txnF6'
        }, {
            dataIndex: 'txnF7',
            text: 'txnF7'
        }, {
            dataIndex: 'txnF8',
            text: 'txnF8'
        }, {
            dataIndex: 'txnF9',
            text: 'txnF9'
        }, {
            dataIndex: 'txnF10',
            text: 'txnF10'
        }, {
            dataIndex: 'txnF11',
            text: 'txnF11'
        }, {
            dataIndex: 'txnF12',
            text: 'txnF12'
        }, {
            dataIndex: 'txnF13',
            text: 'txnF13'
        }, {
            dataIndex: 'txnF14',
            text: 'txnF14'
        }, {
            dataIndex: 'txnF15',
            text: 'txnF15'
        }, {
            dataIndex: 'txnF16',
            text: 'txnF16'
        }, {
            dataIndex: 'txnF17',
            text: 'txnF17'
        }, {
            dataIndex: 'txnF18',
            text: 'txnF18'
        }, {
            dataIndex: 'txnF19',
            text: 'txnF19'
        }, {
            dataIndex: 'txnF20',
            text: 'txnF20'
        }, {
            dataIndex: 'txnF21',
            text: 'txnF21'
        }, {
            dataIndex: 'txnF22',
            text: 'txnF22'
        }, {
            dataIndex: 'txnF23',
            text: 'txnF23'
        }, {
            dataIndex: 'txnF24',
            text: 'txnF24'
        }, {
            dataIndex: 'txnF25',
            text: 'txnF25'
        }, {
            dataIndex: 'txnF26',
            text: 'txnF26'
        }, {
            dataIndex: 'txnF27',
            text: 'txnF27'
        }, {
            dataIndex: 'txnF28',
            text: 'txnF28'
        }, {
            dataIndex: 'txnF29',
            text: 'txnF29'
        }, {
            dataIndex: 'txnF30',
            text: 'txnF30'
        }, {
            dataIndex: 'txnF31',
            text: 'txnF31'
        }, {
            dataIndex: 'txnF32',
            text: 'txnF32'
        }, {
            dataIndex: 'txnF33',
            text: 'txnF33'
        }, {
            dataIndex: 'txnF34',
            text: 'txnF34'
        }, {
            dataIndex: 'txnF35',
            text: 'txnF35'
        }, {
            dataIndex: 'txnF36',
            text: 'txnF36'
        }, {
            dataIndex: 'txnF37',
            text: 'txnF37'
        }, {
            dataIndex: 'txnF38',
            text: 'txnF38'
        }, {
            dataIndex: 'txnF39',
            text: 'txnF39'
        }, {
            dataIndex: 'txnF40',
            text: 'txnF40'
        }, {
            dataIndex: 'txnF41',
            text: 'txnF41'
        }, {
            dataIndex: 'txnF42',
            text: 'txnF42'
        }, {
            dataIndex: 'txnF43',
            text: 'txnF43'
        }, {
            dataIndex: 'txnF44',
            text: 'txnF44'
        }, {
            dataIndex: 'txnF45',
            text: 'txnF45'
        }, {
            dataIndex: 'txnF46',
            text: 'txnF46'
        }, {
            dataIndex: 'txnF47',
            text: 'txnF47'
        }, {
            dataIndex: 'txnF48',
            text: 'txnF48'
        }, {
            dataIndex: 'txnF49',
            text: 'txnF49'
        }, {
            dataIndex: 'txnF50',
            text: 'txnF50'
        }, {
            dataIndex: 'txnF51',
            text: 'txnF51'
        }, {
            dataIndex: 'txnF52',
            text: 'txnF52'
        }, {
            dataIndex: 'txnF53',
            text: 'txnF53'
        }, {
            dataIndex: 'txnF54',
            text: 'txnF54'
        }, {
            dataIndex: 'txnF55',
            text: 'txnF55'
        }, {
            dataIndex: 'txnF56',
            text: 'txnF56'
        }, {
            dataIndex: 'txnF57',
            text: 'txnF57'
        }, {
            dataIndex: 'txnF58',
            text: 'txnF58'
        }, {
            dataIndex: 'txnF59',
            text: 'txnF59'
        }, {
            dataIndex: 'txnF60',
            text: 'txnF60'
        }, {
            dataIndex: 'txnF61',
            text: 'txnF61'
        }, {
            dataIndex: 'txnF62_2',
            text: 'txnF62_2'
        }, {
            dataIndex: 'txnF63_2',
            text: 'txnF63_2'
        }]
    }
});
