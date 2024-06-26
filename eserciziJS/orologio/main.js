const hourEl = document.querySelector('#hour');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const ampmEl = document.querySelector('#ampm');

function updateClock(){
    const ora = new Date();
    let h = ora.getHours();
    let m = ora.getMinutes();
    let s = ora.getSeconds();
    let ampm = 'AM';
    const timeout = 1000;
    if(h > 12){
        h = h - 12
        ampm = 'PM';
    }

    h = h < 10 ? '0'+h : h;
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;
    
    hourEl.textContent = h;
    minutesEl.textContent = m;
    secondsEl.textContent = s;
    ampmEl.textContent = ampm;

    setTimeout(() => {
       updateClock(); 
    }, timeout);
}

updateClock();