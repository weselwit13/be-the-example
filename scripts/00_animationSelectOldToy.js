//--------------------COMPONENTI COSTANTI
//cosmo
const cosmoBaloon = document.getElementById('toy_Baloon_cosmo');
const cosmoImage = document.getElementById('cosmo_image');
const cosmoChosen = document.getElementById('cosmo_button_choice');
const cosmoMoved = document.getElementById('toy_Baloon_cosmo');
const cosmoContainer = document.getElementById('cosmo_component_container');
const durationCosmoAnimation = 1300; // durata dell'animazione in millisecondi
//sphere
const sphereBaloon = document.getElementById('toy_Baloon_sphere');
const sphereImage = document.getElementById('sphere_image');
const sphereChosen = document.getElementById('sphere_button_choice');
const sphereMoved = document.getElementById('toy_Baloon_sphere');
const sphereContainer = document.getElementById('sphere_component_container');
const durationSphereAnimation = 1500; // durata dell'animazione in millisecondi
//piecey
const pieceyBaloon = document.getElementById('toy_Baloon_piecey');
const pieceyImage = document.getElementById('piecey_image');
const pieceyChosen = document.getElementById('piecey_button_choice');
const pieceyMoved = document.getElementById('toy_Baloon_piecey');
const pieceyContainer = document.getElementById('piecey_component_container');
const durationPieceyAnimation = 1700; // durata dell'animazione in millisecondi

//--------------------COMPONENTI VARIABILI
//cosmo
let cosmoAnimationFrameId;
let cosmoAnimationStartTime;
let reversecosmoAnimation = false;
//sphere
let sphereAnimationFrameId;
let sphereAnimationStartTime;
let reversesphereAnimation = false;
//piecey
let pieceyAnimationFrameId;
let pieceyAnimationStartTime;
let reversepieceyAnimation = false;

