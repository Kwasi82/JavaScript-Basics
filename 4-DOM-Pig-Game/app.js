/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0]; // These are the overall scores for the two players
roundScore = 0; // This is the current score for the active player 
activePlayer = 0; // This is the current active player with 0 and 1 representing players

dice = Math.floor(Math.random() * 6) + 1; // This is the current score of the dice