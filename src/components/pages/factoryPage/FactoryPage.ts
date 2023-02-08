import createElement from '../../../common/helpers/createElement';
import MediumFactory from '../../mediumFactory/MediumFactory';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';

class FactoryPage {
  static draw(): HTMLElement {
    const factoryPg = createElement(CONSTANTS.factoryPg);
    const smallFactory = new SmallFactory().draw();
    const mediumFactory = new MediumFactory().draw();

    factoryPg.append(smallFactory, mediumFactory);

    return factoryPg;
  }
}

export default FactoryPage;
