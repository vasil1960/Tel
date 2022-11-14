/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Tel.controller.Main', {
    extend: 'Ext.app.Controller',
    alias: 'controller.main',

    config: {
        refs: {
            alluserslist: 'allusers list',
            podlist: 'podelenialistt#podlist',
            podelenia: 'podelenia',
            iagBtn: 'button#iagBtn',
            main: 'navigationview#main',
            userslist: 'list#userslist',
            aboutBtn: 'button#aboutBtn',
            searchBtn: 'button#searchBtn',
            searchusr: {
                selector: 'searchfield#searchusr',
                xtype: 'Ext.field.Search'
            },
            podBtn: 'button#podBtn',
            searchpod: {
                selector: 'searchfield#searchpod',
                xtype: 'Ext.field.Search'
            }
        },

        control: {
            "searchusr": {
                keyup: 'onSearchfieldKeyup',
                clearicontap: 'onClearIconSearchUsrTap1'
            },
            "searchpod": {
                clearicontap: 'onClearIconSearchPodTap',
                keyup: 'onSearchfieldPodKeyup'
            },
            "searchBtn": {
                tap: 'onSearchBtnTap'
            },
            "podBtn": {
                tap: 'onPodBtnTap'
            },
            "userslist": {
                itemtap: 'onUsersListItemTap'
            }
        }
    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        var value = textfield.getValue();
        if (Number(value) === parseInt(value, 10))
          this.search('Store', textfield, 'searchByTelNumber');
        else
          this.search('Store', textfield, 'searchByImeOrAndFam');
    },

    onClearIconSearchPodTap: function(textfield, e, eOpts) {
        this.getApplication().getController('Func').clearList('Podelenia', 'https://vasil.iag.bg/tel/podelenia/all');

    },

    onClearIconSearchUsrTap1: function(textfield, e, eOpts) {
        this.getApplication().getController('Func').clearList('Store', 'https://vasil.iag.bg/tel/allusers/all');
    },

    onSearchfieldPodKeyup: function(textfield, e, eOpts) {
        this.search('Podelenia', textfield, 'searchByPodelenie');
    },

    onSearchBtnTap: function(button, e, eOpts) {

                this.getMain().push(
                    Ext.create('Tel.view.UsersList',{
                        title: 'Търсене в цялата БД',
                        data:  record.data
                    })
                );
    },

    onPodBtnTap: function(button, e, eOpts) {
        // this.getMain().push({
        //     xtype: 'podelenialist',
        //     title: 'Търсене поделения',
        // });
    },

    onUsersListItemTap: function(dataview, index, target, record, e, eOpts) {
        this.getMain().push({
            xtype: 'personaldetail',
            title: record.get('titla') + ' ' + record.get('ime') + ' ' + record.get('fam'),
            data: record.data,

            layout: 'vbox',
            items: [
                {
                    xtype: 'panel',
                    docked: 'top',
                    flex: 1,
                    margin: 10,
                    tpl: [
                        '<table style="text-align:center">',
                        '    <tr>',
                        '        <td style="padding:5px"><img src="https://vasil.iag.bg/upload/{glav_pod}/{picture}" width="140" heigh="140">',
                        '    </td>      ',
                        '    <tr>',
                        '        <td><small>Поделение: </small><b>{pod}</td>',
                        '    </tr>',
                        '    <tr>',
                        '        <td><small>Моб. тел: </small><b>{tel}</b></td>',
                        '    </tr>',
                        '    <tr>',
                        '        <td><small>Email: </small><b>{email}</b></td>',
                        '    </tr>',
                        '    <tr>',
                        '        <td><small>Длъжност: </small><b>{dlagnost}</b></td>',
                        '    </tr>',
                        '    <tr>',
                        '        <td><small>Дирекция: </small><b>{directorate_badj}</b></td>',
                        '    </tr>  ',
                        '   ',
                        '</table>'
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    docked: 'bottom',
                    padding: 50,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            text: 'Тел',
                            padding: 10,
                            ui: 'action-small',
                            disabled : (record.data.tel === 'Не е посочен телефон') ? true : false,
                            handler: function() {
                                document.location.href = 'tel:'+record.data.tel;
                            }
                        },
                        {
                            xtype: 'spacer',
                            width: 10
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            text: 'Email',
                            padding: 10,
                            ui: 'action-small',
                            disabled : (record.data.email === 'Не е посочен email') ? true : false,
                            handler: function() {
                                document.location.href = 'mailto:' + record.data.email;
                            }
                        },
                        {
                            xtype: 'spacer',
                            width: 10
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            text: 'SMS',
                            padding: 10,
                            ui: 'action-small',
                            disabled : (record.data.tel === 'Не е посочен телефон') ? true : false,
                            handler: function() {
                                document.location.href = 'sms:' + record.data.tel;
                            }
                        }
                    ]
                },

            ]

        });
    },

    search: function(store, textfield, key) {
        Ext.Viewport.setMasked({xtype:'loadmask', message:'Зареждам ...', indicator:true });

        var store = Ext.getStore(store),
            value = textfield.getValue();

        store.clearFilter();

        store.currentPage = 1;

        if (key == 'searchByImeOrAndFam' && value.length === 0 ) {

            this.getApplication().getController('Func').clearList(store,'https://vasil.iag.bg/tel/allusers/all');
        }

        if (key == 'searchByPodelenie' && value.length === 0 ) {

            this.getApplication().getController('Func').clearList(store,'https://vasil.iag.bg/tel/podelenia/all');
        }


        if (value.length < 1) {
            return;
        }


        if(value && key == 'searchByImeOrAndFam'){

            var val = value.split(' ');

            if(val.length == 1){
                store.getProxy().setUrl('https://vasil.iag.bg/tel/allusers/imeOrFam');
                store.getProxy().setExtraParams({strImeOrFam:val[0]});
            }

            if(val.length == 2){
                store.getProxy().setUrl('https://vasil.iag.bg/tel/allusers/imeAndFam');
                store.getProxy().setExtraParams({strIme:val[0], strFam:val[1]});
            }
        }


        if(value && key == 'searchByTelNumber'){
            if(value.length > 2){
                store.getProxy().setUrl('https://vasil.iag.bg/tel/allusers/byNumber');
                store.getProxy().setExtraParams({number:value});
            }
        }


        if(value && key == 'searchByPodelenie'){

            if(value.length > 0){
                store.getProxy().setUrl('https://vasil.iag.bg/tel/podelenia');
                store.getProxy().setExtraParams({pod:value});
            }
        }

        this.getApplication().getController('Func').loadStore(store);

        Ext.Viewport.setMasked(false);
    }

});