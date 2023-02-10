import { FACTORY_TYPES, LANG } from '../../helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../helpers/types';
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

export function disableBuyBtn(
  buyBtn: HTMLElement,
  classToAdd: string,
  price: number,
): void {
  if (classToAdd === FACTORY_TYPES.s) {
    if (store.getState().factories.factoryS.bought) {
      buyBtn.classList.add(CONSTANTS.buyBtnBoughtClass);
      buyBtn.innerText = '';
      buyBtn.setAttribute('disabled', '');
    }

    if (store.getState().cookies.count < price) {
      buyBtn.setAttribute('disabled', '');
    }
  }

  if (classToAdd === FACTORY_TYPES.m) {
    if (store.getState().factories.factoryM.bought) {
      buyBtn.classList.add(CONSTANTS.buyBtnBoughtClass);
      buyBtn.innerText = '';
      buyBtn.setAttribute('disabled', '');
    }

    if (store.getState().cookies.count < price) {
      buyBtn.setAttribute('disabled', '');
    }
  }

  if (classToAdd === FACTORY_TYPES.l) {
    if (store.getState().factories.factoryL.bought) {
      buyBtn.classList.add(CONSTANTS.buyBtnBoughtClass);
      buyBtn.innerText = '';
      buyBtn.setAttribute('disabled', '');
    }

    if (store.getState().cookies.count < price) {
      buyBtn.setAttribute('disabled', '');
    }
  }
}
