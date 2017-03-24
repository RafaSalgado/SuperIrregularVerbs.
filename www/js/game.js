// nose si sirve

//--------------Clase Nodo  -----------------
var Node = function(dificult, destination ){ 
	this.dificult= dificult;   //en que arbol
	this.destination=destination;	// posicion en el arbol
}

Node.prototype.getDificult = function() {
	return this.dificult;
}
Node.prototype.setDificult = function(dificult) {
	 this.dificult=dificult;
}
Node.prototype.setDestination = function() {
	return this.destination;
}
Node.prototype.getDestination = function(destination) {
	 this.destination=destination;
}

//--------------Clase Game-----------------------------------
var Game = function(node, level, module){
	this.level=level;   //en que arbol
	this.node=node;	// posicion en el arbol
	this.module; //modulo en el que va
}

Game.prototype.getLevel = function() {
	return this.level;
}
Game.prototype.setLevel = function(level) {
	 this.level=level;
}
Game.prototype.setNode = function() {
	return this.nodo;
}
Game.prototype.getNode = function(node) {
	 this.nodo=nodo;
}
Game.prototype.getModule = function() {
	return this.module;
}
Game.prototype.setModule = function(module){
	 this.meaning=meaning;
}
//------------------------------

var mapModule={};
mapModule['key']='mapa';
alert(mapModule['key']);

/*for (var i = 0; i <5; i++) {
	mapModule[i]= {} 
	
	for(var j= 0;  j< 5; j++) {
		mapModule[i]= var mapNode;
		mapNode={}	

			for (var k= 0; k < 6; i++) 
				mapNode= var Nodo
							
	}		
}*/

	



