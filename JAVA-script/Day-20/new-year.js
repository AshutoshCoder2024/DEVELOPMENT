
const obj = {};
function countdowntime(){

const timer=document.getElementById("Nyear");
obj.date1 = new Date();
obj.date2 = new Date("2025-01-01T00:00:00.00");
obj.date = obj.date2 - obj.date1;
obj.days = Math.floor(obj.date/(1000*60*60*24));
obj.hour= Math.floor((obj.date / (1000*60*60))%24);
obj.min=Math.floor((obj.date/(1000*60))%60);
obj.sec=Math.floor((obj.date/1000)%60);
timer.innerHTML = ` New Year Countdown  \   ${obj.days} Days ${obj.hour} Hours ${obj.min} Minutes ${obj.sec} Seconds left `;
}
setInterval(countdowntime,1000);


const timer=document.getElementById("Nyear")
timer.style.fontSize="30px";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.height="100vh";


