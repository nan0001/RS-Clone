import Popup from '../../common/components/popup/Popup';
import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import { createCont } from './helpers';
import './helpPopup.scss';

class HelpPopup extends Popup {
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
    const view = createCont(
      CONSTANTS.popupViewTitleText,
      CONSTANTS.popupViewDescText,
      CONSTANTS.viewItems,
    );
    const cookies = createCont(
      CONSTANTS.popupCookiesTitleText,
      CONSTANTS.popupCookiesDescText,
      CONSTANTS.cookieItems,
    );
    const boosters = createCont(
      CONSTANTS.popupBoostersTitleText,
      CONSTANTS.popupBoostersDescText,
      CONSTANTS.boostersItems,
    );
    const factories = createCont(
      CONSTANTS.popupFactoriesTitleText,
      CONSTANTS.popupFactoriesDescText,
      CONSTANTS.factoriesItems,
    );

    popupBody.append(view, cookies, boosters, factories);
    popup.append(popupBody);

    return [overlay, popup];
  }
}

export default HelpPopup;
