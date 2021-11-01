const Clock = document.querySelector("h1#clock");

function jhClock(){
    const newClock = new Date();
    const jhHours = String(newClock.getHours()).padStart(2, 0);
    const jhMinutes = String(newClock.getMinutes()).padStart(2, 0);
    const jhSeconds = String(newClock.getSeconds()).padStart(2, 0);
    Clock.innerText = `${jhHours}: ${jhMinutes}: ${jhSeconds}`;
}

jhClock();
setInterval(jhClock, 1000);