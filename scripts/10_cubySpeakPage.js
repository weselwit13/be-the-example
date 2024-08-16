//----------FUNCTION KIDS STORYWALK WITH CUBY--------------

function CubySpeakPageComponent(){
    CubySpeakPage();
    cubySpeakPageImg();
    whatsHappeningLB();
    leaderLeftLB();
    lookAtYouCB();
    letsChooseLB();
}

//-------KIDS STORY WALK WITH CUBY COMPONENT-----------

let cubySpeakPageLoaded = false;

function CubySpeakPage(){
    if(pageStatus < 10){
        document.getElementById('cuby_speak_page').style.transform = 'translateY(100%)';
        document.getElementById('allarm_message_container').style.opacity = '0';
    }else if(pageStatus === 10){
        document.getElementById('cuby_speak_page').style.transform = 'translateY(0%)';
        if(document.getElementById('allarm_message_container').style.opacity === '0'){
            setTimeout(() => {
                document.getElementById('allarm_message_container').style.opacity = '1';
                cubySpeakPageLoaded = true;
              }, 1000);
        }
        scrollUpSign(3000);
    }else if(pageStatus > 10){
        document.getElementById('cuby_speak_page').style.transform = 'translateY(-200%)';
        document.getElementById('allarm_message_container').style.opacity = '0';
    }
}

function cubySpeakPageImg(){
    if(pageStatus === 10){
        setTimeout(() => {
            document.getElementById('cuby_speak_page_img').style.display = 'block';
          }, 650);
        if(currentPosition < 900){
            document.getElementById('cuby_speak_page_img').style.marginTop = '-100%';
        } else if(currentPosition > 899 && currentPosition < 2999){
            document.getElementById('cuby_speak_page_img').style.marginTop = '45%';
        } else if(currentPosition > 2999){
            document.getElementById('cuby_speak_page_img').style.marginTop = '155%';
        }      
    } else if(pageStatus < 10){
        document.getElementById('cuby_speak_page_img').style.display = 'none';
    }
}

function whatsHappeningLB(){
    if(pageStatus === 10){
        if(currentPosition < 200){
            document.getElementById('whats_happening_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 199 && currentPosition < 900){
            let baloonPosition = 800-(currentPosition*0.88);
            document.getElementById('whats_happening_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 899){
            document.getElementById('whats_happening_LB').style.transform = 'translateY(0%)';
        }
    }
}

function leaderLeftLB(){
    if(pageStatus === 10){
        if(currentPosition < 900){
            document.getElementById('leader_left_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 899 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('leader_left_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 1599){
            document.getElementById('leader_left_LB').style.transform = 'translateY(0%)';
        }    
    }
}

function lookAtYouCB(){
    if(pageStatus === 10){
        if(currentPosition < 1600){
            document.getElementById('look_at_you_CB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1599 && currentPosition < 2300){
            let baloonPosition = 800-(currentPosition*0.34);
            document.getElementById('look_at_you_CB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 2299){
            document.getElementById('look_at_you_CB').style.transform = 'translateY(0%)';
        }    
    }
}

function letsChooseLB(){
    if(pageStatus === 10){
        if(currentPosition < 2300){
            document.getElementById('lets_choose_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 2299 && currentPosition < 3000){
            let baloonPosition = 800-(currentPosition*0.26);
            document.getElementById('lets_choose_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        } else if(currentPosition > 2999 && currentPosition < 3300){
            document.getElementById('lets_choose_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 3300 && cubySpeakPageLoaded){
            pageStatus = 11;
            window.scrollTo(0,0);
        } 
    }
}

// ALLARM MESSAGE FUNCTION
const leftMessage = document.getElementById('allarm_message_left');
const rightMessage = document.getElementById('allarm_message_right');

function changeTextWhenOpacityZero(element, otherElement) {
    function checkOpacity() {
        const opacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
        if (opacity < 0.05) {
            let phrases = [
                'What are we gonna do?!',
                'What are we supposed to do now?!',
                'What’s our next move?!',
                'How are we going to handle this?!',
                'What’s our plan of action?!',
                'How do we move forward?!'
            ];

            // Rimuovi il testo già selezionato dall'altro elemento
            if (otherElement && otherElement.textContent) {
                phrases = phrases.filter(phrase => phrase !== otherElement.textContent);
            }

            // Seleziona una frase casuale
            element.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        }
        requestAnimationFrame(checkOpacity);
    }

    requestAnimationFrame(checkOpacity);
}

// Avvia il controllo per entrambi gli elementi
if (leftMessage) changeTextWhenOpacityZero(leftMessage, rightMessage);
if (rightMessage) changeTextWhenOpacityZero(rightMessage, leftMessage);


// ALLARM MESSAGE FUNCTION