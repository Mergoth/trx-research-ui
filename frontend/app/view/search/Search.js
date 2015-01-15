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

    layout: 'hbox',

    defaults: {
        xtype: 'form',
        margin: 20,
        flex: 1,
        layout: 'anchor',
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 110
        }
    },

    items:[{
        items: [{
            fieldLabel: 'Record Id',
            bind: '{recordId}'
        }, {
            fieldLabel: 'Env Id',
            bind: '{envId}'
        }, {
            fieldLabel: 'Env Time In',
            bind: '{envTimeIn}'
        }, {
            fieldLabel: 'Saf Plan Id',
            bind: '{safPlanId}'
        }, {
            fieldLabel: 'Txn Mti',
            bind: '{txnMti}'
        }, {
            fieldLabel: 'Issuer Bin',
            bind: '{issuerBin}'
        }, {
            fieldLabel: 'Issuer Id',
            bind: '{issuerId}'
        }]
    }, {
        items: [{
            fieldLabel: 'Service Code',
            bind: '{serviceCode}'
        }, {
            fieldLabel: 'Eci Ind',
            bind: '{eciInd}'
        }, {
            fieldLabel: 'Ucaf Ind',
            bind: '{ucafInd}'
        }, {
            fieldLabel: 'Pin Ind',
            bind: '{pinInd}'
        }, {
            fieldLabel: 'InGate Id',
            bind: '{inGateId}'
        }, {
            fieldLabel: 'OutGate Id',
            bind: '{outGateId}'
        }]
    }, {
        items: [{
            fieldLabel: 'InNode Id',
            bind: '{inNodeId}'
        }, {
            fieldLabel: 'OutNode Id',
            bind: '{outNodeId}'
        }, {
            fieldLabel: 'InGate Time In',
            bind: '{inGateTimeIn}'
        }, {
            fieldLabel: 'InGate Time Out',
            bind: '{inGateTimeOut}'
        }, {
            fieldLabel: 'OutGate Time In',
            bind: '{outGateTimeIn}'
        }, {
            fieldLabel: 'OutGate Time Out',
            bind: '{outGateTimeOut}'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Export Status',
            forceSelection: true,
            editable: false,
            displayField: 'name',
            valueField: 'id',
            publishes: ['value'],
            bind: {
                store: '{statuses}',
                value: '{exportStatus}'
            }
        }]
    }]
});