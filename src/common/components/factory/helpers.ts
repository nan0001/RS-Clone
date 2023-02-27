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
  upgradeCost?: number,
): void {
  if (state.lang.lang === LANG.en) {
    if (elems.factoryTitle && title) {
      elems.factoryTitle.innerText = title.titleEN;
    }

    if (elems.description && desc) {
      elems.description.innerText = desc.descriptionEN;
    }

    if (elems.upgradeText && amountAfterUpgrade && upgradeCost) {
      elems.upgradeText.innerText = CONSTANTS.upgradeTextENHandler(
        amountAfterUpgrade,
        upgradeCost,
      );
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

    if (elems.upgradeText && amountAfterUpgrade && upgradeCost) {
      elems.upgradeText.innerText = CONSTANTS.upgradeTextRUHandler(
        amountAfterUpgrade,
        upgradeCost,
      );
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
  upgradeCost: number,
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
      upgradeCost,
    );
  }
}

export function checkBuyBtn(
  buyBtn: HTMLElement,
  classToAdd: string,
  price: number,
): void {
  const state = store.getState();
  const factoryState =
    classToAdd === FACTORY_TYPES.s
      ? state.factories.factoryS
      : classToAdd === FACTORY_TYPES.m
      ? state.factories.factoryM
      : state.factories.factoryL;

  if (factoryState.bought) {
    buyBtn.classList.add(CONSTANTS.buyBtnBoughtClass);
    buyBtn.innerText = '';
    buyBtn.setAttribute('disabled', '');
  }

  if (state.cookies.count < price) {
    buyBtn.setAttribute('disabled', '');
  }

  if (!factoryState.bought && state.cookies.count > price) {
    buyBtn.removeAttribute('disabled');
  }
}
