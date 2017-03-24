function operation( globalVariableName, valor ) {//recibe (nombre de la variable, 1 o -1)
    var newValue = parseInt(localStorage.getItem(globalVariableName)) + valor;
    localStorage.setItem(globalVariableName,newValue);
    console.log( localStorage.getItem(globalVariableName) );//aqui muestra la variable como va
}
