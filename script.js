let dot = 1
activate();
function left() {
    dot = dot - 1;
    activate();
    showSlides();
}

function right() {
    dot = dot + 1;
    activate();
    showSlides(); 
}

function activate() {
    if (dot < 1) {
        dot = 5;
    } else if (dot > 5) {
        dot = 1;
    }
    console.log(dot);
    let dot1 = document.getElementById('id1');
    let dot2 = document.getElementById('id2');
    let dot3 = document.getElementById('id3');
    let dot4 = document.getElementById('id4');
    let dot5 = document.getElementById('id5');

    
    switch (dot) {
        case 1: 
            dot1.classList.add('black');    
            dot2.classList.remove('black');
            dot3.classList.remove('black');    
            dot4.classList.remove('black');
            dot5.classList.remove('black');
        break;
        case 2:
            dot1.classList.remove('black');    
            dot2.classList.add('black');
            dot3.classList.remove('black');    
            dot4.classList.remove('black');
            dot5.classList.remove('black');
        break;
        case 3:
            dot1.classList.remove('black');    
            dot2.classList.remove('black');
            dot3.classList.add('black');    
            dot4.classList.remove('black');
            dot5.classList.remove('black');
        break;
        case 4:
            dot1.classList.remove('black');    
            dot2.classList.remove('black');
            dot3.classList.remove('black');    
            dot4.classList.add('black');
            dot5.classList.remove('black');
        break;
        case 5: 
            dot1.classList.remove('black');    
            dot2.classList.remove('black');
            dot3.classList.remove('black');    
            dot4.classList.remove('black');
            dot5.classList.add('black');
        break;
    }
}

// let slideIndex = 1;
showSlides(dot);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(dot += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(dot = n);
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > dot.length) {dot = 1}
  if (n < 1) {dot = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[dot-1].style.display = "block";
}
