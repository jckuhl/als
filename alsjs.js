//alert("script attached successfully");

//random number generator
function getRN(upper, lower) {
	var x;
	//stupid-proofing:
	if(upper < lower) {
		x = lower;
		lower = upper;
		upper = x;
	}
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var score = 12;
var scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML = score;


//variables for the citation ID:
var book1 = "Set A Volume 1, Course Foundation";
var book2 = "Set A Volume 2, Expeditionary Airman";
var book3 = "Set A Volume 3, Professional Airman";
var book4 = "Set B Volume 1, Supervisory Communicator";
var book5 = "Set B Volume 2, Supervisor of Airmen";

class Question {
	constructor(questionValue, sourceString) {
		this.questionValue = 1;
		this.questionString = "What are the three sources of NCO authority?"
		this.questionRightAnswer = "Article 91, Article 92, Article 7, Earned authority"
		this.answered = false;
		this.sourceString = book5 + string(11);
	}
}

var question = Question
var questionElement = document.getElementById("question");
questionElement.innerHTML = "What are the three sources of NCO authority?"

var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");

/*For clarity, the first answer in programming is always the right one.
A random shuffler will shuffle the answers as they display on screen*/
answerA.innerHTML = "Article 91, Article 92, Article 7, Earned authority";
answerB.innerHTML = "Article 93, Article 90, Article 7, Earned authority";
answerC.innerHTML = "Article 91, Article 97, Article 7, Earned authority";
answerD.innerHTML = "Article 98, Article 92, Article 7, Earned authority";