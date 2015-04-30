//@charset UTF-8
/**
 *
 */
Ext.define('TrxResearch.view.auth.details.DetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.trxresearch-auth-details',

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
            url: '/proxy/detailsService/auth',
            params: {'recordId':recordId,
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
                src: '/proxy/detailsService/auth?recordId='+this.getViewModel('trxresearch-auth-details').get('recordId')+'&amp;reportType='+comp.getStateId()

             }
        });
    },



    beforerender: function(thisComp ) {

        var fields = TrxResearch.model.auth.Record.fields;
        for (var i=0;i<fields.length;i++) {

            field = fields[i];
            if (field.name!='id' && field.name!='entityId' && field.name!='recNumber') {
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


    }

});
