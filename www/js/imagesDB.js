
var ImageDB = function (src, optionA, optionB, optionC, optionD) {
    this.src = src;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
}

ImageDB.prototype.getSrc = function () {
    return this.src;
};

ImageDB.prototype.getOptionA = function () {
    return this.optionA;
};

ImageDB.prototype.getOptionB = function () {
    return this.optionB;
};

ImageDB.prototype.getOptionC = function () {
    return this.optionC;
};

ImageDB.prototype.getOptionD = function () {
    return this.optionD;
};

function addImageDBToLocalStorage(str,obj) {
    localStorage.setItem(str,JSON.stringify(obj));
}

function getImageDBFromLocalStorage(key) {
    var vi = JSON.parse(localStorage.getItem(key));
    return new ImageDB(vi['src'],vi['optionA'],vi['optionB'],vi['optionC'],vi['optionD']);
}

var imageEat = new ImageDB("img/eat.jpg","eat","ate","eaten","eating");
addImageDBToLocalStorage('imageeat',imageEat);
var imageBegin = new ImageDB("img/begin.jpg","began","begin","brought","begun");
addImageDBToLocalStorage('imagebegin',imageBegin);
var imageRead = new ImageDB("img/read.jpg","readed","read","reads","has readed");
addImageDBToLocalStorage('imageread',imageRead);
var imageWrite = new ImageDB("img/write.jpg","wrote","write","written","to wrote");
addImageDBToLocalStorage('imagewrite',imageWrite);
var imageDraw = new ImageDB("img/draw.jpg","draw","drew","drawn","to draw");
addImageDBToLocalStorage('imagedraw',imageDraw);
var imageDream = new ImageDB("img/dream.jpg","dream","dreamt","talk","have dreamt");
addImageDBToLocalStorage('imagedream',imageDream);
var imageFight = new ImageDB("img/fight.jpg","fight","fought","fighed","fighted");
addImageDBToLocalStorage('imagefight',imageFight);
var imageFeel = new ImageDB("img/feel.jpg","fet","feel","feelt","felt");
addImageDBToLocalStorage('imagefeel',imageFeel);
var imageSwim = new ImageDB("img/swim.jpg","swam","swim","swum","swimed");
addImageDBToLocalStorage('imageswim',imageSwim);
var imageShoot = new ImageDB("img/shoot.jpg","shoot","shooted","shot","shoted");
addImageDBToLocalStorage('imageshoot',imageShoot);
var imageBet = new ImageDB("img/bet.jpg","bett","beet","bet","beett");
addImageDBToLocalStorage('imagebet',imageBet);
var imageBlow = new ImageDB("img/blow.jpg","blew","blow","blown","blowing");
addImageDBToLocalStorage('imageblow',imageBlow);
var imageBleed = new ImageDB("img/bleed.jpg","bleded","bled","bleed","blet");
addImageDBToLocalStorage('imagebleed',imageBleed);
var imageKneel = new ImageDB("img/kneel.jpg","knelt","knelted","knet","kneel");
addImageDBToLocalStorage('imagekneel',imageKneel);
var imageSink = new ImageDB("img/sink.jpg","sinked","sink","sank","sunk");
addImageDBToLocalStorage('imagesink',imageSink);
var imageSwear = new ImageDB("img/swear.jpg","swore","swear","swearing","sworn");
addImageDBToLocalStorage('imageswear',imageSwear);
