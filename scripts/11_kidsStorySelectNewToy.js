//---------FUNCTION KIDS STORY START PAGE-----------------

function kidsStorySelectNewToyPageComponent(){
    kidsStorySelectNewToyPage();
    chooseToyBoxRB();
}

//-----COMPONENTI KIDS STORY
function kidsStorySelectNewToyPage(){
    if(pageStatus < 11){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 11){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(0%)';
        scrollUpSign(800);
    }else if(pageStatus > 11){
        document.getElementById('kids_story_select_new_toy_page').style.transform = 'translateY(-200%)';
    }
}

function chooseToyBoxRB(){
    if(pageStatus < 11){
        document.getElementById('choose_toy_box_RB').style.transform = 'translateY(1100%)';
    }else if(pageStatus === 11){
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

    if (pageStatus === 11) {
        pageStatus = 12;
        switch (toy) {
            case 'astra_page':
                newToyVariant = 1;     
                setOrderParade()           
                break;
            case 'zenith_page':
                newToyVariant = 2;
                setOrderParade()
                console.log('to be implemnted');
                break;
            case 'soleil_page':
                newToyVariant = 3;
                setOrderParade()
                console.log('to be implemnted');
                break;
        }
        window.scrollTo(0, 0);
        console.log('Page status aggiornato, PAGE STATUS: ' + pageStatus + newToyVariant);
    }
}

function setOrderParade(){
    switch (newToyVariant){
        case 1:
            astraFirst();
            break;
        case 2:
            zenithFirst();
            break;
        case 3:
            soleilFirst();
            break;

    }
}

function astraFirst(){
    //first toy style
    document.getElementById('first_toy_img').src = 'src/astra.png';
    document.getElementById('first_toy_img').style.width = '30%';

    //second toy style
    document.getElementById('second_toy_img').src = 'src/soleil.png';
    document.getElementById('second_toy_img').style.width = '40%';
    document.getElementById('second_toy_img').style.marginRight = '40%';
    document.getElementById('second_toy_img').style.marginTop = '-20%';

    //third toy style
    document.getElementById('third_toy_img').src = 'src/zenith.png';
    document.getElementById('third_toy_img').style.width = '40%';
    document.getElementById('third_toy_img').style.marginLeft = '35%';
    document.getElementById('third_toy_img').style.marginTop = '0%';
}

function zenithFirst(){
    //first toy style
    document.getElementById('first_toy_img').src = 'src/zenith.png';
    document.getElementById('first_toy_img').style.width = '50%';

    //second toy style
    document.getElementById('second_toy_img').src = 'src/astra.png';
    document.getElementById('second_toy_img').style.width = '25%';
    document.getElementById('second_toy_img').style.marginRight = '40%';
    document.getElementById('second_toy_img').style.marginTop = '-30%';

    //third toy style
    document.getElementById('third_toy_img').src = 'src/soleil.png';
    document.getElementById('third_toy_img').style.width = '40%';
    document.getElementById('third_toy_img').style.marginLeft = '55%';
    document.getElementById('third_toy_img').style.marginTop = '-10%';
}

function soleilFirst(){
    //first toy style
    document.getElementById('first_toy_img').src = 'src/soleil.png';
    document.getElementById('first_toy_img').style.width = '50%';

    //second toy style
    document.getElementById('second_toy_img').src = 'src/zenith.png';
    document.getElementById('second_toy_img').style.width = '50%';
    document.getElementById('second_toy_img').style.marginRight = '40%';
    document.getElementById('second_toy_img').style.marginTop = '-20%';

    //third toy style
    document.getElementById('third_toy_img').src = 'src/astra.png';
    document.getElementById('third_toy_img').style.width = '25%';
    document.getElementById('third_toy_img').style.marginLeft = '55%';
    document.getElementById('third_toy_img').style.marginTop = '-10%';
}