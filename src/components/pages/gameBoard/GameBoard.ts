import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import  './gameBoard.scss'
import {stoptGame} from "../../../common/helpers/gameManagement";

class GameBoard {
  static draw() {
    const gameWrapper = createElement(CONSTANTS.gameWrapper);
    const gameBoard = createElement(CONSTANTS.gameBoard);
    const gameControls = createElement(CONSTANTS.gameControls);
    const gameField = createElement(CONSTANTS.gameField);
    const returnBtn = createElement(CONSTANTS.returnBtn);
    const boosters = createElement(CONSTANTS.boosters);

    gameBoard.append(gameControls,gameField);
    gameControls.append(returnBtn);
    gameWrapper.append(gameBoard,boosters);
    returnBtn.addEventListener('click',stoptGame);

    return gameWrapper;
  }
  }

  export default GameBoard
