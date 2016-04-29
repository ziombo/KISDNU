//demoController.js

(function () {
	"use strict";
	//getting existing module
	angular.module("app-cards")
		.controller("demoController", demoController);

	function demoController (){
		var vm = this;

		vm.cards = [{
			id: "0",
			question: "How to center html element?",
			answer: "https://css-tricks.com/centering-css-complete-guide/",
			category: "WebDev"
		}, {
			id: "1",
			question: "Where can I find football live scores?",
			answer: "http://http://www.flashscore.com/",
			category: "Sports"
		}, {
			id: "2",
			question: "What if there's alot of text?",
			answer: "Thats where scrollbar comes with help. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
			category: "Site showcase"
		}
		];

		var cardsCount = vm.cards.length;

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

			vm.cards.push({ id: cardsCount, question: vm.newCard.question, answer: vm.newCard.answer, category: vm.newCard.category });

			vm.newCard = {};

			cardsCount++;
		};

		vm.deleteCard = function (cardId) {
			//TODO
			var arrayLen = vm.cards.length;
			for (var i = 0; i < arrayLen; i++) {
				if (vm.cards[i].id == cardId) {
					vm.cards.splice(i, 1);
					break;
				}
			}

		};

	};

})();