//--------------------FUNZIONI DI ANIMAZIONE
//cosmo baloon animation
function animateCosmoBaloon(timestamp) {
    if (!cosmoAnimationStartTime) cosmoAnimationStartTime = timestamp;
        const elapsed = timestamp - cosmoAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationCosmoAnimation;
    if (reversecosmoAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    cosmoBaloon.style.marginBottom = `${marginBottom}%`;
    cosmoBaloon.style.marginLeft = `${marginLeft}%`;
    cosmoBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationCosmoAnimation) {
        cosmoAnimationFrameId = requestAnimationFrame(animateCosmoBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reversecosmoAnimation = !reversecosmoAnimation;
        cosmoAnimationStartTime = timestamp;
        cosmoAnimationFrameId = requestAnimationFrame(animateCosmoBaloon);
    }
}
//sphere baloon animation
function animateSphereBaloon(timestamp) {
    if (!sphereAnimationStartTime) sphereAnimationStartTime = timestamp;
        const elapsed = timestamp - sphereAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationSphereAnimation;
    if (reversesphereAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    sphereBaloon.style.marginBottom = `${marginBottom}%`;
    sphereBaloon.style.marginLeft = `${marginLeft}%`;
    sphereBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationSphereAnimation) {
        sphereAnimationFrameId = requestAnimationFrame(animateSphereBaloon);
    } else {
      // Inverti la direzione dell'animazione
        reversesphereAnimation = !reversesphereAnimation;
        sphereAnimationStartTime = timestamp;
        sphereAnimationFrameId = requestAnimationFrame(animateSphereBaloon);
    }
}
//piecey baloon animation
function animatePieceyBaloon(timestamp) {
    if (!pieceyAnimationStartTime) pieceyAnimationStartTime = timestamp;
        const elapsed = timestamp - pieceyAnimationStartTime;

  // Calcola la progressione dell'animazione
    let progress = elapsed / durationPieceyAnimation;
    if (reversepieceyAnimation) {
        progress = 1 - progress;
    }
    progress = Math.min(Math.max(progress, 0), 1)*2;

    // Calcola i valori delle proprietà animate
    const marginBottom = 0 + (10) * progress;
    const marginLeft = -1.5 + (3) * progress;
    const rotate = 20 - (25) * progress;
    const rotate3d = 5 + (5) * progress;

    // Applica i valori calcolati all'elemento
    pieceyBaloon.style.marginBottom = `${marginBottom}%`;
    pieceyBaloon.style.marginLeft = `${marginLeft}%`;
    pieceyBaloon.style.transform = `rotate(${rotate}deg) rotate3d(1, 1, 1, ${rotate3d}deg)`;

    // Ripeti l'animazione se non è terminata
    if (elapsed < durationPieceyAnimation) {
        pieceyAnimationFrameId = requestAnimationFrame(animatePieceyBaloon);
    } else {
      // Inverti la direzione dell'animazione
      reversepieceyAnimation = !reversepieceyAnimation;
        pieceyAnimationStartTime = timestamp;
        pieceyAnimationFrameId = requestAnimationFrame(animatePieceyBaloon);
    }
}

//-------------------- FUNZIONI DI START ANIMATION
//cosmo
function startAnimationCosmoBaloon() {
    cosmoAnimationStartTime = null;
    reversecosmoAnimation = false;
    cosmoAnimationFrameId = requestAnimationFrame(animateCosmoBaloon);
}
//sphere
function startAnimationSphereBaloon() {
    sphereAnimationStartTime = null;
    reversesphereAnimation = false;
    sphereAnimationFrameId = requestAnimationFrame(animateSphereBaloon);
}
//piecey
function startAnimationPieceyBaloon() {
    pieceyAnimationStartTime = null;
    reversepieceyAnimation = false;
    pieceyAnimationFrameId = requestAnimationFrame(animatePieceyBaloon);
}

//-------------------- FUNZIONI DI STOP ANIMATION
//cosmo
function stopAnimationCosmoBaloon() {
    cosmoBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(cosmoAnimationFrameId);
    cosmoAnimationStartTime = null;
}
//sphere
function stopAnimationSphereBaloon() {
    sphereBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(sphereAnimationFrameId);
    sphereAnimationStartTime = null;
}
//piecey
function stopAnimationPieceyBaloon() {
    pieceyBaloon.style.transform = `rotate(0deg)`;
    cancelAnimationFrame(pieceyAnimationFrameId);
    pieceyAnimationStartTime = null;
}


//-------------------- FUNZIONI DI BUTTON PRESSED
//cosmo
function cosmoBaloonPressed() {
    console.log('toy_Baloon_cosmo premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (cosmoBaloon.classList.contains('straight_cosmo_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    cosmoBaloon.classList.remove('straight_cosmo_baloon');
    startAnimationCosmoBaloon();
    setTimeout(() => {
      cosmoBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    cosmoContainer.style.opacity = '0';
    cosmoImage.style.opacity = '0';
    cosmoImage.style.width = '0%'; 

    //disabilita il bottone let's go
    cosmoChosen.style.display = 'none';
    cosmoChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //cosmo
    cosmoMoved.classList.remove('movedCosmoLeft');
    cosmoMoved.classList.remove('movedCosmoUp');
        //sphere
    sphereBaloon.style.transition = 'all 0.15s ease-in-out';
    sphereMoved.classList.remove('movedSphere');
    startAnimationSphereBaloon();
        //piecey
    pieceyBaloon.style.transition = 'all 0.15s ease-in-out';
    pieceyMoved.classList.remove('movedPiecey');
    startAnimationPieceyBaloon();

  } else {

    //cambia la forma del baloon
    cosmoBaloon.style.transition = 'all 0.5s ease-in-out';
    cosmoBaloon.classList.add('straight_cosmo_baloon');
    stopAnimationCosmoBaloon();

    //rende visibile l'immagine
    cosmoContainer.style.opacity = '1';
    cosmoImage.style.opacity = '1';
    cosmoImage.style.width = '65%';

    //rende visibile e abilita il bottone
    cosmoChosen.style.display = 'flex';
    cosmoChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    sphereMoved.classList.add('movedSphere');
    pieceyMoved.classList.add('movedPiecey');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //cosmo baloon
    cosmoMoved.classList.remove('movedCosmoLeft');
    cosmoMoved.classList.remove('movedCosmoUp');
        //sphere baloon
    sphereBaloon.classList.remove('straight_sphere_baloon');
    sphereBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    sphereContainer.style.opacity = '0';
    sphereImage.style.opacity = '0';
    sphereImage.style.width = '0%'; 
            //disabilita il bottone let's go
    sphereChosen.style.display = 'none';
    sphereChosen.style.opacity = '0';  
        //piecey baloon
    pieceyBaloon.classList.remove('straight_piecey_baloon');
    pieceyBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    pieceyContainer.style.opacity = '0';
    pieceyImage.style.opacity = '0';
    pieceyImage.style.width = '0%'; 
            //disabilita il bottone let's go
    pieceyChosen.style.display = 'none';
    pieceyChosen.style.opacity = '0'; 

  }
}
//sphere
function sphereBaloonBaloonPressed() {
    console.log('toy_Baloon_sphere_premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (sphereBaloon.classList.contains('straight_sphere_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    sphereBaloon.classList.remove('straight_sphere_baloon');
    startAnimationSphereBaloon();
    setTimeout(() => {
        sphereBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    sphereContainer.style.opacity = '0';
    sphereImage.style.opacity = '0';
    sphereImage.style.width = '0%'; 

    //disabilita il bottone let's go
    sphereChosen.style.display = 'none';
    sphereChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //cosmo
    cosmoBaloon.style.transition = 'all 0.15s ease-in-out';
    cosmoMoved.classList.remove('movedCosmoLeft');
    cosmoMoved.classList.remove('movedCosmoUp');
    startAnimationCosmoBaloon();
        //sphere
    sphereMoved.classList.remove('movedSphere');
        //piecey
    pieceyBaloon.style.transition = 'all 0.15s ease-in-out';
    pieceyMoved.classList.remove('movedPiecey');
    startAnimationPieceyBaloon();

  } else {

    //cambia la forma del baloon
    sphereBaloon.style.transition = 'all 0.5s ease-in-out';
    sphereBaloon.classList.add('straight_sphere_baloon');
    stopAnimationSphereBaloon();

    //rende visibile l'immagine
    sphereContainer.style.opacity = '1';
    sphereImage.style.opacity = '1';
    sphereImage.style.width = '40%';

    //rende visibile e abilita il bottone
    sphereChosen.style.display = 'flex';
    sphereChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    cosmoMoved.classList.add('movedCosmoLeft');
    pieceyMoved.classList.add('movedPiecey');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //cosmo baloon
    cosmoBaloon.classList.remove('straight_cosmo_baloon');
    cosmoBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    cosmoContainer.style.opacity = '0';
    cosmoImage.style.opacity = '0';
    cosmoImage.style.width = '0%'; 
            //disabilita il bottone let's go
    cosmoChosen.style.display = 'none';
    cosmoChosen.style.opacity = '0'; 
        //sphere baloon
    sphereMoved.classList.remove('movedSphere');
        //piecey baloon
    pieceyBaloon.classList.remove('straight_piecey_baloon');
    pieceyBaloon.style.transition = 'all 0.15s ease-in-out';
        //rimpicciolisci l'immagine
    pieceyContainer.style.opacity = '0';
    pieceyImage.style.opacity = '0';
    pieceyImage.style.width = '0%'; 
            //disabilita il bottone let's go
    pieceyChosen.style.display = 'none';
    pieceyChosen.style.opacity = '0'; 
    
  }
}
//piecey
function pieceyBaloonBaloonPressed() {
    console.log('toy_Baloon_piecey premuta');
  // Aggiungi o rimuovi la classe per applicare la transizione
  if (pieceyBaloon.classList.contains('straight_piecey_baloon')) {
    
    //riporta il baloon alla sua posizione e forma originale
    pieceyBaloon.classList.remove('straight_piecey_baloon');
    startAnimationPieceyBaloon();
    setTimeout(() => {
        pieceyBaloon.style.transition = 'all 0.15s ease-in-out';
    }, 500);

    //rimpicciolisci l'immagine
    pieceyContainer.style.opacity = '0';
    pieceyImage.style.opacity = '0';
    pieceyImage.style.width = '0%'; 

    //disabilita il bottone let's go
    pieceyChosen.style.display = 'none';
    pieceyChosen.style.opacity = '0';   

    //riporta gli altri pottoni alla loro posizione originale
        //cosmo
    cosmoBaloon.style.transition = 'all 0.15s ease-in-out';
    cosmoMoved.classList.remove('movedCosmoLeft');
    cosmoMoved.classList.remove('movedCosmoUp');
    startAnimationCosmoBaloon();
        //sphere
    sphereBaloon.style.transition = 'all 0.15s ease-in-out';
    sphereMoved.classList.remove('movedSphere');
    startAnimationSphereBaloon();
        //piecey
    pieceyMoved.classList.remove('movedPiecey');

  } else {

    //cambia la forma del baloon
    pieceyBaloon.style.transition = 'all 0.5s ease-in-out';
    pieceyBaloon.classList.add('straight_piecey_baloon');
    stopAnimationPieceyBaloon();

    //rende visibile l'immagine
    pieceyContainer.style.opacity = '1';
    pieceyImage.style.opacity = '1';
    pieceyImage.style.width = '30%';

    //rende visibile e abilita il bottone
    pieceyChosen.style.display = 'flex';
    pieceyChosen.style.opacity = '1';

    //sposta gli altri bottoni per far spazio al nuovo aspetto del baloon
    cosmoMoved.classList.add('movedCosmoUp');
    sphereMoved.classList.add('movedSphere');

    //toglie le modifiche che i baloon POTREBBERO aver subito
        //cosmo baloon
    cosmoBaloon.classList.remove('straight_cosmo_baloon');
    cosmoMoved.classList.remove('movedCosmoLeft');
    cosmoBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    cosmoContainer.style.opacity = '0';
    cosmoImage.style.opacity = '0';
    cosmoImage.style.width = '0%'; 
            //disabilita il bottone let's go
    cosmoChosen.style.display = 'none';
    cosmoChosen.style.opacity = '0'; 
        //sphere baloon
    sphereBaloon.classList.remove('straight_sphere_baloon');
    sphereBaloon.style.transition = 'all 0.15s ease-in-out';
            //rimpicciolisci l'immagine
    sphereContainer.style.opacity = '0';
    sphereImage.style.opacity = '0';
    sphereImage.style.width = '0%'; 
            //disabilita il bottone let's go
    sphereChosen.style.display = 'none';
    sphereChosen.style.opacity = '0';  
        //piecey baloon
    pieceyMoved.classList.remove('movedPiecey');

  }
}

//-------------------- AGGIUNTA EVENTO CLICK AI COMPONENTI
//cosmo
cosmoBaloon.addEventListener('click', cosmoBaloonPressed);
//sphere
sphereBaloon.addEventListener('click', sphereBaloonBaloonPressed);
//piecey
pieceyBaloon.addEventListener('click', pieceyBaloonBaloonPressed);
// AVVIO ANIMAZIONI INIZIALI
//cosmo
startAnimationCosmoBaloon();
//sphere
startAnimationSphereBaloon();
//piecey
startAnimationPieceyBaloon();