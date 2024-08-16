//----------FUNCTION KIDS STORYWALK WITH COSMO--------------

function kidsStoryOldToySpeakPageComponent(){
    kidsStoryOldToySpeakPage();
    cosmoSpeakWithYouOneImg();
    cosmoRemaindLB();
    hiResponseCB();
}

//-------KIDS STORY WALK WITH COSMO COMPONENT-----------

function kidsStoryOldToySpeakPage(){
    if(pageStatus < 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(100%)';
    }else if(pageStatus === 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(0%)';
        scrollUpSign(1500, 0, 0, hiResponsePressed);
    }else if(pageStatus > 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(-200%)';
    }
}

function cosmoSpeakWithYouOneImg(){
    if(pageStatus === 8){
        document.getElementById('cosmo_speak_with_you_1_img').style.display = 'block';
        if(currentPosition < 800 && !hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '35%';
        } else if(currentPosition > 999 && currentPosition < 1200 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '85%';
        } else if(currentPosition > 1199 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '255%';
        } else if(currentPosition > 1500 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.display = 'none';
        }      
    } else {
        document.getElementById('cosmo_speak_with_you_1_img').style.display = 'none';
    }
}


function cosmoRemaindLB(){
    if(pageStatus === 8){
        if(currentPosition < 100 && !hiResponsePressed){
            document.getElementById('cosmo_remaind_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 99 && currentPosition < 1000 && hiResponsePressed){
            let baloonPosition = 800-(currentPosition*0.8);
            document.getElementById('cosmo_remaind_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 999 && hiResponsePressed && currentPosition < 1800){
            document.getElementById('cosmo_remaind_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 1800 && hiResponsePressed){
            pageStatus = 9;
            setTimeout(() => {
                pageLoaded = true;
              }, 100);
            window.scrollTo(0,0);
            console.log(pageStatus);
        } 
    }
}

document.getElementById('hi_response_CB').addEventListener('click', StartTalkWithCosmo);

function StartTalkWithCosmo(){
    console.log('hi_response_CB premuta');
    if(pageStatus === 8 && !hiResponsePressed){
        hiResponsePressed = true;
        window.scrollTo(0,1050);
        
    }
}

function hiResponseCB(){
    if(hiResponsePressed){
        document.getElementById('hi_response_CB').style.background = '#240A98';
        document.getElementById('hi_response_CB').style.color = '#E6B8FD';
        document.getElementById('hi_response_CB').style.animationPlayState = 'paused';
    } else {
        document.getElementById('hi_response_CB').style.background = '#F8F8FF';
        document.getElementById('hi_response_CB').style.color = '#000000';
        document.getElementById('hi_response_CB').style.animationPlayState = 'running';
    }
}