import GameBoard from '../../components/pages/gameBoard/GameBoard';
import FallingItem from '../../components/fallingItems/fallingItems';
import Entrance from '../../components/pages/entrance/Entrance';

let timerId: NodeJS.Timer;
export const startGame = () => {
  document.body.replaceChildren();
  document.body.append(GameBoard.draw());
  const gameBoard = document.querySelector('.game-field') as HTMLElement;
  timerId = setInterval(() => {
    FallingItem.draw(gameBoard);
  }, 500);
};
export const stoptGame = () => {
  document.body.replaceChildren();
  document.body.append(Entrance.draw());
  clearInterval(timerId);
};
