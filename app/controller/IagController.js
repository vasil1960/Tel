/*
 * File: app/controller/IagController.js
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

Ext.define('Tel.controller.IagController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.iagcontroller',

    config: {
        refs: {
            iagBtn: {
                selector: 'button#iagBtn',
                xtype: 'Ext.Button'
            },
            iaguserslist: 'list#iaguserslist',
            main: 'navigationview#main',
            personaldetail: 'container#personaldetail'
        },

        control: {
            "iagBtn": {
                tap: 'onIagBtnTap'
            },
            "iaguserslist": {
                itemtap: 'onIaguserslistItemTap'
            }
        }
    },

    onIagBtnTap: function(button, e, eOpts) {
        this.getApplication().getController('Func').loadStore('IagStore');

        this.getMain().push({
            xtype: 'iaguserslist',
            title: 'Служители в ИАГ'
        });
    },

    onIaguserslistItemTap: function(dataview, index, target, record, e, eOpts) {
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

    }

});