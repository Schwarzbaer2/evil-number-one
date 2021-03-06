// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let turn = 0

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function gameLogic() {

    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {

        if (randomNumber == 1) {
            turn++;
            message.textContent = "😈Evil Number One😈"
            player1Score -=10;
            player1Scoreboard.textContent = player1Score
            player1Dice.textContent = randomNumber

        } else {
        turn++;
        message.textContent = `Player 1 Turn ${turn}`
       player1Score += randomNumber
       player1Scoreboard.textContent = player1Score
       player1Dice.textContent = randomNumber

        }
   } else {
       if (randomNumber == 1) {
        turn++;
        message.textContent = "😈Evil Number One😈"
        player2Score -=10;
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber

    } else {
        turn++;
        message.textContent = `Player 2 Turn ${turn}`
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber

    }
   }
   if (player1Score >= 20) {
       message.textContent = "Player 1 Won 🥳"
       showResetButton()
   }  else if (player2Score >= 20) {
       message.textContent = "Player 2 Won 🎉"
       showResetButton()
   }

   if (turn == 5 && player1Turn && player1Score < 20) {
       player1Dice.classList.remove("active")
       player2Dice.classList.add("active")
       message.textContent = `Player 2 Turn 1`
       player1Turn = !player1Turn
       turn = 0

   } else if (turn == 5 && !player1Turn && player2Score < 20) {
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `Player 1 Turn 1`
        player1Turn = !player1Turn
        turn = 0
   }
}


/*Hook up a click event listener to the Start Button. */
startBtn.addEventListener("click", function() {
reset();
})


/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
   gameLogic();
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    turn = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = `Player 1 Turn 1`
    playersHidden.style.display ="flex"
    introduction.style.display = "none"
    startBtn.style.display = "none"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
