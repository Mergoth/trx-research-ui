Ext.define('TrxResearch.view.login.Login', {
    extend: 'Ext.window.Window',
    
    requires: [
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],
    
    viewModel: 'login',
    
    controller: 'login',
    bodyPadding: 10,
    title: 'Вход в систему - Transaction Research',
    closable: false,
    
    cls: 'login',
    
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            bind: '{username}',
            fieldLabel: 'Логин',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },

    buttons: [{
        text: 'Вход',
        listeners: {
            click: 'onLoginClick'
        }
    }]
});
