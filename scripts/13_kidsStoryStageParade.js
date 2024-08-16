//----------FUNCTION KIDS STORY STAGE PARADE--------------

function kidsStoryStageParadePageComponent(){
    kidsStoryStageParadePage();
}

//-------FUNCTION KIDS STORY STAGE PARADE COMPONENT-----------

function kidsStoryStageParadePage(){
    if(pageStatus < 13){
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(100%)';
    }else if(pageStatus === 13){
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(0%)';
        scrollUpSign(3000);
    }else if(pageStatus > 13){
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(-200%)';
    }
}