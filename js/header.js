import createDomElemFromString from "./create-dom.js";
import initialState from "./data.js";
import renderScreen from "./render.js";
import moduleGreeting from "./greeting.js";
import moduleRules from "./rules.js";



export default function moduleHeader (data) {
    const headerTemplate = (state) => `<header class="header">
    <button class="back">
      <span class="visually-hidden">Повернутися до початку</span>
      <img class="icon" width="45" height="45" src="img/arrow-left.svg">
      <img class="icon" width="101" height="44" src="img/logo-small.svg">
    </button>
    <div class="game__timer">NN</div>
    <div class="game__lives">
    ${new Array(9 - state.lives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
        .join(``)}
    ${new Array(state.lives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
        .join(``)}
    </div>
  </header>`;

    return createDomElemFromString(headerTemplate(data));
};