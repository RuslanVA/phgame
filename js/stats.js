import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import moduleGreeting from './greeting.js';

export default function statsCount(state) {

    state.fastBonus = state.fast * 50;
    state.slowBonus = state.slow * 50;
    state.livesBonus = state.lives * 50;
    state.totalPoints = state.points + state.fastBonus + state.livesBonus - state.slowBonus;

}