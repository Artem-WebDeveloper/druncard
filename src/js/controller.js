import { state } from './model.js';
import { generalDeckOfCards } from './cards.js';
import { fillDeckOfPlayers, shuffleArray, gameLogic } from './model.js';
import viewBattleCards from './views/viewBattleCards.js';

class CardGame {
  _mainScreen = document.querySelector('.main');
  _startScreen = document.querySelector('.start-screen');
  _gameplayScreen = document.querySelector('.gameplay-screen');
  _startDescrip = document.querySelector('.start-description');
  _battleField = document.querySelector('.battle-field');
  _rateInfo = document.querySelector('.section-rate');

  _btnStartGame = document.querySelector('.start-screen__start');
  _btnFirstStroke = document.querySelector('#btn-first-stroke');
  _btnNextStroke = document.querySelector('#btn-next-stroke');
  _btnReset = document.querySelector('.button-reset');

  _volumeControl = document.querySelector('#volume-control');
  _volumeIcon = document.querySelector('.volume__icon');

  _bgMusic = document.querySelector('#bg-music');

  _cardSlideSound = new Audio('../audio/card-slide.mp3');
  _winSound = new Audio('../audio/win.mp3');
  _loseSound = new Audio('../audio/lose.mp3');
  _drawSound = new Audio('../audio/draw1.mp3');

  _bgMusicVolumeCoef = 0.7;
  constructor() {
    this._btnStartGame.addEventListener('click', this._startGame.bind(this));
    this._btnFirstStroke.addEventListener(
      'click',
      this._startBattle.bind(this)
    );
    this._btnNextStroke.addEventListener('click', this._nextStroke.bind(this));
    this._btnReset.addEventListener('click', this._resetGame.bind(this));
    this._mainScreen.addEventListener('click', e => {
      if (e.target.classList.contains('button-game-end')) this._resetGame();
    });

    this._volumeControl.addEventListener('input', () => {
      const volume = +this._volumeControl.value;
      this._bgMusic.volume = volume * this._bgMusicVolumeCoef;

      this._cardSlideSound.volume =
        this._winSound.volume =
        this._loseSound.volume =
        this._drawSound.volume =
          volume;

      if (volume === 0) {
        this._volumeIcon.textContent = '🔇';
        state.isMuted = true;
      } else {
        this._volumeIcon.textContent = '🔊';
        state.isMuted = false;
      }
    });

    this._volumeIcon.addEventListener('click', () => {
      if (state.isMuted) {
        this._volumeControl.value = 0.5;
        this._volumeControl.dispatchEvent(new Event('input'));
      } else {
        this._volumeControl.value = 0;
        this._volumeControl.dispatchEvent(new Event('input'));
      }
    });
  }

  _startGame() {
    const volume = +this._volumeControl.value;
    this._bgMusic.volume = volume * this._bgMusicVolumeCoef;
    this._bgMusic.play();

    this._startScreen.classList.add('hidden');
    this._gameplayScreen.classList.remove('hidden');
    this._startDescrip.classList.remove('hidden');
    // Раздача перемешанной колоды
    fillDeckOfPlayers(
      state.player,
      state.opponent,
      shuffleArray(generalDeckOfCards)
    );
    // Отображение количества карт
    viewBattleCards.updateQuantityCards(state.player, state.opponent);
  }

  _startBattle() {
    this._startDescrip.classList.add('hidden');
    this._battleField.classList.remove('hidden');
    this._btnNextStroke.classList.remove('hidden');

    this._renderAndPlayRound();
  }

  _nextStroke() {
    this._renderAndPlayRound();
  }

  _renderAndPlayRound() {
    this._battleField.innerHTML = ``;
    viewBattleCards.renderBattleCards(
      state.player,
      state.opponent,
      this._battleField
    );
    // gameLogic();

    const result = gameLogic();

    switch (result) {
      case 'player':
        this._playRoundWin();
        break;
      case 'opponent':
        this._playRoundLose();
        break;
      case 'draw':
        this._playRoundDraw();
        break;
    }
    this._playCardSlide();
  }

  _resetGame() {
    state.player.length = 0;
    state.opponent.length = 0;
    state.rateStorage.length = 0;
    state.changeCardsAmount = 0;

    this._bgMusic.pause();
    this._bgMusic.currentTime = 0;
    this._battleField.innerHTML = ``;
    this._gameplayScreen.classList.add('hidden');
    this._startDescrip.classList.add('hidden');
    this._battleField.classList.add('hidden');
    this._btnNextStroke.classList.add('hidden');
    this._startScreen.classList.remove('hidden');
    this._rateInfo.classList.add('hidden');

    const modal = document.querySelector('.modal');
    if (modal) modal.remove();

    viewBattleCards.clearRenderInfoRound();
    viewBattleCards.clearInfoAnimations();
  }

  _playCardSlide() {
    this._cardSlideSound.pause();
    this._cardSlideSound.currentTime = 0;
    this._cardSlideSound.play();
  }

  _playRoundWin() {
    this._winSound.pause();
    this._winSound.currentTime = 0;
    this._winSound.play();
  }

  _playRoundLose() {
    this._loseSound.pause();
    this._loseSound.currentTime = 0;
    this._loseSound.play();
  }

  _playRoundDraw() {
    this._drawSound.pause();
    this._drawSound.currentTime = 0;
    this._drawSound.play();
  }
}

new CardGame();
