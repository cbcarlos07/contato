/**
 * Created by admin on 05/08/2015.
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',

    requires: [
        'ExtMVC.view.contato.Grid',
        'ExtMVC.view.contato.Formulario'
    ],

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'contatogrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});