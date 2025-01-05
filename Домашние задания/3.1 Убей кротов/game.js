(() => {
  let playing = true;
  let activeHole = 1;
  let score = 0;
  let misses = 0;

  const getHole = index => document.getElementById(`hole${index}`);

  const deactivateHole = index => {
    getHole(index).className = 'hole';
  };

  const activateHole = index => {
    getHole(index).className = 'hole hole_has-mole';
  };

  const checkGameEnd = () => {
    if (score >= 10) {
      alert("Вы выиграли! Поздравляем!");
      resetGame();
    } else if (misses >= 5) {
      alert("Игра окончена. Вы проиграли.");
      resetGame();
    }
  };

  const resetGame = () => {
    score = 0;
    misses = 0;
    playing = false;
    updateScoreboard();
  };

  const updateScoreboard = () => {
    document.getElementById('score').textContent = `Счёт: ${score}`;
    document.getElementById('misses').textContent = `Промахи: ${misses}`;
  };

  const next = () => {
    setTimeout(() => {
      if (!playing) return;
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activateHole(activeHole);
      next();
    }, 800);
  };

  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
      if (!playing) return;

      if (hole.classList.contains('hole_has-mole')) {
        score++;
      } else {
        misses++;
      }

      updateScoreboard();
      checkGameEnd();
    };
  }

  const initScoreboard = () => {
    const scoreboard = document.createElement('div');
    scoreboard.id = 'scoreboard';
    scoreboard.innerHTML = '<div id="score">Счёт: 0</div><div id="misses">Промахи: 0</div>';
    document.body.prepend(scoreboard);
  };

  initScoreboard();
  next();
})();
