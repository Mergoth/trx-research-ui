/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TrxResearch.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title: 'Transaction Research',

        txnF2: null,
        txnF7Begin: null,
        txnF7End: null
    },

    formulas: {
        filters: {
            bind: {
                txnF2: '{txnF2}',
                txnF7Begin: '{txnF7Begin}',
                txnF7End: '{txnF7End}'
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
        }
    }
});