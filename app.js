// Player Name
var diceNum = 1;
var diceNum2 = 6;
var count = 5;
var time = 0;

// Function to roll the dice

function rollTheDice() {
  count = count -1; //as when it will choose the timer number, it will be reduce as -1(because of reverse)
    
  if(count != 0) {
      //Dice Picture 1
      diceNum = diceNum + 1;
      if(diceNum == 7) {
             diceNum = 0;
      }
      var imgsrc = document.getElementsByTagName("img")[0];
      var str = "./images/sai_"+diceNum+".gif";
      imgsrc.src = str;
    
      //Dice Picture 2
      diceNum2 = diceNum2 - 1;
      if(diceNum2 == 0) {
             diceNum2 = 6;
      }
      var imgsrc2 = document.getElementsByTagName("img")[1];
      var str2 = "./images/sai_"+diceNum2+".gif";
      imgsrc2.src = str2;
  }
  else if(count==0) {
  clearInterval(time);
  //Making the Randome number
  var num = Math.floor(Math.random()*6)+1;
  var num2 = Math.floor(Math.randome()*6)+1;
  //alert(num + " " + num2);

  //change the dice picture1
  var imgsrc = document.getElementsByTagName("img")[0];
  var str = "./images/sai_"+num+".gif";
  imgsrc.src = str;

  //change the dice picture2
  var imgsrc2 = document.getElementsByTagName("img")[1];
  var str2 = "./images/sai_"+num2+".gif";
  imgsrc2.src = str2;
  }
}
function randomDice() {
    count = 10;
    clearInterval(time);
    time = setInterval("rollTheDice()",60);
}




