const cards = document.querySelectorAll(".cards");

let pause = false


setInterval(() => {
    if (!pause) {
        cards.forEach(card=>{
            card.scrollLeft += 1;
        })
    }
}, 20);


cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        pause = true;
    });

    card.addEventListener("mouseleave", () => {
        pause = false;
    });
})



const rvwcards=document.querySelector(".rvwcards")

let rpause=false
setInterval(() => {
    if (!rpause) {
        rvwcards.scrollLeft+=1
    }
}, 30);

rvwcards.addEventListener("mouseenter",()=>{
    rpause=true
})

rvwcards.addEventListener("mouseleave",()=>{
    rpause=false
})



const abtcards=document.querySelector(".abtcards")

let apause=false

setInterval(()=>{
    if (!apause) {
        abtcards.scrollLeft+=1
    }
},40)

abtcards.addEventListener("mouseenter",()=>{
    apause=true
})

abtcards.addEventListener("mouseleave",()=>{
    apause=false
})