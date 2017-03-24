
var word = "bitten";
function hideLetter( word )
{
    var letterHided = Math.floor(  (2 * word.length) / 3 );
    var letter;
    while( letterHided != 0 ) {
        letter = Math.floor( Math.random() * (word.length - 1 ) );
        if( word[ letter ] != '*' )
        {
            word = word.replace( word[ letter ], '*' );
            letterHided--;
        }
        else {
            continue;
        }
    }
    return word;
}
var newWord = hideLetter( word ) ;
//alert( newWord );


$(document).ready(function () {
    var verb = newWord.split('');
    $('#containerWord').append('<label> past :</label>');
    for (var i = 0; i < verb.length; i++) {
        if (verb[i] == '*') {
            $('#containerWord').append('<input class ="espaciosVacios" type="text" placeholder="" maxlength="1" >');
        } else{
            $('#containerWord').append(verb[i]);
        };
    };
    $('#containerWord .espaciosVacios').get(0).focus();
    $('#containerWord .espaciosVacios').keyup(function () {
        $(this).next('#containerWord .espaciosVacios').focus();
    })
})
