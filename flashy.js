// $("polygon").eq(0).click(function() {
// 	$("body").css("background-color", "red");
// });
// $("polygon").eq(1).click(function() {
// 	$("body").css("background-color", "blue");
// });

var cards = [{
	correct: null,
	question: "What is George Washington's last name?",
	answer: "Washington"
}, {
	correct: null,
	question: "What is a burger made of?",
	answer: "Bun, beef, and nothing else."
}, {
	correct: null,
	question: "What color is a bumblebee?",
	answer: "Yellow and black, I think."
}, {
	correct: null,
	question: "When does the world end?",
	answer: "2028"
}, {
	correct: null,
	question: "Who is the main character of 'Ender's Shadow'?",
	answer: "Bean"
}, ];

for (i = 0; i < (cards.length - 1); i++) {
	$("polygon").eq(1).click(function() {
		$("body").css("background-color", "blue");
		console.log(i);
	});
}

var side = true;

var flipCard = function(){
	if (side) {
		$(".question_text").html(cards[0].question);
		side = false;
	} else {
		$(".question_text").html(cards[0].answer);
		side = true;
	}
}

$(".flip").click();


// array.push({
// 	correct: null,
// 	question: "Lololol",
// 	answer: "Lolz"
// });
