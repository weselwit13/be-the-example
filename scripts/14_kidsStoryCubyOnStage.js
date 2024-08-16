//----------FUNCTION KIDS STORY CUBY ON STAGE--------------

function kidsStoryCubyOnStagePageComponent(){
    kidsStoryCubyOnStagePage();
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