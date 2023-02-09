import { LANG } from '../../helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../helpers/types';
import { buyFactory } from '../store/reducers/factories';
import store, { RootState } from '../store/store';
import { CONSTANTS } from './constants';
import Factory from './Factory';

export function insertElemsText(
  state: RootState,
  elems: {
    factoryTitle?: HTMLElement;
    description?: HTMLElement;
    upgradeText?: HTMLElement;
    buyBtn?: HTMLElement;
  },
  title?: FactoryTitle,
  desc?: FactoryDesc,
  amountAfterUpgrade?: number,
): void {
  if (state.lang.lang === LANG.en) {
    if (elems.factoryTitle && title) {
      elems.factoryTitle.innerText = title.titleEN;
    }

    if (elems.description && desc) {
      elems.description.innerText = desc.descriptionEN;
    }

    if (elems.upgradeText && amountAfterUpgrade) {
      elems.upgradeText.innerText =
        CONSTANTS.upgradeTextENHandler(amountAfterUpgrade);
    } else if (elems.upgradeText && !amountAfterUpgrade) {
      elems.upgradeText.innerText = CONSTANTS.maxUpgrade.en;
    }

    if (elems.buyBtn) {
      elems.buyBtn.innerText = CONSTANTS.buyBtnText.en;
    }
  } else {
    if (elems.factoryTitle && title) {
      elems.factoryTitle.innerText = title.titleRU;
    }

    if (elems.description && desc) {
      elems.description.innerText = desc.descriptionRU;
    }

    if (elems.upgradeText && amountAfterUpgrade) {
      elems.upgradeText.innerText =
        CONSTANTS.upgradeTextRUHandler(amountAfterUpgrade);
    } else if (elems.upgradeText && !amountAfterUpgrade) {
      elems.upgradeText.innerText = CONSTANTS.maxUpgrade.ru;
    }

    if (elems.buyBtn) {
      elems.buyBtn.innerText = CONSTANTS.buyBtnText.ru;
    }
  }
}

export function upgradeBtnHandler(
  factory: Factory,
  upgradeBtn: HTMLElement,
  upgradeText: HTMLElement,
): void {
  const state = store.getState();

  factory.upgrade();

  if (factory.currentLevel === factory.maxLevel) {
    upgradeBtn.setAttribute('disabled', '');
    insertElemsText(state, { upgradeText });
  } else {
    insertElemsText(
      state,
      { upgradeText },
      undefined,
      undefined,
      Math.round(factory.cookieProduction * factory.upgradeMultiplier),
    );
  }
}

export function drawForCatalogue(
  factory: HTMLElement,
  factoryTitle: HTMLElement,
  img: HTMLElement,
  description: HTMLElement,
  buyBtn: HTMLElement,
  classToAdd: string,
): void {
  buyBtn.addEventListener('click', () => {
    store.dispatch(buyFactory(classToAdd));
  });

  factory.classList.add(CONSTANTS.classForCatalogue);
  factory.append(factoryTitle, img, description, buyBtn);
}
