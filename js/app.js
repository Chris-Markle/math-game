const topRowOnes = document.querySelector('.tr-o');
const topRowTens = document.querySelector('.tr-t');
const topRowHunds = document.querySelector('.tr-h');

const botRowOnes = document.querySelector('.br-o');
const botRowTens = document.querySelector('.br-t');
const botRowHunds = document.querySelector('.br-h');

const ansRowOnes = document.querySelector('.ar-o');
const ansRowTens = document.querySelector('.ar-t');
const ansRowHunds = document.querySelector('.ar-h');

const checkAnswerButton = document.getElementById('check-answer');

let onesAnswer;
let tensAnswer;
let hundsAnswer;

// Assign random # to each ones, tens, and hundreds fields
const randNum = (val) => {
  const randVal = Math.floor(Math.random() * 10);
  number = val.innerHTML = `${randVal}`;
}

const assignValues = () => {
  randNum(topRowOnes);
  randNum(topRowTens);
  randNum(topRowHunds)
  randNum(botRowOnes);
  randNum(botRowTens);
  randNum(botRowHunds);
  let checkTopHunds = document.querySelector('.tr-h').innerHTML;
  let checkBotHunds = document.querySelector('.br-h').innerHTML;

  // Don't allow a '0' in the hundreds place
  if(checkTopHunds === '0') {
    randNum(topRowHunds);
  }

  if(checkBotHunds === '0') {
    randNum(botRowHunds);
  }
}

assignValues();

const computeAdditionAnswer = () => {
  let topOnes = Number(document.querySelector('.tr-o').innerHTML);
  let botOnes = Number(document.querySelector('.br-o').innerHTML);
  let topTens = Number(document.querySelector('.tr-t').innerHTML);
  let botTens = Number(document.querySelector('.br-t').innerHTML);
  let topHunds = Number(document.querySelector('.tr-h').innerHTML);
  let botHunds = Number(document.querySelector('.br-h').innerHTML);

  onesAnswer = topOnes + botOnes;
  tensAnswer = topTens + botTens;
  hundsAnswer = topHunds + botHunds;

  // Carry the 1 to the tens place if needed
  if(onesAnswer > 9) {
    let onesString = onesAnswer.toString();
    let dblDigitNum = onesString.split("");
    onesAnswer = Number(dblDigitNum[1]);
    tensAnswer += 1;
  } 
  // Carry the 1 to the hundreds place if needed
  if(tensAnswer > 9) {
    let tensString = tensAnswer.toString();
    let dblDigitNum = tensString.split("");
    tensAnswer = Number(dblDigitNum[1]);
    hundsAnswer += 1;
   } 
 }

computeAdditionAnswer();
console.log(hundsAnswer, tensAnswer, onesAnswer);

checkAnswerButton.addEventListener('click', function () {
  let userHundsAnswer = Number(ansRowHunds.value);
  let userTensAnswer = Number(ansRowTens.value);
  let userOnesAnswer = Number(ansRowOnes.value);
  let highlightGreen = document.querySelector('input');

  if(userHundsAnswer === hundsAnswer && 
    userTensAnswer === tensAnswer &&
    userOnesAnswer === onesAnswer) {
      console.log("Correct!");
      highlightGreen.classList.add('.correctAnswer')
      // console.log(highlightGreen);
  } else {
    console.log("Please try again.");
  }
})


