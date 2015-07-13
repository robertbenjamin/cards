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
		answer: "2028"
	}, {
		question: "Who is the main character of 'Ender's Shadow'?",
		answer: "Bean"
	}],
	completed_cards: [],
	current_index: 0,
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
	}
};

var side = "question";

function renderCard() {
	var currentCard = deck.getCurrent();
	if (currentCard.question) {
		$(".question_text").html(currentCard[side]);
	} else {
		alert("you won!");
	}
}

$(".next_card").click(function() {
	side = "question";
	deck.nextCard();
	renderCard();
});

$(".prev_card").click(function() {
	side = "question";
	deck.prevCard();
	renderCard();
});

$(".right").click(function() {
	side = "question";
	deck.markCorrect();
	renderCard();
});

$(".wrong").click(function() {
	side = "question";
	deck.markIncorrect();
	renderCard();
});

renderCard();

$(".flip").click(function() {
	side === "question" ? side = "answer" : side = "question"
	renderCard();
});

/*

$(document).keyup(function(e) {
	if (e.which === 39) {
		console.log("next card");
		nextCard();
	}
});

$(document).keydown(function(e) {
	if (e.which === 82) {
		console.log("right")
	}
});

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

array.shift({
	correct: null,
	question: "Lololol",
	answer: "Lolz"
});
*/
