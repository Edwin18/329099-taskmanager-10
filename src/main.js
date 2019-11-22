import {getMenuElement} from './components/site-menu.js';
import {getMainFilterElement} from './components/filter.js';
import {getBoardContainerElement, getBoardFilterElement, getBoardTasksElement} from './components/board.js';
import {getCardElement} from './components/card.js';
import {getEditCardElement} from './components/card-edit.js';
import {getLoadMoreBtnElement} from './components/load-more.js';

const CARD_COUNT = 3;

const mainElement = document.querySelector(`main`);
const mainControlElement = mainElement.querySelector(`.main__control`);

const renderElement = (element, parent, position = `beforeend`) => {
  parent.insertAdjacentHTML(position, element);
};

renderElement(getMenuElement(), mainControlElement);
renderElement(getMainFilterElement(), mainElement);
renderElement(getBoardContainerElement(), mainElement);

const boardContainerElement = mainElement.querySelector(`.board`);

renderElement(getBoardFilterElement(), boardContainerElement);
renderElement(getBoardTasksElement(), boardContainerElement);
renderElement(getLoadMoreBtnElement(), boardContainerElement);

const boardTasksElement = mainElement.querySelector(`.board__tasks`);

const renderTasks = () => {
  for (let i = 0; i < CARD_COUNT; i++) {
    renderElement(getCardElement(), boardTasksElement);
  }
};

renderTasks();
renderElement(getEditCardElement(), boardTasksElement, `afterbegin`);
