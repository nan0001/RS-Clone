import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './entrance.scss';

class Entrance {
  static draw() {
    const entrance = createElement(CONSTANTS.entrance);
    const menu = createElement(CONSTANTS.entranceMenu);
    const title = createElement(CONSTANTS.entranceTitle);
    const bgImg = createElement(CONSTANTS.entranceBgImg);
    const registerBtn = createElement(CONSTANTS.registerBtn);

    menu.append(title, registerBtn);
    entrance.append(bgImg, menu);

    return entrance;
  }
}

export default Entrance;
