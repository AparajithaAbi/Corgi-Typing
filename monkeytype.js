corgiParagraphs = [
    "corgi dogs are small herding animals known for their friendly nature with a distinctive appearance short legs and a long body corgis were originally bred for herding cattle in wales",
    "intelligent and trainable corgis make excellent companions famous for their association with the british royal family particularly queen elizabeth ii who owned several corgis",
    "affectionate and playful corgis have a thick double coat requiring regular grooming their pointed ears stand erect giving them an alert expression there are two main breeds the ",
    "despite their small size corgis have a big fearless personality their unparalleled loyalty endears them to owners sociable corgis get along well with children and other pets adapting",
    "thrive on human interaction corgis may become anxious if left alone for long periods regular exercise is essential for their health corgis have a moderate shedding level brushing helps",
    "proper nutrition is crucial to maintain a healthy weight and prevent obesity early training and socialization are key for good behavior positive reinforcement works well for teaching",
    "corgis may have a tendency to bark making them effective watchdogs protective instincts make them alert to changes in their surroundings prone to health issues like hip dysplasia",
    "regular veterinary check-ups are important corgis have a lifespan of around 12 to 15 years responsible breeding practices ensure their health and longevity adopting from reputable",
    "charming and expressive corgis have a happy and alert face large round eyes add to their adorable appearance the tail is typically docked giving them a compact and balanced look",
    "corgis have a strong work ethic excelling in various dog sports and activities their agility and intelligence make them competitive in obedience trials and agility courses",
    "distinctively herding corgis may try to herd children or other pets mental stimulation through interactive toys and games is important for their well-being they have a playful",
    "positive interactions create lasting bonds strengthening the human-dog relationship adaptable to different climates corgis may struggle in extreme heat due to their thick coat",
    "corgis may exhibit stubbornness requiring patient and consistent training their intelligence makes them quick learners when motivated with treats or praise they have a tendency",
    "a well-balanced diet supports overall health and vitality known for expressive vocalizations including barking and sometimes howling early socialization helps reduce excessive",
    "charming and charismatic corgis are a popular choice for dog owners worldwide their unique appearance and friendly demeanor have earned them a special place in the hearts of many",
    "adopting a corgi requires commitment and dedication to their care and well-being corgis may have a strong prey drive so caution is advised when introducing them to smaller animals",
    "providing a loving and structured environment helps corgis thrive and lead fulfilling lives"
]


let splitted=[];
let keys=[];
let counter = -1;
let before;
let timer = 30;
let isStarted = 0;
let startTimer;
let correctLetterCount = 0;
let percentage;
let firstIdxLetter;
let zeroIdxLetter ;


const letters = document.querySelectorAll(".letters");
const cursor = document.querySelector("#cursor");
const timeBox = document.querySelector(".timer");
const percentageDisplay = document.querySelector(".percentage");
const blurDiv = document.querySelector(".blur-const");
const nameDiv = document.querySelector(".name-const");
const logoDiv = document.querySelector(".logo-const");
const timerDiv = document.querySelector(".timer-const");
const logoNameDiv = document.querySelector(".logo-name-const");
const typeContentDiv = document.querySelector(".type-content-const");
const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");





function randomPara(){
  
    let randNum = Math.floor(Math.random()*corgiParagraphs.length);
    let randpara = corgiParagraphs[randNum];
    return splitLetters(randpara);

}

function splitLetters(para){
    let tags = "";
    splitted = para.split("");
    splitted.forEach(function(elem,idx){
        tags += `<span id=${idx}let class="letters">${elem}</span>`
    })
    
    document.querySelector(".type-content-const").innerHTML = tags;
    firstIdxLetter = document.getElementById("1let");
    zeroIdxLetter = document.getElementById("0let");
    // document.getElementById("0let").classList.add("left-cursor");
    zeroIdxLetter.classList.add("left-cursor");

    return tags;
}

