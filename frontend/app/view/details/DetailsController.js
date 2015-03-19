/**
 *
 */
Ext.define('TrxResearch.view.grid.DetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.trxresearch-details',

    config: {
        control: {
            '#': {
                showdetails: 'onShowDetails'/*,
                closeView: 'onCloseView'*/
            }
        }
    },

    onShowDetails: function(recordId) {
        //debugger;
        var me=this;
        this.lookupReference('detailsForm').load({
            url: '/proxy/detailsService',
            params: {'recordId':recordId},
            method: 'GET',
            success: function() {

            },
            failure: function() {
                Ext.Msg.alert('Ошибка', 'Ошибка получения детальных результатов!', function() {
                        this.getView().close();
                    },me
                );
            },
            scope: me
        });
        this.getView().show();
    },

   /* onCloseView: function() {
        this.getView().close();
    },*/

    beforerender: function(thisComp ) {

        var fields = TrxResearch.model.Record.fields;
        for (var i=0;i<fields.length;i++) {

            field = fields[i];
            if (field.name!='id') {
                var displayfield = thisComp.add([
                    {
                        xtype: 'displayfield',
                        name: field.name,
                        bind: '{' + field.name + '}',
                        fieldLabel: field.name,
                        allowBlank: false
                    }]);

            }

        }


    }/*,
    loadDetails: function(record) {
        this.getViewModel().getStore('details').load({
            scope: this,
            params: {'recordId':record.recordId},
            callback: function(records,operation,success) {
                alert("loaded");
            }

        });
    }*/

});
