import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './gameBoard.scss';
import store from '../../../common/components/store/store';
import FallingItem from '../../fallingItems/FallingItems';
import Booster from '../../booster/Booster';

class GameBoard {
  static timerId: NodeJS.Timer;

  static draw() {
    const gameBoard = createElement(CONSTANTS.gameBoard);
    const gameWrapper = createElement(CONSTANTS.gameWrapper);
    const gameField = createElement(CONSTANTS.gameField);
    const totalCost = createElement(CONSTANTS.totalCost);
    const boosters = createElement(CONSTANTS.boosters);
    // удалить
    boosters.append(Booster.draw(2), Booster.draw(1), Booster.draw(3));
    //
    totalCost.innerText = String(store.getState().cookies.count);

    store.subscribe(() => {
      const state = store.getState();
      totalCost.innerText = state.cookies.count.toString();
    });

    gameField.append(totalCost);
    gameBoard.append(gameField);
    gameWrapper.append(gameBoard, boosters);

    this.startGame(gameBoard);

    return gameWrapper;
  }

  static startGame = (gameBoard: HTMLElement) => {
    this.timerId = setInterval(() => {
      FallingItem.draw(gameBoard);
    }, 500);
  };

  static stopGame = () => {
    FallingItem.stopAnimation();
    clearInterval(this.timerId);
  };
}

export default GameBoard;