function typing(eve){
    isStarted += 1;
  
    if(isStarted == 1){
        
        startTimer = setInterval(timeout,1000);
        
    }    
    
    if(eve.key=="Backspace" && keys.length>0){
        
        if(counter==splitted.length-1){
            document.getElementById(`${counter}let`).classList.add("left-cursor");
            document.getElementById(`${counter}let`).classList.remove("right-cursor");
        }
       else{
        document.getElementById(`${counter}let`).classList.add("left-cursor");
        document.getElementById(`${counter+1}let`).classList.remove("left-cursor");
       }
        
        
        keys.pop();
       
        if (counter != -1){
            counter -= 1;
            document.getElementById(`${counter+1}let`).classList.add("back");

        }
    }
    if(eve.key!="Shift" && eve.key!="Alt" && eve.key!="Control" && eve.key!="ArrowLeft" && eve.key!="ArrowUp" && eve.key!="ArrowDown" && eve.key!="ArrowRight" && eve.key!="Enter" && eve.key!="Backspace" && eve.key!="Delete" && eve.key!="Insert" && eve.key!="End" && eve.key!="Home" && eve.key!="Tab" && eve.key!="CapsLock" && splitted.length-2>=counter>=1 ){
        keys.push(eve.key);
        
        counter += 1;
        
        if(counter==0){
            // document.getElementById("1let").classList.add("left-cursor");
            // document.getElementById("0let").classList.remove("left-cursor");
            firstIdxLetter.classList.add("left-cursor");
            zeroIdxLetter.classList.remove("left-cursor");
        }
        else if(counter==splitted.length-1){
            document.getElementById(`${counter}let`).classList.add("right-cursor");
        }
        else{
            document.getElementById(`${counter+1}let`).classList.add("left-cursor");
            document.getElementById(`${counter}let`).classList.remove("left-cursor");
        }
        
        if(splitted[counter]==keys[counter] && splitted[counter]==" "){
            document.getElementById(`${counter}let`).classList.remove("back");
            document.getElementById(`${counter}let`).classList.remove("wrong-space");
            document.getElementById(`${counter}let`).classList.add("correct");
            correctLetterCount++;
            
        }
        else if(splitted[counter]==keys[counter] && splitted[counter]!=" "){
            document.getElementById(`${counter}let`).classList.remove("back");
            document.getElementById(`${counter}let`).classList.remove("wrong");
            document.getElementById(`${counter}let`).classList.add("correct");
            correctLetterCount++;
        }
        
        else if(splitted[counter]!=keys[counter] && splitted[counter]==" "){
            document.getElementById(`${counter}let`).classList.remove("back");
            document.getElementById(`${counter}let`).classList.remove("correct");
            document.getElementById(`${counter}let`).classList.add("wrong-space");
        }
        else if(splitted[counter]!=keys[counter] && splitted[counter]!=" "){
            document.getElementById(`${counter}let`).classList.remove("back");
            document.getElementById(`${counter}let`).classList.remove("correct");
            document.getElementById(`${counter}let`).classList.add("wrong");
        }
    }
}





function timeout(){
    
    timeBox.innerHTML = timer;
    timer--;
    if (timer==0){
        clearInterval(startTimer);
        document.querySelector(".blur").classList.add("blur-clk");
        document.querySelector(".blur").classList.remove("blur");
        window.removeEventListener("keydown",typing);
        percentage = `${Math.round((correctLetterCount/splitted.length)*100)}%`;
        percentageDisplay.textContent = percentage;

    }
}

startButton.addEventListener("click",function(){
   
    window.addEventListener("keydown",typing);

    this.classList.remove("button");
    this.classList.add("button-clk");
    
    logoDiv.classList.add("logo-clk");
    logoDiv.classList.remove("logo");
    
    nameDiv.classList.add("name-clk");
    nameDiv.classList.remove("name");
    
    logoNameDiv.classList.add("logo-name-clk");
    logoNameDiv.classList.add("logo-name");
    
    typeContentDiv.classList.add("type-content-clk");
    typeContentDiv.classList.remove("type-content");
    
    timerDiv.classList.add("timer-clk");
    timerDiv.classList.remove("timer");
})

restartButton.addEventListener("click",function(){
    
    window.addEventListener("keydown",typing);

    blurDiv.classList.add("blur");
    blurDiv.classList.remove("blur-clk");
   
    randomPara();

    timeBox.textContent = "";
    timer = 30;
    isStarted = 0;
    counter = -1;
    keys = [];
    correctLetterCount = 0;
    
})
randomPara();