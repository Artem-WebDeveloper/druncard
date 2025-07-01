class ViewBattleCards {
  _playerInfo = document.querySelector('.player-section__info');
  _opponentInfo = document.querySelector('.opponent-section__info');
  _playerQauntityCards = document.querySelector(
    '.player-section__quantity-cards'
  );
  _opponentQauntityCards = document.querySelector(
    '.opponent-section__quantity-cards'
  );
  _rateCount = document.querySelector('.rate__count');
  _roundInfo = document.querySelector('.section-winlostrounds-info');

  renderBattleCards(player, opponent, elem) {
    elem.insertAdjacentHTML(
      'afterbegin',
      `<div class="battle-field__card battle-field__card--opponent">
    <div class="${
      player.at(-1).power < opponent.at(-1).power
        ? 'card-win card-win--red'
        : ''
    }">
            <img
              src="img/cards/${opponent.at(-1).img}.png"
              alt="Card"live
              class="img-card"
              id="opponent-card"
            />
          </div>
          </div>

          <div class="battle-field__card battle-field__card--player">
          <div class="${
            player.at(-1).power > opponent.at(-1).power
              ? 'card-win card-win--green'
              : ''
          }">
            <img
              src="img/cards/${player.at(-1).img}.png"
              alt="Card"
              class="img-card"
              id="player-card"
            />
          </div>
          </div>
          `
    );
  }

  renderChangeQuantityCards(cardsQuantity, winner) {
    // Удаление предыдущих элементов для анимаций отображения получения/удаления карт
    const prevPlayer = this._playerInfo.querySelector('.update-cards--player');
    const prevOpponent = this._opponentInfo.querySelector(
      '.update-cards--opponent'
    );

    if (prevPlayer) prevPlayer.remove();
    if (prevOpponent) prevOpponent.remove();

    this._playerInfo.insertAdjacentHTML(
      'afterbegin',
      winner === 'player'
        ? `<span class="update-cards update-cards--player update-cards--plus">+${
            cardsQuantity + 1
          }</span>`
        : `<span class="update-cards update-cards--player update-cards--minus">-${
            cardsQuantity + 1
          }</span>`
    );

    this._opponentInfo.insertAdjacentHTML(
      'beforeend',
      winner === 'opponent'
        ? `<span class="update-cards update-cards--opponent update-cards--plus">+${
            cardsQuantity + 1
          }</span>`
        : `<span class="update-cards update-cards--opponent update-cards--minus">-${
            cardsQuantity + 1
          }</span>`
    );
  }

  renderInfoRound(result) {
    let markup;
    switch (result) {
      case 'player':
        markup = `<p class="winlostrounds-info__text">Победа!⚡</p>`;
        break;

      case 'opponent':
        markup = `<p class="winlostrounds-info__text">Проигрыш ☹️</p>`;
        break;

      case 'draw':
        markup = `<p class="winlostrounds-info__text winlostrounds-info__text--draw">🤜 Ничья 🤛</p>`;
        break;
    }

    this._roundInfo.innerHTML = '';
    this._roundInfo.insertAdjacentHTML('afterbegin', markup);
  }

  clearRenderInfoRound() {
    this._roundInfo.innerHTML = '';
  }

  clearInfoAnimations() {
    const prevPlayer = this._playerInfo.querySelector('.update-cards--player');
    const prevOpponent = this._opponentInfo.querySelector(
      '.update-cards--opponent'
    );

    if (prevPlayer) prevPlayer.remove();
    if (prevOpponent) prevOpponent.remove();
  }

  updateQuantityCards(player, opponent) {
    this._playerQauntityCards.textContent = player.length;
    this._opponentQauntityCards.textContent = opponent.length;
  }

  updateRateAmount(amount) {
    this._rateCount.textContent = amount;
  }
}

export default new ViewBattleCards();
