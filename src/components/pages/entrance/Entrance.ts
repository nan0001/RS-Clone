import { changeView } from '../../../common/components/store/reducers/view';
import store from '../../../common/components/store/store';
import { VIEW } from '../../../common/helpers/constants';
import createElement from '../../../common/helpers/createElement';
import SignInPopup from '../../signInPopup/SignInPopup';
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
    const signInBtn = createElement(CONSTANTS.signInBtn);
    const guestBtn = createElement(CONSTANTS.guestBtn);
    const aboutBtn = createElement(CONSTANTS.aboutBtn);

    changeLanguage(store.getState(), {
      registerBtn,
      guestBtn,
      aboutBtn,
      signInBtn,
    });

    btnContainer.append(registerBtn, signInBtn, guestBtn, aboutBtn);
    menu.append(title, btnContainer);
    entrance.append(bgImg, menu);

    registerBtn.addEventListener('click', () => {
      entrance.append(...new SignInPopup(true).draw());
    });

    signInBtn.addEventListener('click', () => {
      entrance.append(...new SignInPopup().draw());
    });

    guestBtn.addEventListener('click', () => {
      store.dispatch(changeView(VIEW.cookie));
    });

    aboutBtn.addEventListener('click', () => {
      entrance.append(...new TeamPopup().draw());
    });

    store.subscribe(() => {
      const state = store.getState();

      changeLanguage(state, { registerBtn, guestBtn, aboutBtn, signInBtn });
    });

    return entrance;
  }
}

export default Entrance;
