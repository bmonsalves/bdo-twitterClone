var reg = {
    // reglication Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        var register = document.getElementById('register');
        register.addEventListener('click', reg.sendRegisterUser, false);
    },

    sendRegisterUser: function(){

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        //alert(name+" "+email+" "+user+" "+pass);
        
        var data = {
            "name": name,
            "email": email,
            "user": user,
            "password": pass
        };


        xmlhttp = new XMLHttpRequest();
        var url = "http://192.168.1.34:4567/api/users/register";
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
        
                var respuesta = JSON.parse(xmlhttp.responseText);

                if (respuesta.codigo == "201") {
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
        reg.receivedEvent('deviceready');
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
