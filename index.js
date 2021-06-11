
var p1=Math.floor(Math.random()*6)+1;
var p2=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+p1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomImage2="dice"+p2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(p2>p1){
    document.querySelector("h1").innerHTML="Player2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="That's a Draw!";
}