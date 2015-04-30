/**
 *
 */
Ext.define('TrxResearch.view.clearing.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trxresearch-clearing-search',

    onSearchClick: function() {
        this.getViewModel().getParent().getStore('clearing_records').removeAll();
        var validateResult =this.validateSearchFields();
        if (validateResult && validateResult.res) {
            this.getViewModel().getParent().getStore('clearing_records').load({params: this.getViewModel().get('filters')});
        }else {
            Ext.Msg.alert('Ошибка заполнения полей', validateResult.msg, function() {
                this.msg;
                },validateResult
            );
        }
    },

    onBeginDateSelect: function(f, v,o) {
        var dateEndPicker = this.lookupReference('dateEnd');
        dateEndPicker.setMinValue(v);
        /*dateEndPicker.setMaxValue(new Date(Math.min(new Date(new Date().setTime(v.getTime()+90*24*3600*1000)),new Date().getTime())));*/
    },
    onEndDateSelect:function(f, v,o) {
        var dateBeginPicker = this.lookupReference('dateBegin');
        dateBeginPicker.setMaxValue(v);
    },
    validateSearchFields: function() {

       if (!this.validateDates().res){
           return this.validateDates().res
       }else {
           return this.validateFields();
       }

    },
    validateDates:function() {
        var result = {res:true, msg:""}
        var dateBegin = this.lookupReference('dateBegin').value;
        var dateEnd = this.lookupReference('dateEnd').value;
        var dateEndInterval = Ext.Date.add(dateBegin,Ext.Date.DAY,90);
        if ( !Ext.Date.between(dateEnd,dateBegin,dateEndInterval)) {
            result.res = false;
            result.msg = "Интервал между датами не должен превышать 90 дней";
        }
        return result;
    },
    validateFields:function() {
        var result = {res:false, msg:"Хотя бы одно поле, кроме дат должно быть заполнено"}
        //var fieldValues = this.lookupReference('optionalFields').getValues();
        Ext.iterate(this.lookupReference('optionalFields').getValues(),function(item, index, array) {
            if (array[item]!='') {
                this.res=true;
            }
                },result);
        return result;
    }



});
