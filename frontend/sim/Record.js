/**
 * Эмулятор Ajax-запроса
 */


Ext.define('TrxResearch.sim.auth.Record', {
    requires: ['Ext.ux.ajax.SimManager']
}, function() {

    var details = [{"success":true,"data":{"txnF6":"0","txnF15":"0209","txnF7":"0209103943","txnF16":"","txnF4":"1500","txnF5":"0","txnF18":"6011","ucafInd":null,"inGateTimeOut":"2015-02-09 07:39:44","txnF9":"0","txnF2":"6799990200000001049","txnF3":"","recordId":"101631490157","issuerId":null,"pinInd":null,"txnF60":"","txnF61":"0000000000500840902101234","txnF62_2":"","txnMti":"0100","txnF22":"","txnF23":"000","issuerBin":null,"txnF25":"","inGateTimeIn":"2015-02-09 07:39:44","txnF28":"","exportStatus":"0","eciInd":null,"outGateId":null,"envId":"101631490157","envTimeIn":"2015-02-09 10:40:20","inGateId":"Sim_MAS_ACQ","txnF32":"012345","txnF33":"","txnF35":"6799990200000001049D181020108749093","txnF37":"085000100001","txnF38":"","txnF39":"","serviceCode":null,"outGateTimeOut":"2015-03-26 13:38:05","txnF63_2":"02BC07","txnF41":"12345678","txnF42":"123456789123456","txnF43":"","txnF44":"","txnF45":"","txnF48":"","txnF49":"643","outNodeId":null,"inNodeId":"01","safPlanId":null,"outGateTimeIn":"2015-03-26 13:38:05","txnF50":"","txnF51":"","txnF52":"E085AF86077D4235","txnF53":"","txnF10":"0","txnF55":"5F2A02064382025800950500000400009A031502099C01009F02060000000010009F1008010103250000DAC19F1A0208409F26082351C9DA6B127C859F2701809F360200629F37041E31C4F39F3403420100","txnF12":"103943","txnF13":"0209","txnF14":""}}
        ,{"failure": true, "data":{"recordId":2955,"safPlanId":"plan2","outNodeId":"11","exportStatus":"0","txnF43":"0100","txnF44":"0100","txnF45":"0100","txnF48":"0100","txnF49":"0100","txnF50":"0100","txnF51":"0100","txnF52":"0100","txnF53":"0100","txnF55":"0100","txnF60":"0100","txnF61":"0100","txnF62_2":"0100","txnF63_2":"0100","issuerBin":"123451    ","issuerId":"012       ","inGateId":"ArchivistOST","inNodeId":"01","txnF39":"0100","txnF41":"0100","txnF42":"0100","envId":"101620580002","envTimeIn":"2014-12-05","txnMti":"0100","txnF2":"0100","txnF3":"0100","txnF4":29552,"txnF5":29552,"txnF6":29552,"txnF7":"0100","txnF9":29552,"txnF10":29552,"txnF12":"0100","txnF13":"0100","txnF14":"0100","txnF15":"0100","txnF16":"0100","txnF18":"0100","txnF22":"0100","txnF23":"0100","txnF25":"0100","txnF28":"0100","txnF32":"0100","txnF33":"0100","txnF35":"0100","txnF37":"0100","txnF38":"0100"}}
    ,  {"success": true, "data":{"recordId":295534242, "safPlanId":"plan21","outNodeId":"11","exportStatus":"0","txnF43":"0100","txnF44":"0100","txnF45":"0100","txnF48":"0100","txnF49":"0100","txnF50":"0100","txnF51":"0100","txnF52":"0100","txnF53":"0100","txnF55":"0100","txnF60":"0100","txnF61":"0100","txnF62_2":"0100","txnF63_2":"0100","issuerBin":"123451    ","issuerId":"012       ","inGateId":"ArchivistOST111","inNodeId":"01","txnF39":"0100","txnF41":"0100","txnF42":"0100","envId":"101620580002","envTimeIn":"2014-12-05","txnMti":"0100","txnF2":"0100","txnF3":"0100","txnF4":29552,"txnF5":29552,"txnF6":29552,"txnF7":"0100","txnF9":29552,"txnF10":29552,"txnF12":"0100","txnF13":"0100","txnF14":"0100","txnF15":"0100","txnF16":"0100","txnF18":"0100","txnF22":"0100","txnF23":"0100","txnF25":"0100","txnF28":"0100","txnF32":"0100","txnF33":"0100","txnF35":"0100","txnF37":"0100","txnF38":"0100"}}
    ];


    Ext.ux.ajax.SimManager.register({
        '/proxy/detailsService/auth': {
            type: 'json',
            data: function(ctx) {
                var recordId = ctx.params.recordId,
                    detail = Ext.Array.findBy(details,function(item) {
                            return item.data.recordId === recordId;
                        }) || details[0];
                return Ext.apply({},detail);
            }
        }
    });
});

Ext.define('TrxResearch.sim.auth.ShortRecord', {
    requires: ['Ext.ux.ajax.SimManager']

}, function() {
    var auth_records = [{"recordId":295534242,"txnMti":"400", "txnF63_2":"0100"}
        ,{"recordId":2955,"txnMti":"0200", "txnF63_2":"0200"}];
    Ext.ux.ajax.SimManager.register({
        '/proxy/searchService/auth': {
            type: 'json',
            data: [{"recordId":295534242,"txnMti":"0400", "txnF63_2":"0100"}
                ,{"recordId":2955,"txnMti":"0200", "txnF63_2":"0200"}]
        }
    });
});