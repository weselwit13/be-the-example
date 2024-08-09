// ---------------------FUNZIONI DI WELCOME PAGE-----------------------

function welcomePageComponent(){
    welcomePage();
    textArrowContainer();
    welcomeBoxCB();
    beExampleLB();
    select_path_message_CB()
    selectPathBoxCB();
}
//-----COMPONENTI WELCOME PAGE
function welcomePage(){
    if(pageStatus === 0){
        document.getElementById('welcome_page').style.transform = 'translateY(0%)';
    }else if(pageStatus === 1){
        document.getElementById('welcome_page').style.transform = 'translateY(-200%)';
    }
}

function textArrowContainer(){
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

function welcomeBoxCB(){
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

function beExampleLB(){
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

function select_path_message_CB(){
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

function selectPathBoxCB(){
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