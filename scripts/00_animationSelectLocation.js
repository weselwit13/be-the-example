//--------------------COMPONENTI COSTANTI
//garden
const gardenBaloon = document.getElementById('place_Baloon_garden');
const gardenImage = document.getElementById('garden_image');
const gardenChosen = document.getElementById('garden_button_choice');
const gardenMoved = document.getElementById('place_Baloon_garden');
const durationGardenAnimation = 1300; // durata dell'animazione in millisecondi
//attic
const atticBaloon = document.getElementById('place_Baloon_attic');
const atticImage = document.getElementById('attic_image');
const atticChosen = document.getElementById('attic_button_choice');
const atticMoved = document.getElementById('place_Baloon_attic');
const durationAtticAnimation = 1500; // durata dell'animazione in millisecondi
//park
const parkBaloon = document.getElementById('place_Baloon_park');
const parkImage = document.getElementById('park_image');
const parkChosen = document.getElementById('park_button_choice');
const parkMoved = document.getElementById('place_Baloon_park');
const durationParkAnimation = 1700; // durata dell'animazione in millisecondi

//--------------------COMPONENTI VARIABILI
//garden
let gardenAnimationFrameId;
let gardenAnimationStartTime;
let reverseGardenAnimation = false;
//attic
let atticAnimationFrameId;
let atticAnimationStartTime;
let reverseAtticAnimation = false;
//park
let parkAnimationFrameId;
let parkAnimationStartTime;
let reverseParkAnimation = false;

