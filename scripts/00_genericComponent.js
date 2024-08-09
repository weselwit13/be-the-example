// ---------------------- FUNZIONI CHE GESTISCONO I VARI COMPONENTI ---------------------------

function shadersController(){
    purpleGradient();
    yellowGradient();
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
    }else if(pageStatus === 1){
        document.getElementById('glCanvasYellow').style.opacity = '1';
    }
}