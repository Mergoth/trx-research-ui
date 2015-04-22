/**
 *
 */
Ext.define('TrxResearch.view.clearing.grid.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trxresearch-clearing-grid',



    onDetailsClick: function(view,rowIndex, colIndex ,item ,e ,record , row) {
       this.showDetails(record,row);
    },

    renderReversal: function(v, meta, rec) {
        return TrxResearch.model.Record.getTxnMtiName(v);
    },

    showDetails: function(record,row) {

        var detailsView = Ext.create('TrxResearch.view.clearing.details.Details', {autoShow: false});


        detailsView.fireEvent('showdetails', record.get('recNumber'));

    }


});
