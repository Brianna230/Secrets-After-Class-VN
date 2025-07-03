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

     nextline()

}

const dialoguePrologue =[
    {
        name:"Himeko",
        text:"(It's always quiet in the morning... just how I like it)",
        rightSprite:"HimekoSprites/himeneutralfullbody.png",
        leftSprite:""
    },
     {
        name:"Himeko",
        text:"(No one's around.Just me, the sky, and my thoughts)",
        rightSprite:"HimekoSprites/himeneutralfullbody.png",
        leftSprite:""

    },{
        name:"Himeko",
        text:"(But today feels different somehow. My chests... heavy?)",
        rightSprite:"HimekoSprites/himeblushfullbody.png",
        leftSprite:""
    },{
        name:"Himeko",
        text:"(Maybe... it's because of *him*)",
        rightSprite:"HimekoSprites/himeblushfullbody.png",
        leftSprite:""
    },{
        name:"Himeko",
        text:"(No! I wasn't going to think about him this early ...)",
        rightSprite:"HimekoSprites/himeblushfullbody.png",
        leftSprite:""

    }
    ,
   {
    name:"Saki",
    text:"You're here early again!",
    rightSprite:"HimekoSprites/himeblushfullbody.png",
    leftSprite:"SakiSprites/Sakihappyfullbody.png"
},{choices:[
    {text:"Smile back at Saki", nextIndex: 7},
    {text:"Stay quiet", nextIndex: 8}


]},{
    name:"Himeko",
    text:"(I smiled to her.Maybe she's not so bad after all)",
    rightSprite:"HimekoSprites/himehappyfullbody.png",
    leftSprite:"SakiSprites/Sakihappyfullbody.png"
},{
    name:"Himeko",
    text:"(I didn't know what to say, so I just stayed quiet)",
    rightSprite:"HimekoSprites/himeneutralfullbody.png",
    leftSprite:"SakiSprites/Sakisadfullbody.png"
}

]

let currentLine = 0;

function nextline(){
    if(currentLine < dialoguePrologue.length){
        const line = dialoguePrologue[currentLine];
        if(line.choices){
            document.getElementById("dialogue-box").style.display ="none";
            document.getElementById("choice-box").style.display="flex";
            const buttons = document.querySelectorAll(".choice-btn");
            buttons.forEach((btn,index)=>{
                if(line.choices[index]){
                    btn.innerText = line.choices[index].text;
                    btn.onclick =() => chooseOption(index);
                    btn.style.display ="block";
                }else{
                    btn.style.display="none";
                }

            });
           return;
                
        }

        //put text into dialogue box
        document.getElementById("character-name").innerText = line.name;
        document.getElementById("dialogue-text").innerText = line.text;
        //show sprites
        document.getElementById("sprite-left").src = line.leftSprite || "";
        document.getElementById("sprite-right").src = line.rightSprite || "";
        currentLine++;

    
    }
}

function chooseOption(index){
    const choice = dialoguePrologue[currentLine].choices[index];
    currentLine = choice.nextIndex;
    document.getElementById("choice-box").style.display = "none";
    document.getElementById("dialogue-box").style.display ="block";
    nextline();

}