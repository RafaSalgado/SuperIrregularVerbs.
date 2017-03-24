var verAux = VerbsKeys[ parseInt(localStorage.getItem('positionVerb') ) ];

var loadV = "sentence" + verAux;
	if( parseInt(localStorage.getItem('apNodePosition') ) == 5 ) {
		loadV += "Hard";
	}		
	else {
		loadV += "Easy";
	}
var sentence = getSentenceDBFromLocalStorage(loadV);

loadSentence(verAux);  // llamado de la funcion

function loadSentence( verb ) 
{  
    $('body').empty();
    $('body').append(
    '<div style="width:53px;height:53px">'+
    '   <a href="index.html"><input class="back" type="button" value="&#10094;" onclick="home.html"/></a>'+
    '</div>'+
    '<div id="headtitle">'+
    '      <div id="containerWord" >' +
        '    <h4 style=" font-size= 9%">' + sentence.getQuestion() + '</h4>'+
    '</div>' +
    '   </div>'+
    '</div>'+
    '<div id="opciones">'+
    '    <input id="opt1" class="optButton" type="button" value="'+sentence.getOptionA()+'">'+
    '    <input id="opt2" class="optButton" type="button" value="'+sentence.getOptionB()+'">'+
    '    <input id="opt3" class="optButton" type="button" value="'+sentence.getOptionC()+'">'+
    '    <input id="opt4" class="optButton" type="button" value="'+sentence.getOptionD()+'">'+
    '</div>');
}


$('#opt1').click(function(){
    verifyAnswerSent( '#opt1' );
});

$('#opt2').click(function(){
    verifyAnswerSent( '#opt2' );
});

$('#opt3').click(function(){
    verifyAnswerSent( '#opt3' );
});


function verifyAnswerSent( option )
{
	
	if( parseInt(localStorage.getItem('apNodePosition')) == 5 &&  sentence.getAnswer().localeCompare($(option).val()) == 0  ){
		operation('apNodePosition', -2 );
		
		if( parseInt(localStorage.getItem('positionVerb') ) == 15 )  {
			alert( "felicidades " );
			window.location.href = "home.html"; 
		}else {
			operation( 'positionVerb', 1 );
	   		window.location.href = "multipleComplete.html"; 			
		}		
    }
	
	if( parseInt(localStorage.getItem('apNodePosition')) == 5 &&  sentence.getAnswer().localeCompare($(option).val()) != 0  ) {
	   	operation('apNodePosition', -1 ); 
		window.location.href = "multipleImg.html";
    }
	
	if( parseInt(localStorage.getItem('apNodePosition')) == 1 &&  sentence.getAnswer().localeCompare($(option).val()) == 0 ) {
		operation('apNodePosition', 1 ); 
	   	window.location.href = "multipleImg.html";
    }
}