/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TrxResearch.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title: 'TRX Research',

        recordId: null,
        envId: null,
        envTimeIn: null,
        safPlanId: null,
        txnMti: null,
        issuerBin: null,
        issuerId: null,
        serviceCode: null,
        eciInd: null,
        ucafInd: null,
        pinInd: null,
        inGateId: null,
        outGateId: null,
        inNodeId: null,
        outNodeId: null,
        inGateTimeIn: null,
        inGateTimeOut: null,
        outGateTimeIn: null,
        outGateTimeOut: null,
        exportStatus: null
    },

    formulas: {
        filters: {
            bind: {
                recordId: '{recordId}',
                envId: '{envId}',
                envTimeIn: '{envTimeIn}',
                safPlanId: '{safPlanId}',
                txnMti: '{txnMti}',
                issuerBin: '{issuerBin}',
                issuerId: '{issuerId}',
                serviceCode: '{serviceCode}',
                eciInd: '{eciInd}',
                ucafInd: '{ucafInd}',
                pinInd: '{pinInd}',
                inGateId: '{inGateId}',
                outGateId: '{outGateId}',
                inNodeId: '{inNodeId}',
                outNodeId: '{outNodeId}',
                inGateTimeIn: '{inGateTimeIn}',
                inGateTimeOut: '{inGateTimeOut}',
                outGateTimeIn: '{outGateTimeIn}',
                outGateTimeOut: '{outGateTimeOut}',
                exportStatus: '{exportStatus}'
            },
            get: function(filters) {
                Ext.Object.each(filters, function(k, v, o) {
                    if (v == null) {
                        delete o[k];
                    }
                });
                return filters;
            }
        }
    },

    stores: {
        records: {
            type: 'store',
            model: 'TrxResearch.model.Record',
            remoteFilter: true,
            proxy: {
                type: 'ajax',
                url: '/proxy/searchService',
                reader: {
                    type: 'json'
                },
                pageParam: false, //to remove param "page"
                startParam: false, //to remove param "start"
                limitParam: false, //to remove param "limit"
                noCache: false //to remove param "_dc"
            }
        },

        statuses: {
            fields: ['id', 'name'],
            data: [{
                id: '-1',
                name: '-- All --'
            }, {
                id: '0',
                name: 'Pending'
            }, {
                id: '1',
                name: 'Open'
            }, {
                id: '2',
                name: 'Closed'
            }]
        }
    }
});