let pageStatus = 0;
/*
PAGE STATUS LEGENDA
pagestatus == 0 -> welcome page
pagestatus == 1 -> kids tutorial
*/

let bubbleCreated = 0;

//aggiungo l'ascoltatore dell'evento scroll alla finestra, e per ogni scroll attiva la funzione pageScrollAnimation passandogli la posizione di scroll
window.addEventListener("scroll", function () {
        console.log(this.window.scrollY.toFixed(1));
        pageScrollAnimation(this.window.scrollY.toFixed(1));
    }
);

//funzione che chiama a sua volta le funzioni di animazione di ogni singolo componente, 
//va creata una funzione per componente per evitare bug grafici come sovrapposizioni o transizioni non completate
//fare una funzione per componente aiuta a gestire più facilmente la questione bug grafici anche se magari è un pò ridondante
function pageScrollAnimation(currentPosition){
    //COMPONENTI GENERICI
    audioButtonImg(currentPosition);
    //andrà aggiunto anche quello che controlla l'immagine del back button
    //START
    textArrowContainer(currentPosition);
    //WELCOME PAGE
    welcomePage();
    purpleGradient(currentPosition);
    welcomeBoxCB(currentPosition);
    beExampleLB(currentPosition);
    select_path_message_CB(currentPosition)
    selectPathBoxCB(currentPosition);
    //TUTORIAL KIDS PAGE
    tutorialKidsPage();
    yellowTutorialGradient(currentPosition);
    swipeUpTutorialMessage(currentPosition);
    purpleArrowTutorialPage(currentPosition);
    firstBaloonCBTutorial(currentPosition);
    secondBaloonCBTutorial(currentPosition);
    letsGoBaloonCBTutorial(currentPosition);
    //KIDS STORY
    KidsstoryPage();
    yellowTutorialGradient(currentPosition);
    narrator_Baloon_CB(currentPosition);
    choice_box_CB(currentPosition);
    select_place_box_RB(currentPosition);
}
// ---------------------- FUNZIONI CHE GESTISCONO I VARI COMPONENTI ---------------------------
//-----COMPONENTI GENERICI

function purpleGradient(currentPosition){
    if(pageStatus === 0){
        document.getElementById('glCanvasPurple').style.opacity = '1';
    }else if(pageStatus === 1){
        document.getElementById('glCanvasPurple').style.opacity = '0';
    }
}

function yellowTutorialGradient(currentPosition){
    if(pageStatus === 0){
        document.getElementById('glCanvasYellowTutorial').style.opacity = '0';
    }else if(pageStatus === 1){
        document.getElementById('glCanvasYellowTutorial').style.opacity = '1';
    }
}

