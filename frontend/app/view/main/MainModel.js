/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TrxResearch.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title: 'Transaction Research',
        PAN: null,
        dateBegin:new Date(new Date().setDate(new Date().getDate()-90)),
        dateEnd: new Date(),
        MTI: null,
        issuerICA: null,
        issuerBIN: null,
        acquirerId: null,
        RRN: null,
        opId: null,
        MCC: null,
        terminalId: null,
        ARN:null
    },

    formulas: {
        filters: {
            bind: {
                PAN: '{PAN}',
                dateBegin: '{dateBegin}',
                dateEnd: '{dateEnd}',
             /*   MTI: '{MTI}',
                issuerICA: '{issuerICA}',
                issuerBIN: '{issuerBIN}',
                acquirerId: '{acquirerId}',
                RRN: '{RRN}',
                opId: '{opId}',
                MCC: '{MCC}',
                terminalId: '{terminalId}',*/
                ARN:'{ARN}'/*,
                acquirerICA:'{acquirerICA}',
                acquirerBIN:'{acquirerBIN}'*/





            },
            get: function(filters) {
                Ext.Object.each(filters, function(k, v, o) {
                    if (v == null|| v== '') {
                        delete o[k];
                    }
                });
                return filters;
            }
        }
    },

    stores: {
        auth_records: {
            type: 'store',
            model: 'TrxResearch.model.auth.ShortRecord',
            remoteFilter: true,
            proxy: {
                type: 'ajax',
                url: '/proxy/searchService/auth',
                reader: {
                    type: 'json'
                },
                pageParam: false, //to remove param "page"
                startParam: false, //to remove param "start"
                limitParam: false, //to remove param "limit"
                noCache: false //to remove param "_dc"
            }
        },
        clearing_records:{
            type: 'store',
            model: 'TrxResearch.model.clearing.ShortRecord',
            remoteFilter: true,
            proxy: {
                type: 'ajax',
                url: '/proxy/searchService/clearing',
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