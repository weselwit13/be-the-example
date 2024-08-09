//--------------------FUNZIONI DEI BOTTONI DEL TOP CONTENT-------------------------

function topContent(){
    audioButtonImg();
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
            document.getElementById('audio_img').src = 'src/audio_off.png';
            
            // Controlla se il pulsante audio è stato premuto
            if(!audioButtonPressed){
                document.getElementById('audio_img').src = 'src/audio_yellow.png';
            } else {
                // Controlla lo stato dell'audio
                if(audioOn){
                    document.getElementById('audio_img').src = 'src/audio_yellow.png';
                } else {
                    document.getElementById('audio_img').src = 'src/audio_off.png';
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
                    document.getElementById('audio_img').src = 'src/audio_off.png';
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
                document.getElementById('audio_img').src = 'src/audio_off.png';
            }
        } 
    } else if (pageStatus > 1){
        document.getElementById('audio_button').style.width = '10%';
        document.getElementById('audio_button').style.height = '70%';
        document.getElementById('audio_button').style.backgroundColor = '#51138A';
            
        // Controlla lo stato dell'audio
        if(audioOn){
            document.getElementById('audio_img').src = 'src/audio_yellow.png';
        } else {
            document.getElementById('audio_img').src = 'src/audio_off.png';
        }
    }
}