//--------------------COMPONENTI COSTANTI
//astra
const astraBaloon = document.getElementById('toy_Baloon_astra');
const astraImage = document.getElementById('astra_image');
const astraChosen = document.getElementById('astra_button_choice');
const astraMoved = document.getElementById('toy_Baloon_astra');
const astraContainer = document.getElementById('astra_component_container');
const durationastraAnimation = 1300; // durata dell'animazione in millisecondi
//zenith
const zenithBaloon = document.getElementById('toy_Baloon_zenith');
const zenithImage = document.getElementById('zenith_image');
const zenithChosen = document.getElementById('zenith_button_choice');
const zenithMoved = document.getElementById('toy_Baloon_zenith');
const zenithContainer = document.getElementById('zenith_component_container');
const durationzenithAnimation = 1500; // durata dell'animazione in millisecondi
//soleil
const soleilBaloon = document.getElementById('toy_Baloon_soleil');
const soleilImage = document.getElementById('soleil_image');
const soleilChosen = document.getElementById('soleil_button_choice');
const soleilMoved = document.getElementById('toy_Baloon_soleil');
const soleilContainer = document.getElementById('soleil_component_container');
const durationsoleilAnimation = 1700; // durata dell'animazione in millisecondi

//--------------------COMPONENTI VARIABILI
//astra
let astraAnimationFrameId;
let astraAnimationStartTime;
let reverseastraAnimation = false;
//zenith
let zenithAnimationFrameId;
let zenithAnimationStartTime;
let reversezenithAnimation = false;
//soleil
let soleilAnimationFrameId;
let soleilAnimationStartTime;
let reversesoleilAnimation = false;

