
const grid = document.querySelector(".box_grid")

const btn = document.querySelector("button")

btn.addEventListener("click" , CreateCards)




// SECTION DEFINITION FUNCTION 


function ShowNumber(){
    
    this.classList.add("card_grid_click")
    alert(this.innerHTML);
   
}

function CreateCards(){

 grid.innerHTML = ""; 

const sel = document.getElementById("select_cards");   
let i= 1;

const arrayCards = []

while(i<=sel.value){

let card = document.createElement('div');

if(sel.value === "100"){
    card.classList.add("card_grid");
}
if(sel.value === "81"){
    card.classList.add("card_grid_9");
}
if(sel.value === "49"){
    card.classList.add("card_grid_7");
}

card.innerHTML = i;
card.addEventListener('click' , ShowNumber);

grid.appendChild(card);
arrayCards.push(card.innerHTML);
i++;

}

}