//--------------------FUNZIONI DI ANIMAZIONE
//garden baloon animation
function animateGardenBaloon(timestamp) {
    if (!gardenAnimationStartTime) gardenAnimationStartTime = timestamp;
        const elapsed = timestamp - gardenAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationGardenAnimation;
    if (reverseGardenAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    gardenBaloon.style.marginBottom = `${marginBottom}%`;
    gardenBaloon.style.marginLeft = `${marginLeft}%`;
    gardenBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationGardenAnimation) {
        gardenAnimationFrameId = requestAnimationFrame(animateGardenBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reverseGardenAnimation = !reverseGardenAnimation;
        gardenAnimationStartTime = timestamp;
        gardenAnimationFrameId = requestAnimationFrame(animateGardenBaloon);
    }
}
//attic baloon animation
function animateAtticBaloon(timestamp) {
    if (!atticAnimationStartTime) atticAnimationStartTime = timestamp;
        const elapsed = timestamp - atticAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationAtticAnimation;
    if (reverseAtticAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    atticBaloon.style.marginBottom = `${marginBottom}%`;
    atticBaloon.style.marginLeft = `${marginLeft}%`;
    atticBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationAtticAnimation) {
        atticAnimationFrameId = requestAnimationFrame(animateAtticBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reverseAtticAnimation = !reverseAtticAnimation;
        atticAnimationStartTime = timestamp;
        atticAnimationFrameId = requestAnimationFrame(animateAtticBaloon);
    }
}
//park baloon animation
function animateParkBaloon(timestamp) {
    if (!parkAnimationStartTime) parkAnimationStartTime = timestamp;
        const elapsed = timestamp - parkAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationParkAnimation;
    if (reverseParkAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    parkBaloon.style.marginBottom = `${marginBottom}%`;
    parkBaloon.style.marginLeft = `${marginLeft}%`;
    parkBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationParkAnimation) {
        parkAnimationFrameId = requestAnimationFrame(animateParkBaloon);
    } else {
      // Inverti la direzione dell'animazione
      reverseParkAnimation = !reverseParkAnimation;
        parkAnimationStartTime = timestamp;
        parkAnimationFrameId = requestAnimationFrame(animateParkBaloon);
    }
}

//-------------------- FUNZIONI DI START ANIMATION
//garden
function startAnimationGardenBaloon() {
    gardenAnimationStartTime = null;
    reverseGardenAnimation = false;
    gardenAnimationFrameId = requestAnimationFrame(animateGardenBaloon);
}
//attic
function startAnimationAtticBaloon() {
    atticAnimationStartTime = null;
    reverseAtticAnimation = false;
    atticAnimationFrameId = requestAnimationFrame(animateAtticBaloon);
}
//park
function startAnimationParkBaloon() {
    parkAnimationStartTime = null;
    reverseParkAnimation = false;
    parkAnimationFrameId = requestAnimationFrame(animateParkBaloon);
}

//-------------------- FUNZIONI DI STOP ANIMATION
//garden
function stopAnimationGardenBaloon() {
    gardenBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(gardenAnimationFrameId);
    gardenAnimationStartTime = null;
}
//attic
function stopAnimationAtticBaloon() {
    atticBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(atticAnimationFrameId);
    atticAnimationStartTime = null;
}
//park
function stopAnimationParkBaloon() {
    parkBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(parkAnimationFrameId);
    parkAnimationStartTime = null;
}


//-------------------- FUNZIONI DI BUTTON PRESSED
//garden
function gardenBaloonPressed() {
    console.log('place_Baloon_garden premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (gardenBaloon.classList.contains('straight_garden_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    gardenBaloon.classList.remove('straight_garden_baloon');
    startAnimationGardenBaloon();
    setTimeout(() => {
      gardenBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    gardenImage.style.opacity = '0';
    gardenImage.style.width = '0%'; 

    //disabilita il bottone let's go
    gardenChosen.style.display = 'none';
    gardenChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //garden
    gardenMoved.classList.remove('movedGardenLeft');
    gardenMoved.classList.remove('movedGardenUp');
        //attic
    atticBaloon.style.transition = 'all 0.15s ease-in-out';
    atticMoved.classList.remove('movedAttic');
    startAnimationAtticBaloon();
        //park
    parkBaloon.style.transition = 'all 0.15s ease-in-out';
    parkMoved.classList.remove('movedPark');
    startAnimationParkBaloon();

  } else {

    //cambia la forma del baloon
    gardenBaloon.style.transition = 'all 0.5s ease-in-out';
    gardenBaloon.classList.add('straight_garden_baloon');
    stopAnimationGardenBaloon();

    //rende visibile l'immagine
    gardenImage.style.opacity = '1';
    gardenImage.style.width = '80%';

    //rende visibile e abilita il bottone
    gardenChosen.style.display = 'flex';
    gardenChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    atticMoved.classList.add('movedAttic');
    parkMoved.classList.add('movedPark');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //garden baloon
    gardenMoved.classList.remove('movedGardenLeft');
    gardenMoved.classList.remove('movedGardenUp');
        //attic baloon
    atticBaloon.classList.remove('straight_attic_baloon');
    atticBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    atticImage.style.opacity = '0';
    atticImage.style.width = '0%'; 
            //disabilita il bottone let's go
    atticChosen.style.display = 'none';
    atticChosen.style.opacity = '0';  
        //park baloon
    parkBaloon.classList.remove('straight_park_baloon');
    parkBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    parkImage.style.opacity = '0';
    parkImage.style.width = '0%'; 
            //disabilita il bottone let's go
    parkChosen.style.display = 'none';
    parkChosen.style.opacity = '0'; 

  }
}
//attic
function atticBaloonBaloonPressed() {
    console.log('place_Baloon_attic_premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (atticBaloon.classList.contains('straight_attic_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    atticBaloon.classList.remove('straight_attic_baloon');
    startAnimationAtticBaloon();
    setTimeout(() => {
        atticBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    atticImage.style.opacity = '0';
    atticImage.style.width = '0%'; 

    //disabilita il bottone let's go
    atticChosen.style.display = 'none';
    atticChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //garden
    gardenBaloon.style.transition = 'all 0.15s ease-in-out';
    gardenMoved.classList.remove('movedGardenLeft');
    gardenMoved.classList.remove('movedGardenUp');
    startAnimationGardenBaloon();
        //attic
    atticMoved.classList.remove('movedAttic');
        //park
    parkBaloon.style.transition = 'all 0.15s ease-in-out';
    parkMoved.classList.remove('movedPark');
    startAnimationParkBaloon();

  } else {

    //cambia la forma del baloon
    atticBaloon.style.transition = 'all 0.5s ease-in-out';
    atticBaloon.classList.add('straight_attic_baloon');
    stopAnimationAtticBaloon();

    //rende visibile l'immagine
    atticImage.style.opacity = '1';
    atticImage.style.width = '80%';

    //rende visibile e abilita il bottone
    atticChosen.style.display = 'flex';
    atticChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    gardenMoved.classList.add('movedGardenLeft');
    parkMoved.classList.add('movedPark');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //garden baloon
    gardenBaloon.classList.remove('straight_garden_baloon');
    gardenBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    gardenImage.style.opacity = '0';
    gardenImage.style.width = '0%'; 
            //disabilita il bottone let's go
    gardenChosen.style.display = 'none';
    gardenChosen.style.opacity = '0'; 
        //attic baloon
    atticMoved.classList.remove('movedAttic');
        //park baloon
    parkBaloon.classList.remove('straight_park_baloon');
    parkBaloon.style.transition = 'all 0.15s ease-in-out';
        //rimpicciolisci l'immagine
    parkImage.style.opacity = '0';
    parkImage.style.width = '0%'; 
            //disabilita il bottone let's go
    parkChosen.style.display = 'none';
    parkChosen.style.opacity = '0'; 
    
  }
}
//park
function parkBaloonBaloonPressed() {
    console.log('place_Baloon_park premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (parkBaloon.classList.contains('straight_park_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    parkBaloon.classList.remove('straight_park_baloon');
    startAnimationParkBaloon();
    setTimeout(() => {
        parkBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    parkImage.style.opacity = '0';
    parkImage.style.width = '0%'; 

    //disabilita il bottone let's go
    parkChosen.style.display = 'none';
    parkChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //garden
    gardenBaloon.style.transition = 'all 0.15s ease-in-out';
    gardenMoved.classList.remove('movedGardenLeft');
    gardenMoved.classList.remove('movedGardenUp');
    startAnimationGardenBaloon();
        //attic
    atticBaloon.style.transition = 'all 0.15s ease-in-out';
    atticMoved.classList.remove('movedAttic');
    startAnimationAtticBaloon();
        //park
    parkMoved.classList.remove('movedPark');

  } else {

    //cambia la forma del baloon
    parkBaloon.style.transition = 'all 0.5s ease-in-out';
    parkBaloon.classList.add('straight_park_baloon');
    stopAnimationParkBaloon();

    //rende visibile l'immagine
    parkImage.style.opacity = '1';
    parkImage.style.width = '80%';

    //rende visibile e abilita il bottone
    parkChosen.style.display = 'flex';
    parkChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    gardenMoved.classList.add('movedGardenUp');
    atticMoved.classList.add('movedAttic');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //garden baloon
    gardenBaloon.classList.remove('straight_garden_baloon');
    gardenMoved.classList.remove('movedGardenLeft');
    gardenBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    gardenImage.style.opacity = '0';
    gardenImage.style.width = '0%'; 
            //disabilita il bottone let's go
    gardenChosen.style.display = 'none';
    gardenChosen.style.opacity = '0'; 
        //attic baloon
    atticBaloon.classList.remove('straight_attic_baloon');
    atticBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    atticImage.style.opacity = '0';
    atticImage.style.width = '0%'; 
            //disabilita il bottone let's go
    atticChosen.style.display = 'none';
    atticChosen.style.opacity = '0';  
        //park baloon
    parkMoved.classList.remove('movedPark');

  }
}

//-------------------- AGGIUNTA EVENTO CLICK AI COMPONENTI
//garden
gardenBaloon.addEventListener('click', gardenBaloonPressed);
//attic
atticBaloon.addEventListener('click', atticBaloonBaloonPressed);
//park
parkBaloon.addEventListener('click', parkBaloonBaloonPressed);
// AVVIO ANIMAZIONI INIZIALI
//garden
startAnimationGardenBaloon();
//attic
startAnimationAtticBaloon();
//park
startAnimationParkBaloon();