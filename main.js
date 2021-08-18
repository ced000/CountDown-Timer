const countDownTimer = document.getElementById('countDownTimer');
const countBtn = document.getElementById('formSubmit');
const amount = document.getElementById('amount');
const unitSelector = document.getElementById('units');
let futureTime;

countBtn.addEventListener('click', () => {
    let start = amount.value;
    let unit = unitSelector.value;
    let userTime;

    if (unit === 'day') {
        userTime = start * 24 * 3600 * 1000;
    } else if (unit === 'hour') {
        userTime = start * 3600 * 1000;
    } else if (unit === 'minutes') {
        userTime = start * 60 * 1000;
    } else {
        userTime = start * 1000;
    }
    let currentMil = Date.parse(new Date());
    futureTime = userTime + currentMil;

    callTime();

    let h = setInterval(() => {
        let t = callTime();

        if (t.gap <= 0) {
            clearInterval(h);
            countDownTimer.innerText = 'TIME UP!'
        }
    }, 1000);

});

const callTime = () => {
    let gap = futureTime - Date.parse(new Date());

    let seconds = Math.floor((gap/1000) % 60);
    let minutes = Math.floor((gap/1000/60) % 60);
    let hours = Math.floor((gap/1000/3600) % 24);
    let days = Math.floor(gap/(1000*3600*24));

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10 ) {
        minutes = "0" + minutes;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    let Timer = days + "d" + ":" + hours + ":" + minutes + ":" + seconds;

    countDownTimer.innerHTML = Timer;

    return {gap};
}
