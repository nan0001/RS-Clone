import Popup from '../../common/components/popup/Popup';
import createElement from '../../common/helpers/createElement';
import SmallFactory from '../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';
import './cataloguePopup.scss';
import MediumFactory from '../mediumFactory/MediumFactory';
import LargeFactory from '../largeFactory/LargeFactory';

class CataloguePopup extends Popup {
  constructor() {
    super('Factory catalogue');
  }

  draw(): HTMLElement[] {
    const [overlay, popup] = super.draw();
    const smallFactory = new SmallFactory().drawForCatalogue();
    const mediumFactory = new MediumFactory().drawForCatalogue();
    const largeFactory = new LargeFactory().drawForCatalogue();
    const popupBody = createElement(CONSTANTS.popupBody);

    popupBody.append(smallFactory, mediumFactory, largeFactory);
    popup.append(popupBody);

    return [overlay, popup];
  }
}

export default CataloguePopup;
