const topRowOnes = document.querySelector('.tr-o');
const topRowTens = document.querySelector('.tr-t');
const topRowHunds = document.querySelector('.tr-h');

const botRowOnes = document.querySelector('.br-o');
const botRowTens = document.querySelector('.br-t');
const botRowHunds = document.querySelector('.br-h');

const ansRowOnes = document.querySelector('.ar-o');
const ansRowTens = document.querySelector('.ar-t');
const ansRowHunds = document.querySelector('.ar-h');

let onesAnswer;
let tensAnswer;
let hundsAnswer;


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
  if(checkTopHunds === '0') {
    randNum(topRowHunds);
    // let newHunds = document.querySelector('.tr-h').innerHTML;
    // console.log(`Hundreds place changed to ${newHunds}`)
  }

  if(checkBotHunds === '0') {
    randNum(botRowHunds);
  }
}

assignValues();

const checkAdditionAnswer = () => {

  let topOnes = Number(document.querySelector('.tr-o').innerHTML);
  let botOnes = Number(document.querySelector('.br-o').innerHTML);
  let topTens = Number(document.querySelector('.tr-t').innerHTML);
  let botTens = Number(document.querySelector('.br-t').innerHTML);
  let topHunds = Number(document.querySelector('.tr-h').innerHTML);
  let botHunds = Number(document.querySelector('.br-h').innerHTML);

  onesAnswer = topOnes + botOnes;
  tensAnswer = topTens + botTens;
  hundsAnswer = topHunds + botHunds;

  if(onesAnswer > 9) {
    let onesString = onesAnswer.toString();
    let dblDigitNum = onesString.split("");
    onesAnswer = Number(dblDigitNum[1]);
    tensAnswer += 1;
  } else {
    return onesAnswer;
  }
  
  if(tensAnswer > 9) {
    let tensString = tensAnswer.toString();
    let dblDigitNum = tensString.split("");
    tensAnswer = Number(dblDigitNum[1]);
    hundsAnswer += 1;
  } else {   
    return tensAnswer;
  }
  console.log(hundsAnswer, tensAnswer, onesAnswer);
}

checkAdditionAnswer();