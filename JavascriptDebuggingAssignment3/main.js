function quiz(){
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "submit.php");
	form.addEventListener('submit', (event) => {
		//event.preventDefault();
	  });
	  
	document.body.appendChild(form);

	let score = 0;
	let num = 0;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?']
	;
	console.log(quiz_questions);
	let quiz_answers = [1, 82, 0];

	
	//generate random number for question
	let count = Math.floor(Math.random() * 3);
	console.log(count);

	//get total number of questions
	let totalQuestion = quiz_questions.length;

	console.log(totalQuestion);
	for ( count = 0 ; count < totalQuestion; count++) {
		question = quiz_questions[num];
        for (i in quiz_questions) {
			var i = document.createElement("input");
            i.setAttribute("type", "int");
			var newlabel = document.createElement("Label");
    		newlabel.setAttribute("for", i);
    		newlabel.innerHTML = question;
			}
		function prompt() {
			form.appendChild(newlabel);
			form.appendChild(i);
		}
		answer = prompt(i)
		console.log(answer);
		num++;  
		//if (answer === quiz_answers[num]) {
			//score++;
		//	console.log("correct");
		//	} else {
		//		console.log("wrong");
		//	}
		//	if (num = totalQuestion) {
		//	num = 0;
		//	document.write('<p>You got ${score} out of ${totalQuestion} questions correct.</p>');
		//} 
	
    }
}

window.addEventListener('load', (event) => {
	console.log("quiz started")
	quiz();
});
