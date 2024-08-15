// ---------------------FUNZIONI DI KIDS STORY WATCH THE PARADE PAGE-----------------------

function kidsStoryWatchTheParadePageComponent(){
    kidsStoryWatchTheParadePage();
    textArrowContainerParade();
    toysImgContainer();
}
//-----COMPONENTI KIDS STORY WATCH THE PARADE PAGE
function kidsStoryWatchTheParadePage(){
    if(pageStatus < 12){
        document.getElementById('kids_story_watch_parade').style.transition = 'transform 1s ease-in-out';
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(100%)';
    }else if(pageStatus === 12){
        document.getElementById('kids_story_watch_parade').style.transition = 'transform 1s ease-in-out';
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(0%)';
        scrollUpSign(2200);
    } else if(pageStatus > 12){
        document.getElementById('kids_story_watch_parade').style.transition = 'transform 3s ease-in-out';
        document.getElementById('kids_story_watch_parade').style.transform = 'translateY(-200%)';
    }
}

function textArrowContainerParade(){
    if(pageStatus === 12){
        //START PAGE PART
        if(currentPosition < 1){
            document.getElementById('text_arrow_container_parade').style.opacity = '1';
            document.getElementById('text_arrow_container_parade').style.transform = 'translateY(0)';
        } else if(currentPosition > 0 && currentPosition < 200){
            document.getElementById('text_arrow_container_parade').style.transform = 'translateY(' + (-currentPosition/2) + '%)';
        } else if(currentPosition > 199 && currentPosition < 400){
            let opacity = 1-((currentPosition-200)/200);
            document.getElementById('text_arrow_container_parade').style.transform = 'translateY(' + (-currentPosition/2) + '%)';
            document.getElementById('text_arrow_container_parade').style.opacity = opacity;
        } else if(currentPosition >199){
            document.getElementById('text_arrow_container_parade').style.opacity = '0';
        } 
    } 
}

function toysImgContainer(){
    if(pageStatus === 12){
        //START PAGE PART
        if(currentPosition < 1){
            document.getElementById('toys_img_container').style.transform = 'translateY(0)';
        } else if(currentPosition > 0 && currentPosition < 2200){
            let baloonPosition = -currentPosition/20;
            document.getElementById('toys_img_container').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 2199){
            pageStatus = 13;
            window.scrollTo(0,0);
        }
    } else if(pageStatus < 12){
        document.getElementById('toys_img_container').style.transform = 'translateY(0)';
    }
}
