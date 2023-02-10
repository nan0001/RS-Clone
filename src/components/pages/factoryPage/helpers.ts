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
  factory.product();
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
    factories.smallFactory.currentLevel = state.factories.factoryS.level;
    factories.smallFactory.cookieProduction =
      factories.smallFactory.initProduction;
    appendFactory(factoryContainer, factories.smallFactory, placeholderCont);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.m) &&
    state.factories.factoryM.bought
  ) {
    factories.mediumFactory.currentLevel = state.factories.factoryM.level;
    factories.mediumFactory.cookieProduction =
      factories.mediumFactory.initProduction;
    appendFactory(factoryContainer, factories.mediumFactory, placeholderCont);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.l) &&
    state.factories.factoryL.bought
  ) {
    factories.largeFactory.currentLevel = state.factories.factoryL.level;
    factories.largeFactory.cookieProduction =
      factories.largeFactory.initProduction;
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
