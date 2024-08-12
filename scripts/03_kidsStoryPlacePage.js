//----------FUNCTION KIDS STORY PLACE PAGE--------------

function kidsStoryPlacePageComponente(){
    PlacePage();
    placeDescriptionCBMessage();
    placeCubyRB();
    cubyPlaced();
    waitWhatCB();
}

//-------KIDS STORY PLACE PAGE COMPONENT-----------

function PlacePage(){
    if(pageStatus < 3){
        document.getElementById('place_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 3){
        document.getElementById('place_page').style.transform = 'translateY(0%)';
    }else if(pageStatus > 3){
        document.getElementById('place_page').style.transform = 'translateY(-200%)';
    }
}

function placeDescriptionCBMessage(){
    switch(locationVariant){
        case 1:
            document.getElementById('place_description_CB_message').textContent = 'You are in a beautiful garden. The flowers smell sweet and the sun feels warm as you walk around.';
            break;
        case 2:
            document.getElementById('place_description_CB_message').textContent = 'You are in a dusty attic. Sunlight filters through a small window, the air smells of old books and hidden treasures.';
            break;
        case 3:
            document.getElementById('place_description_CB_message').textContent = 'You are in a lively park. The air is filled with sounds of birds singing and the grass is soft under your feet.';
            break;
    }
}

function placeCubyRB(){
    //position
    if(pageStatus === 3){
        if(currentPosition < 200){
            document.getElementById('place_cuby_RB').style.transform = 'translateY(700%)';
            document.getElementById('place_cuby_RB').style.height = '75%';
        } else if(currentPosition > 199 && currentPosition < 400){
            let baloonPosition = 600-(currentPosition*1.5);
            document.getElementById('place_cuby_RB').style.transform = 'translateY(' + (baloonPosition) + '%)';
            document.getElementById('place_cuby_RB').style.height = '75%';
        } else if(currentPosition > 799 && currentPosition < 1000){
            document.getElementById('place_cuby_RB').style.transform = 'translateY(0%)';
            let baloonHeightModifire = (currentPosition-800)/20;
            document.getElementById('place_cuby_RB').style.height = (75-baloonHeightModifire) +'%';
        }else if(currentPosition > 999){
            document.getElementById('place_cuby_RB').style.height = '65%';
        }
    }
    //background
    switch(locationVariant){
        case 1:
            document.getElementById('place_cuby_RB').style.backgroundImage = "url('src/01_garden.jpg')";
            break;
        case 2:
            document.getElementById('place_cuby_RB').style.backgroundImage = "url('src/01_attic.jpg')";
            break;
        case 3:
            document.getElementById('place_cuby_RB').style.backgroundImage = "url('src/01_park.jpg')";
            break;
    }
}

function cubyPlaced(){
    switch(locationVariant){
        case 1:
            document.getElementById('cuby_placed').style.marginLeft = "45%";
            document.getElementById('cuby_placed').style.marginTop = "20%";
            break;
        case 2:
            document.getElementById('cuby_placed').style.marginLeft = "-45%";
            document.getElementById('cuby_placed').style.marginTop = "130%";
            break;
        case 3:
            document.getElementById('cuby_placed').style.marginLeft = "-15%";
            document.getElementById('cuby_placed').style.marginTop = "70%";
            break;
    }
}

function waitWhatCB(){
    if(pageStatus === 3){
        if(currentPosition < 1000){
            document.getElementById('wait_what_CB').style.transform = 'translateY(1000%)';
            document.getElementById('wait_what_CB').style.height = '1%';
        } else if(currentPosition > 999 && currentPosition < 1200){
            let baloonPosition = 700-(currentPosition*0.6);
            document.getElementById('wait_what_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
            document.getElementById('wait_what_CB').style.height = '9.5%';
        } else if(currentPosition > 1199){
            document.getElementById('wait_what_CB').style.transform = 'translateY(0%)';
            document.getElementById('wait_what_CB').style.height = '9.5%';
        }
    }
}

document.getElementById('cuby_placed').addEventListener('click', () => GoToCleanCuby());

function GoToCleanCuby(){
    console.log('Cliccato su cuby');
    if(currentPosition > 1199){
        pageStatus = 4;
        window.scrollTo(0, 0);
        console.log('Si va a pulire Cuby');
    }
}