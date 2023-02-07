import { RootState } from '../../common/components/store/store';
import { VIEW } from '../../common/helpers/constants';

export function appendViewBtns(
  state: RootState,
  btns: {
    homeViewBtn: HTMLElement;
    cookieViewBtn: HTMLElement;
    factoryViewBtn: HTMLElement;
  },
  view: HTMLElement,
): void {
  switch (state.view.view) {
    case VIEW.cookie:
      view.replaceChildren();
      view.append(btns.homeViewBtn, btns.factoryViewBtn);

      break;
    case VIEW.factory:
      view.replaceChildren();
      view.append(btns.homeViewBtn, btns.cookieViewBtn);

      break;
    default:
      view.replaceChildren();

      break;
  }
}
