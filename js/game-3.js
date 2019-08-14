import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleStats from './stats.js';
import moduleGame1 from './game-1.js';
import moduleGame2 from './game-2.js';
import moduleGreeting from './greeting.js';
import levels from './level.js';
import initialState from './data.js';

const stringGame3 = (level) => `
  <section class="game">
    <p class="game__task">Знайдіть малюнок серед зображень</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${level.url2}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${level.url3}" alt="Option 3" width="304" height="455">
      </div>
    </form>



  </section>`;
const moduleGame3 = createDomElemFromString(stringGame3(levels[initialState.level]));







const gameOptions = moduleGame3.querySelectorAll('.game__option');

[...gameOptions].forEach( (it) => {
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
        console.log(nextGame);
        console.log(initialState.level);
        console.log('oooooooooo');

        renderScreen(nextGame);
    });
});
/*
const backButton = moduleGame3.querySelector('.back');
backButton.addEventListener('click', () => {
    renderScreen(moduleGreeting);
});
*/
export default moduleGame3;