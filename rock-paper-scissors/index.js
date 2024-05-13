function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
function getHumanChoice(){
   return prompt("Enter a choice, rock, paper or scissors").toLowerCase();
}

let computerSelection = {
    "0":"rock",
    "1":"paper",
    "2":"scissors"
}

let humanScore;
let computerScore;
let i =0;

function playRound(humanScore,computerScore){
    while(i<5){
    let humanChoice = getHumanChoice();
    let compAns = getComputerChoice();
    if(humanChoice === computerSelection[String(compAns)]){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("This is a draw");
        computerScore = computerScore;
        humanScore = humanScore;
    }
    else if(humanChoice == "rock" && computerSelection[String(compAns)] =="paper"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("computer wins");
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerSelection[String(compAns)] =="scissors"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("You win");
        humanScore+=1;
    }
    else if(humanChoice == "paper" && computerSelection[String(compAns)] =="rock"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("You win");
        humanScore+=1;
    }
    else if(humanChoice == "paper" && computerSelection[String(compAns)] =="scissors"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("Computer wins");
        computerScore+=1;
    }
    else if(humanChoice == "scissors" && computerSelection[String(compAns)] =="rock"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("Computer wins");
        computerScore+=1;
    }
    else if(humanChoice == "scissors" && computerSelection[String(compAns)] =="paper"){
        alert("computer choose " + computerSelection[String(compAns)]);
        alert("You win");
        humanScore+=1;
    }
    
    alert("Computer score is "+String(computerScore) + " and your score is "+String(humanScore));
    i++;
    }
    return String(computerScore) + " "+ String(humanScore);
};

let spli = playRound(0,0).split(seperator=" ");

if(spli[0] > spli[1]){
    alert(`You lose ${spli[0]}-${spli[1]}`)
}
else if(spli[0] < spli[1]){
    alert(`You win ${spli[1]}-${spli[0]}`)
}
else if(spli[0] === spli[1]){
    alert(`You draw ${spli[0]}-${spli[1]}`)   
}