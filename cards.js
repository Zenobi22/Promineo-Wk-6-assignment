//let Suits = ('C','H','S','D')
//let Ranks = ('2','3','4','5','6','7','8','9','A','J','Q','K')
// didn't figure how to call the above variables
class WarCard {  //class to represent what card is.
  constructor () {
    this.Suits = ['C','H','S','D']; // Four different Suits for card
    this.Ranks = ['2','3','4','5','6','7','8','9','A','J','Q','K']; // 13 cards with different values.
  } 
 getDeck() {
  let freshDeck = [];  // will hold the new deck of cards
  for( let Suits = 0; s < Suits.length; s++) {

    for( let Ranks = 0; i < Ranks.length; i++){

      alert('This is a new Deck:', [freshDeck]);
      let GoldenCard = {Ranks: Ranks[i], Suits:[s]};
      freshDeck.push([this.Suits], [this.Ranks]);
    }
  } 
  return freshDeck;

 }
}  

shuffle(freshDeck)  //a function that will shuffle the cards. I put it at 900 so it can be random enough.
for (let i =0; i < 900; i++ ) {  
  let area1 = Math.floor((Math.random() * freshDeck.length));
  let area2 = Math.floor((Math.random() * freshDeck.length));
  let tmp = freshDeck[area1];

  freshDeck[area1] = fresshDeck[area2];
  freshDeck[area2] = tmp;
  console.log(freshDeck);
}
 // player decks
 let player1 = [], player2 = []

 while ( freshDeck.length > 0) {
  drawIndex = Math.random() * freshDeck.length;
  player2.push(freshDeck.splice(drawindex.player2,1)[0]);
 }
 // End of Game setup

 let dealAndPlay = function(reward){
  if(reward){
    console.log('rewards = ', rewards); }
  }
  // when the deck is empty the game is over.
  if(player1.length === 0 || player2.length === 0) {
    // game over
    if(player1.length > 0 ){
      console.log('Player 1 is Winner!');
    }else { 
        console.log('Player 2 is Winner!');
    }
    return false;
    }
    // draw a card from each person deck
    let PlayerDeck = player1.shift(), nextplayer = Player2.shift(),
    rewards =rewards ?
    rewards : [];
  // was following a tutorial but got a bit lost on
  //how to make 