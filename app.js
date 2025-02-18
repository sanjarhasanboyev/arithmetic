let modal = document.getElementById('modal');
let operator = document.getElementById('operator');
let check = document.getElementById('check');

let checkedNum1 = document.getElementById('checked-num1');
let checkedNum2 = document.getElementById('checked-num2');
let checkedAnswer = document.getElementById('checked-answer');
let checkedSymbol = document.getElementById('checked-symbol');
let history = document.getElementById('results');
let timer = document.getElementById('timer');
let time = document.getElementById('time');
let question = document.getElementById('question');
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');
let stopIntervalTime = document.getElementById('stopInterval');
let menu = document.getElementById('menu');
let btnWrapper = document.getElementById('btnWrapper');
let answer = document.getElementById('answer');


let currentSign = null;
let arithmetic = document.querySelectorAll('.mode');
arithmetic.forEach(element => {
    element.addEventListener('click', (e) => {
        let clickedBtn = e.target;
        arithmetic.forEach(e => {
            e.style.display = 'none';
        });

        sectionInto();

        switch (element.dataset.mode) {
            case 'addition':
                currentSign = '+'
                generateQuestion();
                displayQuestion();
                break;
            case 'subtraction':
                currentSign = '-';
                generateQuestion();
                displayQuestion();
                break;
            case 'multiplication':
                currentSign = '*';
                generateQuestion();
                displayQuestion();
                break;
            case 'division':
                currentSign = '/';
                generateQuestion();
                displayQuestion();
                break;
        }
    })
});

menu.addEventListener('click', () => {
    displayMenuNone();
    answer.value = '';
})

function sectionInto() {
    btnWrapper.style.display = 'flex';
    menu.style.display = 'block';
    stopIntervalTime.style.display = 'block';
    timer.style.display = 'flex';
}

function displayMenuNone() {
    arithmetic.forEach(element => {
        element.style.display = 'block';
    })
    history.style.display = 'none';
    timer.style.display = 'none';
    question.style.display = 'none';
    btnWrapper.style.display = 'none';
    menu.style.display = 'none';
    stopInterval();
}

function displayQuestion() {
    question.style.display = 'block';
    check.style.display = 'block';
    timer.style.display = 'block';
    history.style.display = 'block';
    interval();
}

let timeFunction = null;
let interval = () => {
    let defaultTime = 30;
    time.textContent = defaultTime;
    timeFunction = setInterval(() => {
        defaultTime--;
        time.textContent = defaultTime;
        if (defaultTime == 0) {
            clearInterval(timeFunction);
            modal.style.display = "flex";
            question.style.display = 'none';
            check.style.display = 'none';
            stopIntervalTime.style.display = 'none';
        }
    }, 1000);
}

function closeModal() {
    modal.style.display = "none";
}

function generateQuestion() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    operator.textContent = currentSign;
    num1.textContent = Math.floor(Math.random() * 100);
    num2.textContent = Math.floor(Math.random() * 100);
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let num1 = parseInt(document.getElementById('num1').textContent);
    let num2 = parseInt(document.getElementById('num2').textContent);
    let randomResult = null;
    switch (currentSign) {
        case '+': randomResult = num1 + num2; break;
        case '-': randomResult = num1 - num2; break;
        case '*': randomResult = num1 * num2; break;
        case '/': randomResult = num1 / num2; break;
    }
    let result = randomResult == userAnswer ? '✔️' : '❌';

    renderResult(result);
    answerHistory(num1, num2, userAnswer, result, currentSign);

    generateQuestion();
    answer.value = '';
}

let historyCount = 0;
function answerHistory(num1, num2, answer, result, sign) {
    historyCount++;
    let li = document.createElement('li');
    li.textContent = `${historyCount}) ${num1} ${sign} ${num2} = ${answer} ${result}`;
    history.appendChild(li);
}

let correctCount = 0;
let wrongCount = 0;
function renderResult(result) {
    if (result == '✔️') {
        correctCount++;
        correct.textContent = correctCount;
    } else {
        wrongCount++;
        wrong.textContent = wrongCount;
    }
}

function stopInterval() {
    clearInterval(timeFunction);
}