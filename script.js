document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choices button');
    const resultDiv = document.getElementById('result');

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a draw!';
        }
        if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return 'You win!';
        }
        return 'You lose!';
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);
            resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
        });
    });
});
