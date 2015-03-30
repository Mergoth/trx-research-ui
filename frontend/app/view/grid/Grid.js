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


    /*plugins: [{
        ptype: 'rowexpander',
        expandOnDblClick: false,
        rowBodyTpl: new Ext.XTemplate(
        '<table width="100%"><tr>',
            '<td width="25%"><b>Record ID:</b> {recordId}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE2:</b> {txnF2}</td>',
            '<td width="25%"><b>DE22:</b> {txnF22}</td>',
            '<td width="25%"><b>DE45:</b> {txnF45}</td>',
            '<td width="25%"><b>Service Code:</b> {serviceCode}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE3:</b> {txnF3}</td>',
            '<td width="25%"><b>DE23:</b> {txnF23}</td>',
            '<td width="25%"><b>DE48:</b> {txnF48}</td>',
            '<td width="25%"><b>ECI Indicator:</b> {eciInd}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE4:</b> {txnF4}</td>',
            '<td width="25%"><b>DE25:</b> {txnF25}</td>',
            '<td width="25%"><b>DE49:</b> {txnF49}</td>',
            '<td width="25%"><b>UCAF Indicator:</b> {ucafInd}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE5:</b> {txnF5}</td>',
            '<td width="25%"><b>DE28:</b> {txnF28}</td>',
            '<td width="25%"><b>DE50:</b> {txnF50}</td>',
            '<td width="25%"><b>PIN Indicator:</b> {pinInd}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE6:</b> {txnF6}</td>',
            '<td width="25%"><b>DE32:</b> {txnF32}</td>',
            '<td width="25%"><b>DE51:</b> {txnF51}</td>',
            '<td width="25%"><b>In-Gate ID:</b> {inGateId}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE7:</b> {txnF7}</td>',
            '<td width="25%"><b>DE33:</b> {txnF33}</td>',
            '<td width="25%"><b>DE52:</b> {txnF52}</td>',
            '<td width="25%"><b>Out-Gate ID:</b> {outGateId}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE9:</b> {txnF9}</td>',
            '<td width="25%"><b>DE35:</b> {txnF35}</td>',
            '<td width="25%"><b>DE53:</b> {txnF53}</td>',
            '<td width="25%"><b>In-Node ID:</b> {inNodeId}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE10:</b> {txnF10}</td>',
            '<td width="25%"><b>DE37:</b> {txnF37}</td>',
            '<td width="25%"><b>DE55:</b> {txnF55}</td>',
            '<td width="25%"><b>Out-Node ID:</b> {outNodeId}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE12:</b> {txnF12}</td>',
            '<td width="25%"><b>DE38:</b> {txnF38}</td>',
            '<td width="25%"><b>DE60:</b> {txnF60}</td>',
            '<td width="25%"></td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE13:</b> {txnF13}</td>',
            '<td width="25%"><b>DE39:</b> {txnF39}</td>',
            '<td width="25%"><b>DE61:</b> {txnF61}</td>',
            '<td width="25%"><b>In-Gate Time-In:</b> {inGateTimeIn}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE14:</b> {txnF14}</td>',
            '<td width="25%"><b>DE41:</b> {txnF41}</td>',
            '<td width="25%"><b>DE62 subfield 2:</b> {txnF62_2}</td>',
            '<td width="25%"><b>In-Gate Time-Out:</b> {inGateTimeOut}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE15:</b> {txnF15}</td>',
            '<td width="25%"><b>DE42:</b> {txnF42}</td>',
            '<td width="25%"><b>DE63 subfield 2:</b> {txnF63_2}</td>',
            '<td width="25%"><b>Out-Gate Time-In:</b> {outGateTimeIn}</td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE16:</b> {txnF16}</td>',
            '<td width="25%"><b>DE43:</b> {txnF43}</td>',
            '<td width="25%"><b>Issuer BIN:</b> {issuerBin}</td>',
            '<td width="25%"></td>',
            '</tr>','<tr>',
            '<td width="25%"><b>DE18:</b> {txnF18}</td>',
            '<td width="25%"><b>DE44:</b> {txnF44}</td>',
            '<td width="25%"><b>Issuer ID:</b> {issuerId}</td>',
            '<td width="25%"></td>',
            '</tr>','<tr>',
        '</tr></table>'
        )
    }],*/

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
            dataIndex: 'txnMti',
            text: 'Тип операции',
            renderer: 'renderTxnMti',
            flex: 1
        }, {
            dataIndex: 'txnF63_2',
            text: 'ID операции в НСПК',
            flex: 1
        }, {
            dataIndex: 'txnF37',
            text: 'RRN',
            flex: 1
        }, {
            dataIndex: 'txnF2',
            text: 'Номер карты',
            flex: null,
            width: 160
        }, {
            dataIndex: 'txnF7',
            text: 'Дата и время',
            flex: 1
        }, {
            dataIndex: 'txnF4',
            text: 'Сумма',
            flex: 1
        }, {
            dataIndex: 'txnF49',
            text: 'Валюта',
            flex: 1
        }, {
            dataIndex: 'txnF22',
            text: 'POS Entry Mode',
            flex: 1
        }, {
            dataIndex: 'txnF18',
            text: 'MCC',
            flex: 1
        }, {
            dataIndex: 'txnF39',
            text: 'Код ответа',
            flex: 1
        }, {
            dataIndex: 'txnF38',
            text: 'Код авторизации',
            flex: 1
        }, {
            dataIndex: 'txnF2',
            text: 'ICA Эмитента',
            renderer: 'renderEmitentIca',
            flex: 1
        }, {
            dataIndex: 'txnF32',
            text: 'ICA Эквайрера',
            flex: 1
        }]
    }
});
