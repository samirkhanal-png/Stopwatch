const container = document.querySelector('.container');
const upperSection = document.querySelector('#upper');
const currentSession = document.querySelector('#currentSession');
const lowerSection = document.querySelector('#lower');
const innerWrapper = document.querySelector('#innerWrapper');

//Session Timer
const sessionTimer = document.querySelector('#sessionTimer');
const sessionTimeText = document.querySelector('#sessionTime');
const decSessTimeButton = document.querySelector('#decSessTime');
const incSessTimeButton = document.querySelector('#incrSessTime');

//BreakTimer
const breakTimer = document.querySelector('#breakTimer');
const breakTimeText = document.querySelector('#breakTime');
const decBrkTimeButton = document.querySelector('#decBrkTime');
const incBrkTimeButton = document.querySelector('#incBrkTime');

// Button controls
const btnControls = document.querySelector('#btnControls');
const cntrlButton = btnControls.querySelector('button:nth-child(1)');
const resetButton = btnControls.querySelector('button:nth-child(2)');

let sessTime=0
let brkTime=0
let min=0
let sec=0

let id=null

//for controllng sessionTime and Break Session 
//Initially they are at this condition
let sessionFlag=true
let breakFlag=false

incBrkTimeButton.addEventListener("click",()=>{
 brkTime++
 BreakTimeSelector()
})

decBrkTimeButton.addEventListener("click",()=>{
 if(brkTime>1)brkTime--
 BreakTimeSelector()
})

incSessTimeButton.addEventListener("click",()=>{
   sessTime++
   SessionTimeSelector()
})

decSessTimeButton.addEventListener("click",()=>{
  if(sessTime>1)sessTime--
  SessionTimeSelector()
})

function SessionTimeSelector(){
  sessionTimeText.innerText=`${sessTime}  min`
}

function BreakTimeSelector(){
  breakTimeText.innerText=`${brkTime} min`
}

//Surumaa ta session Time nai active huncha 
cntrlButton.addEventListener("click",()=>{
    displayTime(sessTime)
})

function displayTime(time){
   min=time-1
   sec=60
   id=setInterval(()=>{
    sec--
    if(sec==0){
      sec=60
      if(min>=1)min--
    }
    updateTimer()
  },1000)
}

function changeSession(){
  if(!sessionFlag&&breakFlag){
   displayTime(brkTime)
  }
  else if(!breakFlag&&sessionFlag){
   displayTime(sessTime)
  }
}

function updateTimer(){
  let nMinute=min.toString().padStart(2,"0")
  let nSecond=sec.toString().padStart(2,"0")
   upperSection.innerHTML=`<h2>${min}:${sec}</h2>`=`${nMinute}:${nSecond}`
}