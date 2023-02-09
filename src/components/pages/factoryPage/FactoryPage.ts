import store, { RootState } from '../../../common/components/store/store';
import { LANG } from '../../../common/helpers/constants';
import createElement from '../../../common/helpers/createElement';
import CataloguePopup from '../../cataloguePopup/CataloguePopup';
import LargeFactory from '../../largeFactory/LargeFactory';
import MediumFactory from '../../mediumFactory/MediumFactory';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';
import './factoryPage.scss';

class FactoryPage {
  static draw(): HTMLElement {
    const factoryPg = createElement(CONSTANTS.factoryPg);
    const factoryContainer = createElement(CONSTANTS.factoryContainer);
    const factoryPgTitle = createElement(CONSTANTS.factoryPgTitle);
    const cookieCount = createElement(CONSTANTS.factoryPgCookieCount);
    const catalogueBtn = createElement(CONSTANTS.factoryCatalogueBtn);

    const smallFactory = new SmallFactory();
    const smallFactoryEl = smallFactory.draw();
    const mediumFactory = new MediumFactory();
    const mediumFactoryEl = mediumFactory.draw();
    const largeFactory = new LargeFactory();
    const largeFactoryEl = largeFactory.draw();

    if (store.getState().factories.factoryS.bought) {
      factoryContainer.append(smallFactoryEl);
    }

    if (store.getState().factories.factoryM.bought) {
      factoryContainer.append(mediumFactoryEl);
    }

    if (store.getState().factories.factoryL.bought) {
      factoryContainer.append(largeFactoryEl);
    }

    if (!factoryContainer.hasChildNodes()) {
      if (store.getState().lang.lang === LANG.en) {
        factoryContainer.append(CONSTANTS.factoryContainerText.en);
      } else {
        factoryContainer.append(CONSTANTS.factoryContainerText.ru);
      }
    }

    factoryPgTitle.innerText =
      store.getState().lang.lang === LANG.en
        ? CONSTANTS.factoryPgTitleText.en
        : CONSTANTS.factoryPgTitleText.ru;
    cookieCount.innerText = `${store.getState().cookies.count}`;

    store.subscribe(() => {
      const state: RootState = store.getState();

      factoryPgTitle.innerText =
        state.lang.lang === LANG.en
          ? CONSTANTS.factoryPgTitleText.en
          : CONSTANTS.factoryPgTitleText.ru;
      cookieCount.innerText = `${state.cookies.count}`;

      if (
        !Array.from(factoryContainer.childNodes).includes(smallFactoryEl) &&
        state.factories.factoryS.bought
      ) {
        smallFactory.product();
        factoryContainer.append(smallFactoryEl);
      }

      if (
        !Array.from(factoryContainer.childNodes).includes(mediumFactoryEl) &&
        state.factories.factoryM.bought
      ) {
        mediumFactory.product();
        factoryContainer.append(mediumFactoryEl);
      }

      if (
        !Array.from(factoryContainer.childNodes).includes(largeFactoryEl) &&
        state.factories.factoryL.bought
      ) {
        largeFactory.product();
        factoryContainer.append(largeFactoryEl);
      }
    });

    catalogueBtn.addEventListener('click', () => {
      factoryPg.append(...new CataloguePopup().draw());
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
