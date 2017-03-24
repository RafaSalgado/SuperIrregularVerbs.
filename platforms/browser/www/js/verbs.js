var db=openDatabase('sivDb', '1.0', 'partida',5*1024*1024);
//if(  )
db.transaction(
    function(tx){
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS VERBS (meaning CHAR(8) UNIQUE NOT NULL, present CHAR(8) NOT NULL, past CHAR(8) NOT NULL, participle CHAR(8) NOT NULL)' );
        // easy
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("comer","eat","ate","eaten")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("empezar","begin","began","begun")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("leer","read","read","read")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("escribir","write","wrote","written")');
        // medium
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("dibujar","draw","drew","drew")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("soñar","dream","dreamt","dreamt")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("sentir","feel","felt","felt")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("nadar","swim","swam","swum")');
        // hard
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("disparar","shoot","shot","shot")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("apostar","bet","bet","bet")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("soplar","blow","blew","blew")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("sangrar","bleed","bled","bled")');
        // legend
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("arrodillarse","kneel","knelt","knelt")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("hundir","sink","sank","sunk")');
        tx.executeSql('INSERT INTO VERBS (meaning,present, past, participle) VALUES ("jurar","swear","swore","sworn")');
    }
);

var consulta='SELECT * FROM VERBS';

db.transaction(function (tx) {
    tx.executeSql(consulta, [], function (tx, results) {
        var len = results.rows.length, i;
        if(len != 0){
            $('#usuarios_registrados').append('<h1> indices que coinciden'+len+'</h1>');
        }

        for (i = 0; i < len; i++){
            msj = results.rows.item(i).MEANING+i+'<hr>';
            $('#verbShow').append('<p>'+msj+'</p>');
            msj = results.rows.item(i).PRESENT+i+'<hr>';
            $('#verbShow').append('<p>'+msj+'</p>');
            msj = results.rows.item(i).PAST+i+'<hr>';
            $('#verbShow').append('<p>'+msj+'</p>');
            msj = results.rows.item(i).PARTICIPLE+i+'<hr>';
            $('#verbShow').append('<p>'+msj+'</p>');
        }
    },null);
});