//demoController.js

(function () {
	"use strict";

	angular.module("app-cards")
		.controller("demoController", demoController);

	function demoController (){
		var vm = this;

		vm.cards = [{
			question: "How to center html element?",
			answer: "https://css-tricks.com/centering-css-complete-guide/",
			category: "WebDev"
		}, {
			question: "Where can I find football live scores?",
			answer: "http://http://www.flashscore.com/",
			category: "Sports"
		}
		];

		vm.newCard = {};

		vm.errorMessage = "";
		vm.isBusy = false;

		vm.addCard = function () {
			vm.isBusy = true;
			vm.errorMessage = "";
			
			if (!vm.newCard.answer) {
				vm.newCard.answer = "Not specified";
			}
			if (!vm.newCard.category) {
				vm.newCard.category = "Not specified";
			}

			vm.cards.push({ question: vm.newCard.question, answer: vm.newCard.answer, category: vm.newCard.category });

			vm.newCard = {};
		};

		vm.deleteCard = function () {
			//TODO
		};

	};

})();