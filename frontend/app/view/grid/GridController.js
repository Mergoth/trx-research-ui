/**
 *
 */
Ext.define('TrxResearch.view.grid.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trxresearch-grid',

    onSearchClick: function() {
        this.getViewModel().getParent().getStore('records').load({params: this.getViewModel().get('filters')});
    },

    renderStatus: function(v, meta, rec) {
        return TrxResearch.model.Record.getStatusName(v);
    },

    renderEmitentIca: function(v, meta, rec) {
        if (v && v.length > 6) {
            return v.substr(0, 6);
        }
        return v;
    },

    renderTxnMti: function(v, meta, rec) {
        return TrxResearch.model.Record.getTxnMtiName(v);
    },

    onDetailsClick: function(view,rowIndex, colIndex ,item ,e ,record , row) {
       this.showDetails(record,row);
    },

    showDetails: function(record,row) {
        var detailsView = new TrxResearch.view.details.Details({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this
            },
            bind:{
                data: { rec: record }
            }

        });
        detailsView.child('form').loadRecord(record);
        //detailsView.show();
        return detailsView;
    }

});
