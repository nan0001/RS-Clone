import store, { RootState } from '../../../common/components/store/store';
import { LANG } from '../../../common/helpers/constants';
import createElement from '../../../common/helpers/createElement';
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
    const smallFactory = new SmallFactory().draw();
    const mediumFactory = new MediumFactory().draw();
    const largeFactory = new LargeFactory().draw();

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
    });

    factoryContainer.append(smallFactory, mediumFactory, largeFactory);
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
