let gameSeq=[];
let userSeq=[];

let started = false;
let level =0;

let h2=document.querySelector("h2");

let btns=["yellow","blue","red","purple"];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
   
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function  userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}





function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx =Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level :",level);

    
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>press any key to restart`
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
     document.querySelector("body").style.backgroundColor="white";

       },150)

      
        reset();
    }
    }


function btnpress(){
   let btn=this;
   userFlash(btn);
   console.log(this);

   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}