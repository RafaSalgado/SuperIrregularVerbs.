/* storage
var retrievedObject = localStorage.getItem('testObject');
console.log('retrievedObject: ', JSON.parse(retrievedObject));

//------------------------------------------------

var Verb = function(meaning, past){
	this.meaning = meaning;
	this.past = past;
};
Verb.prototype.getMeaning = function() {
	return this.meaning;
}
Verb.prototype.getPast = function() {
	return this.past;
}
Verb.prototype.setMeaning = function(meaning) {
	 this.meaning=meaning;
}
Verb.prototype.setPast = function(past) {
	this.past=past;
}


var write = new Verb("escribir", "wrote");
//alert(write.getPast());

localStorage.setItem('write',JSON.stringify(write));
var getwrite = JSON.parse(localStorage.getItem('write'));
var getwrite2 = new Verb(getwrite['meaning'],getwrite['past']);

console.log(getwrite);
console.log(getwrite2);
console.log(getwrite2.setPast('wrotten'));
console.log(getwrite2);
*/