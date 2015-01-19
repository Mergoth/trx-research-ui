/**
 *
 */
Ext.define('TrxResearch.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        'name',
        { name: 'organizationId', reference: 'Organization' }
    ]
});
