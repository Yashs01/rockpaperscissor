let getRandomCharacter = () =>{
let RPC = ["rock","paper","scissor"];
let Random = RPC[Math.floor(Math.random() * RPC.length)];
return Random;
}
let choices = document.querySelectorAll(".box");
let player_count = 0;
let computer_count = 0;
let draww = document.querySelector(".text");
let your_win_count = document.querySelector(".your_win_count");
let comp_win_count = document.querySelector(".comp_win_count");
let draw = () =>{
    console.log("draw");
    draww.innerHTML = "DRAW";
}
let textualdata = (user_win,computerchoice)=>{
    if(user_win){
        player_count++;
        draww.innerHTML = `Computer chooses ${computerchoice} so you win`;
        your_win_count.innerHTML = player_count;
    }
    else{
        computer_count++;
        draww.innerHTML = `Computer chooses ${computerchoice} so you loss`;
        comp_win_count.innerHTML = computer_count;
    }
}

let Selection = (userchoices) =>{
    let computerchoice = getRandomCharacter();
    console.log(`computers chooses :${computerchoice}`)
    console.log(`you chooses :${userchoices}`)
    // let userchoice = userchoices;
    if(userchoices === computerchoice){
        draw();
    }
    else{
        let user_win = true;
        if(userchoices === "rock"){
            user_win = computerchoice === "paper" ? false:true;
        }else if(userchoices === "paper"){
            user_win = computerchoice === "rock" ? true:false;
        }else {
            user_win = computerchoice ==="paper" ? true:false; 
        }
        textualdata(user_win,computerchoice);
    }

}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoices = choice.getAttribute("name");
        Selection(userchoices);
    })
})
