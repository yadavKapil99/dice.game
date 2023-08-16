var player1="Player 1";
var player2="Player 2";

function editNames(){
      
    player1=prompt("Enter the name of player 1");
    player2=prompt("Enter name of player 2");
    document.querySelector(".name1").innerHTML=player1;
    document.querySelector(".name2").innerHTML=player2;
}

function rollTheDice() {
    // var n1=Math.random();
    // var n2=Math.random();
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 + ".png");
  
    document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 + ".png");
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="Draw !";
    }
    else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML=(player1+" Wins !");
    }
    else{
        document.querySelector("h1").innerHTML=(player2+" Wins !");
    }
}