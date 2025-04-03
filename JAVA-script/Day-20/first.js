function timeing(){
const timer=document.getElementById('root');
const now= new Date();
const Indian_time=now.toLocaleTimeString();
timer.innerHTML=Indian_time;
}
timeing();


setInterval(timeing,1000);
// above function is use for calling timing function in every one second 
// becasue 1000 is in milli second is equal to 1 second 

const timer=document.getElementById('root');
timer.style.fontSize="200px";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
// timer.style.background="orange";
timer.style.height="100vh";

