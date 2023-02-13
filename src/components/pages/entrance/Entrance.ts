import { changeView } from '../../../common/components/store/reducers/view';
import store from '../../../common/components/store/store';
import { VIEW } from '../../../common/helpers/constants';
import createElement from '../../../common/helpers/createElement';
import TeamPopup from '../../teamPopup/TeamPopup';
import { CONSTANTS } from './constants';
import './entrance.scss';
import { changeLanguage } from './helpers';

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

    changeLanguage(store.getState(), { registerBtn, guestBtn, aboutBtn });

    btnContainer.append(registerBtn, guestBtn, aboutBtn);
    menu.append(title, btnContainer);
    entrance.append(bgImg, menu);

    guestBtn.addEventListener('click', () => {
      store.dispatch(changeView(VIEW.cookie));
    });

    aboutBtn.addEventListener('click', () => {
      entrance.append(...new TeamPopup().draw());
    });

    store.subscribe(() => {
      const state = store.getState();

      changeLanguage(state, { registerBtn, guestBtn, aboutBtn });
    });

    return entrance;
  }
}

export default Entrance;
