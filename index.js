var randomNo1= Math.floor(Math.random()*6)+1;
var randomImage = "./images/Dice"+randomNo1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomNo2= Math.floor(Math.random()*6)+1;
var randomImage2 = "./images/Dice"+randomNo2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if(randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNo2>randomNo1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else 
{
    document.querySelector("h1").innerHTML="Draw";
}