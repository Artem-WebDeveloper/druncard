class ViewEndGame {
  renderEndGameModal(parentEl, winner) {
    parentEl.insertAdjacentHTML(
      'beforeend',
      this._generateEndGameModal(winner)
    );
  }

  _generateEndGameModal(winner) {
    const markup = `
    <div class="modal">
        <div class="modal__box">
          <div class="modal__content">
            <div class="modal__text">
              ${
                winner === 'player'
                  ? `<h2>Ты победил! 🏆</h2>
              <p>Поздравляю с победой! 🎉</p>`
                  : `<h2>Ты проиграл! 😿</h2>
              <p>Не отчаивайтесь, вы заняли почетное второе место 🥈</p>
              <p>Попробуй снова!</p>`
              }
              <div class="modal__thanks">
                <p>Это мой первый проект :)</p>
                <p>Cпасибо, что дошли до конца! ♥️</p>
                <p>
                  Надеюсь, игра принесла вам удовольствие, и вы сыграете еще! 🎲
                </p>
              </div>
              <button class="button-game-end">Закончить игру</button>
            </div>

            <div class="modal__img">
            ${
              winner === 'player'
                ? '<img src="img/won.gif" alt="Man dancing" />'
                : '<img src="img/lost.gif" alt="Man crying" />'
            } 
            </div>
          </div>
        </div>
      </div>`;

    return markup;
  }
}

export default new ViewEndGame();
