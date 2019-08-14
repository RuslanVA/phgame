import renderScreen from './render.js';
import moduleIntro from './intro.js';

renderScreen(moduleIntro);




const gamePoints = (answers, times, lives) => {

    let points = 0;
    if (answers < 10) {
        return -1;
    }
    for (let i = 0; i < answers.length; i++) {
        if (answers[i]===true) {
            points = points + 100;
            if (times[i] > 25) {
                points = points + 50;
            }
            if (times[i] < 10) {
                points = points - 50;
            }
        }
    }
    if (lives > 1 || lives <= 3) {
        points = points + lives * 50;
    }


    return points;
};

