Ext.define('TrxResearch.view.clearing.details.Details',{
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    viewModel: 'trxresearch-clearing-details',
    modal:true,
    controller: 'trxresearch-clearing-details',
    bodyPadding: 10,
    title: 'Details - Transaction Research',
    closable: true,


    items: [
        {
            xtype: 'form',
            reference: 'detailsForm',
            scrollable: 'y',
            layout: {
                type:'table',
                columns:4,
                resizable:true
            },

            //bind: '{details}',
            listeners: {
                beforerender:'beforerender',
                loadDetails:'loadDetails'
            }
        },
        {
           xtype:'splitbutton',
           text: 'Скачать как PDF',
           stateId:'PDF',
           listeners: {
               click:'downloadDetails'

           },
           menu: [
                   {text: 'Скачать как XLS', stateId:"XLS", listeners: {
                       click:'downloadDetails'

                   }
                   }
                ]

        }
    ]
});
