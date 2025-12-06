Notification.requestPermission().then((permission) => {
  if (permission !== "granted") {
    alert("Please allow Notification to get a REMINDER");
  }
});

const button = document.querySelector(".btn");
const pauseBut=document.querySelector("#pauseBtn");
const resetBut=document.querySelector("#resetBtn");
let previousTimerId = null;
let currentRunning = null;
let countdown=0;
const display = document.querySelector("#display");

button.addEventListener("click", function () {
      
     

  if (previousTimerId != null) {
    let ans=prompt("Are you sure you want to END the current time [yes/No]")
    if( ans== null){
       return
      }
      else if(ans.toLowerCase() !=="yes"){
        return
      }
      else{
      display.innerText="00:00";
       currentRunning.pause();
       clearInterval(previousTimerId);
       previousTimerId=null;
      }
    }
    const userInput = parseInt(document.querySelector("#seconds").value);
    countdown = userInput;
    
    
 
  if (userInput > 0 && !isNaN(userInput)) {
    display.innerText = format(userInput);
    resetBut.disabled=false;
    pauseBut.disabled=false;
    document.querySelector("#seconds").value="0";
    currentRunning = new Audio("./alarm.mp3");
    currentRunning.play();
    startCountDown();
  }
});

let flag=true;
resetBut.addEventListener("click", function(){
  if(previousTimerId!=null){
     clearInterval(previousTimerId);
     currentRunning.pause();
     previousTimerId=null;
     currentRunning=null;
     display.innerText="00:00";
     document.querySelector("#seconds").value="";
     resetBut.disabled=true;
     pauseBut.disabled=true;
     pauseBut.innerText="Pause";
    flag=true;
  }
})


pauseBut.addEventListener("click", function(){
if(flag){
  pauseBut.innerText="Resume";
  flag=false;
  currentRunning.pause();
  clearInterval(previousTimerId);
}
else{
  pauseBut.innerText="Pause";
  flag=true;
  currentRunning.play()
  startCountDown();
  
}
})
function format(time) {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;}

  function startCountDown(){
      previousTimerId = setInterval(function () {
      if (countdown > 0) {
        if (currentRunning != null) {
          currentRunning.pause();
        }
        currentRunning = new Audio("./alarm.mp3");
        currentRunning.play();
        countdown--;
        display.innerText = format(countdown);
      }

      if (countdown == 0) {
        if (currentRunning != null) {
          currentRunning.pause();
        }
        currentRunning = new Audio("./beep.ogg");
        currentRunning.play();
        setTimeout(() => {
          alert("Timer Finished Your CountDown is Complete");

        }, 100);
        clearInterval(previousTimerId);
        previousTimerId=null;
      }
    }, 1000);
  }

