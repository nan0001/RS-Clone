import store from '../../../common/components/store/store';
import { LANG } from '../../../common/helpers/constants';
import createElement from '../../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './entrance.scss';
import GameBoard from '../gameBoard/GameBoard';

class Entrance {
  static draw(): HTMLElement {
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
    guestBtn.addEventListener('click', GameBoard.startGame);

    store.subscribe(() => {
      const state = store.getState();
      const lang = state.lang.lang;

      if (lang === LANG.ru) {
        registerBtn.innerText = CONSTANTS.registerBtnRU;
        guestBtn.innerText = CONSTANTS.guestBtnRU;
        aboutBtn.innerText = CONSTANTS.aboutBtnRU;
      } else {
        registerBtn.innerText = CONSTANTS.registerBtn.text;
        guestBtn.innerText = CONSTANTS.guestBtn.text;
        aboutBtn.innerText = CONSTANTS.aboutBtn.text;
      }
    });

    return entrance;
  }
}

export default Entrance;
