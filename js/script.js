
const grid = document.querySelector(".box_grid")

const btn = document.querySelector("button")

btn.addEventListener("click" , CreateCards)



// SECTION DEFINITION FUNCTION 


function ShowNumber(){
    
    this.classList.add("card_grid_click")
    alert(this.innerHTML);
   
}

function CreateCards(){

let i=1
const arrayCards = []

while(i<=100){

let card = document.createElement('div');
card.classList.add("card_grid");
card.innerHTML = i;
card.addEventListener('click' , ShowNumber);


grid.appendChild(card);
arrayCards.push(card.innerHTML);
i++;

}

}










