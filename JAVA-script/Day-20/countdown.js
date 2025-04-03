// const obj2=document.getElementById("Ctime");
// obj2.innerHTML="HII KASIE HO APPLOG";
// const date1 = new Date();
// const date2 = new Date("2028-07-14T00:00:00.00");
// const date = date2 - date1;
// console.log(date);



const obj = {};
function countdowntime(){

const timer=document.getElementById("Ctime");
obj.date1 = new Date();
obj.date2 = new Date("2028-07-14T00:00:00.00");
obj.date = obj.date2 - obj.date1;
obj.days = Math.floor(obj.date/(1000*60*60*24));
obj.hour= Math.floor((obj.date / (1000*60*60))%24);
obj.min=Math.floor((obj.date/(1000*60))%60);
obj.sec=Math.floor((obj.date/1000)%60);
timer.innerHTML = ` FOR 2028 OLYMPiC COUNTDOWN TIME  \   ${obj.days} Days ${obj.hour} Hours ${obj.min} Minutes ${obj.sec} Seconds left `;
}
setInterval(countdowntime,1000);


const timer=document.getElementById("Ctime")
timer.style.fontSize="50px";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.height="100vh";




