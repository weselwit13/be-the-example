//-----------FUNCTION TUTORIAL KIDS PAGE-----------------

function finalPageComponent(){
    finalPage();
    congratulationsCB();
    youAreCB();
}

//-----COMPONENTI TUTORIAL KIDS PAGE
function finalPage(){
    if(pageStatus < 13){
        document.getElementById('final_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 13){
        document.getElementById('final_page').style.transform = 'translateY(0%)';
        scrollUpSign(2500);
    } else if(pageStatus > 13){
        document.getElementById('final_page').style.transform = 'translateY(-200%)';
    }
}

function congratulationsCB(){
    if(pageStatus === 13){
        if(currentPosition < 1){
            document.getElementById('congratulations_CB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 0 && currentPosition < 200){
            let baloonPosition = 600-(currentPosition*3);
            document.getElementById('congratulations_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 199){
            document.getElementById('congratulations_CB').style.transform = 'translateY(0%)';
        }
    }
}

function youAreCB(){
    if(pageStatus === 13){
        if(currentPosition < 200){
            document.getElementById('you_are_CB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 899 && currentPosition < 1000){
            let baloonPosition = 700-((currentPosition-900)*5);
            document.getElementById('you_are_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 999){
            document.getElementById('you_are_CB').style.transform = 'translateY(0%)';
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
            //pagina kids
            pageKidsTutorialLoaded = true;
          }, 1500);
        }
}