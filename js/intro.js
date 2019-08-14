import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleGreeting from './greeting.js';

const stringIntro = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продовжити</span>*</button>
    <p class="intro__motto"><sup>*</sup> Це не фото. Це малюнок нідерландського художника-фотореаліста Tjalf Sparnaay.</p>
  </section>`;
const moduleIntro = createDomElemFromString(stringIntro);

const startButton = moduleIntro.querySelector('.intro__asterisk');

startButton.addEventListener('click', () => {
    renderScreen(moduleGreeting);
});

export default moduleIntro;
