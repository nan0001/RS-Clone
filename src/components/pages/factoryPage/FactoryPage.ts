import createElement from '../../../common/helpers/createElement';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';

class FactoryPage {
  static draw(): HTMLElement {
    const factoryPg = createElement(CONSTANTS.factoryPg);
    const smallFactory = new SmallFactory().draw();

    factoryPg.append(smallFactory);

    return factoryPg;
  }
}

export default FactoryPage;
