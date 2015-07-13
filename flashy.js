var cards = [{
	correct: null,
	question: "What is capital of the United States of America?",
	answer: "Washington, D.C."
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

var i = -1;

$(".flip").click(function() {
	flipCard(i);
});

$(".wrong").click(function() {
	if (i != -1) {
		wrongAnswer(i);
		$(".question_text").html(cards[0].question);
	} else {
		$(".question_text").html("Please click the right arrow to start!");
	}

});

$(".right").click(function() {
	if (i < cards.length - 1) {
		if (cards.length > 0) {
			rightAnswer(i);
			$(".question_text").html(cards[0].question);
			side: true;
		} else {
			console.log("ahhhhh")
				// $(".question_text").html("No more questions, good job!");
		}
	} else {
		console.log("finished?");
		$(".question_text").html("No more questions, good job!");
		cards = [];
	}
});

$(".next_card").click(function() {
	i++;
	$(".question_text").html(cards[i].question);
	$("body").unbind();
});

$(document).keydown(function(e) {
	if (e.which === 82) {
		console.log("right")
	}
});

/* 
$(document).keydown(function(e) {
	if (e.which === 87) {
		console.log("wrong")
	}
});

$(document).keydown(function(e) {
	if (e.which === 32) {
		console.log("spacebar!")
	}
});

$(document).keydown(function(e) {
	if (e.which === 39) {
		console.log("next card")
	}
});

array.shift({
	correct: null,
	question: "Lololol",
	answer: "Lolz"
});
*/