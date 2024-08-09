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
    }else if(pageStatus > 5){
        document.getElementById('cuby_thank_you_page').style.transform = 'translateY(-200%)';
    }
}

function cubyThankYouImg(){
    if(pageStatus === 5){
        if(currentPosition < 300){
            document.getElementById('cuby_thank_you_img').style.marginTop = '25%';
        }else if(currentPosition > 299){
            document.getElementById('cuby_thank_you_img').style.marginTop = '95%';
        }
        
    }
}

function letsGoLB(){
    if(pageStatus === 5){
        if(currentPosition < 100){
            document.getElementById('lets_go_LB').style.transform = 'translateY(800%)';
        }else if(currentPosition > 99 && currentPosition < 300){
            let baloonPosition = 800-currentPosition*2.6;
            document.getElementById('lets_go_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 299){
            document.getElementById('lets_go_LB').style.transform = 'translateY(0%)';
        }
    }
}