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

const dialoguePrologue =[{ name:"Himeko",
    text:"(It's another school day)",
    rightSprite:"HimekoSprites/himeneutralfullbody.png",
    leftSprite: ""

},{
    name:"Saki",
    text:"You're here early again!",
    rightSprite:"HimekoSprites/himeblushfullbody.png",
    leftSprite:"SakiSprites/Sakihappyfullbody.png"
}]

let currentLine = 0;

function nextline(){
    if(currentLine < dialoguePrologue.length){
        const line = dialoguePrologue[currentLine];
        //put text into dialogue box
        document.getElementById("character-name").innerText = line.name;
        document.getElementById("dialogue-text").innerText = line.text;
        //show sprites
        document.getElementById("sprite-left").src = line.leftSprite || "";
        document.getElementById("sprite-right").src = line.rightSprite || "";
        currentLine++;

    }else{
        document.getElementById("dialogue-box");
    }
}