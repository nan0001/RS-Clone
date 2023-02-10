import { RootState } from '../../../common/components/store/store';
import { FACTORY_TYPES, LANG } from '../../../common/helpers/constants';
import LargeFactory from '../../largeFactory/LargeFactory';
import MediumFactory from '../../mediumFactory/MediumFactory';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';

function appendFactory(
  elemToAppend: HTMLElement,
  factory: SmallFactory | MediumFactory | LargeFactory,
  placeholderCont: HTMLElement,
): void {
  placeholderCont.remove();
  elemToAppend.append(factory.draw());
}

function isFactoryAmongChildren(
  parentElem: HTMLElement,
  factoryType: string,
): boolean {
  const children = Array.from(parentElem.children);

  const index = children.findIndex((el) => {
    return el.classList.contains(`${CONSTANTS.factoryClass}${factoryType}`);
  });

  return index === -1 ? false : true;
}

function multiplyProductionByLevel(
  factory: SmallFactory | MediumFactory | LargeFactory,
  level: number,
): number {
  let production = factory.initProduction;

  for (let i = 1; i < level; i++) {
    production = Math.round(production * factory.upgradeMultiplier);
  }

  return production;
}

function multiplyUpgradeCostByLevel(
  factory: SmallFactory | MediumFactory | LargeFactory,
  level: number,
): number {
  let cost = factory.initUpgradePrice;

  for (let i = 1; i < level; i++) {
    cost = Math.round(cost * factory.upgradeMultiplier);
  }

  return cost;
}

function resetFactory(
  factory: SmallFactory | MediumFactory | LargeFactory,
  state: RootState,
): void {
  const factoryState =
    factory instanceof SmallFactory
      ? state.factories.factoryS
      : factory instanceof MediumFactory
      ? state.factories.factoryM
      : state.factories.factoryL;

  factory.currentLevel = factoryState.level;
  factory.cookieProduction = multiplyProductionByLevel(
    factory,
    factoryState.level,
  );
  factory.upgradePrice = multiplyUpgradeCostByLevel(
    factory,
    factoryState.level,
  );
}

export function addFactoriesFromStore(
  state: RootState,
  factoryContainer: HTMLElement,
  factories: {
    smallFactory: SmallFactory;
    mediumFactory: MediumFactory;
    largeFactory: LargeFactory;
  },
  placeholderCont: HTMLElement,
): void {
  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.s) &&
    state.factories.factoryS.bought
  ) {
    resetFactory(factories.smallFactory, state);
    appendFactory(factoryContainer, factories.smallFactory, placeholderCont);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.m) &&
    state.factories.factoryM.bought
  ) {
    resetFactory(factories.mediumFactory, state);
    appendFactory(factoryContainer, factories.mediumFactory, placeholderCont);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.l) &&
    state.factories.factoryL.bought
  ) {
    resetFactory(factories.largeFactory, state);
    appendFactory(factoryContainer, factories.largeFactory, placeholderCont);
  }

  if (!factoryContainer.hasChildNodes()) {
    factoryContainer.append(placeholderCont);
  }
}

export function changeLangFactoryPage(
  state: RootState,
  title: HTMLElement,
  placeholder: HTMLElement,
): void {
  if (state.lang.lang === LANG.en) {
    title.innerText = CONSTANTS.factoryPgTitleText.en;
    placeholder.innerText = CONSTANTS.placeholderText.en;
  } else {
    title.innerText = CONSTANTS.factoryPgTitleText.ru;
    placeholder.innerText = CONSTANTS.placeholderText.ru;
  }
}
