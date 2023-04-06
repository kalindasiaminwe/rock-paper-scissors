//Player 1
var randomNumber1 = Math.floor(Math.random() * 3) + 1; //random num between 1and 3

var randomImage = randomNumber1 + ".png"; //1.jpg - 3.jpg

var randomImageSrc = "img/" + randomImage; //img/1.jpg-img/3.jpg

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc)

//Player 2
var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSrc2 = "img/" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


//Game rules
if(randomNumber1 === 1 && randomNumber2 === 2){
    document.querySelector("h3").innerHTML = "Player 1 Wins!🎊";
}
else if (randomNumber1 === 2 && randomNumber2 === 3){
    document.querySelector("h3").innerHTML = "Player 1 Wins!🎊";
}
else if(randomNumber1 == 3 && randomNumber2 == 1){
    document.querySelector("h3").innerHTML = "Player 1 Wins!🎊";
}
else if (randomNumber2 === 1 && randomNumber1 === 2){
    document.querySelector("h3").innerHTML = "Player 2 Wins!🎊";
}
else if (randomNumber2 === 2 && randomNumber1 === 3){
    document.querySelector("h3").innerHTML = "Player 2 Wins!🎊";
}
else if(randomNumber2 == 3 && randomNumber1 == 1){
    document.querySelector("h3").innerHTML = "Player 2 Wins!🎊";
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h3").innerHTML = "Tie!🎯"
}
