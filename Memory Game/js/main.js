var cardOne ="queen";
var cardTwo ="queen";
var cardThree ="king";

// console.log("User flipped " + cardOne);

var cards =[
{
	rank:'queen',
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
	color: 'red',
	flower: 'rose',
	petals: 20
},
{
	rank:'queen',
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
	color: 'blue',
	flower: 'violet',
	petals: 6
}
];
var cardsInPlay =[];
var cardElement;

 function flipCard(cardId)
 {	
  

 	var cardOne = cards[0];
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cardOne);

	var cardTwo = cards[2];
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cardTwo);

 	

	
	console.log("User flipped "+cards[cardId].rank);

	console.log("User flipped "+cards[cardId].cardImage);

	console.log("User flipped "+cards[cardId].suit);

	cardElement.addEventListener('click')
	cardElement.getAttribute('data-id')

	this.getAttribute('attribute-we-want-to-get-goes-here');
	
	console.log(cards[cardId].cardImage)	
}

 function checkForMatch()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
{
  	console.log("You found a match!");
} 	
	else {
  	console.log("Sorry, try again.");
}
}

	
function createBoard()
{
	
   	
  	for (var i = 0; i < cards.length; i++) {
  		
  		var newListItem = document.createElement('img');
		    

 	 		// cardElement.setAttribute(cards[cardImage])
		    
		    cardElement.setAttribute(src="images/back.png");

		    cardElement.setAttribute('attributeName', 'attributeValue');

		    cardElement.setAttribute('data-id');

		    cardElement.appendChild(game-board);



 }


}
	checkForMatch();
	createBoard();

