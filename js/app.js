const topRowOnes = document.querySelector('.tr-o');
const topRowTens = document.querySelector('.tr-t');
const topRowHunds = document.querySelector('.tr-h');

const botRowOnes = document.querySelector('.br-o');
const botRowTens = document.querySelector('.br-t');
const botRowHunds = document.querySelector('.br-h');

const ansRowOnes = document.querySelector('.ar-o');
const ansRowTens = document.querySelector('.ar-t');
const ansRowHunds = document.querySelector('.ar-h');
const ansRowThous = document.querySelector('.ar-th');

const checkAnswerButton = document.getElementById('check-answer');

let onesAnswer;
let tensAnswer;
let hundsAnswer;
let thousAnswer;

// Assign random # to each ones, tens, and hundreds fields
const newQuestion = () => {
  const randNum = (val) => {
    const randVal = Math.floor(Math.random() * 10);
    number = val.innerHTML = `${randVal}`;
  }

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

newQuestion();


// Leaving in for future reference 
  // Only show thousands place if needed

    /*function toggleThousandsPlace() {
      const thousInput = document.querySelector('input[name=thousands]');
      const ansRowShift = document.getElementById('answer-row')
      ansRowShift.classList.add('answer-row-shift');
      thousInput.style.display = 'none';
    }*/

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
  if(hundsAnswer > 9) {
    let hundsString = hundsAnswer.toString();
    let dblDigitNum = hundsString.split("");
    hundsAnswer = Number(dblDigitNum[1]);
    thousAnswer = 1;
    console.log(thousAnswer);
   } else {
     thousAnswer == 'undefined';
     
   }
 }

computeAdditionAnswer();
console.log(thousAnswer, hundsAnswer, tensAnswer, onesAnswer);


checkAnswerButton.addEventListener('click', function () {
  const userThousAnswer = Number(ansRowThous.value);
  const userHundsAnswer = Number(ansRowHunds.value);
  const userTensAnswer = Number(ansRowTens.value);
  const userOnesAnswer = Number(ansRowOnes.value);

  if(userHundsAnswer === hundsAnswer && 
    userTensAnswer === tensAnswer &&
    userOnesAnswer === onesAnswer &&
    userThousAnswer === thousAnswer) {
      console.log("Correct!");
      nextQuestion();
  } else {
    console.log("Please try again.");
  }
})

const nextQuestion = () => {
  userHundsAnswer = 0;
  userTensAnswer = 0;
  userOnesAnswer = 0;
  newQuestion();
}






// if(thousAnswer === 'undefined') {
//   if(userHundsAnswer === hundsAnswer && 
//     userTensAnswer === tensAnswer &&
//     userOnesAnswer === onesAnswer &&) {

//     }
// }