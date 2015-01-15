/**
 * При создании в SimManager симлет по умолчанию ошибочно не передается ссылка на менеджера (SimManager)
 */
Ext.define('ScdpMainMenu.overrides.ux.ajax.SimManager', {
    override: 'Ext.ux.ajax.SimManager',

    init: function() {
        if (!this.ready) {
            this.defaultSimlet = new Ext.ux.ajax.Simlet({
                status: 404,
                statusText: 'Not Found',
                manager: this
            });
        }

        this.callParent(arguments);
    },

    getXhr: function (method, url, options, async) {
        console.log('Simulating response to: ' + url);
        return this.callParent(arguments);
    }

});