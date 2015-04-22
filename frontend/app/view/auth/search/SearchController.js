/**
 *
 */
Ext.define('TrxResearch.view.auth.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trxresearch-auth-search',

    onSearchClick: function() {
        this.getViewModel().getParent().getStore('auth_records').removeAll();
        if (this.validateSearchFields()) {
            this.getViewModel().getParent().getStore('auth_records').load({params: this.getViewModel().get('filters'),callback: function(records, operation, success) {
                //the operation object contains all of the details of the load operation
                console.log(records);
            }});
        }else {
            Ext.Msg.alert('Ошибка заполнения полей', 'Хотя бы одно поле, кроме дат должно быть заполнено', function() {

                },this
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
        return this.validateDates()&&this.validateFields();
    },
    validateDates:function() {
        var result = true;
        var dateBegin = this.lookupReference('dateBegin').value;
        var dateEnd = this.lookupReference('dateEnd').value;
        if ((dateEnd.getTime()<dateBegin.getTime())||((dateEnd.getTime()-dateBegin.getTime())>90*24*3600*1000)) {
            result = false;
        }
        return result;
    },
    validateFields:function() {
        var result = {res:false}
        //var fieldValues = this.lookupReference('optionalFields').getValues();
        Ext.iterate(this.lookupReference('optionalFields').getValues(),function(item, index, array) {
            if (array[item]!='') {
                this.res=true;
            }
                },result);
        return result.res;
    }



});
