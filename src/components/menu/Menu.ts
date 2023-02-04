import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './menu.scss';

class Menu {
  static draw() {
    const menu = createElement(CONSTANTS.menu);
    const menuBtn = createElement(CONSTANTS.menuBtn);
    const menuList = createElement(CONSTANTS.menuList);
    const fullscrBtn = createElement(CONSTANTS.fullscrBtn);
    const soundBtn = createElement(CONSTANTS.soundBtn);
    const langBtn = createElement(CONSTANTS.langBtn);
    const helpBtn = createElement(CONSTANTS.helpBtn);

    [fullscrBtn, soundBtn, langBtn, helpBtn].forEach((el) => {
      const menuItem = createElement(CONSTANTS.menuItem);

      menuItem.append(el);
      menuList.append(menuItem);
    });

    menu.append(menuBtn, menuList);

    return menu;
  }
}

export default Menu;
