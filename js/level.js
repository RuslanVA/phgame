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

export default levels;