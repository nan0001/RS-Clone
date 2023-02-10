import store from '../../../common/components/store/store';
import createElement from '../../../common/helpers/createElement';
import CataloguePopup from '../../cataloguePopup/CataloguePopup';
import LargeFactory from '../../largeFactory/LargeFactory';
import MediumFactory from '../../mediumFactory/MediumFactory';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';
import './factoryPage.scss';
import { addFactoriesFromStore, changeLangFactoryPage } from './helpers';

class FactoryPage {
  static draw(): HTMLElement {
    const factoryPg = createElement(CONSTANTS.factoryPg);
    const factoryContainer = createElement(CONSTANTS.factoryContainer);
    const factoryPgTitle = createElement(CONSTANTS.factoryPgTitle);
    const cookieCount = createElement(CONSTANTS.factoryPgCookieCount);
    const catalogueBtn = createElement(CONSTANTS.factoryCatalogueBtn);
    const catalogueBtnClone = catalogueBtn.cloneNode(true);
    const placeholderCont = createElement(CONSTANTS.placeholderCont);
    const placeholder = createElement(CONSTANTS.placeholder);
    const smallFactory = new SmallFactory();
    const mediumFactory = new MediumFactory();
    const largeFactory = new LargeFactory();
    const factories = { smallFactory, mediumFactory, largeFactory };

    cookieCount.innerText = `${store.getState().cookies.count}`;

    changeLangFactoryPage(store.getState(), factoryPgTitle, placeholder);
    addFactoriesFromStore(
      store.getState(),
      factoryContainer,
      factories,
      placeholderCont,
    );

    store.subscribe(() => {
      changeLangFactoryPage(store.getState(), factoryPgTitle, placeholder);
      addFactoriesFromStore(
        store.getState(),
        factoryContainer,
        factories,
        placeholderCont,
      );
      cookieCount.innerText = `${store.getState().cookies.count}`;
    });

    placeholderCont.append(placeholder, catalogueBtnClone);

    [catalogueBtn, catalogueBtnClone].forEach((el) => {
      el.addEventListener('click', () => {
        factoryPg.append(...new CataloguePopup().draw());
      });
    });

    factoryPg.append(
      factoryPgTitle,
      factoryContainer,
      cookieCount,
      catalogueBtn,
    );

    return factoryPg;
  }
}

export default FactoryPage;
