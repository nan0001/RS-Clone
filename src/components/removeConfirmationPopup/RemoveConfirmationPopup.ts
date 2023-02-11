import Factory from '../../common/components/factory/Factory';
import Popup from '../../common/components/popup/Popup';
import { removeFactory } from '../../common/components/store/reducers/factories';
import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './removeConfirmationPopup.scss';

class RemoveConfirmationPopup extends Popup {
  protected factoryEl: HTMLElement;
  protected factory: Factory;
  protected factoryType: string;

  constructor(factoryEl: HTMLElement, factory: Factory, factoryType: string) {
    super(
      store.getState().lang.lang === LANG.en
        ? CONSTANTS.title.en
        : CONSTANTS.title.ru,
    );
    this.factoryEl = factoryEl;
    this.factory = factory;
    this.factoryType = factoryType;
  }

  draw(): HTMLElement[] {
    const [overlay, popup] = super.draw();
    const popupBody = createElement(CONSTANTS.popupBody);
    const popupTextEl = createElement(CONSTANTS.popupTextEl);
    const confirmBtn = createElement(CONSTANTS.confirmBtn);
    const popupElRemoved = createElement(CONSTANTS.popupElRemoved);

    if (store.getState().lang.lang === LANG.en) {
      popupTextEl.innerText = CONSTANTS.popupText.en;
      confirmBtn.innerText = CONSTANTS.confirmBtnText.en;
      popupElRemoved.innerText = CONSTANTS.popupElRemovedText.en;
    } else {
      popupTextEl.innerText = CONSTANTS.popupText.ru;
      confirmBtn.innerText = CONSTANTS.confirmBtnText.ru;
      popupElRemoved.innerText = CONSTANTS.popupElRemovedText.ru;
    }

    confirmBtn.addEventListener('click', () => {
      popupBody.replaceChildren(popupElRemoved);
      this.factoryEl.remove();
      this.factory.stopProduction();
      store.dispatch(removeFactory(this.factoryType));

      setTimeout(() => {
        overlay.remove();
        popup.remove();
      }, 2000);
    });

    popupBody.append(popupTextEl, confirmBtn);
    popup.append(popupBody);

    return [overlay, popup];
  }
}

export default RemoveConfirmationPopup;
