let element2 = document.getElementById("btn").addEventListener("click", function(){
    alert("Sign In Successful!")
})

var song = new Audio();
song.src="./audio3.mp3";

let element1 = document.getElementById("logo_music");

function play_music(){
    song.play();
    element1.classList.toggle("util1");

}
element1.addEventListener("click", play_music)