let body =document.querySelector("body");
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let btns = document.querySelectorAll(".button");
let highScore=0;

let gameSeq=[];
let userSeq=[];

let btnArr = ["yellow", "red", "green", "purple"];

//game start

body.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }
});

 function levelUp(){
    //making userSeq empty for user
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    //choosing radom btn
    let rndInd = Math.floor(Math.random()*3) + 1;
    let color  = btnArr[rndInd];
    let rndBtn  = document.querySelector(`.${color}`);
    gameSeq.push(color);
    console.log(gameSeq);
    //btn flash used
    gameFlash(rndBtn);
};

//btn click 
for(btn of btns){
    btn.addEventListener("click",btnPress);
};

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
};

function btnPress(){
    let btn  = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    //checking for currect ans
    check(userSeq.length-1);
};

function check(indx){
    if(gameSeq[indx] === userSeq[indx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,300);
        }
        
    }else{
        if(level > highScore){
            highScore=level;
            let h3 = document.querySelector("h3");
            h3.innerText = `High Score - ${highScore-1}`;
        }
        h2.innerHTML=`Game over.Your score was ${level}<br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(109, 174, 184)";
        },200);
        //resetting 
        reset();
    }
};

//reset function
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
};
