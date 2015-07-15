var deck = {
	cards: [{
		question: "What is capital of the United States of America?",
		answer: "Washington, D.C."
	}, {
		question: "What is a burger made of?",
		answer: "Bun, beef, and nothing else."
	}, {
		question: "What color is a bumblebee?",
		answer: "Yellow and black, I think."
	}, {
		question: "When does the world end?",
		answer: "21st of December, 2012"
	}, {
		question: "Who is the main character of 'Ender's Shadow'?",
		answer: "Bean"
	},{
		question: "Who founded GA?",
		answer: "Jake Schwartz, Adam Pritzker, Matthew Brimer, and Brad Hargreaves."
	}],

	completed_cards: [],
	current_index: 0,
	currentScore: document.cookie.substring(6, 8),
	addCard: function() {
		var newQuestion = prompt("Enter a question!");
		var newAnswer = prompt("Enter the answer!");
		this.cards.push({
			question: newQuestion,
			answer: newAnswer
		});
	},
	nextCard: function() {
		if (this.current_index === this.cards.length - 1) {
			this.current_index = 0;
		} else {
			this.current_index++;
		};
	},
	prevCard: function() {
		if (this.current_index === 0) {
			this.current_index = (this.cards.length - 1);
		} else {
			this.current_index--;
		};
	},
	markCorrect: function() {
		var currentCard = this.getCurrent();
		this.completed_cards.push(currentCard);
		this.cards.splice(this.current_index, 1);
		if (this.current_index >= this.cards.length) {
			this.current_index = 0;
		};
		this.currentScore++;
	},
	markIncorrect: function() {
		if (this.current_index === this.cards.length - 1) {
			this.current_index = 0;
		} else {
			this.current_index++;
		};
	},
	getCurrent: function() {
		if (this.cards.length === 0) {
			return {};
		} else {
			return this.cards[this.current_index];
		}
	},
	updateScore: function() {
		document.cookie = "score=" + this.currentScore;
	},
	resetScore: function() {
		document.cookie = "score=0";
	}
};

var side = "question";

// Define functions

function renderCard() {
	var currentCard = deck.getCurrent();
	if (currentCard.question) {
		$(".question_text").html(currentCard[side]);
		deck.updateScore();
		$(".score").html("Current Score Is: " + document.cookie.substring(6, 8));
	} else {
		$("*").addClass("WINNER");
		$(".question_text").html("WINNER");
		var nyanCat = new Audio('https://archive.org/download/nyannyannyan/NyanCatoriginal.mp3');
		nyanCat.play();
	}
}

function nextCard() {
	side = "question";
	deck.nextCard();
	renderCard();
}

function prevCard() {
	side = "question";
	deck.prevCard();
	renderCard();
}

function right() {
	side = "question";
	deck.markCorrect();
	renderCard();
}

function wrong() {
	side = "question";
	deck.markIncorrect();
	renderCard();
}

function flip() {
	side === "question" ? side = "answer" : side = "question"
	renderCard();
}

renderCard();

$(".next_card").click(nextCard);

$(".prev_card").click(prevCard);

$(".right").click(right);

$(".wrong").click(wrong);

$(".flip").click(flip);

$(".add_card").click(function() {
	deck.addCard();
	console.log("add card?")
});

//Listen for key presses
$(document).keyup(function(e) {
	switch (e.which) {
		case 39:
			nextCard();
			break;

		case 37:
			prevCard();
			break;

		case 82:
			right();
			break;

		case 87:
			wrong();
			break;

		case 32:
			flip();
			break;

		default:
			console.log("default");
	}
});
