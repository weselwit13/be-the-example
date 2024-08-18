//-----------FUNZIONE TUTORIAL KIDS PAGE-----------------

function tutorialKidsPageComponent(){
    tutorialKidsPage();
    swipeUpTutorialMessage();
    purpleArrowTutorialPage();
    firstBaloonCBTutorial();
    secondBaloonCBTutorial();
    letsGoBaloonCBTutorial();
}

//-----COMPONENTI TUTORIAL KIDS PAGE
function tutorialKidsPage(){
    if(pageStatus < 1){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 1){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(0%)';
        scrollUpSign(1200, 0, 0, showSignTutorialKidsPage);
    } else if(pageStatus > 1){
        document.getElementById('tutorial_kids_page').style.transform = 'translateY(-200%)';
    }
}

let showSignTutorialKidsPage = false;

function swipeUpTutorialMessage(){
    if(pageStatus === 0){
        document.getElementById('swipe_up_tutorial').style.bottom = '-40%';
    }else if(pageStatus === 1){
        setTimeout(() => {
            document.getElementById('swipe_up_tutorial').style.bottom = '60%';
          }, 1000);

        if(currentPosition < 1){
            showSignTutorialKidsPage = false;
            document.getElementById('swipe_up_message').style.opacity = '1';
        }else if(currentPosition > 0 && currentPosition < 200){
            let opacity = (200-currentPosition)/200;
            document.getElementById('swipe_up_message').style.opacity = opacity;
            showSignTutorialKidsPage = false;
        } else if(currentPosition > 199){
            document.getElementById('swipe_up_message').style.opacity = '0';
            showSignTutorialKidsPage = true;
        }
    }
}

let pageKidsTutorialLoaded = false;

function purpleArrowTutorialPage(){
    if(pageStatus === 0){
        document.getElementById('Purple_Arrow').style.opacity = '0';
        document.getElementById('Purple_Arrow').style.bottom = '-45%';
    }else if(pageStatus === 1){
        document.getElementById('Purple_Arrow').style.opacity = '1';
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

function firstBaloonCBTutorial(){
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

function secondBaloonCBTutorial(){
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

function letsGoBaloonCBTutorial(){
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
            pageKidsTutorialLoaded = true;
          }, 1500);
        }
}