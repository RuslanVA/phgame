import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import levels from './level.js';
import initialState from "./data.js";
import statsCount from "./stats.js";
import moduleFooter from './footer.js';
import moduleGreeting from "./greeting.js";

export default function game (data) {

    const moduleGame1 = (level) => `<section class="game">
    <p class="game__task">Вгадайте для кожного зображення фото чи малюнок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden game1__answer" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden game1__answer" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${level.url2}" alt="Option 2" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden game1__answer" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden game1__answer" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>

  </section>`;

    const moduleGame2 = (level) => `
  <section class="game">
    <p class="game__task">Вгадайте, фото чи малюнок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden game2__answer" name="question0" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden game2__answer" name="question0" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    
  </section>`;

    const moduleGame3 = (level) => `
  <section class="game">
    <p class="game__task">Знайдіть малюнок серед зображень</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${level.url1}" class="game3__answer" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option game__option--selected">
        <img src="${level.url2}" class="game3__answer" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${level.url3}" class="game3__answer" alt="Option 3" width="304" height="455">
      </div>
    </form>

  </section>`;

    const moduleStats = (state) => {
        let nickname = '';
        if ((state.totalPoints > -100)&&(state.totalPoints < 160)) {
            nickname = 'взагалі не відрізняєте фото від малюнків. Це печально :( Можливо варто звернутися до лікаря і перевірити зір?';
        }
        else if ((state.totalPoints > 160)&&(state.totalPoints < 760)) {
            nickname = 'погано відрізняєте фото від малюнків...';
        }
        else if ((state.totalPoints > 760)&&(state.totalPoints < 1060)) {
            nickname = 'показали непоганий результат, але могло бути і краще...';
        }
        else if ((state.totalPoints > 1060)&&(state.totalPoints < 1940)) {
            nickname = 'перемогли! Це чудовий результат!';
        }
        else if (state.totalPoints > 1940) {
            nickname = 'отримали максимум балів! ЦЕ НАЙКРАЩИЙ РЕЗУЛЬТАТ!';
        }

        return(`
<header class="header">
    <button class="back">
      <span class="visually-hidden">Повернутися до початку</span>
      <img class="icon" width="45" height="45" src="img/arrow-left.svg">
      <img class="icon" width="101" height="44" src="img/logo-small.svg">
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">Game over!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number"></td>
        <td colspan="2">
        
        <ul class="stats">
      <li class="stats__result stats__result--${state.lastAnswer[0]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[1]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[2]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[3]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[4]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[5]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[6]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[7]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[8]}"></li>
      <li class="stats__result stats__result--${state.lastAnswer[9]}"></li>
    </ul>
          
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${state.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за швидкість:</td>
        <td class="result__extra">${state.fast} <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${state.fastBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за життя:</td>
        <td class="result__extra">${state.lives}<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${state.livesBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за повільність:</td>
        <td class="result__extra">${state.slow} <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">- ${state.slowBonus}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${state.totalPoints}</td>
      </tr>
    </table>
    <p>Висновок:</p>
    <p>Вітаємо, ви ${nickname}</p>
  </section>`)};



    let gameFunc = levels[data.level].type;
    if (gameFunc === 'moduleGame3') {
        gameFunc = moduleGame3;
    } else if (gameFunc === 'moduleGame2') {
        gameFunc = moduleGame2;
    } else if (gameFunc === 'moduleGame1') {
        gameFunc = moduleGame1;
    } else if (gameFunc === 'moduleStats') {
        gameFunc = moduleStats;
        statsCount(initialState);
    }

    if (gameFunc === moduleStats) {
        return createDomElemFromString (gameFunc(initialState));
    } else {
        return createDomElemFromString (gameFunc(levels[data.level]));
    }


}


