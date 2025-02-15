let modal = document.getElementById('modal');
let time = document.getElementById('time');
let operator = document.getElementById('operator');
let check = document.getElementById('check');

let checkedNum1 = document.getElementById('checked-num1');
let checkedNum2 = document.getElementById('checked-num2');
let checkedAnswer = document.getElementById('checked-answer');
let checkedSymbol = document.getElementById('checked-symbol');
let history = document.getElementById('results');

let timeValue = time.textContent;
const timeFunction = setInterval(() => {
    time.textContent = timeValue;
    if (timeValue == 0) {
        modal.style.display = "flex"; 
        clearInterval(timeFunction);
    }
    timeValue--;
}, 1000);

function closeModal() {
    modal.style.display = "none"; 
}

function generateQuestion() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    num1.textContent = Math.floor(Math.random() * 10); 
    num2.textContent = Math.floor(Math.random() * 10);
}

generateQuestion();

const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

function checkAnswer() {
    let answer = document.getElementById('answer').value;
    let num1 = document.getElementById('num1').textContent;
    let num2 = document.getElementById('num2').textContent;
    
    let result = parseInt(num1) + parseInt(num2) == parseInt(answer) ? '✔️' : '❌';

    console.log(typeof num1, typeof num2, typeof answer);
    

    answerHistory(num1, num2, answer, result);
    

    console.log(document.getElementById('correctSound'));
    

    if (parseInt(num1) + parseInt(num2) === parseInt(answer)) {
        correctSound.currentTime = 0;
        document.body.style.backgroundColor = "#6dc692";
        correctSound.play();
        console.log(num1, num2, answer);   
    } else {
        wrongSound.currentTime = 0;
        document.body.style.backgroundColor = "#d76464";
        wrongSound.play()
        console.log(num1, num2, answer);   
    }
    generateQuestion();
}

let historyCount = 0;
function answerHistory(num1, num2, answer, result) {
    historyCount++;
    let li = document.createElement('li');
    li.textContent = `${historyCount}) ${num1} + ${num2} = ${answer} ${result}`;
    history.appendChild(li);
}
