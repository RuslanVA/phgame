import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleGame3 from './game-3.js';
import moduleGame1 from './game-1.js';
import moduleStats from './stats.js';
import moduleGreeting from './greeting.js';
import levels from './level.js';
import initialState from './data.js';

const stringGame2 = (level) => `
  <section class="game">
    <p class="game__task">Вгадайте, фото чи малюнок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    
    
    
  </section>`;

const moduleGame2 = createDomElemFromString(stringGame2(levels[initialState.level]));


const answerButtons = moduleGame2.querySelectorAll('.game__answer');

    [...answerButtons].forEach( (it) => {
    it.addEventListener('click', () => {

        let nextGame = levels[initialState.level].next;
        if (nextGame === 'moduleGame3') {
            nextGame = moduleGame3;
        } else if (nextGame === 'moduleGame2') {
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
        console.log(it);
        console.log(nextGame);
        console.log(initialState.level);
        console.log('oooooooooo');

        renderScreen(nextGame);
    });
});
/*
const backButton = moduleGame2.querySelector('.back');
backButton.addEventListener('click', () => {
    renderScreen(moduleGreeting);
});
*/
export default moduleGame2;