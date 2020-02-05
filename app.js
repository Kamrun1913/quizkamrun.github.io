

function populate() {
	if(quiz.isEnded()) {
		showScores();
	}

	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
};

function showScores() {
	var gameoverHtml = "<h1>Result</h1>";
	gameoverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameoverHtml;
};


var questions = [
new Question("Which one is not an object orianted programing language?", ["Java", "C#", "C++", "C"], "C"),
new Question("Which language is used for styling web page?", ["HTML", "Jquary", "CSS", "XML"], "CSS"),
new Question("There are  main components of object orienteg programing.", ["1", "6", "2", "4"], "4"),
new Question("Which language is used for web apps?", ["PHP", "Python", "JavaScript", "ALL"], "ALL"),
new Question("MVC is a .", ["Languagte", "Library", "Framework", "All"], "Framework"),
new Question("What String object method is used to concatenate multiple strings?", ["toUpperCase();", "Math.min(var1, var2, varN);", "concat(var1, var2, varN);", "All"], "concat(var1, var2, varN);")
];

var quiz = new Quiz(questions);

populate();