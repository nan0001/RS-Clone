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
    const smallFactory = store.getState().factories.factoryS.factory
      ? (store.getState().factories.factoryS.factory as SmallFactory)
      : new SmallFactory();
    const mediumFactory = store.getState().factories.factoryM.factory
      ? (store.getState().factories.factoryM.factory as MediumFactory)
      : new MediumFactory();
    const largeFactory = store.getState().factories.factoryL.factory
      ? (store.getState().factories.factoryL.factory as LargeFactory)
      : new LargeFactory();
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
        factoryPg.append(...new CataloguePopup().drawCatalogue(factories));
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
