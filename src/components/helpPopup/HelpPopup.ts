import Popup from '../../common/components/popup/Popup';
import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import { CONSTANTS } from './constants';

class HelpPopup extends Popup {
  constructor() {
    super(
      store.getState().lang.lang === LANG.en
        ? CONSTANTS.title
        : CONSTANTS.titleRU,
    );
  }

  draw(): HTMLElement[] {
    const [overlay, popup] = super.draw();

    return [overlay, popup];
  }
}

export default HelpPopup;
