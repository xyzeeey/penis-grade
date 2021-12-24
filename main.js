const btnResultElem = document.querySelector('.btn-result');
const container = document.querySelectorAll('.container');
const resultContainerElem = document.querySelector('.result-container');
const measureContainerElem = document.querySelector('.measure-container');

const btnCloseResultElem = document.querySelector('.close-result');
const btnCloseMeasureElem = document.querySelector('.close-measure');

const resultWrapElem = document.querySelector('.result-warp');
const resultGradeElem = document.querySelector('.result-grade');
const resultImgElem = document.querySelector('.result-img img');

const inputElem = document.querySelectorAll('.input');
const sizeLengthElem = document.querySelector('.size-length');
const sizeHeadElem = document.querySelector('.size-head');
const sizeBodyElem = document.querySelector('.size-body');

const detailGradeLength = document.querySelector('.result-detail-grade-1');
const detailGradeHead = document.querySelector('.result-detail-grade-2');
const detailGradeBody = document.querySelector('.result-detail-grade-3');

const gradeInfo = [
    {
        totalGrade: 'F 등급',
        imgNo: '1',
        bgColor: '#D14C6C',
        emoji: '🍒',
    },
    {
        totalGrade: 'D 등급',
        imgNo: '2',
        bgColor: '#D33E22',
        emoji: '🌶',
    },
    {
        totalGrade: 'C 등급',
        imgNo: '3',
        bgColor: '#F4B13B',
        emoji: '🍌',
    },
    {
        totalGrade: 'B 등급',
        imgNo: '4',
        bgColor: '#FF911A',
        emoji: '🥕',
    },
    {
        totalGrade: 'A 등급',
        imgNo: '5',
        bgColor: '#664191',
        emoji: '🍆',
    },
    {
        totalGrade: 'S 등급',
        imgNo: '6',
        bgColor: '#A06E32',
        emoji: '🥖',
    },
];

let gradeInfoNo;

const detailGrade = ['F 등급', 'D등급', 'C등급', 'B등급', 'A등급', 'S등급'];



let sizeLength;
let sizeHead;
let sizeBody;
let lengthPoint;
let headPoint;
let bodyPoint;
let sumPoint;


inputElem.forEach((item) => {
    item.addEventListener('focus', () => {item.value = '';});
})


function showMesurePopup() {
    measureContainerElem.classList.add('show');
}

function showResultPopup() {
    resultContainerElem.classList.add('show');
}

function calcLength() {
    if (0 < sizeLength && sizeLength < 10.8) {
        lengthPoint = 1;
    } else if (10.8 <= sizeLength && sizeLength < 12.3) {
        lengthPoint = 2;
    } else if (12.3 <= sizeLength && sizeLength < 13.8) {
        lengthPoint = 3;
    } else if (13.8 <= sizeLength && sizeLength < 15.3) {
        lengthPoint = 4;
    } else if (15.3 <= sizeLength && sizeLength < 16.8) {
        lengthPoint = 5;
    } else if (16.8 <= sizeLength) {
        lengthPoint = 6;
    }
    console.log(detailGrade[lengthPoint - 1])
    detailGradeLength.textContent = detailGrade[lengthPoint - 1];
}


function calcHead() {
    if (0 < sizeHead && sizeHead < 2.3) {
        headPoint = 1;
    } else if (2.3 <= sizeHead && sizeHead < 2.8) {
        headPoint = 2;
    } else if (2.8 <= sizeHead && sizeHead < 3.3) {
        headPoint = 3;
    } else if (3.3 <= sizeHead && sizeHead < 3.9) {
        headPoint = 4;
    } else if (3.9 <= sizeHead && sizeHead < 4.5) {
        headPoint = 5;
    } else if (4.5 <= sizeHead) {
        headPoint = 6;
    }
    detailGradeHead.textContent = detailGrade[headPoint - 1];
}


function calcBody() {
    if (0 < sizeBody && sizeBody < 2.3) {
        bodyPoint = 1;
    } else if (2.3 <= sizeBody && sizeBody < 2.8) {
        bodyPoint = 2;
    } else if (2.8 <= sizeBody && sizeBody < 3.3) {
        bodyPoint = 3;
    } else if (3.3 <= sizeBody && sizeBody < 3.8) {
        bodyPoint = 4;
    } else if (3.8 <= sizeBody && sizeBody < 4.3) {
        bodyPoint = 5;
    } else if (4.3 <= sizeBody) {
        bodyPoint = 6;
    }
    detailGradeBody.textContent = detailGrade[bodyPoint - 1];
}



