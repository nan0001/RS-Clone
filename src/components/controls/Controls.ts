import createElement from '../../common/helpers/createElement';
import Menu from '../menu/Menu';
import View from '../view/View';
import { CONSTANTS } from './constants';
import './controls.scss';

class Controls {
  static draw(): HTMLElement {
    const controls = createElement(CONSTANTS.controls);
    const menu = Menu.draw();
    const view = View.draw();

    controls.append(menu, view);

    return controls;
  }
}

export default Controls;
