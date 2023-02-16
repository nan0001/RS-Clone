import Entrance from '../../components/pages/entrance/Entrance';
import Sound from '../../components/sound/Sound';
import createElement from '../helpers/createElement';
import { CONSTANTS } from './constants';
import '../styles/reset.scss';
import '../styles/index.scss';
import './app.scss';
import Controls from '../../components/controls/Controls';
import store from '../components/store/store';
import { VIEW } from '../helpers/constants';
import GameBoard from '../../components/pages/gameBoard/GameBoard';
import FactoryPage from '../../components/pages/factoryPage/FactoryPage';
// import SmallFactory from '../../components/smallFactory/SmallFactory';
// import MediumFactory from '../../components/mediumFactory/MediumFactory';
// import { resetFactory } from '../helpers/resetFactory';
// import { saveFactory } from '../components/store/reducers/factories';

class App {
  static init(): void {
    const overlay = createElement(CONSTANTS.overlay);
    const appRoot = createElement(CONSTANTS.appRoot);

    appRoot.append(Controls.draw(), Entrance.draw());

    overlay.addEventListener('click', () => {
      overlay.remove();
      document.body.append(appRoot);
      Sound.play();
    });

    store.subscribe(() => {
      const state = store.getState();
      const view = state.view.view;
      // const token = state.token.token;
      const page = appRoot.lastChild as HTMLElement;

      switch (view) {
        case VIEW.cookie:
          if (!page.classList.contains(CONSTANTS.pageSelectors.cookie)) {
            appRoot.removeChild(page);
            appRoot.append(GameBoard.draw());
          }

          break;
        case VIEW.factory:
          if (!page.classList.contains(CONSTANTS.pageSelectors.factory)) {
            appRoot.removeChild(page);
            appRoot.append(FactoryPage.draw());

            if (GameBoard.timerId) GameBoard.stopGame();
          }

          break;
        default:
          if (!page.classList.contains(CONSTANTS.pageSelectors.entrance)) {
            appRoot.removeChild(page);
            appRoot.append(Entrance.draw());

            if (GameBoard.timerId) GameBoard.stopGame();
          }

          break;
      }

      // if (token) {
      //   //как только получили токен положить все в стейт из юзер даты, потом запустить заводы либо в хэлперах signIn
      //   const smallFactory = state.factories.factoryS.bought
      //     ? new SmallFactory()
      //     : undefined;
      //   const mediumFactory = state.factories.factoryS.bought
      //     ? new MediumFactory()
      //     : undefined;
      //   const largeFactory = state.factories.factoryS.bought
      //     ? new MediumFactory()
      //     : undefined;

      //   if (smallFactory) {
      //     resetFactory(smallFactory, state.factories.factoryS.level);
      //     store.dispatch(saveFactory(smallFactory));
      //     smallFactory.product();
      //   }

      //   if (mediumFactory) {
      //     resetFactory(mediumFactory, state.factories.factoryM.level);
      //     store.dispatch(saveFactory(mediumFactory));
      //     mediumFactory.product();
      //   }

      //   if (largeFactory) {
      //     resetFactory(largeFactory, state.factories.factoryL.level);
      //     store.dispatch(saveFactory(largeFactory));
      //     largeFactory.product();
      //   }
      // }
    });

    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });

    document.body.append(overlay);
  }
}

export default App;
