//---------FUNCTION KIDS STORY SELECT OLD TOY PAGE-----------------

function kidsStorySelectOldToyPageComponent(){
    kidsStorySelectOldToyPage();
    selectedToyBoxRB();
}

//-----SELECT OLD TOY PAGE COMPONENT
function kidsStorySelectOldToyPage(){
    if(pageStatus < 7){
        document.getElementById('kids_story_select_old_toy_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 7){
        document.getElementById('kids_story_select_old_toy_page').style.transform = 'translateY(0%)';
        scrollUpSign(800);
    }else if(pageStatus > 7){
        document.getElementById('kids_story_select_old_toy_page').style.transform = 'translateY(-200%)';
    }
}

function selectedToyBoxRB(){
    if(pageStatus < 7){
        document.getElementById('select_toy_box_RB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 7){
        if(currentPosition < 700){
            document.getElementById('select_toy_box_RB').style.transform = 'translateY(1100%)';
        } else if(currentPosition > 699 && currentPosition < 800){
            let baloonPosition = 1100.0-(currentPosition*1.25);
            document.getElementById('select_toy_box_RB').style.transform = 'translateY(' + baloonPosition + '%)';
        } else if(currentPosition > 799){
            document.getElementById('select_toy_box_RB').style.transform = 'translateY(0%)';
        }
    }
}

//----ASSEGNAZIONE DELLA VARIANTE DEL GIOCATTOLO VECCHIO E PASSAGGIO ALLA PAGINA CORRISPONDENTE
document.getElementById('cosmo_button_choice').addEventListener('click', () => toyChoice('cosmo_page'));
document.getElementById('sphere_button_choice').addEventListener('click', () => toyChoice('sphere_page'));
document.getElementById('piecey_button_choice').addEventListener('click', () => toyChoice('piecey_page'));

function toyChoice(toy) {
    console.log('${toy}_button_choice premuta');
    console.log('PAGE STATUS: ' + pageStatus);

    if (pageStatus === 7) {
        switch (toy) {
            case 'cosmo_page':
                oldToyVariant = 1;
                pageStatus = 8;
                window.scrollTo(0, 0);
                break;
            case 'sphere_page':
                oldToyVariant = 2;
                console.log('to be implemnted');
                break;
            case 'piecey_page':
                oldToyVariant = 3;
                console.log('to be implemnted');
                break;
        }
        console.log('Page status aggiornato, PAGE STATUS: ' + pageStatus + oldToyVariant);
    }
}