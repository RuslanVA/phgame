(function () {
    'use strict';

    const initialState = {
        level: 'level-1',
        lives: 9,
        time: 0,
        points: 0,
        slow: 0,
        fast: 0,
        livesBonus: 0,
        fastBonus: 0,
        slowBonus: 0,
        totalPoints: 0,
        lastAnswer: []
    };

    const createDomElemFromString = (str = ``) => {
        const elem = document.createElement(`div`);
        str = typeof str === `string` ? str : ``;
        elem.innerHTML = str;
        return elem;
    };

    function statsCount(state) {

        state.fastBonus = state.fast * 50;
        state.slowBonus = state.slow * 50;
        state.livesBonus = state.lives * 50;
        state.totalPoints = state.points + state.fastBonus + state.livesBonus - state.slowBonus;

    }

    const levels = {
        'level-1': {
            url1: 'img/p1.jpg',
            type: 'moduleGame2',
            answer: 'paint',
            next: 'moduleGame3'
        },
        'level-2': {
            url1: 'img/p2v1.jpg',
            url2: 'img/p2v2.jpg',
            url3: 'img/p2v3.jpg',
            type: 'moduleGame3',
            answer: 'img/p2v1.jpg',
            next: 'moduleGame1'
        },
        'level-3': {
            url1: 'img/p3v1.jpg',
            url2: 'img/p3v2.jpg',
            type: 'moduleGame1',
            answer1: 'paint',
            answer2: 'photo',
            next: 'moduleGame2'
        },
        'level-4': {
            url1: 'img/p4.jpg',
            type: 'moduleGame2',
            answer: 'paint',
            next: 'moduleGame1'
        },
        'level-5': {
            url1: 'img/p5v1.jpg',
            url2: 'img/p5v2.jpg',
            type: 'moduleGame1',
            answer1: 'paint',
            answer2: 'paint',
            next: 'moduleGame2'
        },
        'level-6': {
            url1: 'img/p6.jpg',
            type: 'moduleGame2',
            answer: 'photo',
            next: 'moduleGame2'
        },
        'level-7': {
            url1: 'img/p7.jpg',
            type: 'moduleGame2',
            answer: 'photo',
            next: 'moduleGame3'
        },
        'level-8': {
            url1: 'img/p8v1.jpg',
            url2: 'img/p8v2.jpg',
            url3: 'img/p8v3.jpg',
            type: 'moduleGame3',
            answer: 'img/p8v3.jpg',
            next: 'moduleGame2'
        },
        'level-9': {
            url1: 'img/p9.jpg',
            type: 'moduleGame2',
            answer: 'photo',
            next: 'moduleGame1'
        },
        'level-10': {
            url1: 'img/p10v1.jpg',
            url2: 'img/p10v2.jpg',
            type: 'moduleGame1',
            answer1: 'paint',
            answer2: 'photo',
            next: 'moduleStats'
        },
        'level-11': {
            type: 'moduleStats',
        }
    };

    const stringGame1 = (level) => `<section class="game">
    <p class="game__task">Вгадайте для кожного зображення фото чи малюнок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${level.url1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${level.url2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>



  </section>`;
    const moduleGame1 = createDomElemFromString(stringGame1(levels[initialState.level]));


    let radioAll = moduleGame1.querySelectorAll(`input[type="radio"]`);
    radioAll = [...radioAll];
    let answer = true;

    radioAll.forEach((it)=>{
        it.addEventListener(`change`, ()=>{
            answer = true;
            radioAll.forEach((its)=>{
                const name = its.getAttribute(`name`);

                if (moduleGame1.querySelectorAll(`input[name='${name}']:checked`).length === 0) {
                    answer = false;
                }
            });

            if (answer === true) {

                let nextGame = levels[initialState.level].next;
                if (nextGame === 'moduleGame2') {
                    nextGame = moduleGame2;
                } else if (nextGame === 'moduleGame1') {
                    nextGame = moduleGame1;
                } else if (nextGame === 'moduleStats') {
                    nextGame = statsCount;
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
            }
        });
    });

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
                nextGame = statsCount;
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
                nextGame = statsCount;
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

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock () {
        let secondsSpan = document.querySelector('.game__timer');
        let endtime = new Date(Date.parse(new Date()) + 30 * 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    function moduleFooter(data) {

        const footerTemplate = (state) => `    <ul class="stats">
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
    </ul>`;

        return createDomElemFromString(footerTemplate(data));
    }

    function game (data) {

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

    function logic (data) {

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

    const stringRules = `<header class="header">
    <button class="back">
      <span class="visually-hidden">Повернутися до початку</span>
      <img class="icon" width="45" height="45" src="img/arrow-left.svg">
      <img class="icon" width="101" height="44" src="img/logo-small.svg">
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Вгадайте 10 разів для кожного зображення фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> чи малюнок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографіями або малюнками можуть бути обидва зображення.</li>
      <li>На кожну спробу відводиться 30 секунд.</li>
      <li>Помилитися можна не більше 9 разів.</li>
      <li>За кожну неправильну відповідь ви втрачатиме життя і бали.</li>
      <li>За кожну відповідь, обрану швидше, ніж 5 секунд ви будете отримувати додаткові бали.</li>
      <li>За кожну відповідь, обрану повільніше, ніж 15 секунд ви втрачатимете штрафні бали.</li>
    </ul>
    <p class="rules__ready">Готові?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше ім'я">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;
    const moduleRules = createDomElemFromString(stringRules);

    const rulesButton = moduleRules.querySelector('.rules__button');
    const rulesInput = moduleRules.querySelector('.rules__input');

    rulesInput.addEventListener('input', () => {
        rulesButton.disabled = false;
    });

    rulesButton.addEventListener('click', () => {

        logic(renderScreen(game(initialState)));
    });

    const backButton = moduleRules.querySelector('.back');
    backButton.addEventListener('click', () => {
        renderScreen(moduleGreeting);
    });

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

    function moduleHeader (data) {
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
    }

    const stringIntro = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продовжити</span>*</button>
    <p class="intro__motto"><sup>*</sup> Це не фото. Це малюнок нідерландського художника-фотореаліста Tjalf Sparnaay.</p>
  </section>`;
    const moduleIntro = createDomElemFromString(stringIntro);

    const startButton = moduleIntro.querySelector('.intro__asterisk');

    startButton.addEventListener('click', () => {
        renderScreen(moduleGreeting);
    });

    const body = document.querySelector(`body`);
    const screenContainer = body.querySelector(`main`);


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

    renderScreen(moduleIntro);

}());

//# sourceMappingURL=main.js.map
