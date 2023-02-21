// Player Name
let diceNum = 1;
let diceNum2 = 6;
let count = 5;
let time = 0;

// Function to roll the dice

function rollTheDice() {
  count = count -1; //as when it will choose the timer number, it will be reduce as -1(because of reverse)

  if(count != 0) {
      //Dice Picture 1
      diceNum = diceNum + 1;
      if(diceNum == 7) {
             diceNum = 1; //as it will be 7, so it will be 1, your image ref for sai_0.gif is missing
      }
      let imgsrc = document.getElementsByTagName("img")[0];
      let str = "./sai_"+diceNum+".gif";
      imgsrc.src = str;

      //Dice Picture 2
      diceNum2 = diceNum2 - 1;
      if(diceNum2 == 0) {
             diceNum2 = 6;
      }
      let imgsrc2 = document.getElementsByTagName("img")[1];
      let str2 = "./sai_"+diceNum2+".gif";
      imgsrc2.src = str2;
  }
  else if(count==0) {
  clearInterval(time);

  //Making the Randome number
  let num = Math.floor(Math.random()*6)+1;
  let num2 = Math.floor(Math.randome()*6)+1;
  //alert(num + " " + num2);

  //change the dice picture1
  let imgsrc = document.getElementsByTagName("img")[0];
  let str = "./sai_"+num+".gif";
  imgsrc.src = str;

  //change the dice picture2
  let imgsrc2 = document.getElementsByTagName("img")[1];
  let str2 = "./sai_"+num2+".gif";
  imgsrc2.src = str2;
  }
}

document.querySelector(".btn").addEventListener(
  "click",
  function randomDice() {
    count = 10;
    clearInterval(time);
    time = setInterval("rollTheDice()", 60);
  });



