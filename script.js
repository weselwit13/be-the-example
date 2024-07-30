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
    //START
    textArrowContainer(currentPosition);
    //WELCOME PAGE
    welcomeBoxCB(currentPosition);
    beExampleLB(currentPosition);
    select_path_message_CB(currentPosition)
    selectPathBoxCB(currentPosition);
    yellowGradient(currentPosition);
    purpleGradient(currentPosition);
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
    } else{
        document.getElementById('text_arrow_container').style.opacity = '0';
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
    } else{
        document.getElementById('welcome_box_CB').style.opacity = '0';
        document.getElementById('welcome_box_CB').style.transform = 'translateY(-200%)';
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
    } else{
        document.getElementById('be_example_LB').style.transform = 'translateY(600%)';
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
    } else{
        document.getElementById('select_path_message_CB').style.transform = 'translateY(700%)';
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
    } else{
        document.getElementById('select_path_box_CB').style.transform = 'translateY(700%)';
    }
}


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

        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '1';
        document.getElementById('geomag_logo_animation').style.marginTop = '0%';
        document.getElementById('geomag_logo_animation').style.marginRight = '0%';
        document.getElementById('geomag_logo_animation').style.width = '34.5%';
    }
}

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

        //logo geomag che si sposta dal baloom be example al top content
        document.getElementById('geomag_logo_animation').style.opacity = '0';
        document.getElementById('geomag_logo_animation').style.marginTop = '147.5%';
        document.getElementById('geomag_logo_animation').style.marginRight = '54%';
        document.getElementById('geomag_logo_animation').style.width = '18%';
    }
}

function purpleGradient(currentPosition){
    if(pageStatus === 0){
        document.getElementById('glCanvasPurple').style.opacity = '1';
    }else if(pageStatus === 1){
        document.getElementById('glCanvasPurple').style.opacity = '0';
    }
}

function yellowGradient(currentPosition){
    if(pageStatus === 0){
        document.getElementById('glCanvasYellow').style.opacity = '0';
    }else if(pageStatus === 1){
        document.getElementById('glCanvasYellow').style.opacity = '1';
    }
}