//--------------------FUNZIONI DI ANIMAZIONE
//astra baloon animation
function animateastraBaloon(timestamp) {
    if (!astraAnimationStartTime) astraAnimationStartTime = timestamp;
        const elapsed = timestamp - astraAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationastraAnimation;
    if (reverseastraAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    astraBaloon.style.marginBottom = `${marginBottom}%`;
    astraBaloon.style.marginLeft = `${marginLeft}%`;
    astraBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationastraAnimation) {
        astraAnimationFrameId = requestAnimationFrame(animateastraBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reverseastraAnimation = !reverseastraAnimation;
        astraAnimationStartTime = timestamp;
        astraAnimationFrameId = requestAnimationFrame(animateastraBaloon);
    }
}
//zenith baloon animation
function animatezenithBaloon(timestamp) {
    if (!zenithAnimationStartTime) zenithAnimationStartTime = timestamp;
        const elapsed = timestamp - zenithAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationzenithAnimation;
    if (reversezenithAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    zenithBaloon.style.marginBottom = `${marginBottom}%`;
    zenithBaloon.style.marginLeft = `${marginLeft}%`;
    zenithBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationzenithAnimation) {
        zenithAnimationFrameId = requestAnimationFrame(animatezenithBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reversezenithAnimation = !reversezenithAnimation;
        zenithAnimationStartTime = timestamp;
        zenithAnimationFrameId = requestAnimationFrame(animatezenithBaloon);
    }
}
//soleil baloon animation
function animatesoleilBaloon(timestamp) {
    if (!soleilAnimationStartTime) soleilAnimationStartTime = timestamp;
        const elapsed = timestamp - soleilAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationsoleilAnimation;
    if (reversesoleilAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    soleilBaloon.style.marginBottom = `${marginBottom}%`;
    soleilBaloon.style.marginLeft = `${marginLeft}%`;
    soleilBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationsoleilAnimation) {
        soleilAnimationFrameId = requestAnimationFrame(animatesoleilBaloon);
    } else {
      // Inverti la direzione dell'animazione
      reversesoleilAnimation = !reversesoleilAnimation;
        soleilAnimationStartTime = timestamp;
        soleilAnimationFrameId = requestAnimationFrame(animatesoleilBaloon);
    }
}

//-------------------- FUNZIONI DI START ANIMATION
//astra
function startAnimationastraBaloon() {
    astraAnimationStartTime = null;
    reverseastraAnimation = false;
    astraAnimationFrameId = requestAnimationFrame(animateastraBaloon);
}
//zenith
function startAnimationzenithBaloon() {
    zenithAnimationStartTime = null;
    reversezenithAnimation = false;
    zenithAnimationFrameId = requestAnimationFrame(animatezenithBaloon);
}
//soleil
function startAnimationsoleilBaloon() {
    soleilAnimationStartTime = null;
    reversesoleilAnimation = false;
    soleilAnimationFrameId = requestAnimationFrame(animatesoleilBaloon);
}

//-------------------- FUNZIONI DI STOP ANIMATION
//astra
function stopAnimationastraBaloon() {
    astraBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(astraAnimationFrameId);
    astraAnimationStartTime = null;
}
//zenith
function stopAnimationzenithBaloon() {
    zenithBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(zenithAnimationFrameId);
    zenithAnimationStartTime = null;
}
//soleil
function stopAnimationsoleilBaloon() {
    soleilBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(soleilAnimationFrameId);
    soleilAnimationStartTime = null;
}


//-------------------- FUNZIONI DI BUTTON PRESSED
//astra
function astraBaloonPressed() {
    console.log('toy_Baloon_astra premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (astraBaloon.classList.contains('straight_astra_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    astraBaloon.classList.remove('straight_astra_baloon');
    startAnimationastraBaloon();
    setTimeout(() => {
      astraBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    astraContainer.style.opacity = '0';
    astraImage.style.opacity = '0';
    astraImage.style.width = '0%'; 

    //disabilita il bottone let's go
    astraChosen.style.display = 'none';
    astraChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //astra
    astraMoved.classList.remove('movedAstraLeft');
    astraMoved.classList.remove('movedAstraUp');
        //zenith
    zenithBaloon.style.transition = 'all 0.15s ease-in-out';
    zenithMoved.classList.remove('movedZenith');
    startAnimationzenithBaloon();
        //soleil
    soleilBaloon.style.transition = 'all 0.15s ease-in-out';
    soleilMoved.classList.remove('movedSoleil');
    startAnimationsoleilBaloon();

  } else {

    //cambia la forma del baloon
    astraBaloon.style.transition = 'all 0.5s ease-in-out';
    astraBaloon.classList.add('straight_astra_baloon');
    stopAnimationastraBaloon();

    //rende visibile l'immagine
    astraContainer.style.opacity = '1';
    astraImage.style.opacity = '1';
    astraImage.style.width = '55%';

    //rende visibile e abilita il bottone
    astraChosen.style.display = 'flex';
    astraChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    zenithMoved.classList.add('movedZenith');
    soleilMoved.classList.add('movedSoleil');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //astra baloon
    astraMoved.classList.remove('movedAstraLeft');
    astraMoved.classList.remove('movedAstraUp');
        //zenith baloon
    zenithBaloon.classList.remove('straight_zenith_baloon');
    zenithBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    zenithContainer.style.opacity = '0';
    zenithImage.style.opacity = '0';
    zenithImage.style.width = '0%'; 
            //disabilita il bottone let's go
    zenithChosen.style.display = 'none';
    zenithChosen.style.opacity = '0';  
        //soleil baloon
    soleilBaloon.classList.remove('straight_soleil_baloon');
    soleilBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    soleilContainer.style.opacity = '0';
    soleilImage.style.opacity = '0';
    soleilImage.style.width = '0%'; 
            //disabilita il bottone let's go
    soleilChosen.style.display = 'none';
    soleilChosen.style.opacity = '0'; 

  }
}
//zenith
function zenithBaloonBaloonPressed() {
    console.log('toy_Baloon_zenith_premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (zenithBaloon.classList.contains('straight_zenith_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    zenithBaloon.classList.remove('straight_zenith_baloon');
    startAnimationzenithBaloon();
    setTimeout(() => {
        zenithBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    zenithContainer.style.opacity = '0';
    zenithImage.style.opacity = '0';
    zenithImage.style.width = '0%'; 

    //disabilita il bottone let's go
    zenithChosen.style.display = 'none';
    zenithChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //astra
    astraBaloon.style.transition = 'all 0.15s ease-in-out';
    astraMoved.classList.remove('movedAstraLeft');
    astraMoved.classList.remove('movedAstraUp');
    startAnimationastraBaloon();
        //zenith
    zenithMoved.classList.remove('movedZenith');
        //soleil
    soleilBaloon.style.transition = 'all 0.15s ease-in-out';
    soleilMoved.classList.remove('movedSoleil');
    startAnimationsoleilBaloon();

  } else {

    //cambia la forma del baloon
    zenithBaloon.style.transition = 'all 0.5s ease-in-out';
    zenithBaloon.classList.add('straight_zenith_baloon');
    stopAnimationzenithBaloon();

    //rende visibile l'immagine
    zenithContainer.style.opacity = '1';
    zenithImage.style.opacity = '1';
    zenithImage.style.width = '55%';

    //rende visibile e abilita il bottone
    zenithChosen.style.display = 'flex';
    zenithChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    astraMoved.classList.add('movedAstraLeft');
    soleilMoved.classList.add('movedSoleil');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //astra baloon
    astraBaloon.classList.remove('straight_astra_baloon');
    astraBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    astraContainer.style.opacity = '0';
    astraImage.style.opacity = '0';
    astraImage.style.width = '0%'; 
            //disabilita il bottone let's go
    astraChosen.style.display = 'none';
    astraChosen.style.opacity = '0'; 
        //zenith baloon
    zenithMoved.classList.remove('movedZenith');
        //soleil baloon
    soleilBaloon.classList.remove('straight_soleil_baloon');
    soleilBaloon.style.transition = 'all 0.15s ease-in-out';
        //rimpicciolisci l'immagine
    soleilContainer.style.opacity = '0';
    soleilImage.style.opacity = '0';
    soleilImage.style.width = '0%'; 
            //disabilita il bottone let's go
    soleilChosen.style.display = 'none';
    soleilChosen.style.opacity = '0'; 
    
  }
}
//soleil
function soleilBaloonBaloonPressed() {
    console.log('toy_Baloon_soleil premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (soleilBaloon.classList.contains('straight_soleil_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    soleilBaloon.classList.remove('straight_soleil_baloon');
    startAnimationsoleilBaloon();
    setTimeout(() => {
        soleilBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    soleilContainer.style.opacity = '0';
    soleilImage.style.opacity = '0';
    soleilImage.style.width = '0%'; 

    //disabilita il bottone let's go
    soleilChosen.style.display = 'none';
    soleilChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //astra
    astraBaloon.style.transition = 'all 0.15s ease-in-out';
    astraMoved.classList.remove('movedAstraLeft');
    astraMoved.classList.remove('movedAstraUp');
    startAnimationastraBaloon();
        //zenith
    zenithBaloon.style.transition = 'all 0.15s ease-in-out';
    zenithMoved.classList.remove('movedZenith');
    startAnimationzenithBaloon();
        //soleil
    soleilMoved.classList.remove('movedSoleil');

  } else {

    //cambia la forma del baloon
    soleilBaloon.style.transition = 'all 0.5s ease-in-out';
    soleilBaloon.classList.add('straight_soleil_baloon');
    stopAnimationsoleilBaloon();

    //rende visibile l'immagine
    soleilContainer.style.opacity = '1';
    soleilImage.style.opacity = '1';
    soleilImage.style.width = '50%';

    //rende visibile e abilita il bottone
    soleilChosen.style.display = 'flex';
    soleilChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    astraMoved.classList.add('movedAstraUp');
    zenithMoved.classList.add('movedZenith');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //astra baloon
    astraBaloon.classList.remove('straight_astra_baloon');
    astraMoved.classList.remove('movedAstraLeft');
    astraBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    astraContainer.style.opacity = '0';
    astraImage.style.opacity = '0';
    astraImage.style.width = '0%'; 
            //disabilita il bottone let's go
    astraChosen.style.display = 'none';
    astraChosen.style.opacity = '0'; 
        //zenith baloon
    zenithBaloon.classList.remove('straight_zenith_baloon');
    zenithBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    zenithContainer.style.opacity = '0';
    zenithImage.style.opacity = '0';
    zenithImage.style.width = '0%'; 
            //disabilita il bottone let's go
    zenithChosen.style.display = 'none';
    zenithChosen.style.opacity = '0';  
        //soleil baloon
    soleilMoved.classList.remove('movedSoleil');

  }
}

//-------------------- AGGIUNTA EVENTO CLICK AI COMPONENTI
//astra
astraBaloon.addEventListener('click', astraBaloonPressed);
//zenith
zenithBaloon.addEventListener('click', zenithBaloonBaloonPressed);
//soleil
soleilBaloon.addEventListener('click', soleilBaloonBaloonPressed);
// AVVIO ANIMAZIONI INIZIALI
//astra
startAnimationastraBaloon();
//zenith
startAnimationzenithBaloon();
//soleil
startAnimationsoleilBaloon();