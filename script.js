let startY = 0; // Coordinate Y di partenza per il touch
let threshold = 100; // Soglia per il rilevamento dello swipe

let pageStatus = 0;

document.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY; // Salva la posizione Y iniziale del touch
});

document.addEventListener('touchend', function (e) {
    let endY = e.changedTouches[0].clientY; // Posizione Y del touch al rilascio

    // Calcola la distanza percorsa dallo swipe
    let distance = startY - endY;

    // Controlla se lo swipe supera la soglia
    if (distance > threshold) {
        // Swipe verso l'alto
        Advance();
    } else if (distance < -threshold) {
        // Swipe verso il basso (opzionale)
        Back();
    }
});

function Advance() {
    if (pageStatus === 0) {
        // Transizione per passare al secondo stato
        document.getElementById('start').style.transform = 'translateY(-10%)';
        document.getElementById('start').style.opacity = '0';
        document.getElementById('welcome_box').style.opacity = '1';

        pageStatus = 1; // Aggiorna lo stato della pagina
    } else if (pageStatus === 1) {
        document.getElementById('be_the_example_box').style.transform = 'translateY(0)';
        document.getElementById('be_the_example_box').style.opacity = '1';

        pageStatus = 2; // Aggiorna lo stato della pagina
    } else if (pageStatus === 2) {
        document.getElementById('select_path_box').style.transform = 'translateY(0)';
        document.getElementById('select_path_box').style.opacity = '1';

        pageStatus = 3; // Aggiorna lo stato della pagina
    } else if (pageStatus === 3) {
        // Aumenta l'altezza del select_path_box con animazione
        document.getElementById('select_path_box').style.height = '38%'; // Aumenta l'altezza
        document.getElementById('section_box').style.opacity = '1';

        pageStatus = 4; // Aggiorna lo stato della pagina
    } 
}

function Back() {
    if (pageStatus === 1) {
        // Transizione per tornare al primo stato
        document.getElementById('start').style.transform = 'translateY(0)';
        document.getElementById('start').style.opacity = '1';
        document.getElementById('welcome_box').style.opacity = '0';

        pageStatus = 0; // Aggiorna lo stato della pagina
    } else if (pageStatus === 2) {
        document.getElementById('be_the_example_box').style.transform = 'translateY(100%)';
        document.getElementById('be_the_example_box').style.opacity = '0';

        pageStatus = 1; // Aggiorna lo stato della pagina
    } else if (pageStatus === 3) {
        document.getElementById('select_path_box').style.transform = 'translateY(100%)';
        document.getElementById('select_path_box').style.opacity = '0';

        pageStatus = 2; // Aggiorna lo stato della pagina
    } else if (pageStatus === 4) {
        // Riduci l'altezza del select_path_box con animazione
        document.getElementById('select_path_box').style.height = '18%'; // Torna all'altezza originale
        document.getElementById('section_box').style.opacity = '0';

        pageStatus = 3; // Aggiorna lo stato della pagina
    }
}

document.getElementById('back_button').addEventListener('click', BackButton);

function BackButton() {
    if (pageStatus === 5) {
        // Sposta la schermata di welcome in alto e tolgo l'opacità
        document.getElementById('welcome_box').style.transform = 'translateY(0)';
        document.getElementById('welcome_box').style.opacity = '1';

        document.getElementById('be_the_example_box').style.transform = 'translateY(0)';
        document.getElementById('be_the_example_box').style.opacity = '1';

        document.getElementById('select_path_box').style.transform = 'translateY(0)';
        document.getElementById('select_path_box').style.opacity = '1';

        document.getElementById('section_box').style.transform = 'translateY(0)';
        document.getElementById('section_box').style.opacity = '1';

        document.getElementById('kids_path').style.transform = 'translateY(300%)';
        document.getElementById('kids_path').style.opacity = '0';

        document.body.style.backgroundColor = '#51138A';
        document.getElementById('toy_img').src = 'src/0.png';
        pageStatus = 4; // Aggiorna lo stato della pagina
    }
}

document.getElementById('Kids_section').addEventListener('click', GoToKidsSection);

function GoToKidsSection(){
    // Sposta la schermata di welcome in alto e tolgo l'opacità
    document.getElementById('welcome_box').style.transform = 'translateY(-300%)';
    document.getElementById('welcome_box').style.opacity = '0';

    document.getElementById('be_the_example_box').style.transform = 'translateY(-300%)';
    document.getElementById('be_the_example_box').style.opacity = '0';

    document.getElementById('select_path_box').style.transform = 'translateY(-300%)';
    document.getElementById('select_path_box').style.opacity = '0';

    document.getElementById('section_box').style.transform = 'translateY(-300%)';
    document.getElementById('section_box').style.opacity = '0';

    document.getElementById('kids_path').style.transform = 'translateY(0)';
    document.getElementById('kids_path').style.opacity = '1';

    document.body.style.backgroundColor = '#ffc423';
    pageStatus = 5;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const washArea = document.getElementById('toy_to_wash');
    const bubblesContainer = document.getElementById('toy_to_wash');
    
    let touchStartY = 0;
    let touchEndY = 0;
    let bubbleCreated = 0;
    
    washArea.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });
    
    washArea.addEventListener('touchmove', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      if (Math.abs(touchEndY - touchStartY) > 50) {
        createBubble(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        bubbleCreated = bubbleCreated + 1;
        console.log('Bolle create: ' + bubbleCreated);
        if(bubbleCreated > 10 && bubbleCreated < 20){
            document.getElementById('toy_img').src = 'src/1.png';
        } else if(bubbleCreated > 20 && bubbleCreated < 35){
            document.getElementById('toy_img').src = 'src/2.png';
        } else if(bubbleCreated > 35 && bubbleCreated < 50){
            document.getElementById('toy_img').src = 'src/3.png';
        } else if(bubbleCreated > 50){
            document.getElementById('toy_img').src = 'src/4.png';
        }
        touchStartY = touchEndY; // reset the start position to the current position
      }
    });
    
    function createBubble(x, y) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 30 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x - size / 2}px`;
      bubble.style.top = `${y - size / 2}px`;
      bubblesContainer.appendChild(bubble);
      
      setTimeout(() => {
        bubble.remove();
      }, 1000);
    }

  });