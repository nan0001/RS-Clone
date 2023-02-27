import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import { InfoItem, TextEnRu } from './types';

function createInfo(items: InfoItem[]): HTMLElement {
  const info = createElement(CONSTANTS.popupInfoCont);

  items.forEach((el) => {
    const item = createElement(CONSTANTS.popupItem);
    const img = createElement(CONSTANTS.popupItemImg);
    const desc = createElement(CONSTANTS.popupItemDesc);

    img.classList.add(el.classList);
    img.style.backgroundImage = `url('${el.imgSrc}')`;
    desc.innerText = store.getState().lang.lang === LANG.en ? el.en : el.ru;

    item.append(img, desc);
    info.append(item);
  });

  return info;
}

export function createCont(
  title: TextEnRu,
  desc: TextEnRu,
  items: InfoItem[],
): HTMLElement {
  const container = createElement(CONSTANTS.popupCont);
  const contTitle = createElement(CONSTANTS.popupInfoTitle);
  const description = createElement(CONSTANTS.popupInfoDesc);
  const info = createInfo(items);

  if (store.getState().lang.lang === LANG.en) {
    contTitle.innerText = title.en;
    description.innerText = desc.en;
  } else {
    contTitle.innerText = title.ru;
    description.innerText = desc.ru;
  }

  container.append(contTitle, description, info);

  return container;
}
