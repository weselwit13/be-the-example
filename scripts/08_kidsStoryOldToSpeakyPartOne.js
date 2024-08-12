let hiResponsePressed = false;

//----------FUNCTION KIDS STORYWALK WITH COSMO--------------

function kidsStoryOldToySpeakPageComponent(){
    kidsStoryOldToySpeakPage();
    cosmoSpeakWithYouOneImg();
    cosmoRemaindLB();
    cosmoStoryBeginLB();
}

//-------KIDS STORY WALK WITH COSMO COMPONENT-----------

function kidsStoryOldToySpeakPage(){
    if(pageStatus < 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(100%)';
    }else if(pageStatus === 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(0%)';
    }else if(pageStatus > 8){
        document.getElementById('walk_with_old_toy_page_1').style.transform = 'translateY(-200%)';
    }
}

function cosmoSpeakWithYouOneImg(){
    if(pageStatus === 8){
        document.getElementById('cosmo_speak_with_you_1_img').style.display = 'block';
        if(currentPosition < 800 && !hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '35%';
        } else if(currentPosition > 799 && currentPosition < 1600 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '75%';
        }else if(currentPosition > 1599 && currentPosition < 2400 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '115%';
        } else if(currentPosition > 2399 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_1_img').style.marginTop = '255%';
        } else if(currentPosition > 2999 && hiResponsePressed){
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
        } else if(currentPosition > 99 && currentPosition < 800 && hiResponsePressed){
            let baloonPosition = 800-(currentPosition*0.33);
            document.getElementById('cosmo_remaind_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 799 && hiResponsePressed){
            document.getElementById('cosmo_remaind_LB').style.transform = 'translateY(0%)';
        } 
    }
}

function cosmoStoryBeginLB(){
    if(pageStatus === 8){
        if(currentPosition < 800){
            document.getElementById('cosmo_story_begin_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 799 && currentPosition < 1600 && hiResponsePressed){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('cosmo_story_begin_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 1600 && currentPosition < 2500 && hiResponsePressed){
            document.getElementById('cosmo_story_begin_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 2999 && hiResponsePressed){
            pageStatus = 9;
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
        window.scrollTo(0,850);
        
    }
}