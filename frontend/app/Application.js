Ext.Ajax.on('requestexception', function(connection, response, options) {
    //alert(response.status)
    if(response.status == 401){
      //  alert("Alyarma!");
        TrxResearch.getApplication().getController('Root@TrxResearch.controller').onShowLogin()
    }

});
//@charset UTF-8
/**
 *
 */
Ext.define('TrxResearch.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'TrxResearch.*'
    ],

    controllers: [
        'Root@TrxResearch.controller'
    ],

    name: 'TrxResearch',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
