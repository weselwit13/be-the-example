//----------FUNCTION KIDS STORYWALK WITH CUBY--------------

function kidsStoryWalkWithCuby(){
    WalkWithCubyPage();
    cubyWalkWithYouImg();
    almostThereLB();
    arrivalParadeCB();
    cubyProposalLB();
}

//-------KIDS STORY WALK WITH CUBY COMPONENT-----------

function WalkWithCubyPage(){
    if(pageStatus < 6){
        document.getElementById('walk_with_cuby_page').style.transform = 'translateY(100%)';
    }else if(pageStatus === 6){
        document.getElementById('walk_with_cuby_page').style.transform = 'translateY(0%)';
        scrollUpSign(3000);
    }else if(pageStatus > 6){
        document.getElementById('walk_with_cuby_page').style.transform = 'translateY(-200%)';
    }
}

function cubyWalkWithYouImg(){
    if(pageStatus === 6){
        if(currentPosition < 100){
            document.getElementById('cuby_walk_with_you_img').style.display = 'none';  
            document.getElementById('cuby_walk_with_you_img').style.marginTop = '-100%';
        } else if(currentPosition > 99 && currentPosition < 800){
            document.getElementById('cuby_walk_with_you_img').style.display = 'block';
            document.getElementById('cuby_walk_with_you_img').style.marginTop = '-100%';
        }else if(currentPosition > 799 && currentPosition < 2400){
            document.getElementById('cuby_walk_with_you_img').style.marginTop = '60%';
        } else if(currentPosition > 2399){
            document.getElementById('cuby_walk_with_you_img').style.marginTop = '145%';
        }       
    }
}

function almostThereLB(){
    if(pageStatus === 6){
        if(currentPosition < 600){
            document.getElementById('almost_there_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 599 && currentPosition < 800){
            let baloonPosition = 800-currentPosition;
            document.getElementById('almost_there_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 799){
            document.getElementById('almost_there_LB').style.transform = 'translateY(0%)';
        }      
    }
}

function arrivalParadeCB(){
    if(pageStatus === 6){
        if(currentPosition < 900){
            document.getElementById('arrival_parade_CB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 899 && currentPosition < 1600){
            let baloonPosition = 800-(currentPosition*0.5);
            document.getElementById('arrival_parade_CB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 1599){
            document.getElementById('arrival_parade_CB').style.transform = 'translateY(0%)';
        }      
    }
}

function cubyProposalLB(){
    if(pageStatus === 6){
        if(currentPosition < 1700){
            document.getElementById('cuby_proposal_LB').style.transform = 'translateY(800%)'; 
        } else if(currentPosition > 1699 && currentPosition < 2400){
            let baloonPosition = 800-(currentPosition*0.33);
            document.getElementById('cuby_proposal_LB').style.transform = 'translateY('+ baloonPosition +'%)';
        }else if(currentPosition > 2399 && currentPosition < 3300){
            document.getElementById('cuby_proposal_LB').style.transform = 'translateY(0%)';
        } else if(currentPosition > 3299){
            pageStatus = 7;
            window.scrollTo(0,0);
            console.log(pageStatus);
        }   
    }
}