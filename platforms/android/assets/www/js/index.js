var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        var sendUser = document.getElementById('sendUser');
        sendUser.addEventListener('click', app.sendDataUser, false);
    },

    sendDataUser: function(){
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        var data = {
            "user": user,
            "password": pass
        };

        xmlhttp = new XMLHttpRequest();
        var url = "http://192.168.1.34:4567/api/users/login";
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                
                var respuesta = JSON.parse(xmlhttp.responseText);

                if (respuesta.codigo == "200") {
                    window.location.href="inicio.html";
                    alert(respuesta.token);
                }else{
                    alert(respuesta.mensaje);
                }
            }
        };
        
        xmlhttp.send(JSON.stringify(data));      

    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
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
