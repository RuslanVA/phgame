import createDomElemFromString from './create-dom.js';
import renderScreen from './render.js';
import levels from './level.js';
import initialState from "./data.js";
import moduleStats from "./stats.js";
import game from './game.js';
import moduleGreeting from "./greeting.js";


export default function logic (data) {

    const answerButtons = document.querySelectorAll('.game2__answer');

    [...answerButtons].forEach( (it) => {
        it.addEventListener('click', () => {


            if (it.value === levels[initialState.level].answer) {
                initialState.points = initialState.points + 100;

                let answerTime = Number(document.querySelector('.game__timer').innerHTML);
                if (answerTime > 25) {
                    initialState.fast++;
                    initialState.lastAnswer.push('fast');
                } else if (answerTime < 15) {
                    initialState.slow++;
                    initialState.lastAnswer.push('slow');
                } else {
                    initialState.lastAnswer.push('correct');
                }
                
            } else {
                initialState.lives = initialState.lives - 1;
                initialState.lastAnswer.push('wrong');
            }

            let nextState = initialState.level.slice(-1);
            nextState = nextState - (-1);
            let newState = initialState.level.replace(/.$/,nextState);
            initialState.level = newState;

            logic(renderScreen(game(initialState)));
        });
    });

    let radioAll = document.querySelectorAll('.game1__answer');
    radioAll = [...radioAll];
    let answer = true;
    let answersArray = [];

    radioAll.forEach((it)=>{
        it.addEventListener(`change`, ()=>{
            answer = true;
            radioAll.forEach((its)=>{
                const name = its.getAttribute(`name`);

                if (document.querySelectorAll(`input[name='${name}']:checked`).length === 0) {
                    answer = false;
                }
            });


            answersArray.push(it);
            //console.log(answersArray);

            if (answer === true) {

                let lastAnswers = [];
                let firstAnswer = '';
                let secondAnswer = '';
                lastAnswers.push(answersArray[answersArray.length - 2]);
                lastAnswers.push(answersArray[answersArray.length - 1]);

                lastAnswers.forEach((i) => {
                    if (i.name === 'question1') {
                        firstAnswer = i;
                    } else if (i.name === 'question2') {
                        secondAnswer = i;
                    }
                });

                if ((firstAnswer.value === levels[initialState.level].answer1) && (secondAnswer.value === levels[initialState.level].answer2)) {
                    initialState.points = initialState.points + 100;

                    let answerTime = Number(document.querySelector('.game__timer').innerHTML);
                    if (answerTime > 25) {
                        initialState.fast++;
                        initialState.lastAnswer.push('fast');
                    } else if (answerTime < 15) {
                        initialState.slow++;
                        initialState.lastAnswer.push('slow');
                    } else {
                        initialState.lastAnswer.push('correct');
                    }

                } else {
                    initialState.lives = initialState.lives - 1;
                    initialState.lastAnswer.push('wrong');
                }

                

                let nextState = initialState.level.slice(-1);
                nextState = nextState - (-1);
                let newState = initialState.level.replace(/.$/,nextState);
                initialState.level = newState;

                logic(renderScreen(game(initialState)));

            }
        });
    });

    const gameOptions = document.querySelectorAll('.game3__answer');
    [...gameOptions].forEach( (it) => {
        it.addEventListener('click', () => {


            if (it.src.slice(-12) === levels[initialState.level].answer) {
                initialState.points = initialState.points + 100;

                let answerTime = Number(document.querySelector('.game__timer').innerHTML);
                if (answerTime > 25) {
                    initialState.fast++;
                    initialState.lastAnswer.push('fast');
                } else if (answerTime < 15) {
                    initialState.slow++;
                    initialState.lastAnswer.push('slow');
                } else {
                    initialState.lastAnswer.push('correct');
                }

            } else {
                initialState.lives = initialState.lives - 1;
                initialState.lastAnswer.push('wrong');
            }


            let nextState = initialState.level.slice(-1);
            nextState = nextState - (-1);
            let newState = initialState.level.replace(/.$/,nextState);
            initialState.level = newState;

            logic(renderScreen(game(initialState)));
        });
    });


    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', () => {
        renderScreen(moduleGreeting);
    });




}
