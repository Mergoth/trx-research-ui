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
    title: 'Login - Transaction Research',
    closable: false,
    
    cls: 'login',
    
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            bind: '{username}',
            fieldLabel: 'Username',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },

    buttons: [{
        text: 'Login',
        listeners: {
            click: 'onLoginClick'
        }
    }]
});
