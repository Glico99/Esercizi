const inputEl = document.querySelector('#elemento');

inputEl.addEventListener('keydown',logKey);
function logKey(e){
    const enter = `${e.code}`;
    if(enter === 'Enter'){
        const input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('class','checkbox');
        input.setAttribute('name','listItems')
        input.setAttribute('id',`${inputEl.value}`);

        const label = document.createElement('label');
        label.setAttribute('for',`${inputEl.value}`);
        label.textContent = `${inputEl.value}`;

        input.addEventListener('input', barra);
        function barra(){
            if(input.checked === true){
                label.style.color = 'grey';
                label.style.textDecoration = 'line-through';
                listaEl.appendChild(btn)
            }else{
                label.removeAttribute('style');
                btn.remove();
            }
        }

        const btn = document.createElement('button');
        btn.textContent = 'Rimuovi'

        btn.addEventListener('click', remove);
        function remove(){
            input.remove();
            label.remove();
            btn.remove();
        }
        
        const lista = document.querySelector('.lista');
        const listaEl = document.createElement('div');
        listaEl.setAttribute('class','elementolista');
        listaEl.appendChild(input);

        listaEl.appendChild(label);
        lista.appendChild(listaEl);
        inputEl.value = '';
    }
}