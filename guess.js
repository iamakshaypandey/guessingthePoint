'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number!';
// console.log(document.querySelector('.message').textContent='correct number!');
// document.querySelector('.number').textContent=13
// document.querySelector('.score').textContent=10

// document.querySelector('.guess').value=25
// console.log(document.querySelector('.guess').value);


const Button=document.querySelector('.btn-check');
let number=Math.trunc(Math.random()*20+1);
let score=20
let highScore=0


function checkOpration(){
  const guessNo= Number(document.querySelector('.guess').value);
  console.log('hello akshay');
  console.log(guessNo,typeof guessNo);
  if(!guessNo){
    // document.querySelector('.message').textContent='no number!'
    DisplayMsg('No Number!')
    
    //  when user win
  }else if(guessNo===number){
    document.querySelector('.number').textContent=number;
    // document.querySelector('.message').textContent='correct number!';
    DisplayMsg('correct number!')
    document.querySelector('body').style.backgroundColor='green'
    document.querySelector('.number').style.backgroundColor='orange'
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
    // when guess is wrong use turnury oprator
  }else if(guessNo!==number){
    if(score>1){
      // document.querySelector('.message').textContent= 
      // guessNo > number ? 'TO higher number!' : 'TO LOw number!';
      DisplayMsg(      guessNo > number ? 'TO higher number!' : 'TO LOw number!');
      score--
      document.querySelector('.score').textContent=score
    }else{
      // document.querySelector('.message').textContent='you lost the game!'
      DisplayMsg('you lost the game!')
      document.querySelector('.score').textContent=0
    }
  }
}

// use function Displaymsg and short the code:

function DisplayMsg(message){
  document.querySelector('.message').textContent=message
}



  // when guess is to low
//   else if(guessNo<number){
//     if(score>1){
//       document.querySelector('.message').textContent='TO LOw number!';
//       score--
//       document.querySelector('.score').textContent=score
//     }else{
//       document.querySelector('.message').textContent='you lost the game!'
//       document.querySelector('.score').textContent=0
//     }
//   }
//   // when guess is to higher
//   else if(guessNo>number){
//     if(score>1){
//       document.querySelector('.message').textContent='TO higher number!';
//       score--
//       document.querySelector('.score').textContent=score
//     }else{
//       document.querySelector('.message').textContent='you lost the game!'
//       document.querySelector('.score').textContent=0
//     }
//   }
// }


Button.addEventListener('click',checkOpration)
const AgainBtn = document.querySelector('.btn-again')

function AgainPlay(){
 score=20
 number=Math.trunc(Math.random()*20+1);
 document.querySelector('.message').textContent='start guessing...';
 document.querySelector('.score').textContent=score;
 document.querySelector('.number').textContent='?';
 document.querySelector('.guess').value='';
 document.querySelector('body').style.backgroundColor='#222'
 document.querySelector('.number').style.backgroundColor='green'
}

AgainBtn.addEventListener('click',AgainPlay)