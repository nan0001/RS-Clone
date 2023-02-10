import { configureStore } from '@reduxjs/toolkit';
import cookiesCount from './reducers/cookiesCount';
import fallingItems from './reducers/fallingItems';
import lang from './reducers/lang';
import view from './reducers/view';

const store = configureStore({
  reducer: {
    cookies: cookiesCount,
    lang: lang,
    view: view,
    fallingItems: fallingItems,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

//ПРИМЕР ИСПОЛЬЗОВАНИЯ

//это используем на событиях/кнопках которые должны менять количество печенек в store:
//можно раскомментировать чтобы посмотреть как работает

// window.addEventListener('click', (e) => {

//   //тыкаем в правую сторону экрана
//   if (e.offsetX > window.innerWidth / 2) {
//     //увеличиваем количество печений в store
//     store.dispatch(increaseCookiesCount(1));
//   } else {
//     //тыкаем в левую - уменьшаем
//     store.dispatch(decreaseCookiesCount(1)); //в качестве аргумента передаем количество на сколько нужно уменьшить
//   }
// });

//это используем там, где надо чтобы менялось отображение количества печенек, подписываем элемент на изменения в store
//создание элемента с отображением начального состояния в store:

// const counter = document.createElement('p');
// counter.innerText = String(store.getState().cookies.count);
// document.body.append(counter);

// подписка на изменения:

// store.subscribe(() => { //добавляем слушателя событий в store, используя метод subscribe
//   const state = store.getState(); //достаем текущее значение store
//   counter.innerText = state.cookies.count.toString(); //кладем нужное нам значение в элемент, где оно будет отображаться
// });
