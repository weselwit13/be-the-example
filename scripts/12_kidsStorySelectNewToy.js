//---------FUNCTION KIDS STORY START PAGE-----------------

function kidsStorySelectNewToyPageComponent(){
    kidsStorySelectNewToyPage();
    chooseToyBoxRB();
}

//-----COMPONENTI KIDS STORY
function kidsStorySelectNewToyPage(){
    if(pageStatus < 12){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 12){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(0%)';
    }else if(pageStatus > 12){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(-200%)';
    }
}

function chooseToyBoxRB(){
    if(pageStatus < 12){
        document.getElementById('choose_toy_box_RB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 12){
        if(currentPosition < 700){
            document.getElementById('choose_toy_box_RB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 699 && currentPosition < 800){
            let baloonPosition = 1100.0-(currentPosition*1.25);
            document.getElementById('choose_toy_box_RB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 799){
            document.getElementById('choose_toy_box_RB').style.transform = 'translateY(0%)';
        }
    }
}

//----PASSAGGIO PAGINA POSTO
document.getElementById('astra_button_choice').addEventListener('click', () => toySelected('astra_page'));
document.getElementById('zenith_button_choice').addEventListener('click', () => toySelected('zenith_page'));
document.getElementById('soleil_button_choice').addEventListener('click', () => toySelected('soleil_page'));

function toySelected(toy) {
    console.log('${toy}_button_choice premuta');
    console.log('PAGE STATUS: ' + pageStatus);

    if (pageStatus === 12) {
        pageStatus = 13;
        switch (toy) {
            case 'astra_page':
                newToyVariant = 1;                
                break;
            case 'zenith_page':
                newToyVariant = 2;
                console.log('to be implemnted');
                break;
            case 'soleil_page':
                newToyVariant = 3;
                console.log('to be implemnted');
                break;
        }
        window.scrollTo(0, 0);
        console.log('Page status aggiornato, PAGE STATUS: ' + pageStatus + newToyVariant);
    }
}