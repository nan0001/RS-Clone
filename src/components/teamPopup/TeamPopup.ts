import Popup from '../../common/components/popup/Popup';
import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './teamPopup.scss';

class TeamPopup extends Popup {
  constructor() {
    super(
      store.getState().lang.lang === LANG.en
        ? CONSTANTS.title.en
        : CONSTANTS.title.ru,
    );
  }

  draw(): HTMLElement[] {
    const [overlay, popup] = super.draw();
    const popupBody = createElement(CONSTANTS.popupBody);
    const elenaLink = createElement(CONSTANTS.elenaLink);
    const nastyaLink = createElement(CONSTANTS.nastyaLink);
    const pavelLink = createElement(CONSTANTS.pavelLink);
    const names: HTMLElement[] = [];

    for (let i = 0; i < 3; i++) {
      const name = createElement(CONSTANTS.name);
      names.push(name);
    }

    if (store.getState().lang.lang === LANG.en) {
      names[0].innerText = CONSTANTS.elenaText.en;
      names[1].innerText = CONSTANTS.nastyaText.en;
      names[2].innerText = CONSTANTS.pavelText.en;
    } else {
      names[0].innerText = CONSTANTS.elenaText.ru;
      names[1].innerText = CONSTANTS.nastyaText.ru;
      names[2].innerText = CONSTANTS.pavelText.ru;
    }

    names[0].append(elenaLink);
    names[1].append(nastyaLink);
    names[2].append(pavelLink);
    popupBody.append(...names);
    popup.append(popupBody);

    return [overlay, popup];
  }
}

export default TeamPopup;