function audioButtonImg(currentPosition){
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
    } else if (pageStatus === 2){
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

//--------------------FUNZIONI DEI BOTTONI DEL TOP CONTENT-------------------------

//------BACK BUTTON
document.getElementById('back_button').addEventListener('click', BackButton);

function BackButton() {
    console.log('back premuto');
    console.log('PAGE STATUS: '+pageStatus);
    if(pageStatus === 1){
        pageStatus = 0;
        window.scrollTo(0,1800);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        //rendo visibili gli elementi del top content
        document.getElementById('back_button').style.opacity = '0';
        document.getElementById('audio_button').style.opacity = '0';
        pageKidsTutorialLoaded = false;
        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '0';
    }
    if(pageStatus === 2) {
        pageStatus = 0;
        window.scrollTo(0,1800);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        //rendo visibili gli elementi del top content
        document.getElementById('back_button').style.opacity = '0';
        document.getElementById('audio_button').style.opacity = '0';
        pageKidsTutorialLoaded = false;
        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '0';
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

//-----COMPONENTI WELCOME PAGE
function welcomePage(){
    if(pageStatus === 0){
        document.getElementById('welcome_page').style.transform = 'translateY(0%)';
    }else if(pageStatus === 1){
        document.getElementById('welcome_page').style.transform = 'translateY(-200%)';
    }
}

function textArrowContainer(currentPosition){
    if(pageStatus === 0){
        //START PAGE PART
        if(currentPosition < 1){
            document.getElementById('text_arrow_container').style.opacity = '1';
            document.getElementById('text_arrow_container').style.transform = 'translateY(0)';
        }else if(currentPosition > 0 && currentPosition < 100){
            document.getElementById('text_arrow_container').style.transform = 'translateY(' + (-currentPosition) + '%)';
        } else if(currentPosition > 99 && currentPosition < 200){
            let opacity = 1-((currentPosition-100)/100);
            document.getElementById('text_arrow_container').style.transform = 'translateY(' + (-currentPosition) + '%)';
            document.getElementById('text_arrow_container').style.opacity = opacity;
        }
        //WELCOME PAGE PART
        //----welcome to
        else if(currentPosition >199){
            document.getElementById('text_arrow_container').style.opacity = '0';
        } 
    } 
}

function welcomeBoxCB(currentPosition){
    if(pageStatus === 0){
        document.getElementById('welcome_box_CB').style.transform = 'translateY(0)';
        //START PAGE PART
        if(currentPosition < 200){
            document.getElementById('welcome_box_CB').style.opacity = '0';
        }
        //WELCOME PAGE PART
        //----welcome to
        else if(currentPosition >199 && currentPosition < 300){
            let opacity = ((currentPosition-200)/100)
            document.getElementById('welcome_box_CB').style.opacity = opacity;
        } 
        //----be example
        else if (currentPosition >299){
            document.getElementById('welcome_box_CB').style.opacity = '1';
        }
    }else{
        document.getElementById('welcome_box_CB').style.transform = 'translateY(-800%)';
    } 
}

function beExampleLB(currentPosition){
    if(pageStatus === 0){
        //START PAGE PART

        //WELCOME PAGE PART
        //----welcome to
        if(currentPosition < 300){
            document.getElementById('be_example_LB').style.transform = 'translateY(600%)';
        } 
        //----be example
        else if (currentPosition >299 && currentPosition < 600){
            let beExamplePosition = 600-currentPosition; 
            document.getElementById('be_example_LB').style.transform = 'translateY(' + (beExamplePosition) + '%)';
        } else if (currentPosition >599){
            document.getElementById('be_example_LB').style.transform = 'translateY(0%)';
        } 
    } 
    
}

function select_path_message_CB(currentPosition){
    if(pageStatus === 0){
        //START PAGE PART

        //WELCOME PAGE PART
        //----welcome to
        
        //----be example
        if (currentPosition < 700){
            document.getElementById('select_path_message_CB').style.transform = 'translateY(700%)';
        } 
        //----select path part 1
        else if (currentPosition >699 && currentPosition < 1000){
            let selectPathPosition = 1000-currentPosition; 
            document.getElementById('select_path_message_CB').style.transform = 'translateY(' + (selectPathPosition) + '%)';
        } else if (currentPosition >1000){
            document.getElementById('select_path_message_CB').style.transform = 'translateY(0%)';
        }        
    } 

}

function selectPathBoxCB(currentPosition){
    if(pageStatus === 0){
            //START PAGE PART

        //WELCOME PAGE PART
        //----welcome to
        
        //----be example
        if (currentPosition < 1000){
            document.getElementById('select_path_box_CB').style.transform = 'translateY(700%)';
        } 
        //----select path part 1
        else if (currentPosition >999 && currentPosition < 1700){
            let selectPathPosition = (1700-currentPosition); 
            document.getElementById('select_path_box_CB').style.transform = 'translateY(' + (selectPathPosition) + '%)';
        } else if (currentPosition >1700){
            document.getElementById('select_path_box_CB').style.transform = 'translateY(0%)';
        } 
    } 
}

//-----COMPONENTI TUTORIAL KIDS PAGE
document.getElementById('Kids_section').addEventListener('click', GoToKidsSection);

function GoToKidsSection(){
    console.log('kids section premuta');
    console.log('PAGE STATUS: '+pageStatus);
    if(pageStatus === 0){
        pageStatus = 1;
        window.scrollTo(0,0);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        //rendo visibili gli elementi del top content
        document.getElementById('back_button').style.opacity = '1';
        document.getElementById('audio_button').style.opacity = '1';

        setTimeout(() => {
            //pagina tutorial
            document.getElementById('Purple_Arrow').style.bottom = '45%';
            pageKidsTutorialLoaded = true;
          }, 1500);

        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '1';

        /* script per animazione
        document.getElementById('geomag_logo_animation').style.marginTop = '0%';
        document.getElementById('geomag_logo_animation').style.marginRight = '0%';
        document.getElementById('geomag_logo_animation').style.width = '34.5%';
        */

        }
}

function tutorialKidsPage(){
    if(pageStatus === 0){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 1){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(0%)';
    } else if(pageStatus === 2){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(-200%)';
    }
}

function swipeUpTutorialMessage(currentPosition){
    if(pageStatus === 0){
        document.getElementById('swipe_up_tutorial').style.bottom = '-40%';
    }else if(pageStatus === 1){
        setTimeout(() => {
            //pagina tutorial
            document.getElementById('swipe_up_tutorial').style.bottom = '60%';
          }, 1000);

        // FIRST SCROLL
        if(currentPosition < 1){
            document.getElementById('swipe_up_message').style.opacity = '1';
        }else if(currentPosition > 0 && currentPosition < 200){
            let opacity = (200-currentPosition)/200;
            document.getElementById('swipe_up_message').style.opacity = opacity;
        } else if(currentPosition > 199){
            document.getElementById('swipe_up_message').style.opacity = '0';
        }
    }
}

let pageKidsTutorialLoaded = false;

function purpleArrowTutorialPage(currentPosition){
    if(pageStatus === 0){
        document.getElementById('Purple_Arrow').style.opacity = '0';
        document.getElementById('Purple_Arrow').style.bottom = '-45%';
    }else if(pageStatus === 1){
        document.getElementById('Purple_Arrow').style.opacity = '1';
        // FIRST SCROLL
        if(currentPosition < 1){
            if(pageKidsTutorialLoaded)
                document.getElementById('Purple_Arrow').style.bottom = '45%';
            document.getElementById('Purple_Arrow').style.left = '45%';
            document.getElementById('Purple_Arrow').style.transform = 'rotate(0deg)';
            document.getElementById('Purple_Arrow').style.height = '15%';
        }else if(currentPosition > 0 && currentPosition < 200){
            let opacity = (200-currentPosition)/200;
            document.getElementById('Purple_Arrow').style.opacity = opacity;
            document.getElementById('Purple_Arrow').style.bottom = 45+currentPosition/2 + '%';
        } else if(currentPosition > 199 && currentPosition < 300){
            document.getElementById('Purple_Arrow').style.opacity = '0';
            document.getElementById('Purple_Arrow').style.bottom = '95%';
            document.getElementById('Purple_Arrow').style.transform = 'rotate(0deg)';
        } else if(currentPosition > 299 && currentPosition < 1000){
            document.getElementById('Purple_Arrow').style.opacity = '0';
            document.getElementById('Purple_Arrow').style.bottom = '95%';
            document.getElementById('Purple_Arrow').style.transform = 'rotate(180deg)';
        } else if(currentPosition > 1000 && currentPosition < 1200){
            let opacity = 1-((1200-currentPosition)/200);
            document.getElementById('Purple_Arrow').style.opacity = opacity;
            document.getElementById('Purple_Arrow').style.bottom = 95-currentPosition/20.5 +'%';
            document.getElementById('Purple_Arrow').style.transform = 'rotate(180deg)';
        } else if(currentPosition > 1200){
            document.getElementById('Purple_Arrow').style.opacity = '1';
            document.getElementById('Purple_Arrow').style.bottom = '37%';
            document.getElementById('Purple_Arrow').style.transform = 'rotate(180deg)';
        } 
    }
}

function firstBaloonCBTutorial(currentPosition){
    if(pageStatus === 0){
        document.getElementById('first_Baloon_CB').style.transform = 'translateY(700%)';
    }else if(pageStatus === 1){
        if(currentPosition < 1){
            document.getElementById('first_Baloon_CB').style.transform = 'translateY(700%)';
        } else if(currentPosition > 0 && currentPosition < 200){
            let baloonPosition = 600-(currentPosition*3);
            document.getElementById('first_Baloon_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 199){
            document.getElementById('first_Baloon_CB').style.transform = 'translateY(0%)';
        }
    }
}

function secondBaloonCBTutorial(currentPosition){
    if(pageStatus === 0){
        document.getElementById('second_Baloon_CB').style.transform = 'translateY(700%)';
    }else if(pageStatus === 1){
        if(currentPosition < 200){
            document.getElementById('second_Baloon_CB').style.transform = 'translateY(700%)';
        } else if(currentPosition > 899 && currentPosition < 1000){
            let baloonPosition = 700-((currentPosition-900)*5);
            document.getElementById('second_Baloon_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 999){
            document.getElementById('second_Baloon_CB').style.transform = 'translateY(0%)';
        }
    }
}

function letsGoBaloonCBTutorial(currentPosition){
    if(pageStatus === 0){
        document.getElementById('letsGo_Baloon_CB').style.bottom = '-22%';
    }else if(pageStatus === 1){
        if(currentPosition < 1000){
            document.getElementById('letsGo_Baloon_CB').style.bottom = '-22%';
        } else if(currentPosition > 1000){
            document.getElementById('letsGo_Baloon_CB').style.bottom = '22%';
        } 
    }
}


document.getElementById('letsGo_Baloon_CB').addEventListener('click', GoToKidsStory);

function GoToKidsStory(){
    console.log('letsGo_Baloon_CB premuta');
    console.log('PAGE STATUS: '+pageStatus);
    if(pageStatus === 1){
        pageStatus = 2;
        window.scrollTo(0,0);
        console.log('Page status aggiornato, PAGE STATUS: '+pageStatus);

        setTimeout(() => {
            //pagina kids
            pageKidsStoryLoaded = true;
          }, 1500);
        }
}

//-----COMPONENTI KIDS STORY
function KidsstoryPage(){
    if(pageStatus === 1 || pageStatus === 0){
        document.getElementById('kids_story').style.transform = 'translateY(100%)';
    }else if(pageStatus === 2){
        document.getElementById('kids_story').style.transform = 'translateY(0%)';
    }else if(pageStatus === 3){
        document.getElementById('kids_story').style.transform = 'translateY(-200%)';
    }
}

function narrator_Baloon_CB(currentPosition){
    if(pageStatus === 1){
        document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(700%)';
    }else if(pageStatus === 2){
        if(currentPosition < 1){
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(700%)';
        } else if(currentPosition > 0 && currentPosition < 200){
            let baloonPosition = 600-(currentPosition*3);
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 199){
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(0%)';
        }
    }
}

function choice_box_CB(currentPosition){
    if(pageStatus === 1){
        document.getElementById('choice_box_CB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 2){
        if(currentPosition < 200){
            document.getElementById('choice_box_CB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 400 && currentPosition < 600){
            let baloonPosition = 1100-(currentPosition*1.8);
            document.getElementById('choice_box_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 399){
            document.getElementById('choice_box_CB').style.transform = 'translateY(0%)';
        }
    }
}

function select_place_box_RB(currentPosition){
    if(pageStatus === 1){
        document.getElementById('select_place_box_RB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 2){
        if(currentPosition < 700){
            document.getElementById('select_place_box_RB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 699 && currentPosition < 800){
            let baloonPosition = 1100.0-(currentPosition*1.25);
            document.getElementById('select_place_box_RB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 799){
            document.getElementById('select_place_box_RB').style.transform = 'translateY(0%)';
        }
    }
}

document.getElementById('place_Baloon_garden').addEventListener('click', gardenOpen);

let gardenButtonPressed = false;

function gardenOpen(){
    console.log('place_Baloon_garden premuta');

    if (gardenButtonPressed) {
        gardenButtonPressed = false;
        document.getElementById('place_Baloon_garden').style.height = '9.5%';
        document.getElementById('place_Baloon_garden').style.animation = 'placeAnimationGardenPark 1.3s ease-in-out alternate infinite';
    }

    else {
        gardenButtonPressed = true;
        document.getElementById('place_Baloon_garden').style.height = '20%';
        document.getElementById('place_Baloon_garden').style.animationPlayState;
    }
/*
variabile fuori dalla funzione (se il bottone è premuto o meno)
Interrompere l'animazione
Aggiungere stile aperto e stile altri due bottoni

ALTRA FUNZIONE
1. al click di let's go cambia la pagina
*/
}
