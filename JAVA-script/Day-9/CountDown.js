
// countdown  

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00.00");
const date = date2 - date1;
const days = Math.floor(date / (1000 * 60 * 60 * 24));
const hour = Math.floor((date / (1000 * 60 * 60)) % 24);
const min = Math.floor((date / (1000 * 60)) % 60);
const sec = Math.floor((date / (1000)) % 60);
const ms=Math.floor((date)%60)


console.log(`OLYMPiC COUNTDOWN TIME  Days: ${days} Hours:${hour} Minutes:${min} Second${sec} Millisecond${ms}`);

