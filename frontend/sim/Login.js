/**
 * Эмулятор Ajax-запроса
 */
/*
Ext.define('TrxResearch.sim.Login', {
    requires: ['Ext.ux.ajax.SimManager']

}, function() {
    var users = [{name: 'nspk'}];

    Ext.ux.ajax.SimManager.register({
        '/proxy/authenticate': {
            type: 'json',
            data: function(ctx) {
                var userName = ctx.params.username,
                    user = Ext.Array.findBy(users, function(item) {
                        return item.name === userName;
                    }) || users[0];

                return Ext.apply({}, user);
            }
        }
    });
});
*/
