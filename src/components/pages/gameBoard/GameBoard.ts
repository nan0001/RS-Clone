import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './gameBoard.scss';
import store from '../../../common/components/store/store';
import FallingItem from '../../fallingItems/FallingItems';
// import Entrance from '../entrance/Entrance';

class GameBoard {
  static timerId: NodeJS.Timer;
  // static gameBoard = createElement(CONSTANTS.gameBoard); //лучше создать внутри метода draw, потому что сейчас каждый раз при вызове draw появлется еще одно поле

  static draw() {
    const gameBoard = createElement(CONSTANTS.gameBoard); //добавила создание сюда, чтобы экран не двоился и не троился при вызове метода
    const gameWrapper = createElement(CONSTANTS.gameWrapper);
    // const gameControls = createElement(CONSTANTS.gameControls);
    const gameField = createElement(CONSTANTS.gameField);
    const totalCost = createElement(CONSTANTS.totalCost);
    // const returnBtn = createElement(CONSTANTS.returnBtn);
    const boosters = createElement(CONSTANTS.boosters);

    totalCost.innerText = String(store.getState().cookies.count);

    store.subscribe(() => {
      const state = store.getState();
      totalCost.innerText = state.cookies.count.toString();
    });

    gameField.append(totalCost);
    gameBoard.append(/*gameControls*/ gameField);
    // gameControls.append(returnBtn);
    gameWrapper.append(gameBoard, boosters);

    // returnBtn.addEventListener('click', this.stopGame);

    this.startGame(gameBoard); // addded to start game when component is drawn

    return gameWrapper;
  }

  static startGame = (gameBoard: HTMLElement) => {
    //добавила геймборд в аргументы, чтобы можно было создать его внутри метода draw
    // document.body.replaceChildren();
    // document.body.append(GameBoard.draw());
    this.timerId = setInterval(() => {
      // FallingItem.draw(this.gameBoard);
      FallingItem.draw(gameBoard);
    }, 500);
  };

  static stopGame = () => {
    // document.body.replaceChildren();
    // document.body.append(Entrance.draw());
    clearInterval(this.timerId);
  };
}

export default GameBoard;
