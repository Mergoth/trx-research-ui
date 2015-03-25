Ext.define('TrxResearch.view.details.Details',{
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    viewModel: 'trxresearch-details',
    modal:true,
    controller: 'trxresearch-details',
    bodyPadding: 10,
    title: 'Details - Transaction Research',
    closable: true,


    items: {
        xtype: 'form',
        reference: 'detailsForm',
        layout: {
            type:'table',
            columns:4
        },
        items: {

        },
        //bind: '{details}',
        listeners: {
            beforerender:'beforerender',
            loadDetails:'loadDetails'
        }
    }
});
