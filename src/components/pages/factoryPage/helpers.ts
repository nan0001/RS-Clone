import { RootState } from '../../../common/components/store/store';
import { FACTORY_TYPES, LANG } from '../../../common/helpers/constants';
import LargeFactory from '../../largeFactory/LargeFactory';
import MediumFactory from '../../mediumFactory/MediumFactory';
import SmallFactory from '../../smallFactory/SmallFactory';
import { CONSTANTS } from './constants';

function appendFactory(
  elemToAppend: HTMLElement,
  factory: SmallFactory | MediumFactory | LargeFactory,
  placeholder: HTMLElement,
): void {
  placeholder.remove();
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
  placeholder: HTMLElement,
): void {
  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.s) &&
    state.factories.factoryS.bought
  ) {
    appendFactory(factoryContainer, factories.smallFactory, placeholder);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.m) &&
    state.factories.factoryM.bought
  ) {
    appendFactory(factoryContainer, factories.mediumFactory, placeholder);
  }

  if (
    !isFactoryAmongChildren(factoryContainer, FACTORY_TYPES.l) &&
    state.factories.factoryL.bought
  ) {
    appendFactory(factoryContainer, factories.largeFactory, placeholder);
  }

  if (!factoryContainer.hasChildNodes()) {
    factoryContainer.append(placeholder);
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
