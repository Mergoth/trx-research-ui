/**
 *
 */
Ext.define('TrxResearch.view.clearing.search.Search', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.trxresearch-clearing-search',
    
    requires: [
        'Ext.form.field.ComboBox'
    ],

    controller: 'trxresearch-clearing-search',
    viewModel: {
        type: 'trxresearch-clearing-search'
    },

    layout: 'vbox',

    bodyPadding: '20 10 0 10',

    defaults: {
        xtype: 'form',
        flex: 1,
        layout: {
            type: 'hbox',
            layout: 'stretch'
        },
        defaults: {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            width: 350,
            labelAlign:'right'
            /*
            labelWidth: 150*/
        }
    },

    items:[
        {
        layout:'hbox',
        items: [{
            reference: 'dateBegin',
            fieldLabel: 'Начальная дата поиска',
            xtype: 'datefield',
            bind: '{dateBegin}',
            format:'d.m.Y',
            editable:false,
            maxValue: new Date(),
            allowBlank:false,
            listeners: {
                select: 'onBeginDateSelect'
            }
        }, {
            reference: 'dateEnd',
            fieldLabel: 'Конечная дата поиска',
            xtype: 'datefield',
            bind: '{dateEnd}',
            format: 'd.m.Y',
            editable: false,
            maxValue: new Date(),
            value: new Date(),
            allowBlank: false,
            listeners: {
                select: 'onEndDateSelect'
            }
        }
        ]
        },
        {
            layout:{
                type:'table',
                columns:3,
                resizable:true
            },
            reference:'optionalFields',
            items: [
                { fieldLabel: 'Полный номер карты',   bind: '{PAN}' ,width:255, maxLength:19 },
                { fieldLabel: 'Тип операции',   bind: '{MTI}', width:255, maxLength:4  },
                { fieldLabel: 'ICA Эмитента', bind: '{issuerICA}', width:255, maxLength:10  },
                { fieldLabel: 'BIN Эмитента', bind: '{issuerBIN}', width:255, maxLength:10  },
                { fieldLabel: 'ICA эквайрера', bind: '{acquirerICA}',width:255, maxLength:6  },
                { fieldLabel: 'BIN эквайрера', bind: '{acquirerBIN}',width:255, maxLength:6  },
                { fieldLabel: 'ARN', bind: '{ARN}',width:255, maxLength:12  },
                { fieldLabel: 'Идентификатор операции (BRN, Trx ID)' ,bind: '{terminalId}', width:255, maxLength:9  },
                { fieldLabel: 'МСС', bind: '{MCC}',width:255, maxLength:4  },
                { fieldLabel: 'Идентифиатор терминала', bind: '{terminalId}',width:255, maxLength:8  }
            ]
        },
        {
        xtype:'button',
        text: 'Поиск',
        handler: 'onSearchClick',
        ui: 'default'
        }
    ]
});