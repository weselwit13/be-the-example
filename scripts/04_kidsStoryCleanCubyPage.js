//----------FUNCTION KIDS STORY CLEAN CUBY PAGE--------------

function kidsStoryCleanCubyComponente(){
    CleanCubyPage();
    dirtyCubyLB();
    ohLookCB();
    hurryCB();
    toyToCleanRB();
    wonderfulCB();
}

//-------KIDS STORY CLEAN CUBY COMPONENT-----------

let dirtyCubyIsArrived = false;
let cubyIsClean = false;
let showSign = false;

function CleanCubyPage(){
    if(pageStatus < 4){
        document.getElementById('clean_cuby_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 4){
        document.getElementById('clean_cuby_page').style.transform = 'translateY(0%)';
        scrollUpSign(1500, 0, 0, !showSign);
    }else if(pageStatus > 4){
        document.getElementById('clean_cuby_page').style.transform = 'translateY(-200%)';
    }
}

function dirtyCubyLB(){
    if(pageStatus === 4 && !dirtyCubyIsArrived && !cubyIsClean){
        if(currentPosition < 400){
            document.getElementById('dirty_cuby_LB').style.transform = 'translateX(0%)';
            document.getElementById('dirty_cuby_LB').style.height = '31.5%';
        } else if(currentPosition > 399 && currentPosition < 600){
            let baloonPosition = -(currentPosition-400);
            document.getElementById('dirty_cuby_LB').style.transform = 'translateX('+ baloonPosition +'%)';
            document.getElementById('dirty_cuby_LB').style.height = '31.5%';
        } else if(currentPosition > 600){
            document.getElementById('dirty_cuby_LB').style.transform = 'translateX(-200%)';
            document.getElementById('dirty_cuby_LB').style.height = '0%';
        }
    }
}

function ohLookCB(){
    if(pageStatus === 4 && !dirtyCubyIsArrived && !cubyIsClean){
        document.getElementById('oh_look_CB').style.height = '9.5%';
        document.getElementById('oh_look_CB').style.opacity = '1';
        if(currentPosition < 1){
            document.getElementById('oh_look_CB').style.transform = 'translateY(800%)';
        } else if(currentPosition > 0 && currentPosition < 200){
            let baloonPosition = 800-(currentPosition*4);
            document.getElementById('oh_look_CB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 199){
            document.getElementById('oh_look_CB').style.transform = 'translateY(0%)';
        }
    }
}

function hurryCB(){
    if(pageStatus === 4 && !dirtyCubyIsArrived && !cubyIsClean){
        if(currentPosition < 400){
            document.getElementById('hurry_CB').style.transform = 'translateY(800%)';
        } else if(currentPosition > 399 && currentPosition < 600){
            let baloonPosition = 800-(currentPosition*1.3);
            document.getElementById('hurry_CB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 399){
            document.getElementById('hurry_CB').style.transform = 'translateY(0%)';
        }
    }
}

function toyToCleanRB(){
    if(pageStatus === 4 && !dirtyCubyIsArrived && !cubyIsClean){
        if(currentPosition < 500){
            document.getElementById('toy_to_clean_RB').style.transform = 'translateY(800%)';
        } else if(currentPosition > 499 && currentPosition < 700){
            let baloonPosition = 800-(currentPosition*1.1);
            document.getElementById('toy_to_clean_RB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 699){
            document.getElementById('toy_to_clean_RB').style.transform = 'translateY(0%)';
            dirtyCubyIsArrived = true;
            window.scrollTo(0,1);
            showSign = true
            document.body.style.overflow = 'hidden';
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    //assegno l'area di pulizia e di creazione delle bolle
    const washArea = document.getElementById('toy_to_clean_RB');
    const bubblesContainer = document.getElementById('toy_to_clean_RB');
    
    //aggiungo alla waharea l'ascoltatore di eventi adatto al nostro scopo
    washArea.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });
    
    washArea.addEventListener('touchmove', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      //per ogni movimento maggiore di 50px crea una bolla
      if (Math.abs(touchEndY - touchStartY) > 50 && !cubyIsClean) {
        createBubble(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        bubbleCreated = bubbleCreated + 1;
        console.log('Bolle create: ' + bubbleCreated);
        //all'aumentare delle bolle create rendo invisibile le varie immagine che corrispondono a cuby più o meno sporco
        if(bubbleCreated > 10 && bubbleCreated < 20){
            document.getElementById('toy_img_0').style.opacity = '0';
        } else if(bubbleCreated > 20 && bubbleCreated < 35){
            document.getElementById('toy_img_1').style.opacity = '0';
        } else if(bubbleCreated > 35 && bubbleCreated < 50){
            document.getElementById('toy_img_2').style.opacity = '0';
        } else if(bubbleCreated > 50){
            document.getElementById('toy_img_3').style.opacity = '0';
            window.scrollTo(0, 800);
            document.body.style.overflow = '';
            dirtyCubyIsArrived = false;
            cubyIsClean = true;
            showSign = false
        }
        touchStartY = touchEndY; // reset the start position to the current position
      }
    });

    // funzione che crea le bolle
    function createBubble(x, y) {
        //crea un elemento immagine
        const bubble = document.createElement('img');
        //gli assegna la classe bubleImg
        bubble.classList.add('bubbleImg');
        //gli assegna l'immagine corretta
        bubble.src = 'src/soap.png';
        //creo ogni volta una dimensione variabile
        const size = Math.random() * 30 + 20;

        //gli assegno le caratteristiche
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y-350}px`;
        bubble.style.position = 'fixed';
        bubblesContainer.appendChild(bubble);
        
        //setto il tempo 
        setTimeout(() => {
          bubble.remove();
        }, 2000);
    }
});

function wonderfulCB(){
    if(pageStatus === 4 && cubyIsClean){
        if(currentPosition < 1500){
            document.getElementById('wonderful_CB').style.transform = 'translateY(0%)';
            document.getElementById('oh_look_CB').style.opacity = '0';
            document.getElementById('oh_look_CB').style.height = '0%';
        } else if(currentPosition > 1499){
            pageStatus = 5;
            window.scrollTo(0,0);
        }
    } else if(pageStatus === 4 && !cubyIsClean){
        document.getElementById('wonderful_CB').style.transform = 'translateY(800%)';
    }
}

// FUNZIONE RICHIAMATA IN 00_topContent.js NELLA FUNZIONE DEL BACKBUTTON
function resetCleanCubyPage(){
    dirtyCubyIsArrived = false;
    cubyIsClean = false;
    bubbleCreated = 0;
    document.body.style.overflow = '';
    document.getElementById('toy_img_0').style.opacity = '1';
    document.getElementById('toy_img_1').style.opacity = '1';
    document.getElementById('toy_img_2').style.opacity = '1';
    document.getElementById('toy_img_3').style.opacity = '1';
}