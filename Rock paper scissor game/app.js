let userScore= 0;
let computerScore= 0;
let whoWon= document.querySelector("#message");
const resetGame = document.querySelector(".reset");

let choices= document.querySelectorAll(".option");

const genCompChoice = () =>{
    const rpsChoices = ["Rock", "Paper", "Scissors"];
    const randomIDX= Math.floor(Math.random()*3);
    return rpsChoices[ randomIDX];
}

const drawGame = () => {
    console.log("Game was draw.")
    whoWon.innerText= "Game was draw"
};

 const showWinner = (userWin) =>{
     if(userWin){
         console.log("You won!\nComputer lose");
         whoWon.innerHTML="You won!\nComputer lose";
         document.querySelector("#user-score").innerHTML=  userScore +=1;
     }else{
         console.log("You lose.\nComputer won!")
         whoWon.innerHTML="You lose.\nComputer won!";
         document.querySelector("#computer-score").innerHTML= computerScore +=1;
     }
 };


const playGame = (userChoice) =>{
    console.log("User Choice= ", userChoice);
    document.querySelector("#user-choice").innerHTML= userChoice
    // generated computer choice 
    const compChoice = genCompChoice();
    console.log("Computer choice= ", compChoice);
    document.querySelector("#comp-choice").innerHTML = compChoice


    if(userChoice === compChoice){
        // Draw game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            // Scissors, Paper 
            userWin = compChoice === "Scissors" ? true:false
        }else if(userChoice === "Scissors"){
            // Rock, Paper 
            userWin = compChoice === "Rock" ? false:true 
        } else{
            // Scissors, Rock 
            user = compChoice ==="Rock" ? true:false
        }

         showWinner(userWin);
    };
};


choices.forEach((option) =>{
    option.addEventListener("click", ()=>{
        const userChoice= option.getAttribute("id");
        // console.log(userChoice, "Cicked");
        playGame(userChoice);
    });
});

function restart(){
    resetGame.addEventListener("click",()=>{
        userScore = 0;
        computerScore =0;
    })
}