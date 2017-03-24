$(document).ready(function() {
	miStorage = localStorage;
	userName = localStorage.getItem('name');
    
	if (userName != null) {
		window.location.href = "home.html";
	}

    
	$('#registerForUser').click(function () {
		var user = $('#inputForUser').val();

		if (user == '')
			alert("Campo vacio");
		else {
			localStorage.setItem('name', user);	
			window.location.href = "home.html";
		}
	});
});