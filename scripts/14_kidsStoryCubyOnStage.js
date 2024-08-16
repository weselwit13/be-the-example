//----------FUNCTION KIDS STORY CUBY ON STAGE--------------

function kidsStoryCubyOnStagePageComponent(){
    kidsStoryCubyOnStagePage();
    cubyOnStageCB();
}

//-------FUNCTION KIDS STORY CUBY ON STAGE-----------

function kidsStoryCubyOnStagePage(){
    if(pageStatus < 14){
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(100%)';
    }else if(pageStatus === 14){
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(0%)';
        scrollUpSign(3000);
    }else if(pageStatus > 14){
        document.getElementById('kids_story_cuby_on_stage').style.transform = 'translateY(-200%)';
    }
}

function cubyOnStageCB(){
    if(pageStatus === 14){
        if(currentPosition < 1500){
            document.getElementById('cuby_on_stage_CB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1499 && currentPosition < 2100){
            let baloonPosition = 800-(currentPosition*0.38);
            document.getElementById('cuby_on_stage_CB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 2099){
            document.getElementById('cuby_on_stage_CB').style.transform = 'translateY(0%)';
        }
    }
}