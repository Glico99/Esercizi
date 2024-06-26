const answerEl = document.querySelector('#risposta');
const formEl = document.querySelector('.form');
const scoreEl = document.querySelector('#score');
const question = document.querySelector('.form h1');
const isCorrect = document.createElement('p');

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
question.textContent = `Quanto fa ${num1}x${num2}?`

let score = localStorage.getItem('Score');
scoreEl.textContent = `Punteggio: ${score}`

formEl.addEventListener('submit', controlla);
function controlla(){
    const correctAns = num1 * num2;
    const userAns = Number(answerEl.value);
    if(userAns === correctAns){
        score++;
        isCorrect.textContent = 'Corretto!';
    }else{
        score = 0;
        isCorrect.textContent = 'Sbagliato! Si torna a zero!';
    }
    formEl.appendChild(isCorrect);
    localStorage.setItem('Score', score);
}


