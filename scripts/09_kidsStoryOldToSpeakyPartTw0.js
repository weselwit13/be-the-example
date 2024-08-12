let partSpeach = 0;

//----------FUNCTION KIDS STORYWALK WITH COSMO--------------

function kidsStoryOldToySpeakPageTwoComponent(){
    kidsStoryOldToySpeakPageTwo();
    cosmoSpeakWithYouTwoImg();
    ranRacesLB();
    bigDayLB();
    foundMyselfLB();
    timePassedLB();
    shareMyStoryLB();
}

//-------KIDS STORY WALK WITH COSMO COMPONENT-----------

function kidsStoryOldToySpeakPageTwo(){
    if(pageStatus < 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(100%)';
    }else if(pageStatus === 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(0%)';
    }else if(pageStatus > 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(-200%)';
    }
}

function cosmoSpeakWithYouTwoImg(){
    if(pageStatus === 9){
        document.getElementById('cosmo_speak_with_you_2_img').style.display = 'block';
        if(currentPosition < 800){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '20%';
        } else if(currentPosition > 799 && currentPosition < 1600 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '55%';
        }else if(currentPosition > 1599 && currentPosition < 2400 && hiResponsePressed){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '95%';
        }    
    } else {
        document.getElementById('cosmo_speak_with_you_2_img').style.display = 'none';
    }
}

//part zero
function ranRacesLB(){
    if(pageStatus === 9 && partSpeach === 0){
        document.getElementById('ran_races_LB').style.height = '18%'; 
        document.getElementById('ran_races_LB').style.opacity = '1'; 
        if(currentPosition < 700){
            document.getElementById('ran_races_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 699 && currentPosition < 1400){
            let baloonPosition = 800-(currentPosition*0.57);
            document.getElementById('ran_races_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 1399){
            document.getElementById('ran_races_LB').style.transform = 'translateY(0%)';
        }
    } /*else if(pageStatus === 9 && partSpeach === 1){
        document.getElementById('ran_races_LB').style.height = '0%'; 
        document.getElementById('ran_races_LB').style.opacity = '0'; 
    }*/
}

function bigDayLB(){
    if(pageStatus === 9 && partSpeach === 0){
        document.getElementById('big_day_LB').style.height = '18%'; 
        document.getElementById('big_day_LB').style.opacity = '1'; 
        if(currentPosition < 1400){
            document.getElementById('big_day_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1399 && currentPosition < 2100){
            let baloonPosition = 800-(currentPosition*0.38);
            document.getElementById('big_day_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 2099){
            document.getElementById('big_day_LB').style.transform = 'translateY(0%)';
        }
    } /*else if(pageStatus === 9 && partSpeach === 1){
        document.getElementById('big_day_LB').style.height = '0%'; 
        document.getElementById('big_day_LB').style.opacity = '0'; 
    }*/
}

function foundMyselfLB(){
    if(pageStatus === 9 && partSpeach === 0){
        document.getElementById('found_myself_LB').style.height = '18%'; 
        document.getElementById('found_myself_LB').style.opacity = '1'; 
        if(currentPosition < 2100){
            document.getElementById('found_myself_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 2099 && currentPosition < 2800){
            let baloonPosition = 800-(currentPosition*0.38);
            document.getElementById('found_myself_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 2799 && currentPosition < 3000){
            document.getElementById('found_myself_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition >2999) {
            window.scrollTo(0,0);
            console.log(partSpeach);
            partSpeach = 1;
        }
    } /*else if(pageStatus === 9 && partSpeach === 1){
        document.getElementById('found_myself_LB').style.height = '0%'; 
        document.getElementById('found_myself_LB').style.opacity = '0'; 
    }*/
}

//part one
function timePassedLB(){
    if(pageStatus === 9 && partSpeach === 1){
        if(currentPosition < 800){
            document.getElementById('time_passed_LB').style.transform = 'translateY(800%)'; 
        }   
    }
}

function shareMyStoryLB(){
    if(pageStatus === 9 && partSpeach === 1){
        if(currentPosition < 800){
            document.getElementById('share_my_story_LB').style.transform = 'translateY(800%)'; 
        }   
    }
}