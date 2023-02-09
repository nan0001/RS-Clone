import { LANG } from '../../helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../helpers/types';
import store, { RootState } from '../store/store';
import { CONSTANTS } from './constants';
import Factory from './Factory';

export function changeLangFactory(
  state: RootState,
  elems: {
    factoryTitle?: HTMLElement;
    description?: HTMLElement;
    upgradeText?: HTMLElement;
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
    changeLangFactory(state, { upgradeText });
  } else {
    changeLangFactory(
      state,
      { upgradeText },
      undefined,
      undefined,
      Math.round(factory.cookieProduction * factory.upgradeMultiplier),
    );
  }
}
