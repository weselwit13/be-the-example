//-----------FUNCTION KIDS STORY FINAL PAGE-----------------

function finalPageComponent(){
    finalPage();
    congratulationsCB();
    youAreCB();
    badgeContainer();
    doubleMessageCB();
    discoverMoreCB();
}

//-----COMPONENTI TUTORIAL KIDS STORY FINAL PAGE
function finalPage(){
    if(pageStatus < 15){
        document.getElementById('final_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 15){
        badgeImg();
        document.getElementById('final_page').style.transform = 'translateY(0%)';
        scrollUpSign(3300);
    } else if(pageStatus > 15){
        document.getElementById('final_page').style.transform = 'translateY(-200%)';
    }
}

function congratulationsCB(){
    if(pageStatus === 15){
        if(currentPosition < 400){
            document.getElementById('congratulations_CB').style.transform = 'translateY(500%)';
        } else if(currentPosition > 399 && currentPosition < 1000){
            let baloonPosition = 500-(currentPosition*0.5);
            document.getElementById('congratulations_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 999){
            document.getElementById('congratulations_CB').style.transform = 'translateY(0%)';
        }
    }
}

function youAreCB(){
    if(pageStatus === 15){
        if(currentPosition < 1000){
            document.getElementById('you_are_CB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 999 && currentPosition < 1200){
            let baloonPosition = 1100-(currentPosition*0.92);
            document.getElementById('you_are_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 1200){
            document.getElementById('you_are_CB').style.transform = 'translateY(0%)';
        }
    }
}

function badgeContainer(){
    if(pageStatus === 15){
        if(currentPosition < 1200){
            document.getElementById('badge_container').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 1199 && currentPosition < 1800){
            let baloonPosition = 1100-(currentPosition*0.54);
            document.getElementById('badge_container').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 1799 && currentPosition < 2400){
            document.getElementById('badge_container').style.transform = 'translateY(20%)';
        } else if(currentPosition > 2399 && currentPosition < 2800){
            let newBaloonPosition = 20-(currentPosition*0.007);
            document.getElementById('badge_container').style.transform = 'translateY(' + (newBaloonPosition) + '%)';
        } else if(currentPosition > 2999){
            document.getElementById('badge_container').style.transform = 'translateY(0%)';
        }
    }
}

function badgeImg(){
    if(oldToyVariant === 1 && newToyVariant === 1){
        document.getElementById('badge_img').src = 'src/racing_astronaut.png';
    } else if(oldToyVariant === 1 && newToyVariant === 2){
        document.getElementById('badge_img').src = 'src/racing_historian.png';
    } else if(oldToyVariant === 1 && newToyVariant === 3){
        document.getElementById('badge_img').src = 'src/racing_artist.png';
    }
}

function doubleMessageCB(){
    if(currentPosition < 2500){
        document.getElementById('double_message_CB').style.transform = 'translateY(1100%)';
    } else if(currentPosition > 2499 && currentPosition < 2900){
        let baloonPosition = 1100-(currentPosition*0.38);
        document.getElementById('double_message_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
    } else if(currentPosition > 2899){
        document.getElementById('double_message_CB').style.transform = 'translateY(0%)';
    }
}

function discoverMoreCB(){
    if(currentPosition < 2900){
        document.getElementById('discover_more_CB').style.transform = 'translateY(1100%)';
    } else if(currentPosition > 2899 && currentPosition < 3300){
        let baloonPosition = 1100-(currentPosition*0.33);
        document.getElementById('discover_more_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
    } else if(currentPosition > 3300){
        document.getElementById('discover_more_CB').style.transform = 'translateY(0%)';
    }
}

document.getElementById('discover_more_CB').addEventListener('click', GoToGeomagSite);

function GoToGeomagSite(){
    console.log('discover_more_CB premuta');
    console.log('SITO GEOMAG');
}