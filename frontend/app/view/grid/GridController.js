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
    }
});
