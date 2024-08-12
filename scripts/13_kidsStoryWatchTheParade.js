// ---------------------FUNZIONI DI KIDS STORY WATCH THE PARADE PAGE-----------------------

function kidsStoryWatchTheParadePageComponent(){
    kidsStoryWatchTheParadePage();
    textArrowContainerParade();
}
//-----COMPONENTI KIDS STORY WATCH THE PARADE PAGE
function kidsStoryWatchTheParadePage(){
    if(pageStatus < 12){
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(100%)';
    }else if(pageStatus === 12){
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(0%)';
    } else if(pageStatus > 12){
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(-200%)';
    }
}

function textArrowContainerParade(){
    if(pageStatus === 0){
        //START PAGE PART
        if(currentPosition < 1){
            document.getElementById('text_arrow_container').style.opacity = '1';
            document.getElementById('text_arrow_container').style.transform = 'translateY(0)';
        }else if(currentPosition > 0 && currentPosition < 100){
            document.getElementById('text_arrow_container').style.transform = 'translateY(' + (-currentPosition) + '%)';
        } else if(currentPosition > 99 && currentPosition < 200){
            let opacity = 1-((currentPosition-100)/100);
            document.getElementById('text_arrow_container').style.transform = 'translateY(' + (-currentPosition) + '%)';
            document.getElementById('text_arrow_container').style.opacity = opacity;
        }
        //WELCOME PAGE PART
        //----welcome to
        else if(currentPosition >199){
            document.getElementById('text_arrow_container').style.opacity = '0';
        } 
    } 
}
