import GameBoard from "../../components/pages/gameBoard/GameBoard";
import Entrance from "../../components/pages/entrance/Entrance";


export const startGame=()=>{
  document.body.replaceChildren()
  document.body.append(GameBoard.draw())
  }
export const stoptGame=()=>{
  document.body.replaceChildren()
  document.body.append(Entrance.draw());
}
