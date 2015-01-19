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
