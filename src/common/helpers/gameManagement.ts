import GameBoard from "../../components/pages/gameBoard/GameBoard";
import FallingItem from "../../components/fallingItems/fallingItems";
import Entrance from "../../components/pages/entrance/Entrance";

let timerId:NodeJS.Timer
export const startGame=()=>{
  document.body.replaceChildren()
  document.body.append(GameBoard.draw())
  timerId = setInterval(() => {
    FallingItem.draw()
  }, 500);
}
export const stoptGame=()=>{
  document.body.replaceChildren()
  document.body.append(Entrance.draw());
 clearInterval(timerId)
}
