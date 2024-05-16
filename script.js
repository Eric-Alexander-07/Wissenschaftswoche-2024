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
showSlides(dot);

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

let width = screen.width;

if (width <= 1000) {
    document.getElementById('bdy').innerHTML = `
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Keania+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="phone.css">
  <title>Der Lügendetektor</title>
</head>
<body>
  <div onclick="activate2()" class="navCircle">
    <div class="hamContainer">
      <img class="hamburger" src="assets/Hamburger_icon.png">
    </div>
    <div class="invisible">
      <a href="#" class="navSection">
        <p class="bigTitle">Startseite</p>
      </a>
      <a href="#about" class="navSection">
        <p class="bigTitle">Über uns</p>
      </a>
      <a style="height: fit-content;" href="#" class="navSection">
        <p style="background-color: #2B2222; height: fit-content;" class="bigTitle">Der Lügendetektor</p>
      </a>
      <a href="#funktion" class="navIcon">
        <p class="subTitle white">Funktionsweise</p>
      </a>
      <a href="#komponente" class="navIcon">
        <p class="subTitle white">Hauptkomponente</p>
      </a>
      <a href="#vorteile" class="navIcon">
        <p class="subTitle white">Vorteile</p>
      </a>
      <a href="#contact" class="navIcon down">
        <p class="subTitle white">Kontakt</p>
      </a>
    </div> 
  </div>

  <div class="section1">
    <div class="sec1">
      <p class="bigTitle white">Entdecken Sie die<br>Wahrheit mit<br>Lügendetektoren </p>
      <p class="subTitle white">Erfahren Sie, wie Lügendetektoren die<br>Wissenschaft und Justiz<br>beeinflussen.</p>
      <a href="Wissenschaft & Justiz.docx-2.pdf">
        <div id="funktion" class="button">
          <p class="subTitle white">Mehr Erfahren</p>
        </div>
      </a>
    </div>
  </div>
  <div class="section2" style="display: grid;">
    <div class="flex">
      <div class="l">
          <img class="scalable" src="assets/image1.png">
      </div>
      <div class="r">
        <p class="subTitle" style="font-size: 15px;">Vertrauen</p>
        <p class="bigTitle" style="font-size: 20px;">Die Warheit entdecken: Die Funktionsweise von Lügendetektoren</p>
      </div>
    </div>
    <div>
      <p class="subTitle">Lügendetektoren sind ein faszinierendes Werkzeug zur Erkennung von Lügen. Erfahren Sie mehr über ihre Funktionsweise und erhalten Sie einen kurzen historischen Überblick über ihre Entwicklung.</p>
      <div id="komponente" class="flex">
      <a href="Wie funktioniert der Lügendetektor.docx-2.pdf">
        <div class="button" style="border-radius: 50px; width: 140px;">
          <p class="subTitle white">Mehr Erfahren</p>
        </div>
      </a>
      <a href="#" class="subTitle jetztAnsehen" style="margin-top: 30px; margin-left: 50px;">Jetzt ansehen ></a>
      </div>
    </div>
  </div>
  <div class="section3">
    <div>
      <p class="subTitle white">Vertrauen</p>
      <p class="bigTitle white">Die Hauptkomponenten von Lügendetektoren</p>
      <div style="width: 100%; justify-content: center; display: flex;">
        <p class="subTitle white" style="max-width: 800px;">Lügendetektoren bestehen aus drei Hauptkomponenten: physiologische Sensoren, einer Datenverarbeitungseinheit und Auswertungssoftware. Diese Komponente arbeiten zusammen, um Veränderungen in der körperlichen Reaktion einer Person auf Fragen zu messen und zu analysieren.</p>
      </div>
    </div>
  </div>
  <div class="grid">
    <a href="Wie funktioniert der Lügendetektor.docx-2.pdf">
      <div class="card">
        <img src="assets/Rectangle 35.png">
        <p class="bigTitle white">Physiologische Sensoren</p>
        <p class="subTitle white" style="margin-bottom: 50px;">Physiologische Sensoren erfassen physiologische Reaktionen wie Herzfrequenz, Hautleitwert und Atemmuster.</p>
        <a href="#" class="subTitle white">Mehr Erfahren ></a>
      </div>
    </a>
    <a href="Wie funktioniert der Lügendetektor.docx-2.pdf">
      <div class="card">
        <img src="assets/Rectangle 35.png">
        <p class="bigTitle white">Datenverarbeungs-einheit</p>
        <p class="subTitle white" style="margin-bottom: 50px;">Die Datenverarbeitungseinheit analysiert die von den Sensoren gesammelten Daten und bereitet sie für die Auswertung vor.</p>
        <a href="#" class="subTitle white">Mehr Erfahren ></a>
      </div>
    </a>
    <a href="Wie funktioniert der Lügendetektor.docx-2.pdf">
      <div class="card">
        <img src="assets/Rectangle 35.png">
        <p class="bigTitle white">Auswertungs-software</p>
        <p class="subTitle white" style="margin-bottom: 25px;">Die Auswertungssoftware interpretiert die Daten und gibt eine Aussage darüber ab, ob die Person die Wahrheit sagt oder lügt.</p>
        <a href="#" class="subTitle white">Mehr Erfahren ></a>
      </div>
    </a>
  </div>
  <div id="vorteile" class="section4 grid" style="margin: 10px;">
    <div class="flex" style="padding-left: 10px;">
      <div class="r" style="width: fit-content;">
        <img style="width: 15px;" src="assets/Rectangle 35.png">
        <p class="bigTitle" style="font-size: 15px;">Vorteile von Lügendetektoren in<br>verschiedenen<br>Einsatzgebieten</p>
      </div>
      <div class="l" style="width: 80%;">
          <img class="scalable" src="assets/image2.png">
      </div>
    </div>
    <div class="flex" style="padding: 10px;">
      <p class="subTitle" style="font-size: 12px;">Lügendetektoren bieten zahlreiche Vorteile in verschiedenen Bereichen. Sie können dabei helfen, die Wahrheit aufzudecken und die Sicherheit zu gewährleisten.</p>
      <div class="flex">
        <a href="Vor und Nachteile.docx-2.pdf">
          <div class="button" style="border-radius: 50px; width: 80px; height: 30px;">
            <p class="subTitle white" style="font-size: 10px;">Mehr Erfahren</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="section5 grid" style="margin-top: 50px;">
    <div class="flex" style="margin-bottom: 15px;">
      <img class="scalable" src="assets/image3.png">
    </div>
    <div class="flex">
      <div class="r">
        <p class="bigTitle" style="font-size: 20px;">Diskutieren Sie die<br>Sicherheit von<br>Lügendetektoren</p>
      </div>
        <a href="#contact">
          <div id="bewertung" class="button" style="border-radius: 50px;">
            <p style="font-size: 12px;" class="subTitle white">Kontaktieren</p>
          </div>
        </a>
    </div>
    <div class="flex">
      <p class="subTitle" style="font-size: 12px;">Erfahren Sie mehr über die Wirksamkeit von Lügendetektoren und ihre Verwendung während der Wissenschaftswoche.</p>
    </div>
  </div>
  <div class="section6" style="margin-top: 0;">
    <div class="two">
      <div class="flex1">
        <div class="comment mySlides fade comment1" style="margin-left: auto;">
          <div class="starContainer">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
          </div>
          <p class="subTitle" style="font-weight: 600;">Der Lügendetektor ist eine Maschine, die oft die Wahrheit sagt, aber nie die ganze Wahrheit.</p>
          <div class="profileContainer">
            <img class="scalable" src="assets/Evan-Esar 1.png">
            <div>
              <p class="subTitle" style="font-weight: 600;">Evan Esar</p>
              <p class="subTitle">Theologe und Philosoph</p>
            </div>
            <img class="line" src="assets/Rectangle 14.png">
            <img class="scalable" src="assets/istockphoto-1258141369-612x612 1.png">
          </div>
        </div>  
        <div class="comment mySlides fade">
          <div class="starContainer">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
          </div>
          <p class="subTitle" style="font-weight: 600;">Lügendetektoren sind heute vor den meisten Gerichten der Welt nicht als Beweismittel zugelassen. Sie sind zu unzuverlässig und zu unpraktisch. Ein britischer Wissenschaftler hat nun ein Gerät entwickelt, das versucht, beide Probleme gleichzeitig anzugehen.</p>
          <div class="profileContainer">
            <img class="scalable" src="assets/fanny_jimenez 1.png">
            <div>
              <p class="subTitle" style="font-weight: 600;">Fanny Jimenez</p>
              <p class="subTitle">Business Insider</p>
            </div>
            <img class="line" src="assets/Rectangle 14.png">
            <img class="scalable" style="border: 2px solid; border-radius: 50px;" src="assets/business-insider-logo.png">
          </div>
        </div>
        <div class="comment mySlides fade">
          <div class="starContainer">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 2.png">
          </div>
          <p class="subTitle" style="font-weight: 600;">Die Wahrheit zu sagen ist die beste Art, sich zu verteidigen.</p>
          <div class="profileContainer">
            <img class="scalable" src="assets/ovid.png">
            <div>
              <p class="subTitle" style="font-weight: 600;">Ovid</p>
              <p class="subTitle">Dichter der Antike</p>
            </div>
            <img class="line" src="assets/Rectangle 14.png">
            <img class="scalable" src="assets/feather-pen 1.png">
          </div>
        </div>
        <div class="comment mySlides fade" style="margin-right: auto;">
          <div class="starContainer">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
          </div>
          <p class="subTitle" style="font-weight: 600;">Lügendetektoren können uns Informationen geben, aber sie können uns nicht die Wahrheit erzählen.</p>
          <div class="profileContainer">
            <img class="scalable" src="assets/GeneHackmanJun08 1.png">
            <div>
              <p class="subTitle" style="font-weight: 600;">Gene Hackman</p>
              <p class="subTitle">Schauspieler</p>
            </div>
            <img class="line" src="assets/Rectangle 14.png">
            <img class="scalable" src="assets/theatermasken-ikonenschattenbild-verantwortungsvolles-logo-des-theaterdramakomödienvektorikonen-schauspielers-191228845 1.png">
          </div>
        </div>
        <div class="comment mySlides fade" style="margin-right: auto;">
          <div class="starContainer">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 1.png">
            <img src="assets/Star 2.png">
            <img src="assets/Star 2.png">
          </div>
          <p class="subTitle" style="font-weight: 600;">Der Lügendetektor, der Mann und die Maschine, die sich nie einig sind.</p>
          <div class="profileContainer">
            <img class="scalable" src="assets/robert.png">
            <div>
              <p class="subTitle" style="font-weight: 600;">Robert Brault</p>
              <p class="subTitle">Autor</p>
            </div>
            <img class="line" src="assets/Rectangle 14.png">
            <img class="scalable" src="assets/feather-pen 1.png">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex" style="justify-content: space-evenly;">
    <div class="one">
      <div onclick="left(), plusSlides(-1)" class="circle">
        <img src="assets/Arrow 1.png">
      </div>
    </div>
    <div id="about" class="flex" style="margin-top: 20px;">
      <img class="circle1" id="id1" src="assets/Ellipse 3.png">
      <img class="circle1" id="id2" src="assets/Ellipse 3.png">
      <img class="circle1" id="id3" src="assets/Ellipse 3.png">
      <img class="circle1" id="id4" src="assets/Ellipse 3.png">
      <img class="circle1" id="id5" src="assets/Ellipse 3.png">
    </div>
    <div class="three">
      <div onclick="right(), plusSlides(1)" class="circle">
        <img src="assets/Arrow 2.png">
      </div>
    </div>
  </div>
  <div class="section7">
    <p class="subTitle">Vertrauen</p>
    <p class="bigTitle">Unser Team</p>
    <p class="subTitle">Erfahren in der Lügendetektion, bereit Ihnen zu helfen.</p>
    <div class="sec7Container grid">
      <div class="card1">
        <div class="flex">
          <div class="imgContainer1">
            <img class="sec7Img" src="assets/Eric2.png">
          </div>
          <div>
            <p class="subTitle">Eric Schuck</p>
            <p class="subTitle" style="font-size: 15px; margin-bottom: 10px;">Experte</p>
          </div>
        </div>
        <p class="subTitle">Seit einer Woche lerne ich über den Lügendetektor und bin inzwischen Experte auf diesem Gebiet.</p>
        <div style="margin-top: 10px;">
        <a href="https://www.instagram.com/_ericschuck_/"><img class="scalable" src="assets/insta.png"></a>
        <a href=""><img class="scalable" src="assets/phone.png"></a>
        <a href="mailto:eschuck58@gmail.com"><img class="scalable" src="assets/mail.png"></a>
        </div>
      </div>
      <div class="card1">
        <div class="flex">
          <div class="imgContainer1">
            <img class="sec7Img" src="assets/david.png">
          </div>
          <div>
            <p class="subTitle">David Helfrich</p>
            <p class="subTitle" style="font-size: 15px; margin-bottom: 10px;">Spezialist</p>
          </div>
        </div>
        <p class="subTitle">Seit einer Woche lerne ich über den Lügendetektor und bin inzwischen Experte auf diesem Gebiet.</p>
        <div style="margin-top: 10px;">
        <a href="https://www.instagram.com/david.hsg.99/"><img class="scalable" src="assets/insta.png"></a>
        <a href=""><img class="scalable" src="assets/phone.png"></a>
        <a href="mailto:helfrichdavid07@gmail.com"><img class="scalable" src="assets/mail.png"></a>
        </div>
      </div>
      <div class="card1">
        <div class="flex">
          <div class="imgContainer1">
            <img class="sec7Img" src="assets/Laurin.png">
          </div>
          <div>
            <p class="subTitle">Laurin Lorke</p>
            <p class="subTitle" style="font-size: 15px; margin-bottom: 10px;">Experte</p>
          </div>
        </div>
        <p class="subTitle">Seit einer Woche lerne ich über den Lügendetektor und bin inzwischen Experte auf diesem Gebiet.</p>
        <div style="margin-top: 10px;">
        <a href="https://www.instagram.com/08laurin80/"><img class="scalable" src="assets/insta.png"></a>
        <a href=""><img class="scalable" src="assets/phone.png"></a>
        <a href="mailto:lorke_laurin@yahoo.com"><img class="scalable" src="assets/mail.png"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="section8" style="display: grid;">
    <div class="left" style="align-items: top;">
      <div>
        <p class="bigTitle">Häufige Fragen</p>
        <p class="subTitle">Hier finden Sie weitere häufig gestellte Fragen zu ethischen Bedenken und wissenschaftlichen Erkenntnissen rund um Lügendetektoren.</p>
        <a href="mailto:eschuck58@gmail.com" target="_blank">
          <div class="button" style="border-radius: 50px; margin-bottom: 50px;">
            <p class="subTitle white">Kontakt</p>
          </div>
        </a>
      </div>
    </div>

    <div class="section8r">
      <div class="borderq">
      </div>
      <div class="question1">
        <div class="section8question">
          <div class="question">
            <p>Ist ein Lügendetektor zuverlässig?</p>
          </div>
          <div class="arrowdownIcon">
            <img class="icon" src="assets/arrow-down.svg" onclick="openDropdown('exQ1', 'pQ1')">
          </div>
        </div>
        <div class="contentquestion">
          <p>
            Die Zuverlässigkeit eines Lügendetektors hängt von 
            <span class="invisible x" id="exQ1">verschiedenen Faktoren ab, einschließlich der Erfahrung des Prüfers und der Art der Befragung bzw. des CQT - Lügendetektors.</span>
            <span class="y " id="pQ1">...</span>
          </p>
          <div class="extendedContentQ">
  
          </div>
        </div>
        
      </div>
      <div class="borderq">
      </div>
      <div class="question1">
        <div class="section8question">
          <div class="question">
            <p>Wie funktioniert ein Lügendetektor?</p>
          </div>
          <div class="arrowdownIcon">
            <img onclick="openDropdown('exQ2', 'pQ2')" class="icon" src="assets/arrow-down.svg">
          </div>
        </div>
        <div class="contentquestion">
          <p>
            Ein Lügendetektor misst verschiedene physiologische Reaktionen wie  
            <span class="invisible x" id="exQ2">Herzschlag, Blutdruck und Hautleitfähigkeit, um Anzeichen von Stress oder Unwarheit zu erkennen</span>
            <span class="y " id="pQ2">...</span>
          </p>
      </div>
      <div class="borderq">
      </div>
      <div class="question1">
        <div class="section8question">
          <div class="question">
            <p>Ist ein Lügendetektor legal?</p>
          </div>
          <div class="arrowdownIcon">
            <img id="iconar" class="icon" src="assets/arrow-down.svg" onclick="openDropdown('exQ3', 'pQ3')">
          </div>
        </div>
        <div class="contentquestion">
          <p>
            Die Verwendung von Lügendetektoren ist in einigen Ländern eingeschränkt (inklusive Deutschland) und 
            <span id="exQ3" class="invisible x">kann nur in bestimmten Situationen genutzt werden. Außerdem sind Auswertung der Lügendetektoren vor Gericht  als Beweise selten zulässig und auch leicht abstreitbar. </span>
            <span class="y" id="pQ3">...</span>  
          </p>
          
        </div>
      </div>
      <div class="borderq">
      </div>
      <div class="question1">
        <div class="section8question">
          <div class="question">
            <p>Kann ein Lügendetektor manipuliert werden?</p>
          </div>
          <div class="arrowdownIcon">
            <img id="iconar" class="icon" src="assets/arrow-down.svg" onclick="openDropdown('exQ4', 'pQ4')">
          </div>
        </div>
        <div class="contentquestion">
          <p style="transition: all 0.5s ease;">
            Ja, Lügendetektoren können durch verschiedene Methoden 
            <span id="exQ4" class="invisible x"> manipuliert werden, wie beispielweise durch die Verwendung von Gegenmaßnahmen, das bedeutet z.B kontrollieren von physiologische Reaktionen, etc. </span>
            <span class="y" id="pQ4">...</span>  
          </p>
        </div>
        <div class="borderq">
        </div>
  </div>
  </div>
  </div>
  </div>
  <div class="section9">
    <div style="width: 70px;">
      <img class="scalable" src="assets/profile.png">
    </div>
    <div style="display: grid; margin-left: 10px;">
      <a href="#" class="subTitle" style="font-weight: 700;">Der Lügendetektor</a>
      <a href="#funktion" class="subTitle">Funktion</a>
      <a href="#vorteile" class="subTitle">Vorteile</a>
      <a href="#bewertung" class="subTitle">Bewertungen</a>
    </div>
    <div style="margin-left: 10px;">
      <p class="subTitle" style="font-weight: 700; font-size: 10px;">Kontakt</p>
      <p class="subTitle" style="font-size: 10px;">Bleiben Sie auf dem Laufenden.</p>
      <a href="mailto:eschuck58@gmail.com" target="_blank">
        <div id="contact" class="button" style="border-radius: 50px; width: 60px; height: 25px;">
          <p class="subTitle white" style="font-size: 10px;">Email</p>
        </div>
      </a>
    </div>
  </div>
  <div class="section10">
    <div>
      <p style="font-size: 8px;">© 2024 Wissenschaftswoche. Alle Rechte vorbehalten.</p>
    </div>
    <div style="display: flex;">
      <p class="subTitle" style="margin: 0 15px 0 0; font-size: 10px;">Eric Schuck</p>
      <p class="subTitle" style="margin: 0 15px 0 0; font-size: 10px;">David Helfrich</p>
      <p class="subTitle" style="margin: 0 15px 0 0; font-size: 10px;">Laurin Lorke</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
    `;
dot = 1;
showSlides(1);
activate();
}

var check = false;

function activate2 () {
  check = !check;
  if (check === true) {
    document.querySelector('.navCircle').classList.add('activate');
    document.querySelector('.hamContainer').classList.add('ham');
    document.querySelector('.invisible').classList.add('shown');
  } else {
    document.querySelector('.navCircle').classList.remove('activate');
    document.querySelector('.hamContainer').classList.remove('ham');
    document.querySelector('.invisible').classList.remove('shown');
  }
}

function openDropdown(id, idP) {
    var Close = document.getElementsByClassName('x');
    var points = document.getElementById(idP);
    var Dropdown = document.getElementById(id);
    console.log('läuft');
    console.log(idP, id);
    console.log(Close);
    Dropdown.classList.toggle('invisible');
    points.classList.toggle('invisible');
}