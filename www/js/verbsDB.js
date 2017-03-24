
var VerbDB = function (meaning, present, past, participle, askEasy, askHard) {
	this.meaning = meaning;
	this.present = present;
	this.past = past;
	this.participle = participle;
}

VerbDB.prototype.getMeaning = function () {
	return this.meaning;
};

VerbDB.prototype.getPresent = function () {
	return this.present;
};

VerbDB.prototype.getPast = function () {
	return this.past;
};

VerbDB.prototype.getParticiple = function () {
	return this.participle;
};

VerbDB.prototype.getAskEasy = function () {
	return this.askEasy;
};

VerbDB.prototype.getAskHard = function () {
	return this.askHard
};

function addToLocalStorage(str,obj) {
	localStorage.setItem(str,JSON.stringify(obj));
}

function getVerbDBFromLocalStorage(key) {
    var vi = JSON.parse(localStorage.getItem(key));
    return new VerbDB(vi['meaning'],vi['present'],vi['past'],vi['participle'],vi['askEasy'],vi['askHard']);
}

var EAT = new VerbDB("comer","eat","ate","eaten");
addToLocalStorage('eat',EAT);
var BEGIN = new VerbDB("empezar","begin","began","begun");
addToLocalStorage('begin',BEGIN);
var READ = new VerbDB("leer","read","read","read");
addToLocalStorage('read',READ);
var WRITE = new VerbDB("escribir","write","wrote","written");
addToLocalStorage('write',WRITE);

var DRAW = new VerbDB("dibujar","draw","drew","drawn");
addToLocalStorage('draw',DRAW);
var DREAM = new VerbDB("soñar","dream","dreamt","dreamt");
addToLocalStorage('dream',DREAM);
var FIGHT = new VerbDB("luchar","fight","fought","fought");
addToLocalStorage('fight',FIGHT);
var FEEL = new VerbDB("sentir","feel","felt","felt");
addToLocalStorage('feel',FEEL);
var SWIM = new VerbDB("nadar","swim","swam","swum");
addToLocalStorage('swim',SWIM);

var SHOOT = new VerbDB("disparar","shoot","shot","shot");
addToLocalStorage('shoot',SHOOT);
var BET = new VerbDB("apostar","bet","bet","bet");
addToLocalStorage('bet',BET);
var BLOW = new VerbDB("soplar","blow","blew","blew");
addToLocalStorage('blow',BLOW);
var BLEED = new VerbDB("sangrar","bleed","bled","bled");
addToLocalStorage('bleed',BLEED);

var KNEEL = new VerbDB("arrodillarse","kneel","knelt","knelt");
addToLocalStorage('kneel',KNEEL);
var SANK = new VerbDB("hundir","sink","sank","sunk");
addToLocalStorage('sank',SANK);
var SWEAR = new VerbDB("jurar","swear","swore","sworn");
addToLocalStorage('swear',SWEAR);

var VerbsKeys = ['eat','begin','read','write','draw','dream','fight','feel','swim','shoot','bet','blow','bleed','kneel','sank','swear'];

