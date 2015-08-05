/**
 * Created by admin on 05/08/2015.
 */
Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    controllers: [
        'Contatos'
    ],

    autoCreateViewport: true
});