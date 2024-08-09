//---------FUNCTION KIDS STORY START PAGE-----------------

function kidsStoryStartPageComponente(){
    KidsstoryPage();
    narrator_Baloon_CB();
    choice_box_CB();
    select_place_box_RB();
}

//-----COMPONENTI KIDS STORY
function KidsstoryPage(){
    if(pageStatus === 1 || pageStatus === 0){
        document.getElementById('kids_story').style.transform = 'translateY(100%)';
    }else if(pageStatus === 2){
        document.getElementById('kids_story').style.transform = 'translateY(0%)';
    }else if(pageStatus === 3){
        document.getElementById('kids_story').style.transform = 'translateY(-200%)';
    }
}

function narrator_Baloon_CB(){
    if(pageStatus === 1){
        document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(700%)';
    }else if(pageStatus === 2){
        if(currentPosition < 1){
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(700%)';
        } else if(currentPosition > 0 && currentPosition < 200){
            let baloonPosition = 600-(currentPosition*3);
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 199){
            document.getElementById('narrator_Baloon_CB').style.transform = 'translateY(0%)';
        }
    }
}

function choice_box_CB(){
    if(pageStatus === 1){
        document.getElementById('choice_box_CB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 2){
        if(currentPosition < 200){
            document.getElementById('choice_box_CB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 400 && currentPosition < 600){
            let baloonPosition = 1100-(currentPosition*1.8);
            document.getElementById('choice_box_CB').style.transform = 'translateY(' + (baloonPosition) + '%)';
        } else if(currentPosition > 399){
            document.getElementById('choice_box_CB').style.transform = 'translateY(0%)';
        }
    }
}

function select_place_box_RB(){
    if(pageStatus === 1){
        document.getElementById('select_place_box_RB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 2){
        if(currentPosition < 700){
            document.getElementById('select_place_box_RB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 699 && currentPosition < 800){
            let baloonPosition = 1100.0-(currentPosition*1.25);
            document.getElementById('select_place_box_RB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 799){
            document.getElementById('select_place_box_RB').style.transform = 'translateY(0%)';
        }
    }
}

//----PASSAGGIO PAGINA POSTO
document.getElementById('garden_button_choice').addEventListener('click', () => placeChoice('garden_page'));
document.getElementById('attic_button_choice').addEventListener('click', () => placeChoice('attic_page'));
document.getElementById('park_button_choice').addEventListener('click', () => placeChoice('park_page'));

function placeChoice(place) {
    console.log('${place}_button_choice premuta');
    console.log('PAGE STATUS: ' + pageStatus);

    if (pageStatus === 2) {
        pageStatus = 3;
        switch (place) {
            case 'garden_page':
                locationVariant = 1;
                break;
            case 'attic_page':
                locationVariant = 2;
                break;
            case 'park_page':
                locationVariant = 3;
                break;
        }
        window.scrollTo(0, 0);
        console.log('Page status aggiornato, PAGE STATUS: ' + pageStatus + locationVariant);
    }
}