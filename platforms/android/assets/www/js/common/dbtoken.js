var dbtoken = {

    initialize: function() {
        var db = window.openDatabase("twitter", "1.0", "twitterclone", 10000000);
        db.transaction(dbtoken.populateDB, dbtoken.errorCB, dbtoken.successCB);
    },

    populateDB: function(tx) {
        //tx.executeSql('DROP TABLE IF EXISTS token');
        tx.executeSql('CREATE TABLE IF NOT EXISTS token(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, token)');
    },

    errorCB: function(tx, err) {
        alert("Error processing SQL: "+err);
    },

    successCB: function() {
        console.log("bd cargada");
    },

    insertToken: function(columns,values){
        var db = window.openDatabase("twitter", "1.0", "twitterclone", 10000000);
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO token ('+ columns +') VALUES ("'+ values +'")');
        });
    },

    selectToken: function(){
        var db = window.openDatabase("twitter", "1.0", "twitterclone", 10000000);
        
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM token', [], dbtoken.querySuccess, dbtoken.errorCB);
        });
    },

    querySuccess: function(tx, results){

        if (results.rows.length>0) {
            window.location.href="inicio.html";
            alert(results.rows.item(0).token);
        }
    },

    deleteToken: function(){
        var db = window.openDatabase("twitter", "1.0", "twitterclone", 10000000);
        
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM token', [], dbtoken.deleteSuccess, dbtoken.errorCB);
        });

    },

    deleteSuccess: function(){
        alert("Cerrar Sesion");
        window.location.href="index.html";
    }

};
