var song = new Audio();
song.src="./audio.mp3";

let element1 = document.getElementById("logo_music");

function play_music(){
    song.play();
    element1.classList.toggle("util1");

}
element1.addEventListener("click", play_music);

let element2 = document.getElementById("btn");
element2.addEventListener("click", function(){
    alert("Sign In Successful!")
})