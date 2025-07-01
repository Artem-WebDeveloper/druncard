const rate = document.querySelector('.section-rate');
const mainScreen = document.querySelector('.main');

import { generalDeckOfCards } from './cards.js';

import viewEndGame from './views/viewEndGame.js';
import viewBattleCards from './views/viewBattleCards.js';

export const state = {
  player: [],
  opponent: [],
  rateStorage: [],
  changeCardsAmount: 0,
  isMuted: false,
};

const addCardsFromRate = function (winner, rate) {
  for (let i = rate.length; i > 0; i--) {
    winner.unshift(rate.pop());
  }
};

export function fillDeckOfPlayers(player1, player2, deck) {
  const deckArr = [...deck];
  for (let i = 0; i < deck.length; i++) {
    i < deck.length / 2
      ? player1.push(deckArr.pop())
      : player2.push(deckArr.pop());
  }
}

export const shuffleArray = function (arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let randomInd = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomInd]] = [array[randomInd], array[i]];
  }
  return array;
};

export function gameLogic() {
  if (state.player.at(-1).power > state.opponent.at(-1).power) {
    rate.classList.add('hidden');
    if (state.rateStorage.length !== 0) {
      addCardsFromRate(state.player, state.rateStorage);
    }
    state.player.unshift(state.player.pop());
    state.player.unshift(state.opponent.pop());

    viewBattleCards.renderInfoRound('player');
    viewBattleCards.renderChangeQuantityCards(
      state.changeCardsAmount,
      'player'
    );
    state.changeCardsAmount = 0;

    viewBattleCards.updateQuantityCards(state.player, state.opponent);

    if (state.opponent.length === 0) {
      viewEndGame.renderEndGameModal(mainScreen, 'player');
    }
    return 'player';
  } else if (state.player.at(-1).power < state.opponent.at(-1).power) {
    rate.classList.add('hidden');

    if (state.rateStorage.length !== 0) {
      addCardsFromRate(state.opponent, state.rateStorage);
    }

    state.opponent.unshift(state.opponent.pop());
    state.opponent.unshift(state.player.pop());

    viewBattleCards.renderInfoRound('opponent');
    viewBattleCards.renderChangeQuantityCards(
      state.changeCardsAmount,
      'opponent'
    );
    state.changeCardsAmount = 0;

    viewBattleCards.updateQuantityCards(state.player, state.opponent);

    if (state.player.length === 0) {
      viewEndGame.renderEndGameModal(mainScreen, 'opponent');
    }
    return 'opponent';
  } else {
    state.rateStorage.unshift(state.player.pop());
    state.rateStorage.unshift(state.opponent.pop());
    rate.classList.remove('hidden');

    viewBattleCards.renderInfoRound('draw');
    viewBattleCards.updateRateAmount(state.rateStorage.length / 2);
    state.changeCardsAmount++;

    return 'draw';
  }
}
