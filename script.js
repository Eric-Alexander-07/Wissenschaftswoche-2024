let dot = 1

function left() {
    console.log('left')
    dot = dot - 1;
}

function right() {
    console.log('right')
    dot = dot + 1; 
}

if (dot <= 1) {
    dot = 1;
} else if (dot >= 5) {
    dot = 5
}

let dot1 = document.querySelector('id1');
let dot2 = document.querySelector('id2');
let dot3 = document.querySelector('id3');
let dot4 = document.querySelector('id4');
let dot5 = document.querySelector('id5');


switch (dot) {
    case 1: 
        dot1.classList.add(black);    
        dot2.classList.remove(black);
        dot3.classList.remove(black);    
        dot4.classList.remove(black);
        dot5.classList.remove(black);
    break;
    case 2:
        dot1.classList.remove(black);    
        dot2.classList.add(black);
        dot3.classList.remove(black);    
        dot4.classList.remove(black);
        dot5.classList.remove(black);
    break;
    case 3:
        dot1.classList.remove(black);    
        dot2.classList.remove(black);
        dot3.classList.add(black);    
        dot4.classList.remove(black);
        dot5.classList.remove(black);
    break;
    case 4:
        dot1.classList.remove(black);    
        dot2.classList.remove(black);
        dot3.classList.remove(black);    
        dot4.classList.add(black);
        dot5.classList.remove(black);
    break;
    case 5: 
        dot1.classList.remove(black);    
        dot2.classList.remove(black);
        dot3.classList.remove(black);    
        dot4.classList.remove(black);
        dot5.classList.add(black);
    break;
}