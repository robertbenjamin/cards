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


var side = true;

var flipCard = function(i) {
	if (side) {
		$(".question_text").html(cards[i].answer);
		side = false;
	} else {
		$(".question_text").html(cards[i].question);
		side = true;
	}
}

var rightAnswer = function(i) {
	cards.splice(i, 1);
}

var wrongAnswer = function(i) {
	cards.push(cards.shift(i));
}

var i = 0;

$(".flip").click(function() {
	flipCard(i);
});

$(".wrong").click(function() {
	wrongAnswer(i);
	$(".question_text").html(cards[0].question);
});

$(".right").click(function() {
	if (i < cards.length - 1) {
		if (cards.length > 0) {
			rightAnswer(i);
			$(".question_text").html(cards[0].question);
			side: true;
		} else {
			$(".question_text").html("No more questions, good job!");
		}
	} else {

	}
});
$(".next_card").click(function() {
	i++;
	$(".question_text").html(cards[i].question);
});

// $(".flip").click(function() {
// 	$("body").css("background-color", "red");
// });

// array.shift({
// 	correct: null,
// 	question: "Lololol",
// 	answer: "Lolz"
// });
