const topRowOnes = document.querySelector('.tr-o');
const topRowTens = document.querySelector('.tr-t');
const topRowHunds = document.querySelector('.tr-h');

const botRowOnes = document.querySelector('.br-o');
const botRowTens = document.querySelector('.br-t');
const botRowHunds = document.querySelector('.br-h');

const ansRowOnes = document.querySelector('.ar-o');
const ansRowTens = document.querySelector('.ar-t');
const ansRowHunds = document.querySelector('.ar-h');

let additionAnswer;

const randNum = (val) => {
  const randVal = Math.floor(Math.random() * 10);
  val.innerHTML = `${randVal}`;
}

const assignValues = () => {
  randNum(topRowOnes);
  randNum(topRowTens);
  randNum(topRowHunds);
  randNum(botRowOnes);
  randNum(botRowTens);
  randNum(botRowHunds);
}

assignValues();

const checkAdditionAnswer = () => {
  let onesAnswer = topRowOnes + botRowOnes;
  let tensAnswer = topRowTens + botRowTens;

  if(onesAnswer > 9) {
    tensAnswer += 1;
  } else {
    return onesAnswer;
  }
}

checkAdditionAnswer();