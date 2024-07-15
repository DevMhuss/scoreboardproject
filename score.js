const teamOneScoreDisplay = document.querySelector('#teamOneScore');
const teamOneButton = document.querySelector('#teamOneButton');

const teamTwoScoreDisplay = document.querySelector('#teamTwoScore');
const teamTwoButton = document.querySelector('#teamTwoButton');

const resetButton = document.querySelector('#reset')

const selectedMaxScore = document.querySelector('#topscore');
let maxScore = 2; 
let teamOneScore = 0;
let teamTwoScore = 0;

selectedMaxScore.addEventListener('change', () => {
    maxScore = parseInt(selectedMaxScore.value);

});

teamOneButton.addEventListener('click', () => {
    teamOneScore++;
    teamOneScoreDisplay.textContent = teamOneScore;

     if (teamOneScore === maxScore) {
     teamOneButton.disabled = true;
     teamTwoButton.disabled = true;

     teamOneScoreDisplay.style.color = 'green';
     teamTwoScoreDisplay.style.color = 'red';
     }
});

teamTwoButton.addEventListener('click', () => {
    teamTwoScore++;
    teamTwoScoreDisplay.textContent = teamTwoScore;
    
    if (teamTwoScore === maxScore) {
    teamOneButton.disabled = true;
    teamTwoButton.disabled = true;

    teamOneScoreDisplay.style.color = 'red';
    teamTwoScoreDisplay.style.color = 'green';
     }
});

resetButton.addEventListener('click', () => {
teamOneScore = 0;
teamTwoScore = 0;

teamOneScoreDisplay.textContent = teamOneScore
teamTwoScoreDisplay.textContent = teamTwoScore

teamOneButton.disabled = false;
teamTwoButton.disabled = false;

teamOneScoreDisplay.style.color = 'black';
teamTwoScoreDisplay.style.color = 'black';
});