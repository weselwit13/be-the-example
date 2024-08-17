//--------------------FUNZIONI DEI BOTTONI DEL TOP CONTENT-------------------------

function topContent(){
    audioButtonImg();
    BackButoonAspect();
}

//------BACK BUTTON
document.getElementById('back_button').addEventListener('click', BackButton);

function BackButton() {
    console.log('back premuto');
    console.log('PAGE STATUS: '+pageStatus);
    if(pageStatus === 1){
        pageStatus = 0;
        window.scrollTo(0,1795);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        //rendo visibili gli elementi del top content
        document.getElementById('back_button').style.opacity = '0';
        document.getElementById('audio_button').style.opacity = '0';
        pageKidsTutorialLoaded = false;
        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '0';
    }else if(pageStatus === 2) {
        pageStatus = 0;
        window.scrollTo(0,1800);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        //rendo visibili gli elementi del top content
        document.getElementById('back_button').style.opacity = '0';
        document.getElementById('audio_button').style.opacity = '0';
        pageKidsTutorialLoaded = false;
        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '0';
    } else if(pageStatus === 3){
        pageStatus = 2;
        window.scrollTo(0,1790);
    } else if (pageStatus === 4){
        pageStatus = 3;
        resetCleanCubyPage();
        window.scrollTo(0,1795);
    } else if(pageStatus === 5){
        pageStatus = 4;
        window.scrollTo(0,1);
    } else if(pageStatus === 6){
        pageStatus = 5;
        window.scrollTo(0,1800);
    } else if(pageStatus === 7){
        pageStatus = 6;
        window.scrollTo(0,2400);
    } else if(pageStatus === 8){
        pageStatus = 7;
        hiResponsePressed = false;
        window.scrollTo(0,1200);
    } else if(pageStatus === 9 || pageStatus === 9.5){
        pageStatus = 8;
        hiResponsePressed = false;
        pageLoaded = false;
        partTwo = false;
        window.scrollTo(0,0);
    } else if(pageStatus === 10){
        pageStatus = 8;
        hiResponsePressed = false;
        cubySpeakPageLoaded = false;
        pageLoaded = false;
        partTwo = false;
        window.scrollTo(0,0);
    } else if(pageStatus === 11){
        pageStatus = 8;
        hiResponsePressed = false;
        cubySpeakPageLoaded = false;
        pageLoaded = false;
        partTwo = false;
        window.scrollTo(0,1);
    } else if(pageStatus === 12){
        pageStatus = 11;
        window.scrollTo(0,1);
    } else if(pageStatus === 13){
        pageStatus = 12;
        stageParadePageLoaded = false;
        window.scrollTo(0,0);
    } else if(pageStatus === 14){
        pageStatus = 13;
        stageParadePageLoaded = false;
        window.scrollTo(0,1500);
    } else if(pageStatus === 15){
        pageStatus = 14;
        window.scrollTo(0,0);
    }

}

function BackButoonAspect(){
    if(pageStatus <6){
        document.getElementById('back_button').style.backgroundColor = '#51138A';
        document.getElementById('back_img').src = 'src/back_yellow.png';
    }else if(pageStatus > 5 && pageStatus < 13) {
        document.getElementById('back_button').style.backgroundColor = '#E6B8FD';
        document.getElementById('back_img').src = 'src/back_blue.png';
    } else if(pageStatus > 12) {
        document.getElementById('back_button').style.backgroundColor = '#071B71';
        document.getElementById('back_img').src = 'src/back_yellowFinale.png';
    }
}

//------AUDIO BUTTON
document.getElementById('audio_button').addEventListener('click', AudioButton);

let audioOn = false;
let audioButtonPressed = false;

function AudioButton() {
    if(window.scrollY > 99){
        audioButtonPressed = true;
        if(pageStatus===1)
            window.scrollTo(0, 1200)
    }
    if(audioButtonPressed || pageStatus > 1){
        audioOn = !audioOn;
        window.scrollTo(0, window.scrollY+1)
    }
    console.log(audioOn);
}

