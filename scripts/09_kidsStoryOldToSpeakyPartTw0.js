let pageLoaded = false;
//----------FUNCTION KIDS STORYWALK WITH COSMO--------------

function kidsStoryOldToySpeakPageTwoComponent(){
    kidsStoryOldToySpeakPageTwo();
    cosmoSpeakWithYouTwoImg();
    bigDayLB();
    foundMyselfLB();
}

//-------KIDS STORY WALK WITH COSMO COMPONENT-----------

function kidsStoryOldToySpeakPageTwo(){
    if(pageStatus < 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(100%)';
    }else if(pageStatus === 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(0%)';
        scrollUpSign(3300);
    }else if(pageStatus > 9){
        document.getElementById('walk_with_old_toy_page_2').style.transform = 'translateY(-200%)';
    }
}

function cosmoSpeakWithYouTwoImg(){
    if(pageStatus < 9){
        document.getElementById('cosmo_speak_with_you_2_img').style.display = 'none';
    } else if(pageStatus === 9){
        document.getElementById('cosmo_speak_with_you_2_img').style.display = 'block';
        if(currentPosition < 300){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '-100%';
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '0';
        } else if(currentPosition > 300 && currentPosition < 1600){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '30%';
            document.getElementById('cosmo_speak_with_you_2_img').style.opacity = '1';
        } else if(currentPosition > 1600 && currentPosition < 2400){
            document.getElementById('cosmo_speak_with_you_2_img').style.marginTop = '70%';
        }    
    } 
}

function bigDayLB(){
    if(pageStatus === 9){
        if(currentPosition < 800){
            document.getElementById('big_day_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 799 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('big_day_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 1599){
            document.getElementById('big_day_LB').style.transform = 'translateY(0%)';
        }
    }
}

function foundMyselfLB(){
    if(pageStatus === 9){
        if(currentPosition < 1600){
            document.getElementById('found_myself_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1599 && currentPosition < 2400){
            let baloonPosition = 800-(currentPosition*0.28);
            document.getElementById('found_myself_LB').style.transform = 'translateY(' + baloonPosition + '%)'; 
        } else if(currentPosition > 2399 && currentPosition < 3300){
            document.getElementById('found_myself_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition >3300 && pageLoaded) {
            window.scrollTo(0,0);
            pageStatus = 10;
            console.log(pageStatus)
        }
    }
}