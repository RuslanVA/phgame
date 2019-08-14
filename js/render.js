import initialState from './data.js';
const body = document.querySelector(`body`);
const screenContainer = body.querySelector(`main`);
import moduleHeader from './header.js';
import moduleFooter from './footer.js';
import moduleIntro from "./intro.js";
import moduleGreeting from "./greeting.js";
import moduleRules from "./rules.js";
import statsCount from "./stats.js";
import levels from "./level.js";
import initializeClock from "./timer.js";


const removeAllChilds = function (parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
};

const renderScreen = function (element) {
    removeAllChilds(screenContainer);
    if (initialState.level === 'level-11') {
        screenContainer.appendChild(element);
    } else if ((element === moduleIntro) || (element === moduleGreeting) || (element === moduleRules)) {
        screenContainer.appendChild(element);
    } else {
        screenContainer.appendChild(moduleHeader(initialState));
        initializeClock();
        screenContainer.appendChild(element);
        screenContainer.appendChild(moduleFooter(initialState));
    }


};

export default renderScreen;
