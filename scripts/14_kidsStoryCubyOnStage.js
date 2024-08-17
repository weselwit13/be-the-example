//----------FUNCTION KIDS STORY CUBY ON STAGE--------------

function kidsStoryCubyOnStagePageComponent(){
    kidsStoryCubyOnStagePage();
    cubyOnStagePageImg();
    helloEveryoneLB();
    specialFriendLB();
    joinCubyOnStageCB();
}

//-------FUNCTION KIDS STORY CUBY ON STAGE-----------

let cubyOnStagePageLoaded = false;

function kidsStoryCubyOnStagePage(){
    if(pageStatus < 14){
        cubyOnStagePageLoaded = false;
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(100%)';
    }else if(pageStatus === 14){
        setTimeout(() => {
            cubyOnStagePageLoaded = true;
        }, 500);
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(0%)';
        scrollUpSign(3000);
    }else if(pageStatus > 14){
        cubyOnStagePageLoaded = false;
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(-200%)';
    }
}

function cubyOnStagePageImg(){
    if(pageStatus === 14){
        if(currentPosition < 400){
            document.getElementById('cuby_on_stage_page_img').style.marginTop = '-100%';
        } else if(currentPosition > 399 && currentPosition < 900){
            document.getElementById('cuby_on_stage_page_img').style.display = 'block';
        }else if(currentPosition > 899 && currentPosition < 1600){
            document.getElementById('cuby_on_stage_page_img').style.marginTop = '50%';
        } else if(currentPosition > 1599){
            document.getElementById('cuby_on_stage_page_img').style.marginTop = '90%';
        }      
    } else if(pageStatus < 14){
        document.getElementById('cuby_on_stage_page_img').style.display = 'none';
    }
}

function helloEveryoneLB(){
    if(pageStatus === 14){
        if(currentPosition < 200){
            document.getElementById('hello_everyone_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 199 && currentPosition < 900){
            let baloonPosition = 800-(currentPosition*0.88);
            document.getElementById('hello_everyone_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 899){
            document.getElementById('hello_everyone_LB').style.transform = 'translateY(0%)';
        }
    }
}

function specialFriendLB(){
    if(pageStatus === 14){
        if(currentPosition < 900){
            document.getElementById('special_friend_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 899 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('special_friend_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 1599){
            document.getElementById('special_friend_LB').style.transform = 'translateY(0%)';
        }    
    }
}

function joinCubyOnStageCB(){
    if(pageStatus === 14){
        if(currentPosition < 1600){
            document.getElementById('join_cuby_on_stage_CB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1599 && currentPosition < 2300){
            let baloonPosition = 800-(currentPosition*0.34);
            document.getElementById('join_cuby_on_stage_CB').style.transform = 'translateY('+ baloonPosition +'%)';
        } else if(currentPosition > 2299 && currentPosition < 3000){
            document.getElementById('join_cuby_on_stage_CB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 2999 && cubyOnStagePageLoaded === true){
            pageStatus = 15;
            window.scrollTo(0,0);
            console.log(pageStatus);
        }
    }
}
