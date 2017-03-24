var SentenceDB = function (question, optionA, optionB, optionC, optionD, answer) {
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.answer = answer;
};

SentenceDB.prototype.getQuestion = function () {
    return this.question;
};

SentenceDB.prototype.getOptionA = function () {
    return this.optionA;
};

SentenceDB.prototype.getOptionB = function () {
    return this.optionB;
};

SentenceDB.prototype.getOptionC = function () {
    return this.optionC;
};

SentenceDB.prototype.getOptionD = function () {
    return this.optionD;
};

SentenceDB.prototype.getAnswer = function () {
    return this.answer;
};

function addSentenceToLocalStorage(str,obj) {
    localStorage.setItem(str,JSON.stringify(obj));
}

function getSentenceDBFromLocalStorage(key) {
    var vi = JSON.parse(localStorage.getItem(key));
    return new SentenceDB(vi['question'],vi['optionA'],vi['optionB'],vi['optionC'],vi['optionD'],vi['answer']);
}

var sentenceEatEasy = new SentenceDB("I __ salad yesterday","eat","ate","eaten","eating","ate");
addSentenceToLocalStorage('sentenceeatEasy',sentenceEatEasy);

var sentenceEatHard = new SentenceDB("She has _____ rice since last week","eat","ate","eaten","eating","eaten");
addSentenceToLocalStorage('sentenceeatHard',sentenceEatHard);

var sentenceBeginEasy = new SentenceDB("Andres _____ with his project yesterday","began","begins","brought","begun","began");
addSentenceToLocalStorage('sentencebeginEasy',sentenceBeginEasy);

var sentenceBeginHard = new SentenceDB("The alphabet ______ with the letter a","began","begins","brought","begun","begins");
addSentenceToLocalStorage('sentencebeginHard',sentenceBeginHard);

var sentenceReadEasy = new SentenceDB("Carlos _____ the magazine in his living room","read","reader","reads","has readed","reads");
addSentenceToLocalStorage('sentencereadEasy',sentenceReadEasy);

var sentenceReadHard = new SentenceDB("They always _____ one novel in vacations.","read","road","reads","has readed","read");
addSentenceToLocalStorage('sentencereadHard',sentenceReadHard);

var sentenceWriteEasy = new SentenceDB("Have you _______ a book?","wrote","write","written","to wrote","written");
addSentenceToLocalStorage('sentencewriteEasy',sentenceWriteEasy);

var sentenceWriteHard = new SentenceDB("Children usually learn to read and _____ at the age of six.","wrote","write","written","to wrote","write");
addSentenceToLocalStorage('sentencewriteHard',sentenceWriteHard);

var sentenceDrawEasy = new SentenceDB("She has _____ a painting for the gallery.","draw","drew","drawn","to draw","drawn");
addSentenceToLocalStorage('sentencedrawEasy',sentenceDrawEasy);

var sentenceDrawHard = new SentenceDB("They like ______ on the walls of the university.","drawing","drew","drawn","draw","drawing");
addSentenceToLocalStorage('sentencedrawHard',sentenceDrawHard);

var sentenceDreamHard = new SentenceDB("Have you ______ lately of sheeps? (U.K. form).","dream","dreamt","talk","have dreamt","dreamt");
addSentenceToLocalStorage('sentencedreamEasy',sentenceDreamHard);

var sentenceDreamEasy = new SentenceDB("If you can ______ it, you can do it.","dream","dreamt","dreamed","dreem","dream");
addSentenceToLocalStorage('sentencedreamHard',sentenceDreamEasy);

var sentenceFightEasy = new SentenceDB("Martin Luther King ______ against racism in U.S.","fights","fought","figth","fighting","fought");
addSentenceToLocalStorage('sentencefightEasy',sentenceFightEasy);

var sentenceFightHard = new SentenceDB("Jennifer ______ for a gold medal in boxing today.","fights","fought","figth","fighting","fights");
addSentenceToLocalStorage('sentencefightHard',sentenceFightHard);

