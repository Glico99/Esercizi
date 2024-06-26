/*********Sezione sui contatti*********/
const contatti = document.querySelector('#contatti');
const para = document.createElement('a');

const telefono = document.querySelector('#telefono');
telefono.addEventListener('click', mostraTelefono);
let stopTelefono = true;

function mostraTelefono(){
    
    if(stopTelefono != false){
    const num = 'Numero di telefono: 3466784612';
    para.setAttribute('href', 'https://wa.me/3466784612');
    para.setAttribute('target', '_blank');
    para.textContent = num;
    contatti.appendChild(para)
    stopTelefono = false;
    }else{
        para.remove()
        stopTelefono = true;
    }
}

const fax = document.querySelector('#fax');
fax.addEventListener('click', mostraFax);
let stopFax = true;
function mostraFax (){
    if (stopFax != false){
    const faxNum = 'Numero per FAX: 081 874 3750'
    para.setAttribute('href', '')
    para.textContent = faxNum;
    contatti.appendChild(para);
    stopFax = false;
    }else{
        para.remove();
        stopFax = true;
    }
}

const email = document.querySelector('#email');
email.addEventListener('click', mostraEmail);
let stopEmail = true;
function mostraEmail(){
    if(stopEmail != false){
    const emailAddr = 'Indirizzo email: emanueleglico@gmail.com';
    para.setAttribute('href', 'mailto:emanueleglico@gmail.com')
    para.setAttribute('target','_blank')
    para.textContent = emailAddr;
    contatti.appendChild(para);
    stopEmail = false;
    }else{
        para.remove();
        stopEmail = true;
    }
}



/*********Sezione immagini*********/
const camionUno = document.querySelector('#camionUno');
let paraUno = document.createElement('p');
paraUno.setAttribute('class','animate__animated animate__flipInX')
camionUno.addEventListener('click', spiegazione)
function spiegazione(){
    paraDue.remove();
    paraTre.remove();
    paraUno.textContent = `La Leomar presenta il GRANSASSO 80 q.li verde fluo. 
    La prima e unica macchina operatrice tre assi al mondo, fino a 5.700 kg di portata utile con patente B IN CAMPANIA SOLO NELLA NOSTRA OFFICINA`
    camionUno.appendChild(paraUno);
}

const camionDue = document.querySelector('#camionDue');
const paraDue = document.createElement('p');
paraDue.setAttribute('class','animate__animated animate__flipInX')
camionDue.addEventListener('click', spiegazioneDue);
function spiegazioneDue(){
    paraUno.remove();
    paraTre.remove();
    paraDue.textContent = 'Leomar Puma. Il piu compatto della sua categoria!';
    camionDue.appendChild(paraDue);
}

const camionTre = document.querySelector('#camionTre');
const paraTre = document.createElement('p');
paraTre.setAttribute('class','animate__animated animate__flipInX')
camionTre.addEventListener('click', spiegazioneTre);
function spiegazioneTre(){
    paraUno.remove();
    paraDue.remove();
    paraTre.textContent = 'La Macchina Operatrice Portata Utile fino a 4.675 Kg Guidabile con Patente B Con la gamma di Macchine Operatrici potrai usufruire del credito di imposta pari al 100% del valore della macchina Se scegli un Leomar ti aspettiamo nella nostra officina in Campania ';
    camionTre.appendChild(paraTre);
}


