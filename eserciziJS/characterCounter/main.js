const input = document.querySelector('#input');
const counter = document.querySelector('#counter');

input.addEventListener('keydown',conta)
function conta(e){
    let inputValue = input.value;
    if(e.code != 'Enter' && e.code != 'Backspace'){
        counter.textContent = `Hai digitato ${inputValue.length} caratteri `;
    }else{
        input.value = '';
        counter.textContent = 'Hai digitato 0 caratteri';
        conta(e);
    }
}