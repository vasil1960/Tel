/*
 * File: app/view/About.js
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

Ext.define('Tel.view.About', {
    extend: 'Ext.Panel',
    alias: 'widget.about',

    requires: [
        'Ext.Img'
    ],

    config: {
        border: '1px',
        itemId: 'about',
        layout: 'fit',
        items: [
            {
                xtype: 'image',
                centered: true,
                height: 480,
                width: 320,
                src: 'resources/images/Home.png'
            }
        ]
    }

});