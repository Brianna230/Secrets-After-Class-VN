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
    leftSprite:"SakiSprites/Sakihappyfullbody.png",
    nextIndex: 9
},{
    name:"Himeko",
    text:"(I didn't know what to say, so I just stayed quiet)",
    rightSprite:"HimekoSprites/himeneutralfullbody.png",
    leftSprite:"SakiSprites/Sakisadfullbody.png",
    nextIndex: 9
},{
    name:"Saki",
    text:"Anyway, let's grab our seat before the bell rings",
    rightSprite:"HimekoSprites/himeneutralfullbody.png",
    leftSprite:"SakiSprites/Sakihappyfullbody.png",
},{
    name:"Himeko",
    text:"(We entered the classroom.Just the usual chatter and shuffling of the seats)",
    rightSprite:"HimeSprites/himeneutralfullbody.png",
    leftSprite:"",
    background:"Classroom.jpg"
},{
    name:"Himeko",
    text:"(And there he was.Toji... looking out the window like always.)",
    rightSprite:"HimekoSprites/himeblushfullbody.png",
    leftSprite:"",
},{
    name:"Himeko",
    text:"(He never talks much... but there's something about him)",
    rightSprite:"HimekoSprites/himeshyfullbody.png",
    leftSprite:""

},{
    name:"Saki",
    text:"You know, Toji's always zoning out like he's in another world. What's his deal?",
    rightSprite:"HimekoSprites/himepanicfullbody.png",
    leftSprite:"SakiSprites/Sakineutralfullbody.png"
},{
    choices:[{text:"Change the subject",nextIndex: 15},
             {text:"Ask what she think of Toji", nextIndex: 17}
    ]
    //Change the subject path
},{
    name:"Himeko",
    text:"Anyway, did you finish the math homework? I totally blanked on question five",
    rightSprite:"HimekoSprites/himepanicfullbody.png",
    leftSprite:"SakiSprites/SakiSadfullbody.png",
    nextIndex:16
  },{
    name:"Saki",
    text:"ugh dont remind me. I stayed way too late trying to figure that one out",
    rightSprite:"HimekoSprites/himesweatingfullbody.png",
    leftSprite:"SakiSprites/Sakineutralfullbody.png",
    nextIndex:19

    // Ask what she think of toji path
  },{
    name:"Himeko",
    text:"what do you think of toji?",
    rightSprite:"HimekoSprites/himeblushfullbody.png",
    leftSprite:"SakiSprites/Sakineutralfullbody.png",
    nextIndex:18

  },{
    name:"Saki",
    text:"Toji? Hmm... He's cool, I guess. Kind of mysterious",
    rightSprite:"HimekoSprites/himepanicfullbody.png",
    leftSprite:"SakiSprites/Sakineutralfullbody.png",


  }


]

let currentLine = 0;


function nextline(){
    const nextButton = document.getElementById("next-button")
    if(currentLine < dialoguePrologue.length){
        const line = dialoguePrologue[currentLine];
        if(line.background){
            document.body.style.background =`url('${line.background}') no-repeat center / cover`
        }
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
        document.getElementById("dialogue-box").style.display="block";
        // currentLine++;

        document.getElementById("next-button").style.display ="inline-block"

    }

}

function chooseOption(index){
   const line = dialoguePrologue[currentLine];
   const choice = line.choices[index]
    if(!choice){
        console.log("Invalid choice index" , index)
        return;
    }
    currentLine = choice.nextIndex;
    document.getElementById("choice-box").style.display = "none";
    document.getElementById("dialogue-box").style.display ="block";
    document.getElementById("next-button").style.display="inline-block"
    nextline();
    
}
document.getElementById("next-button").onclick=()=>{
    const line = dialoguePrologue[currentLine];
    if(line.nextIndex !== undefined){
        currentLine = line.nextIndex
    }else{
    currentLine++;
    }
    nextline()
}