function audioButtonImg(){
    // Controlla lo stato della pagina
    if(pageStatus === 0){
        // Se lo stato della pagina è 0, non fare nulla
    } else if(pageStatus === 1){
        // Se lo stato della pagina è 1, controlla la posizione di scorrimento
        if(currentPosition < 200){
            // Se la posizione di scorrimento è inferiore a 200
            document.getElementById('audio_button').style.width = '10%';
            document.getElementById('audio_button').style.height = '70%';
            document.getElementById('audio_button').style.backgroundColor = '#51138A';
            document.getElementById('audio_img').src = 'src/audio_off_yellow.png';
            
            // Controlla se il pulsante audio è stato premuto
            if(!audioButtonPressed){
                document.getElementById('audio_img').src = 'src/audio_yellow.png';
            } else {
                // Controlla lo stato dell'audio
                if(audioOn){
                    document.getElementById('audio_img').src = 'src/audio_yellow.png';
                } else {
                    document.getElementById('audio_img').src = 'src/audio_off_yellow.png';
                }
            }
        } else if(currentPosition > 199 && currentPosition < 924){
            // Se la posizione di scorrimento è superiore a 199
            // if(currentPosition > 1000) {
            //     audioOn= false;
            //     document.getElementById('audio_button').style.width = '10%';
            // document.getElementById('audio_button').style.height = '70%';
            // document.getElementById('audio_button').style.backgroundColor = '#51138A';
            //     document.getElementById('audio_img').src = 'src/audio_off.png';
            // }
            if(!audioButtonPressed){
                document.getElementById('audio_button').style.width = '16%';
                document.getElementById('audio_button').style.height = '100%';
                document.getElementById('audio_button').style.backgroundColor = '#F8F8FF';
                document.getElementById('audio_img').src = 'src/audio_black.png';
            } else {
                document.getElementById('audio_button').style.width = '10%';
                document.getElementById('audio_button').style.height = '70%';
                document.getElementById('audio_button').style.backgroundColor = '#51138A';
                
                // Controlla lo stato dell'audio
                if(audioOn){
                    document.getElementById('audio_img').src = 'src/audio_yellow.png';
                } else {
                    document.getElementById('audio_img').src = 'src/audio_off_yellow.png';
                }
            }
        } else if (currentPosition > 925){
            document.getElementById('audio_button').style.width = '10%';
            document.getElementById('audio_button').style.height = '70%';
            document.getElementById('audio_button').style.backgroundColor = '#51138A';
                
            // Controlla lo stato dell'audio
            if(audioOn){
                document.getElementById('audio_img').src = 'src/audio_yellow.png';
            } else {
                document.getElementById('audio_img').src = 'src/audio_off_yellow.png';
            }
        } 
    } else if (pageStatus > 1 && pageStatus < 6){
        document.getElementById('audio_button').style.width = '10%';
        document.getElementById('audio_button').style.height = '70%';
        document.getElementById('audio_button').style.backgroundColor = '#51138A';
            
        // Controlla lo stato dell'audio
        if(audioOn){
            document.getElementById('audio_img').src = 'src/audio_yellow.png';
        } else {
            document.getElementById('audio_img').src = 'src/audio_off_yellow.png';
        }
    } else if(pageStatus > 5 && pageStatus < 13){
        document.getElementById('audio_button').style.width = '10%';
        document.getElementById('audio_button').style.height = '70%';
        document.getElementById('audio_button').style.backgroundColor = '#E6B8FD';
            
        // Controlla lo stato dell'audio
        if(audioOn){
            document.getElementById('audio_img').src = 'src/audio_blue.png';
        } else {
            document.getElementById('audio_img').src = 'src/audio_off_blue.png';
        }
    } else if(pageStatus > 12){
        document.getElementById('audio_button').style.width = '10%';
        document.getElementById('audio_button').style.height = '70%';
        document.getElementById('audio_button').style.backgroundColor = '#071B71';
            
        // Controlla lo stato dell'audio
        if(audioOn){
            document.getElementById('audio_img').src = 'src/audio_yellowFinale.png';
        } else {
            document.getElementById('audio_img').src = 'src/audio_off_yellowFinale.png';
        }
    }
}

function scrollUpSign(pageEndValue, interMin = undefined, interMax = undefined, boolean = undefined){
    if(currentPosition < pageEndValue){
        document.getElementById('arrow_scroll_up_sign_img').style.opacity = '1';
        if(boolean === undefined){
            if(currentPosition > interMin && currentPosition < interMax)
                document.getElementById('arrow_scroll_up_sign_img').style.opacity = '0';
        } else{
            if(boolean)
                document.getElementById('arrow_scroll_up_sign_img').style.opacity = '1';
            else
                document.getElementById('arrow_scroll_up_sign_img').style.opacity = '0';
        }
    } else {
        document.getElementById('arrow_scroll_up_sign_img').style.opacity = '0';
    }
}