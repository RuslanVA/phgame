import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleRules from './rules.js';

const stringGreeting = `<section class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">*</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">Кращі художники-фотореалісти кидають тобі виклик!</h3>
      <p class="greeting__challenge-text">Правила гри прості:</p>
      <ul class="greeting__challenge-list">
        <li>Необхідно відрізнити малюнок від фотографії і зробити вибір.</li>
        <li>Задача здається тривіальною, але не думай, що все так просто.</li>
        <li>Фотореалізм оманливий і підступний.</li>
        <li>Пам'ятай, головне - дивитися дуже уважно.</li>
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продовжити</span>
      <img class="icon" width="64" height="64" src="img/arrow-right.svg">
    </button>
  </section>`;

const moduleGreeting = createDomElemFromString(stringGreeting);

const continueButton = moduleGreeting.querySelector('.greeting__continue');

continueButton.addEventListener('click', () => {
    renderScreen(moduleRules);
});

export default moduleGreeting;

