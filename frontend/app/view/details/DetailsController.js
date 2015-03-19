/**
 *
 */
Ext.define('TrxResearch.view.grid.DetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.trxresearch-details',
    beforerender: function(thisComp ) {

        var fields = TrxResearch.model.Record.fields;
        for (var i=0;i<fields.length;i++) {

            field = fields[i];
            if (field.name!='id') {
                var txtfield = thisComp.add([
                    {
                        xtype: 'displayfield',
                        name: field.name,
                        bind: '{' + field.name + '}',
                        fieldLabel: field.name,
                        allowBlank: false,
                        enableKeyEvents: true,
                        listeners: {
                            specialKey: 'onSpecialKey'

                        }
                    }]);
                //txtfield[0].disable();
            }
                       // alert(fields[i].getName());
        }

    }

});
