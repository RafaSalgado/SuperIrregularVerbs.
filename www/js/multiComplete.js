var verAux = VerbsKeys[ parseInt(localStorage.getItem('positionVerb') ) ];

var verb = getVerbDBFromLocalStorage( verAux );

$('h4').html( verb.getMeaning() );

buildCompleteWord( verb );

function buildCompleteWord( verb )
{
	var globalVerb = completeView( verb );
	$( '#verifyAnswer' ).click( function() {
		var answer = true;
		answer &= isTheSame( globalVerb.getPresent(), "containerWordPresent", verb.getPresent() );
		answer &= isTheSame( globalVerb.getPast(), "containerWordPast", verb.getPast() );
		answer &= isTheSame( globalVerb.getParticiple(), "containerWordParticiple", verb.getParticiple() );
		if( answer ) {
			operation( 'apNodePosition', 1 );
			window.location.href = "multipleImg.html";
	    }
		else {
			operation( 'apNodePosition', -1 );
			window.location.href = "multipleImg.html";
		}

	});
}


function isTheSame( generated, id, verbalTime )
{
	for( var i = 0; i < generated.length; i++ )
		if( generated[i] == '*' && document.getElementById( id+''+i ).value.toLowerCase() != verbalTime[i] )
			return false;
	return true;
}


function hideLetter( word )
{
    var letterHided = Math.floor(  (2 * word.length) / 3 );
    var letter;
    while( letterHided != 0 ) {
        letter = Math.floor( Math.random() * word.length );
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

function completeView( verb )
{
	var present = hideLetter( verb.getPresent() );
    $('#containerGeneric1').append('<label style = " font-size: 70%; color:blue ;position:left" >Presente </label>');
    for (var i = 0; i < present.length; i++) {
        if (present[i] == '*') {
            $('#containerWordPresent').append('<input id="containerWordPresent'+i+'" class ="espaciosVacios" type="text" placeholder="" maxlength="1" >');
        } else{
            $('#containerWordPresent').append( present[i] );
        };
		 $('#containerWordPresent').append( ' ' );
    };

	var past = hideLetter( verb.getPast() );
    $('#containerGeneric2').append('<label style =" font-size: 70%; color:blue" > Pasado </label>');
    for (var i = 0; i < past.length; i++) {
        if (past[i] == '*') {
            $('#containerWordPast').append('<input id="containerWordPast'+i+'" class ="espaciosVacios" type="text" placeholder="" maxlength="1" >');
        } else{
            $('#containerWordPast').append( past[i] );
        };
		$('#containerWordPast').append( ' ' );
    };
	var participle = hideLetter( verb.getParticiple() );
    $('#containerGeneric3').append('<label style =" font-size: 70% ; color:blue" >Participle </label>');
    for (var i = 0; i < participle.length; i++) {
        if (participle[i] == '*') {
            $('#containerWordParticiple').append('<input id="containerWordParticiple'+i+'" class="espaciosVacios" type="text" placeholder="" maxlength="1">');
        } else{
            $('#containerWordParticiple').append( participle[i] );
        };
		$('#containerWordParticiple').append( ' ' );
    };
    $('#containerWord .espaciosVacios').get(0).focus();
    $('#containerWord .inputBox .espaciosVacios').keyup(function () {
      $(this).next('#containerWord .espaciosVacios').focus();
    });
    /*$('#containerWord > .inputBox > .espaciosVacios').each(function(){
        $(this).next('#containerWord .espaciosVacios:first').focus();
    });*/

	return new VerbDB("generico", present, past, participle);
}
