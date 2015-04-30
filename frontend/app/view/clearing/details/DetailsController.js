/**
 *
 */
Ext.define('TrxResearch.view.clearing.details.DetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.trxresearch-clearing-details',

    config: {
        control: {
            '#': {
                showdetails: 'onShowDetails'/*,
                closeView: 'onCloseView'*/
            }
        }
    },

    onShowDetails: function(recNumber) {
        //debugger;
        var me=this;
        this.lookupReference('detailsForm').load({
            url: '/proxy/detailsService/clearing',
            params: {'recNumber':recNumber,
                     'reportType':'xml' },
            method: 'GET',
            success: function() {
                me.getView().unmask();
            },
            failure: function() {
                Ext.Msg.alert('Ошибка', 'Ошибка получения детальных результатов!', function() {
                        this.getView().close();
                    },me
                );
            },
            scope: me
        });
        me.getView().show().mask();
    },

    downloadDetails: function(comp) {

        Ext.create('Ext.Component', {
            renderTo: Ext.getBody(),
            cls: 'x-hidden',
            autoEl: {
                tag: 'iframe',
                src: '/proxy/detailsService/clearing?recNumber='+this.getViewModel('trxresearch-auth-details').get('recNumber')+'&amp;reportType='+comp.getStateId()
             }
        });
    },

   /* onCloseView: function() {
        this.getView().close();
    },*/

    beforerender: function(thisComp ) {

        var fields = TrxResearch.model.clearing.Record.fields;
        for (var i=0;i<fields.length;i++) {

            field = fields[i];
            if (field.name!='id' && field.name!='entityId') {
                var displayfield = thisComp.add([
                    {
                        xtype: 'displayfield',
                        name: field.name,
                        bind: '{' + field.name + '}',
                        fieldLabel: field.name,
                        maxWidth: 200,
                        labelAlign:'right',
                        renderer:function(value, field) {
                            var tip = Ext.create('Ext.tip.ToolTip', {
                                // The overall target element.
                                target: field.el,
                                // Moving within the row should not hide the tip.
                                trackMouse: true,
                                html:value

                                });
                         // field.setTooltip(value);
                            return Ext.String.ellipsis(value,20,true);

                        }
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
