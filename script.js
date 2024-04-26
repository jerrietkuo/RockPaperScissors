
function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playGame() {
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;

    while (true) {
        const userChoice = prompt('Enter your choice (R, P, or S):');
        if (!userChoice) {
            break;
        }

        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice.toUpperCase(), computerChoice);

        alert(`You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`);

        if (result === 'You win!') {
            userWins++;
        } else if (result === 'You lose!') {
            computerWins++;
        } else {
            ties++;
        }
    }

    alert(`Game over! Total wins: ${userWins}, Total losses: ${computerWins}, Total ties: ${ties}`);
}

playGame();