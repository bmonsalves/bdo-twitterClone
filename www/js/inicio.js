var inicio = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //dbtoken.selectToken();

        var setMenu = document.getElementById('setMenu');
        setMenu.addEventListener('click', inicio.settingMenu, false);

        var cerrar = document.getElementById('cerrar');
        cerrar.addEventListener('click', inicio.cerrar, false);
    },

    settingMenu: function(){
        var obj = document.getElementById('cerrar');
        obj.style.display = (obj.style.display=='none') ? 'block' : 'none';
    },

    cerrar: function(){
        dbtoken.deleteToken();
    },

    
    onDeviceReady: function() {
        inicio.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
