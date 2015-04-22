/**
 * This View Controller is associated with the Login view.
 */
Ext.define('TrxResearch.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    loginText: 'Logging in...',

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    
    onLoginClick: function() {
        this.doLogin();
    },
    
    doLogin: function() {
        var form = this.lookupReference('form');
        
        if (form.isValid()) {
            Ext.getBody().mask(this.loginText);

            if (!this.loginManager) {
                this.loginManager = new TrxResearch.LoginManager({
                    session: this.getView().getSession(),
                    model: 'TrxResearch.model.User'
                });
            }

            this.loginManager.login({
                data: form.getValues(),
                scope: this,
                success: 'onLoginSuccess',
                failure: 'onLoginFailure'
            });
        }
    },
    
    onLoginFailure: function() {
        Ext.Msg.alert('Ошибки', 'Неудачная авторизация.');
        Ext.getBody().unmask();
    },

    onLoginSuccess: function(user) {
        Ext.getBody().unmask();

        this.fireViewEvent('login', this.getView(), user, this.loginManager);
    }
});