function calcSum() {
    sumPoint = lengthPoint + headPoint + bodyPoint;
    if (sumPoint <= 4) {
        gradeInfoNo = 0;  // F
    } else if (5 <= sumPoint && sumPoint <= 7) {
        gradeInfoNo = 1;  // D
    } else if (8 <= sumPoint && sumPoint <= 10) {
        gradeInfoNo = 2;  // C
    } else if (11 <= sumPoint && sumPoint <= 13) {
        gradeInfoNo = 3;  // B
    } else if (14 <= sumPoint && sumPoint <= 16) {
        gradeInfoNo = 4;  // A
    } else if (17 <= sumPoint) {
        gradeInfoNo = 5;  // S
    }
    console.log(gradeInfoNo);
    compensation();
    console.log(gradeInfoNo);
    resultGradeElem.textContent = gradeInfo[gradeInfoNo]['totalGrade'];
    resultWrapElem.style.background = gradeInfo[gradeInfoNo]['bgColor'];
    resultImgElem.src = `img/grade-${gradeInfo[gradeInfoNo]['imgNo']}.png`;
    resultImgElem.srcset = `img/grade-${gradeInfo[gradeInfoNo]['imgNo']}@2x.png 2x`;
}



function compensation() {
    if (gradeInfoNo == 2 && lengthPoint == 1 ) {
        gradeInfoNo--;
    }
    if (gradeInfoNo >= 3) { // 전체 등급 B이상
        if (sizeLength < 6) {
            gradeInfoNo = gradeInfoNo - 3;
        } else if (6 <= sizeLength && sizeLength < 8) {
            gradeInfoNo = gradeInfoNo - 2;
        } else if (8 <= sizeLength && sizeLength < 13) {
            gradeInfoNo--;
        }
    }
}


function clickResult(){
    sizeLength = Number(sizeLengthElem.value);
    sizeHead = Number(sizeHeadElem.value);
    sizeBody = Number(sizeBodyElem.value);

    if(!sizeLength || sizeLength < 0) {
        alert(`'길이' 값을 정확하게 입력해주세요!`)
        return;
    }
    if(!sizeHead || sizeHead < 0) {
        alert(`'귀두의 직경' 값을 정확하게 입력해주세요!`)
        return;
    }
    if(!sizeBody || sizeBody < 0) {
        alert(`'몸통의 직경' 값을 정확하게 입력해주세요!`)
        return;
    }
    if(!sizeLength || !sizeHead || !sizeBody) {
        alert(`값을 입력해주세요!`)
        return;
    }

    calcLength();
    calcHead();
    calcBody();
    calcSum();
    
    showResultPopup();

    console.log(sizeLength)

}

btnResultElem.addEventListener('click', clickResult);

btnCloseResultElem.addEventListener('click', () => {
    resultContainerElem.classList.remove('show');
});

btnCloseMeasureElem.addEventListener('click', () => {
    measureContainerElem.classList.remove('show');
});

window.addEventListener('click', (e) => {
    e.target === measureContainerElem ? measureContainerElem.classList.remove('show') : false
})

window.addEventListener('click', (e) => {
    e.target === resultContainerElem ? resultContainerElem.classList.remove('show') : false
})


function maxLengthCheck1(object){
    const pattern1 = /\./g;
    object.value = object.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); //숫자, 소수점 이외 입력 방지

    console.log(pattern1.test(object.value))

    if (object.value.length == 3) {
        if (pattern1.test(object.value)) {
            object.maxLength = 4;
        } else if (pattern1.test(object.value) == false) {
            object.value = object.value.slice(0, object.maxLength - 2);
        }
    }
}


function maxLengthCheck2(object){
    const pattern1 = /\./g;
    object.value = object.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); //숫자, 소수점 이외 입력 방지

    console.log(pattern1.test(object.value))

    if (object.value.length == 2) {
        if (pattern1.test(object.value)) {
            object.maxLength = 3;
        } else if (pattern1.test(object.value) == false) {
            object.value = object.value.slice(0, object.maxLength - 2);
        }
    }
}

function shareTwitter() {
    const shareUrl = "penis-grade.netlify.app/"; // 전달할 URL
    window.open(`https://twitter.com/intent/tweet?text=저의 페니스 등급은 ${gradeInfo[gradeInfoNo]['totalGrade']}입니다 ${gradeInfo[gradeInfoNo]['emoji']}&url=${shareUrl}`);
}


window.addEventListener('resize', () => {
    container.forEach((item) => {
        item.style.height = '100%';
    })
});