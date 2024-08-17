//----------FUNCTION KIDS STORY STAGE PARADE--------------

function kidsStoryStageParadePageComponent(){
    kidsStoryStageParadePage();
    reachThePlazaCB();
    stageRB();
}

//-------FUNCTION KIDS STORY STAGE PARADE COMPONENT-----------
let stageParadePageLoaded = false;

function kidsStoryStageParadePage(){
    if(pageStatus < 13){
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(100%)';
        document.getElementById('kids_story_stage_parade').style.transition = 'transform 3s ease-in-out';
        stageParadePageLoaded = false;
    }else if(pageStatus === 13){
        setTimeout(() => { 
            stageParadePageLoaded = true;
        }, 500);
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(0%)';
        scrollUpSign(1500);
    }else if(pageStatus > 13){
        document.getElementById('kids_story_stage_parade').style.transform = 'translateY(-200%)';
        document.getElementById('kids_story_stage_parade').style.transition = 'transform 1s ease-in-out';
        stageParadePageLoaded = false;
    }
}

function reachThePlazaCB(){
    if(pageStatus === 13){
        if(currentPosition < 200){
            document.getElementById('reach_the_plaza_CB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 199 && currentPosition < 900){
            let baloonPosition = 800-(currentPosition*0.88);
            document.getElementById('reach_the_plaza_CB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 899){
            document.getElementById('reach_the_plaza_CB').style.transform = 'translateY(0%)';
        }
    }
}

function stageRB(){
    if(pageStatus === 13){
        if(currentPosition < 900){
            document.getElementById('stage_RB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 899 && currentPosition < 1200){
            let baloonPosition = 800-(currentPosition*0.66);
            document.getElementById('stage_RB').style.transform = 'translateY('+ baloonPosition +'%)';
        } else if(currentPosition > 1199 && currentPosition < 2200){
            document.getElementById('stage_RB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 2200 && stageParadePageLoaded){
            pageStatus = 14;
            window.scrollTo(0,0);
            console.log(pageStatus);
        }
    }
}