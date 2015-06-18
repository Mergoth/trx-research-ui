/**
 *
 */
Ext.define('TrxResearch.view.auth.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trxresearch-auth-search',

    onSearchClick: function() {
       //Ext.Ajax.fireEvent('requestexception',null, {status:401}, null);
        this.getViewModel().getParent().getStore('auth_records').removeAll();
        if (this.validateSearchFields()) {
            this.getViewModel().getParent().getStore('auth_records').load({params: this.getViewModel().get('filters'),callback: function(records, operation, success) {
                //the operation object contains all of the details of the load operation
                if (!records || records.length == 0) {

                }
                console.log(records);
            }});
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
        var dateEndInterval = Ext.Date.add(dateBegin,Ext.Date.DAY,90);
        if ( !Ext.Date.between(dateEnd,dateBegin,dateEndInterval)) {
            Ext.Msg.alert('Ошибка заполнения полей', 'Максимальный интервал дат в рамках одного запроса не должен превышать 90 календарных дней.', function() {

                },this
            );
            result = false;
        }
        return result;
    },
    validateFields:function() {
        var result = false;
        //var fieldValues = this.lookupReference('optionalFields').getValues();
        Ext.iterate(this.lookupReference('optionalFields').getValues(),function(item, index, array) {
            if (array[item]!='') {
                result=true;
            }
                },result);
        if (!result) {
            Ext.Msg.alert('Ошибка заполнения полей', 'Хотя бы одно поле, кроме дат должно быть заполнено', function() {

                },this
            );
        }
        return result;
    }



});