var sentenceFeelEasy = new SentenceDB("Have you ____ the wind this morning?","fet","feel","feelt","felt","felt");
addSentenceToLocalStorage('sentencefeelEasy',sentenceFeelEasy);

var sentenceFeelHard = new SentenceDB("Adrian ____ something stinging in his arm yesterday","fet","feeled","feelt","felt","felt");
addSentenceToLocalStorage('sentencefeelHard',sentenceFeelHard);

var sentenceSwimEasy = new SentenceDB("Maria ____ in the Brazil Olympics a few months ago","swam","swim","swum","swimed","swam");
addSentenceToLocalStorage('sentenceswimEasy',sentenceSwimEasy);

var sentenceSwimHard = new SentenceDB("Have you _____ in the sea?","swam","swim","swum","swimed","swum");
addSentenceToLocalStorage('sentenceswimHard',sentenceSwimHard);

var sentenceShootEasy = new SentenceDB("Yesterday I _____ a white swan by accident","shoot","shooted","shot","shoted","shot");
addSentenceToLocalStorage('sentenceshootEasy',sentenceShootEasy);

var sentenceShootHard = new SentenceDB("Someone has _____ near my house","shoot","shooted","shot","shoted","shot");
addSentenceToLocalStorage('sentenceshootHard',sentenceShootHard);

var sentenceBetEasy = new SentenceDB("Did you ___ on Colombia in the last match?","betted","beted","bet","bot","bet");
addSentenceToLocalStorage('sentencebetEasy',sentenceBetEasy);

var sentenceBetHard = new SentenceDB("Mary ___ a lot of money on that horse that came in last","betted","beted","bet","bot","bet");
addSentenceToLocalStorage('sentencebetHard',sentenceBetHard);

var sentenceBlowEasy = new SentenceDB("Billy ____ the candles of his birthday cake","blew","blow","blown","blowing","blew");
addSentenceToLocalStorage('sentenceblowEasy',sentenceBlowEasy);

var sentenceBlowHard = new SentenceDB("A freezing wind is _____ from the south","blew","blow","blown","blowing","blowing");
addSentenceToLocalStorage('sentenceblowHard',sentenceBlowHard);

var sentenceBleedEasy = new SentenceDB("Tatiana _____ when she fell in the school","bleded","bled","bleed","blet","bled");
addSentenceToLocalStorage('sentencebleedEasy',sentenceBleedEasy);

var sentenceBleedHard = new SentenceDB("Insects don\'t _____ red blood like humans","bleded","bled","bleed","blet","bleed");
addSentenceToLocalStorage('sentencebleedHard',sentenceBleedHard);

var sentenceKneelEasy = new SentenceDB("Many people _____ to pray","knelt","knelted","knet","kneel","kneel");
addSentenceToLocalStorage('sentencekneelEasy',sentenceKneelEasy);

var sentenceKneelHard = new SentenceDB("The vet _____ down to examine the horse","knelt","knelted","knet","kneel","knelt");
addSentenceToLocalStorage('sentencekneelHard',sentenceKneelHard);

var sentenceSinkEasy = new SentenceDB("The Titanic ____ in 1912","sinked","sink","sank","sunk","sank");
addSentenceToLocalStorage('sentencesinkEasy',sentenceSinkEasy);

var sentenceSinkHard = new SentenceDB("The boat has _____ owing to its heavy cargo","sinked","sink","sank","sunk","sunk");
addSentenceToLocalStorage('sentencesinkHard',sentenceSinkHard);

var sentenceSwearEasy = new SentenceDB("I _____ to God that I am telling the truth","swore","swear","swearing","sworn","swear");
addSentenceToLocalStorage('sentenceswearEasy',sentenceSwearEasy);

var sentenceSwearHard = new SentenceDB("Rafael  ______ that he would keep his promise","swore","swear","swearing","sworn","swore");
addSentenceToLocalStorage('sentenceswearHard',sentenceSwearHard);


