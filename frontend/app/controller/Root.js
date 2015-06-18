/**
 * This global controller manages the login view and ensures that view is created when
 * the application is launched. Once login is complete we then create the main view.
 */
Ext.define('TrxResearch.controller.Root', {
    extend: 'Ext.app.Controller',
    
    loadingText: 'Загрузка...',
    
    onLaunch: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Не поддерживается', 'Это приложение не поддерживает браузеры Internet Explorer 8 и ранее. Пожалуйста, используёте другой браузер.');
            return;
        }
        
        this.session = new Ext.data.Session({
            autoDestroy: false
        });
        
        this.login = new TrxResearch.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
    },

    onShowLogin: function () {
        Ext.getBody().mask();
        Ext.Msg.alert('Ошибка ' +
            'Ошибка аутентификации', 'Вы ввели неправильный логин/пароль или сессия истекла. Необходимо авторизоваться снова', function() {
                //this.getView().close();
                this.onLaunch();
            },this
        );

        //this.viewport = this.login;
    },

    /**
     * Called when the login controller fires the "login" event.
     *
     * @param loginController
     * @param user
     * @param organization
     * @param loginManager
     */
    onLogin: function (loginController, user, organization, loginManager) {
        this.login.destroy();

        this.loginManager = loginManager;
        this.organization = organization;
        this.user = user;
        
        this.showUI();
    },
    
    showUI: function() {
        this.viewport = new TrxResearch.view.main.Main({
            session: this.session,
            viewModel: {
                data: {
                    currentUser: this.user
                }
            }
        });
    },
    
    getSession: function() {
        return this.session;
    },

    onClose: function() {
        this.viewport.destroy();
        this.viewport=null;
        this.session=null;
    }
});
