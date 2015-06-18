/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('TrxResearch.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onLogout: function () {
        TrxResearch.getApplication().getController('Root@TrxResearch.controller').onClose();
        Ext.getBody().mask();
        TrxResearch.getApplication().getController('Root@TrxResearch.controller').onLaunch();
    }

});
