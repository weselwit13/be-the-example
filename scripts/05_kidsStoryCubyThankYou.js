//----------FUNCTION KIDS STORY CUBY THANK YOU--------------

function kidsStoryCubyThankYou(){
    CubyThankPage();
    cubyThankYouImg();
    letsGoLB();
}

//-------KIDS STORY CUBY THANK YOU COMPONENT-----------

function CubyThankPage(){
    if(pageStatus < 5){
        document.getElementById('cuby_thank_you_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 5){
        document.getElementById('cuby_thank_you_page').style.transform = 'translateY(0%)';
        scrollUpSign(1000);
    }else if(pageStatus > 5){
        document.getElementById('cuby_thank_you_page').style.transform = 'translateY(-200%)';
    }
}

function cubyThankYouImg(){
    if(pageStatus === 5){
        if(currentPosition < 1000){
            document.getElementById('cuby_thank_you_img').style.marginTop = '25%';
        }else if(currentPosition > 999){
            document.getElementById('cuby_thank_you_img').style.marginTop = '95%';
        }
        
    }
}

function letsGoLB(){
    if(pageStatus === 5){
        if(currentPosition < 800){
            document.getElementById('lets_go_LB').style.transform = 'translateY(800%)';
        }else if(currentPosition > 799 && currentPosition < 1000){
            let baloonPosition = 800-currentPosition*0.8;
            document.getElementById('lets_go_LB').style.transform = 'translateY('+ baloonPosition +'%)';
            pageEnded = false;
        }else if(currentPosition > 999){
            document.getElementById('lets_go_LB').style.transform = 'translateY(0%)';
            pageEnded = true;
        }
    } 
}

document.getElementById('letsGo_Baloon_05_CB').addEventListener('click', StartWalkingWithCuby);

function StartWalkingWithCuby(){
    console.log('letsGo_Baloon_05_CB premuta');
    console.log('PAGE STATUS: '+pageStatus);
    if(pageStatus === 5){

        //passaggio al nuovo contenuto tramite animazione del baloon
        document.getElementById('animation_RB').style.height = '120%';
        document.getElementById('animation_RB').style.width = '110%';

        setTimeout(() => {
            pageStatus = 6;
            pageEnded = false;
            window.scrollTo(0,0);

            setTimeout(() => {
                document.getElementById('animation_RB').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('animation_RB').style.height = '0%';
                    document.getElementById('animation_RB').style.width = '0%';
                    setTimeout(() => {
                        document.getElementById('animation_RB').style.opacity = '1';
                      }, 1000);
                  }, 500);
              }, 500);
          }, 500);
          console.log('PAGE STATUS: '+pageStatus);
    }
}