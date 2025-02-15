let modal = document.getElementById('modal');
let operator = document.getElementById('operator');
let check = document.getElementById('check');

let checkedNum1 = document.getElementById('checked-num1');
let checkedNum2 = document.getElementById('checked-num2');
let checkedAnswer = document.getElementById('checked-answer');
let checkedSymbol = document.getElementById('checked-symbol');
let history = document.getElementById('results');
let timer = document.getElementById('timer');
let question = document.getElementById('question');
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');

let arithmetic = document.querySelectorAll('.mode');
arithmetic.forEach(element => {
    element.addEventListener('click', () => {
        switch (element.dataset.mode) {
            case 'addition':
                operator.textContent = '+';
                generateQuestion('+');
                displayQuestion();
                break;
            case 'subtraction':
                operator.textContent = '-';
                generateQuestion('-');
                displayQuestion();
                break;
            case 'multiplication':
                operator.textContent = 'x';
                generateQuestion('*');
                displayQuestion();
                break;
            case 'division':
                operator.textContent = '÷';
                generateQuestion('/');
                displayQuestion();
                break;
        }
    })
});

function displayQuestion() {
    question.style.display = 'block';
    check.style.display = 'block';
    timer.style.display = 'block';
    history.style.display = 'block';
    interval();
}

let interval = () => {
    let time = document.getElementById('time');
    let timeValue = time.textContent;
    const timeFunction = setInterval(() => {
        time.textContent = timeValue;
        if (timeValue == 0) {
            modal.style.display = "flex";
            question.style.display = 'none';
            check.style.display = 'none';
            clearInterval(timeFunction);
        }
        timeValue--;
    }, 1000);
}

function closeModal() {
    modal.style.display = "none";
}

function generateQuestion(sign) {
    let currentSign = sign;
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    operator.textContent = currentSign;
    num1.textContent = Math.floor(Math.random() * 10);
    num2.textContent = Math.floor(Math.random() * 10);
}

function checkAnswer() {
    let answer = document.getElementById('answer').value;
    let num1 = document.getElementById('num1').textContent;
    let num2 = document.getElementById('num2').textContent;

    let result = parseInt(num1) + parseInt(num2) == parseInt(answer) ? '✔️' : '❌';
    renderResult(result);
    answerHistory(num1, num2, answer, result);

    generateQuestion();
}

let historyCount = 0;
function answerHistory(num1, num2, answer, result) {
    historyCount++;
    let li = document.createElement('li');
    li.textContent = `${historyCount}) ${num1} + ${num2} = ${answer} ${result}`;
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