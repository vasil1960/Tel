/*
 * File: app/view/PersonalDetail.js
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

Ext.define('Tel.view.PersonalDetail', {
    extend: 'Ext.Container',
    alias: 'widget.personaldetail',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'personaldetail',
        styleHtmlContent: true,
        layout: 'fit',
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
    }

});