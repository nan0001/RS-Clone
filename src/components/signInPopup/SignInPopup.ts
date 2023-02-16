import Popup from '../../common/components/popup/Popup';
import { changeView } from '../../common/components/store/reducers/view';
import store from '../../common/components/store/store';
import { LANG, VIEW } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import { checkValidity, insertText } from './helpers';
import './signInPopup.scss';

class SignInPopup extends Popup {
  protected register: boolean;

  constructor(register = false) {
    const title = register ? CONSTANTS.titleReg : CONSTANTS.titleSign;
    super(store.getState().lang.lang === LANG.en ? title.en : title.ru);
    this.register = register;
  }

  draw(): HTMLElement[] {
    const [overlay, popup] = super.draw();
    const popupBody = createElement(CONSTANTS.popupBody);
    const popupInputs = createElement(CONSTANTS.popupInputs);
    const loginInp = createElement(CONSTANTS.popupLogin) as HTMLInputElement;
    const passInp = createElement(CONSTANTS.popupPassword) as HTMLInputElement;
    const enterBtn = createElement(CONSTANTS.enterBtn) as HTMLButtonElement;
    const loginInfo = createElement(CONSTANTS.popupLoginInfo);
    const passInfo = createElement(CONSTANTS.popupLoginInfo);

    insertText(loginInp, passInp, loginInfo, passInfo, enterBtn, this.register);

    enterBtn.disabled = true;

    loginInp.addEventListener('change', () => {
      checkValidity(loginInp, passInp, enterBtn);
    });

    passInp.addEventListener('change', () => {
      checkValidity(passInp, loginInp, enterBtn);
    });

    enterBtn.addEventListener('click', () => {
      //check login and pass;
      //if ok
      popup.remove();
      overlay.remove();
      store.dispatch(changeView(VIEW.cookie));
    });

    if (this.register) {
      popupBody.classList.add(CONSTANTS.registerClass);
      popupInputs.append(loginInp, loginInfo, passInp, passInfo);
    } else {
      popupInputs.append(loginInp, passInp);
    }

    popupBody.append(popupInputs, enterBtn);
    popup.append(popupBody);

    return [overlay, popup];
  }
}

export default SignInPopup;
