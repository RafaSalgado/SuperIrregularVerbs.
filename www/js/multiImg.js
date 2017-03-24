var verAux = VerbsKeys[ parseInt(localStorage.getItem('positionVerb') ) ];
var correctVerb = getVerbDBFromLocalStorage( verAux );



loadIMageHtml( verAux ); // construye el html

function loadIMageHtml( verbImage ) {

    var verb='image'+verbImage;
    var image = getImageDBFromLocalStorage(verb);
	var option;
	if( parseInt(localStorage.getItem('apNodePosition') ) == 4 ) {
		option = 'participio';
	}
	else {
		option = 'presente';
	}
    $('body').empty();
    $('body').append(
    '<div style="width:53px;height:53px">'+
    '   <a href="index.html"><input class="back" type="button" value="&#10094;" onclick="home.html"/></a>'+
    '</div>'+
    '<div id="headtitle">'+
    '    <div id="containerImg">'+
    '    <img src='+image.getSrc()+'>'+
    '   </div>'+
    '</div>'+

    '<div id="opciones">'+
		'<h1 style="font-size:150%"> Seleccione el '+ option + ' del verbo </h1>' +
    '    <input id="opt1" class="optButton" type="button" value="'+image.getOptionA()+'">'+
    '    <input id="opt2" class="optButton" type="button" value="'+image.getOptionB()+'">'+
    '    <input id="opt3" class="optButton" type="button" value="'+image.getOptionC()+'">'+
    '    <input id="opt4" class="optButton" type="button" value="'+image.getOptionD()+'">'+
    '</div>');
}

$('#opt1').click(function(){
    verifyAnswer( '#opt1' );
});

$('#opt2').click(function(){
    verifyAnswer( '#opt2' );
});

$('#opt3').click(function(){
    verifyAnswer( '#opt3' );
});

$('#opt4').click(function(){
    verifyAnswer( '#opt4' );
});


function verifyAnswer( option )
{
	if( parseInt(localStorage.getItem('apNodePosition')) == 4 &&  correctVerb.getParticiple().localeCompare($(option).val()) == 0  ){
		operation('apNodePosition', 1 );
	   	window.location.href = "multipleSentence.html";

    }
	if( parseInt(localStorage.getItem('apNodePosition')) == 4 &&  correctVerb.getParticiple().localeCompare($(option).val()) != 0  ){
	   	operation('apNodePosition', -1 );
		window.location.href = "multipleComplete.html";

    }
	if( parseInt(localStorage.getItem('apNodePosition')) == 2 &&  correctVerb.getPresent().localeCompare($(option).val()) == 0  ){
		operation('apNodePosition', 1 );
	   	window.location.href = "multipleComplete.html";
    }
	if( parseInt(localStorage.getItem('apNodePosition')) == 2 &&  correctVerb.getPresent().localeCompare($(option).val()) != 0  ){
	   	operation('apNodePosition', -1 );
		window.location.href = "multipleSentence.html";	
    }
}
