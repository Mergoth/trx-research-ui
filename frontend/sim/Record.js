/**
 * Эмулятор Ajax-запроса
 */
Ext.define('TrxResearch.sim.Record', {
    requires: ['Ext.ux.ajax.SimManager']

}, function() {
    Ext.ux.ajax.SimManager.register({
        '/proxy/searchService': {
            type: 'json',
            data: [{"safPlanId":"plan1","outNodeId":"11","exportStatus":"0","txnF43":"0100","txnF44":"0100","txnF45":"0100","txnF48":"0100","txnF49":"0100","txnF50":"0100","txnF51":"0100","txnF52":"0100","txnF53":"0100","txnF55":"0100","txnF60":"0100","txnF61":"0100","txnF62_2":"0100","txnF63_2":"0100","issuerBin":"123451    ","issuerId":"012       ","inGateId":"ArchivistOST","inNodeId":"01","txnF39":"0100","txnF41":"0100","txnF42":"0100","recordId":29552,"envId":"101620580002","envTimeIn":"2014-12-05","txnMti":"0100","txnF2":"0100","txnF3":"0100","txnF4":29552,"txnF5":29552,"txnF6":29552,"txnF7":"0100","txnF9":29552,"txnF10":29552,"txnF12":"0100","txnF13":"0100","txnF14":"0100","txnF15":"0100","txnF16":"0100","txnF18":"0100","txnF22":"0100","txnF23":"0100","txnF25":"0100","txnF28":"0100","txnF32":"0100","txnF33":"0100","txnF35":"0100","txnF37":"0100","txnF38":"0100"}
            ,{"safPlanId":"plan2","outNodeId":"11","exportStatus":"0","txnF43":"0100","txnF44":"0100","txnF45":"0100","txnF48":"0100","txnF49":"0100","txnF50":"0100","txnF51":"0100","txnF52":"0100","txnF53":"0100","txnF55":"0100","txnF60":"0100","txnF61":"0100","txnF62_2":"0100","txnF63_2":"0100","issuerBin":"123451    ","issuerId":"012       ","inGateId":"ArchivistOST","inNodeId":"01","txnF39":"0100","txnF41":"0100","txnF42":"0100","recordId":29552,"envId":"101620580002","envTimeIn":"2014-12-05","txnMti":"0100","txnF2":"0100","txnF3":"0100","txnF4":29552,"txnF5":29552,"txnF6":29552,"txnF7":"0100","txnF9":29552,"txnF10":29552,"txnF12":"0100","txnF13":"0100","txnF14":"0100","txnF15":"0100","txnF16":"0100","txnF18":"0100","txnF22":"0100","txnF23":"0100","txnF25":"0100","txnF28":"0100","txnF32":"0100","txnF33":"0100","txnF35":"0100","txnF37":"0100","txnF38":"0100"}]
        }
    });
});