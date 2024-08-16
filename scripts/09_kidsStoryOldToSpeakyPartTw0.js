let pageLoaded = false;
let partTwo = false;
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
        scrollUpSign(3300);
    }else if(pageStatus === 9.5){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(0%)';
        scrollUpSign(3300);
    }else if(pageStatus > 9.5){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(-200%)';
    }
}

function cosmoSpeakWithYouTwoImg(){
    if(pageStatus === 9){
        setTimeout(() => {
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '1';
            document.getElementById('cosmo_speak_with_you_2_img').style.display = 'block';
          }, 300);
        if(currentPosition < 200){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '-1000%';
        } else if(currentPosition > 199 && currentPosition < 1600){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '20%';
        } else if(currentPosition > 1600 && currentPosition < 2400){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '50%';
        } else if(currentPosition > 2400){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '90%';
        }      
    }else if(pageStatus === 9.5){
        if(currentPosition < 400){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '235%';
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '0';
        } else if(currentPosition > 399 && currentPosition < 800){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '-1000%';
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '0';
        } else if(currentPosition > 799 && currentPosition < 1600){
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '1';
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '35%';
        } else if(currentPosition > 1599){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '75%';
        }
    } else{
        document.getElementById('cosmo_speak_with_you_2_img').style.display = 'none';
    }
}

//part zero
function ranRacesLB(){
    if(pageStatus === 9){
        document.getElementById('ran_races_LB').style.height = '18%'; 
        document.getElementById('ran_races_LB').style.opacity = '1'; 
    } else if(pageStatus === 9.5){
        document.getElementById('ran_races_LB').style.height = '0%'; 
        document.getElementById('ran_races_LB').style.opacity = '0'; 
    } else {
        document.getElementById('ran_races_LB').style.height = '18%'; 
        document.getElementById('ran_races_LB').style.opacity = '1'; 
    }
}

function bigDayLB(){
    if(pageStatus === 9){
        document.getElementById('big_day_LB').style.height = '14%'; 
        document.getElementById('big_day_LB').style.opacity = '1'; 
        if(currentPosition < 800){
            document.getElementById('big_day_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 799 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('big_day_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 1599){
            document.getElementById('big_day_LB').style.transform = 'translateY(0%)';
        }
    } else if(pageStatus === 9.5){
        document.getElementById('big_day_LB').style.height = '0%'; 
        document.getElementById('big_day_LB').style.opacity = '0'; 
    } else {
        document.getElementById('big_day_LB').style.height = '14%'; 
        document.getElementById('big_day_LB').style.opacity = '1'; 
    }
}

function foundMyselfLB(){
    if(pageStatus === 9){
        document.getElementById('found_myself_LB').style.height = '18%'; 
        document.getElementById('found_myself_LB').style.opacity = '1'; 
        if(currentPosition < 1600){
            document.getElementById('found_myself_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1599 && currentPosition < 2400){
            let baloonPosition = 800-(currentPosition*0.28);
            document.getElementById('found_myself_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 2399 && currentPosition < 3300){
            document.getElementById('found_myself_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition >3300 && pageLoaded) {
            pageStatus = 9.5;
            setTimeout(() => {
                partTwo = true;
              }, 100);
            window.scrollTo(0,800);
            console.log(pageStatus)
        }
    } else if(pageStatus === 9.5){
        document.getElementById('found_myself_LB').style.height = '0%'; 
        document.getElementById('found_myself_LB').style.opacity = '0'; 
    }
}

//part one
function timePassedLB(){
    if(pageStatus === 9.5){
        if(currentPosition < 100){
            document.getElementById('time_passed_LB').style.transform = 'translateY(800%)';
        } else if(currentPosition > 99 && currentPosition < 800){
            let baloonPosition = 800-(currentPosition);
            document.getElementById('time_passed_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 799){
            document.getElementById('time_passed_LB').style.transform = 'translateY(0%)';
        }
    } else if(pageStatus < 9.5){
        document.getElementById('time_passed_LB').style.transform = 'translateY(800%)'; 
    }
}

function shareMyStoryLB(){
    if(pageStatus === 9.5){
        if(currentPosition < 800){
            document.getElementById('share_my_story_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 799 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('share_my_story_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 1599 && currentPosition < 2400){
            document.getElementById('share_my_story_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 2400 && partTwo){
            pageStatus = 10;
            console.log(pageStatus);
            window.scrollTo(0,0);
        }
    } else if(pageStatus < 9.5){
        document.getElementById('share_my_story_LB').style.transform = 'translateY(800%)'; 
    }
}