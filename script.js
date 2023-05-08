let startButton;
let score = 0;

function createBoard() {
  const boardSize = 22.8;
  const numMines = 100;
  const buttons = [];

  for (let i = 0; i < boardSize * boardSize; i++) {
    const newButton = document.createElement('button');
    newButton.style.backgroundColor = 'yellow';
    newButton.innerHTML = '';
    buttons.push(newButton);
  }

  const mines = new Set();
  while (mines.size < numMines) {
    const index = Math.floor(Math.random() * buttons.length);
    mines.add(index);
  }

  const gameBoard = document.getElementById('game-board');
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    gameBoard.appendChild(button);

    if (mines.has(i)) {
      button.dataset.isMine = true;
      button.classList.add('mine');
    }
    button.addEventListener('click', function () {
      handleClick(this);
    });
  }
}

function handleClick(button) {
  if (button.classList.contains('mine')) {
    button.textContent = '💣';
    setTimeout(() => {
      window.alert('Your lost');
    }, 100);
  } else {
    button.textContent = '❌';
    score++;
    document.getElementById('score').textContent = score;
  }
}

function disableButton(button) {
  startButton = button;
  button.disabled = true;
}

function restartButton() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  score = 0;
  document.getElementById('score').textContent = score;
  createBoard();
}
