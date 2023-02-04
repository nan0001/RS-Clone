import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './entrance.scss';
import { startGame } from '../../../common/helpers/gameManagement';

class Entrance {
  static draw() {
    const entrance = createElement(CONSTANTS.entrance);
    const menu = createElement(CONSTANTS.entranceMenu);
    const title = createElement(CONSTANTS.entranceTitle);
    const bgImg = createElement(CONSTANTS.entranceBgImg);
    const btnContainer = createElement(CONSTANTS.btnContainer);
    const registerBtn = createElement(CONSTANTS.registerBtn);
    const guestBtn = createElement(CONSTANTS.guestBtn);
    const aboutBtn = createElement(CONSTANTS.aboutBtn);

    btnContainer.append(registerBtn, guestBtn, aboutBtn);
    menu.append(title, btnContainer);
    entrance.append(bgImg, menu);
    guestBtn.addEventListener('click', startGame);

    return entrance;
  }
}

export default Entrance;
