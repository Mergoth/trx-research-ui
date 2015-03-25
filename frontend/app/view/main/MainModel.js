/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TrxResearch.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title: 'Transaction Research',

        PAN: null,
        dateBegin: null,
        dateEnd: null,
        MTI: null,
        issuerICA: null,
        issuerBIN: null,
        acquirerId: null,
        RRN: null,
        opId: null,
        MCC: null,
        terminalId: null
    },

    formulas: {
        filters: {
            bind: {
                PAN: '{PAN}',
                dateBegin: '{dateBegin}',
                dateEnd: '{dateEnd}',
                MTI: '{MTI}',
                issuerICA: '{issuerICA}',
                issuerBIN: '{issuerBIN}',
                acquirerId: '{acquirerId}',
                RRN: '{RRN}',
                opId: '{opId}',
                MCC: '{MCC}',
                terminalId: '{terminalId}'
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
            model: 'TrxResearch.model.ShortRecord',
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
        }
    }
});