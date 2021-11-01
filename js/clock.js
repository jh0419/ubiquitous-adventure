constclock = document.querySelector("clock");
const clockTitle = document.querySelector(".js-clock");

function christmasDay(){
    const dDay = new Date("2021-12-25, 00:00:00").getTime();
    const today = new Date().getTime();

    /*
    const dDay = new Date("2021-12-25, 00:00:00");
    const today = new Date();
    const dDayYear = dDay.getFullYear();
    const dDayMonth = dDay.getMonth() + 1;
    const dDayDate = dDay.getDate();
    const leftTime = dDay.getTime() - today.getTime();
    */
    
    const leftTime = dDay - today;
    const date = String(Math.floor(leftTime / (1000 * 60 * 60 * 24))).padStart(2, 0);
    const hours = String(Math.floor((leftTime % (1000*60*60*24))/(1000*60*60))).padStart(2, 0);
    const minutes = String(Math.floor(leftTime % (1000 * 60 * 60) / (1000 * 60))).padStart(2, 0);
    const seconds = String(Math.floor(leftTime % (1000 * 60) / 1000)).padStart(2, 0);
    
    if(dDay === today){
        h1.innerText = "Happy Chrismas(❁´◡`❁)";
        clockTitle.innerText = "Be Happy Christmas(❁´◡`❁)";
    }else if(dDay > today){
        const dDay = new Date("2022-12-25, 00:00:00").getTime();
        clockTitle.innerText = `${date}d ${hours}h ${minutes}m ${seconds}s`;
    }else{
        clockTitle.innerText = `${date}d ${hours}h ${minutes}m ${seconds}s`;
    }  
}

christmasDay();
setInterval(christmasDay, 1000);


