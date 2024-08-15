// ---------------------- FUNZIONI CHE GESTISCONO I VARI COMPONENTI ---------------------------

function shadersController(){
    purpleGradient();
    yellowGradient();
    blueGradient();
    yellowFinaleGradient();
}
//-----COMPONENTI GENERICI

function purpleGradient(){
    if(pageStatus === 0){
        document.getElementById('glCanvasPurple').style.opacity = '1';
    }else if(pageStatus === 1){
        document.getElementById('glCanvasPurple').style.opacity = '0';
    }
}

function yellowGradient(){
    if(pageStatus === 0){
        document.getElementById('glCanvasYellow').style.opacity = '0';
    }else if(pageStatus > 0 && pageStatus < 6){
        document.getElementById('glCanvasYellow').style.opacity = '1';
    } else if(pageStatus > 5){
        document.getElementById('glCanvasYellow').style.opacity = '0';
    }
}

function blueGradient(){
    if(pageStatus < 6){
        document.getElementById('glCanvasBlue').style.opacity = '0';
    } else if(pageStatus > 5 && pageStatus < 13){
        document.getElementById('glCanvasBlue').style.opacity = '1';
    } else if(pageStatus > 12){
        document.getElementById('glCanvasBlue').style.opacity = '0';
    }
}

function yellowFinaleGradient(){
    if(pageStatus === 12){
        document.getElementById('glCanvasYellowFinale').style.opacity = '0';
    } else if(pageStatus > 12){
        document.getElementById('glCanvasYellowFinale').style.opacity = '1';
    }
}