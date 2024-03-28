let today = new Date();
let startTime = new Date();
startTime.setHours(startTime.getHours() + 2);

let timerInterval;

//2 hours interval
function updateTimer() {
    let currentTime = new Date();
    let difference = startTime - currentTime;    
    
    if (difference <= 0) {
        clearInterval(timerInterval); 
        console.log('Таймер завершено!');
        return;
    }    
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);        
     
    document.getElementById("timer").innerHTML = zero(hours) + ":" + zero(minutes) + ":" + zero(seconds) + "";    

}


//current date


function zero(number) {
    return number < 10 ? '0' + number : number;
}
let day = zero(today.getDate());
let month = zero(today.getMonth() + 1); 
let year = today.getFullYear();
let formattedDate = day + '.' + month + '.' + year;

//run Date and interval when html was loaded

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("days").outerHTML = formattedDate;    
    timerInterval = setInterval(updateTimer, 1000)
});




//Phonemask


document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');  
  Inputmask({ mask: "+38(099)999-99-99" }).mask(phoneInput);
});