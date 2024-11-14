
const time=document.getElementById('time');
function getCurrentTime(){
    time.textContent=dayjs().format('HH:mm:ss');
}
setInterval(getCurrentTime,1000);






















/* const time = document.getElementById('time');

 function getCurrentTime(){
    time.textContent=dayjs().format('HH:mm:ss');
 }
 setInterval(getCurrentTime,1000); */