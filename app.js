        "use strict"

        // Create a function that randomly selects either 'Rock','Paper' or 'Scissors'
        // Create a function that takes the players and comupters parameters and returns a
        // string that declares the winner of the round.

       
        let arr = ['Rock','Paper','Scissors'];
        let playerChoice = "";
        let computerSeletion = "";

        let result = document.querySelector(".score");
        const playerScore = document.querySelector(".playerScore");
        const aiScore = document.querySelector(".aiScore");

        let aiTally = 0;
        let playerTally = 0;

        //Player Selection
        const button = document.querySelectorAll(".input");

        button.forEach(button => button.addEventListener("click", playerSelection));
        
        function playerSelection(e){

            playerChoice = e.target.id;
            
            if ( playerTally === 5) {

                reset.style.display = "block";
                return result.innerHTML = 'Game Over, Player Wins!!';

            } else if (aiTally === 5) {

                reset.style.display = "block";
                return result.innerHTML = 'Game Over, AI Wins!!';

            } else {

                play(playerChoice, computerSeletion);

            }
        }


        function computerPlay() {

             let computerSeletion = arr[Math.floor(Math.random() * arr.length)];

                computerSeletion = computerSeletion.toLowerCase();
                
                return computerSeletion;
        }


        // Caculates who won
        
        function play(player, ai) {

            ai = computerPlay();

            if (player === "") {

                return result.innerHTML = `You haven't made a choice yet!`;

            }

            else if ((player === 'rock' && ai === 'scissors') || (player === 'paper' && ai === 'rock') || (player === 'scissors' && ai === 'paper')) {

                playerTally++;

                playerScore.innerHTML = `Player Score: ${playerTally}`;

                return result.innerHTML = `You Win! ${player} Beats ${ai}`;

            } 
            
            else if ((ai === 'rock' && player === 'scissors') || (ai  === 'paper' && player === 'rock') || (ai === 'scissors' && player === 'paper')) {

                aiTally++;
                
                aiScore.innerHTML = `AI Score: ${aiTally}`;

                return result.innerHTML = `You lose! ${ai} Beats ${player}`;
            } 
            
            else if (player === ai) {

                return result.innerHTML = 'Oh no, Its a tie!';
            }
        }
        

        // Reset the game

        const reset = document.querySelector(".reset");

        reset.addEventListener("click", resetGame);

        function resetGame() {

            if(playerTally >= 5 || aiTally >= 5) {

                reset.style.display = "none";
                playerScore.innerHTML = `Player Score: 0`;
                aiScore.innerHTML = `AI Score: 0`;
                result.innerHTML = 'Select a choice to start!';
                playerTally = 0;
                aiTally = 0;

            }

        }