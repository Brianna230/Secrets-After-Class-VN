let musicStarted = false;
window.addEventListener("click",()=>{
    if(!musicStarted){
        const music = document.getElementById("title-music");
        music.volume = 0.5;
        music.play()
        musicStarted = true;
    }
})