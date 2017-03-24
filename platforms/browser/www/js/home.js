$(document).ready(function () {
    function onDeviceReady() {
        // alert("deviceready");
        document.getElementById('exit').addEventListener('click', function() {
            navigator.app.exitApp();
        });
    }
})
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
//
