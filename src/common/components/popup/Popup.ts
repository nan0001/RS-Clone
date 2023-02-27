import createElement from '../../helpers/createElement';
import { CONSTANTS } from './constants';
import './popup.scss';

class Popup {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }

  draw(): HTMLElement[] {
    const overlay = createElement(CONSTANTS.popupOverlay);
    const popup = createElement(CONSTANTS.popup);
    const popupTitle = createElement(CONSTANTS.popupTitle);
    const cancelBtn = createElement(CONSTANTS.cancelBtn);

    popupTitle.innerText = this.title;
    popup.append(popupTitle, cancelBtn);

    [cancelBtn, overlay].forEach((el) => {
      el.addEventListener('click', () => {
        overlay.remove();
        popup.remove();
      });
    });

    return [overlay, popup];
  }
}

export default Popup;
