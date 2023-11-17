const randomNum = Math.floor(Math.random() * 100) + 1; // Генеруємо випадкове число від 1 до 100
let attempts = 0; // Лічильник спроб

const userGuessInput = document.getElementById('user-guess');
const checkButton = document.getElementById('check-button');
const resultMessage = document.getElementById('result-message');
const attemptsDisplay = document.getElementById('attempts');

checkButton.addEventListener('click', function () {
  const userGuess = parseInt(userGuessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultMessage.textContent = 'Будь ласка, введіть число від 1 до 100.';
  } else {
    attempts++;
    attemptsDisplay.textContent = `Кількість спроб: ${attempts}`;
    
    if (userGuess < randomNum) {
      resultMessage.textContent = 'Загадане число більше.';
    } else if (userGuess > randomNum) {
      resultMessage.textContent = 'Загадане число менше.';
    } else {
      resultMessage.textContent = 'Ви вгадали!';
      userGuessInput.setAttribute('disabled', 'true');
    }
  }
});





