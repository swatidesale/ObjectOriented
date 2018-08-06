/******************************************************************************
 *  
 *  Purpose: Deck of Cards Using Queue.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   28-07-2018
 *
 ******************************************************************************/
var LinkedListQueue = require('./LinkedListQueue.js');

class Cards {
    constructor() {
        this.listQueue = new LinkedListQueue();
        this.deckCards = new Array();
        this.array = [];
        this.index=0;
        this.suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    }
    /*
     * Function to arrange Cards.
     */
    cards() {
        for(var i=0;i<this.rank.length;i++) {
            for(var j=0;j<this.suit.length;j++) {
                this.deckCards[this.suit.length*i + j] = this.rank[i] + " of " + this.suit[j];
            }
        }
    }
    /*
     * Function toprint Cards.
     */
    print() {
        for(var i=0;i<this.deckCards.length;i++) {
            console.log(this.deckCards[i]);
        }
    }
}

class DecofCards extends Cards {
    /*
     * Function to suffle Cards using Math.random function.
     */
    suffle() {
        for(var i=0;i<this.deckCards.length;i++) {
            var random = parseInt(Number(i) + Number((Math.random() * (this.deckCards.length-i))));

			var temp = this.deckCards[random];
			this.deckCards[random] = this.deckCards[i];
            this.deckCards[i] = temp;
        }
    }
    /*
     * Function to add cards into queue.
     */
    insertIntoQueue() {
        var i=0;
        while(i < this.deckCards.length) {
            this.listQueue.enqueue(this.deckCards[i]);
            i++;
        }
    }
    /*
     * Function to print Cards Distributed among 4 players.
     */
    print() {
        let playerQueue = new LinkedListQueue();
        for(var i=0;i<4;i++) {
            playerQueue.enqueue("Player "+i);
        }
        
        while(!playerQueue.isEmpty()) {
            console.log(playerQueue.dequeue());
            console.log("--------------------------")
            for(var i=0;i<9;i++) {
                console.log(this.listQueue.dequeue());
            }
            console.log("--------------------------");
        }
    }
}
let deck = new DecofCards();
deck.cards();
deck.suffle();
deck.insertIntoQueue();
deck.print();
        