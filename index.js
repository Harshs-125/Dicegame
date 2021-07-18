var randomNumber1= Math.floor(Math.random() * 6)+1;

var img1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);

var randomNumber2= Math.floor(Math.random() * 6)+1;

var img2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",img2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h2.main").innerHTML="Player 1 wins🎉";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h2.main").innerHTML="Player 2 wins🎉";
}
else{
    document.querySelector("h2.main").innerHTML="Draw !! try again";
}
