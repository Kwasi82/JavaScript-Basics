/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlay, previousDiceRoll; 

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlay) {
        //1. Generate a random number
         var dice = Math.floor(Math.random() * 6) + 1; // This is the current score of the dice
    
        //2. Display the result of the random number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; 
    
        //3. Update the score for the round if NOT a 1
        if (dice !== 1 && dice !== 6 && previousDiceRoll !== 6) {
            // Add the number thrown by dice
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; // Replaces previous dice roll with current dice roll
            previousDiceRoll = dice;
        } else {
            // Other player's turn
            nextPlayerTurn();        
        }
    } 
});

//Implement the hold option in the game
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlay) {
         // Add the current to the active players global score
        scores[activePlayer] += roundScore;
    
        // Update the user interface
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // Check if the active player has won the game
        if (scores[activePlayer]  >= 100) {
            // change the name of the active player to "Winner"
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            // Add the "winner" class to the active player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            // Remove the active class from the active player
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;
        } else {
            nextPlayerTurn(); 
        }
        // Next player turn
        //nextPlayerTurn();
    } 
});

function nextPlayerTurn () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //Visually display the current score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Visually show the active player through different styling
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    // Switch between players using toggle method
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide the dice when we switch active player
    document.querySelector('.dice').style.display = 'none';

    /*
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    } */

}

// Implement event listener to new button
document.querySelector('.btn-new').addEventListener('click', initGame);

// Function for starting a new game
//initGame();

function initGame () {
    scores = [0,0]; // These are the overall scores for the two players
    roundScore = 0; // This is the current score for the active player 
    activePlayer = 0; // This is the current active player with 0 and 1 representing players

    document.querySelector('.dice').style.display = 'none';
    
    // Set all scores to zero to start and clear HTML scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlay = true;
}


//document.querySelector('#current-' + activePlayer).textContent = dice; //This allows for text only
//document.querySelector('#current-1').innerHTML = '<em>' + dice + '</em>'; //This allows for HTML