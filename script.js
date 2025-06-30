let musicStarted = false;
window.addEventListener("click",()=>{
    if(!musicStarted){
        const music = document.getElementById("title-music");
        music.volume = 0.5;
        music.play()
        musicStarted = true;
    }
})

function startGame(){
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("game-screen").style.display ="block";
    document.body.style.background ="url(outsideoftheclassroom.jpg) no-repeat center / cover";
    document.body.style.height="100vh";
    document.body.style.margin="0";

}

