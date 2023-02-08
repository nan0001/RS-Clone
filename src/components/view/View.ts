import { changeView } from '../../common/components/store/reducers/view';
import store from '../../common/components/store/store';
import { VIEW } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import { appendViewBtns } from './helpers';
import './view.scss';

class View {
  static draw(): HTMLElement {
    const view = createElement(CONSTANTS.view);
    const cookieViewBtn = createElement(CONSTANTS.cookieViewBtn);
    const factoryViewBtn = createElement(CONSTANTS.factoryViewBtn);
    const homeViewBtn = createElement(CONSTANTS.homeViewBtn);
    const state = store.getState();

    cookieViewBtn.addEventListener('click', () => {
      store.dispatch(changeView(VIEW.cookie));
    });

    factoryViewBtn.addEventListener('click', () => {
      store.dispatch(changeView(VIEW.factory));
    });

    homeViewBtn.addEventListener('click', () => {
      store.dispatch(changeView(VIEW.home));
    });

    appendViewBtns(state, { homeViewBtn, cookieViewBtn, factoryViewBtn }, view);

    store.subscribe(() => {
      const state = store.getState();

      appendViewBtns(
        state,
        { homeViewBtn, cookieViewBtn, factoryViewBtn },
        view,
      );
    });

    return view;
  }
}

export default View;
