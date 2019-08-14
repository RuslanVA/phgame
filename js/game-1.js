import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleGame2 from './game-2.js';
import moduleGame3 from './game-3.js';
import moduleStats from './stats.js';
import moduleGreeting from './greeting.js';
import levels from './level.js';
import initialState from "./data.js";

const stringGame1 = (level) => `<section class="game">
    <p class="game__task">Вгадайте для кожного зображення фото чи малюнок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${level.url2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>



  </section>`;
const moduleGame1 = createDomElemFromString(stringGame1(levels[initialState.level]));


let radioAll = moduleGame1.querySelectorAll(`input[type="radio"]`);
radioAll = [...radioAll];
let answer = true;

radioAll.forEach((it)=>{
    it.addEventListener(`change`, ()=>{
        answer = true;
        radioAll.forEach((its)=>{
            const name = its.getAttribute(`name`);

            if (moduleGame1.querySelectorAll(`input[name='${name}']:checked`).length === 0) {
                answer = false;
            }
        });

        if (answer === true) {

            let nextGame = levels[initialState.level].next;
            if (nextGame === 'moduleGame2') {
                nextGame = moduleGame2;
            } else if (nextGame === 'moduleGame1') {
                nextGame = moduleGame1;
            } else if (nextGame === 'moduleStats') {
                nextGame = moduleStats;
            }

            let nextState = initialState.level.slice(-1);
            nextState = nextState - (-1);
            let newState = initialState.level.replace(/.$/,nextState);
            initialState.level = newState;

            console.log('---------');
            console.log(nextGame);
            console.log(initialState.level);
            console.log('oooooooooo');

            renderScreen(nextGame);
        }
    });
});
/*
const backButton = moduleGame1.querySelector('.back');
backButton.addEventListener('click', () => {
    renderScreen(moduleGreeting);
});
*/


export default moduleGame1;













