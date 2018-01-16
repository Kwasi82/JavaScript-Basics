/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0]; // These are the overall scores for the two players
roundScore = 0; // This is the current score for the active player 
activePlayer = 0; // This is the current active player with 0 and 1 representing players

document.querySelector('.dice').style.display = 'none';

// Set all scores to zero to start and clear HTML scores
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1; // This is the current score of the dice

    //2. Display the result of the random number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; 

    //3. Update the score for the round if NOT a 1
    if (dice !== 1) {
        // Add the number thrown by dice
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; // This displays the round score for the activePlayer
    } else {
        // Other player's turn
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        //Visually display the current score to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        /*
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        } */

    }

});



//document.querySelector('#current-' + activePlayer).textContent = dice; //This allows for text only
//document.querySelector('#current-1').innerHTML = '<em>' + dice + '</em>'; //This allows for HTML