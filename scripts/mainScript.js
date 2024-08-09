let pageStatus = 0;
let currentPosition = 0;
let locationVariant = 0;
/*
PAGE STATUS LEGENDA
pagestatus == 0 -> welcome page
pagestatus == 1 -> kids tutorial
pagestatus == 2 -> kids story
pagestatus == 3 -> kids find cuby
*/

let bubbleCreated = 0;
let touchStartY = 0;
let touchEndY = 0;

//aggiungo l'ascoltatore dell'evento scroll alla finestra, e per ogni scroll attiva la funzione pageScrollAnimation passandogli la posizione di scroll
window.addEventListener("scroll", function () {
        console.log(this.window.scrollY.toFixed(1));
        currentPosition = this.window.scrollY.toFixed(1);
        pageScrollAnimation(currentPosition);
    }
);

//funzione che chiama a sua volta le funzioni di animazione di ogni singolo componente, 
//va creata una funzione per componente per evitare bug grafici come sovrapposizioni o transizioni non completate
//fare una funzione per componente aiuta a gestire più facilmente la questione bug grafici anche se magari è un pò ridondante
function pageScrollAnimation(currentPosition){
    //COMPONENTI GENERICI
    shadersController();
    //TOP CONTENT 
    topContent();
    //WELCOME PAGE
    welcomePageComponent();
    //TUTORIAL KIDS PAGE
    tutorialKidsPageComponent();
    //KIDS STORY START
    kidsStoryStartPageComponente();
    //KIDS STORY PLACE PAGE
    kidsStoryPlacePageComponente();
    //KIDS STORY CLEAN CUBY PAGE
    kidsStoryCleanCubyComponente();
    //KIDS STORY CUBY THANK YOU
    kidsStoryCubyThankYou();
}
