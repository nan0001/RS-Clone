import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './gameBoard.scss';
import store from '../../../common/components/store/store';
import FallingItem from '../../fallingItems/FallingItems';
import Entrance from '../entrance/Entrance';

class GameBoard {
  static timerId: NodeJS.Timer;
  static gameBoard = createElement(CONSTANTS.gameBoard);
  static draw() {
    const gameWrapper = createElement(CONSTANTS.gameWrapper);
    const gameControls = createElement(CONSTANTS.gameControls);
    const gameField = createElement(CONSTANTS.gameField);
    const totalCost = createElement(CONSTANTS.totalCost);
    const returnBtn = createElement(CONSTANTS.returnBtn);
    const boosters = createElement(CONSTANTS.boosters);

    totalCost.innerText = String(store.getState().cookies.count);
    store.subscribe(() => {
      const state = store.getState();
      totalCost.innerText = state.cookies.count.toString();
    });
    gameField.append(totalCost);
    this.gameBoard.append(gameControls, gameField);
    gameControls.append(returnBtn);
    gameWrapper.append(this.gameBoard, boosters);
    returnBtn.addEventListener('click', this.stopGame);

    return gameWrapper;
  }

  static startGame = () => {
    document.body.replaceChildren();
    document.body.append(GameBoard.draw());
    this.timerId = setInterval(() => {
      FallingItem.draw(this.gameBoard);
    }, 500);
  };

  static stopGame = () => {
    document.body.replaceChildren();
    document.body.append(Entrance.draw());
    clearInterval(this.timerId);
  };
}

export default GameBoard;
