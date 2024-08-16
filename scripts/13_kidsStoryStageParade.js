//----------FUNCTION KIDS STORYWALK WITH CUBY--------------

function kidsStoryStageParadePageComponent(){
    kidsStoryStageParadePage();
}

//-------KIDS STORY WALK WITH CUBY COMPONENT-----------

let kidsStoryStageParadePageLoaded = false;

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