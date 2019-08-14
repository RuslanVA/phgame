import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleGame2 from './game-2.js';
import moduleGreeting from './greeting.js';
import initialState from './data.js';
import initializeClock from './timer.js';
import game from './game.js';
import logic from './logic.js';

const stringRules = `<header class="header">
    <button class="back">
      <span class="visually-hidden">Повернутися до початку</span>
      <img class="icon" width="45" height="45" src="img/arrow-left.svg">
      <img class="icon" width="101" height="44" src="img/logo-small.svg">
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Вгадайте 10 разів для кожного зображення фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> чи малюнок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографіями або малюнками можуть бути обидва зображення.</li>
      <li>На кожну спробу відводиться 30 секунд.</li>
      <li>Помилитися можна не більше 9 разів.</li>
      <li>За кожну неправильну відповідь ви втрачатиме життя і бали.</li>
      <li>За кожну відповідь, обрану швидше, ніж 5 секунд ви будете отримувати додаткові бали.</li>
      <li>За кожну відповідь, обрану повільніше, ніж 15 секунд ви втрачатимете штрафні бали.</li>
    </ul>
    <p class="rules__ready">Готові?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше ім'я">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;
const moduleRules = createDomElemFromString(stringRules);

const rulesButton = moduleRules.querySelector('.rules__button');
const rulesInput = moduleRules.querySelector('.rules__input');

rulesInput.addEventListener('input', () => {
    rulesButton.disabled = false;
});

rulesButton.addEventListener('click', () => {

    logic(renderScreen(game(initialState)));
});

const backButton = moduleRules.querySelector('.back');
backButton.addEventListener('click', () => {
    renderScreen(moduleGreeting);
});

export default moduleRules;