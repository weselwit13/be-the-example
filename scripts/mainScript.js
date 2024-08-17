let pageStatus = 0;
let currentPosition = 0;

let locationVariant = 0;
let oldToyVariant = 0;
let newToyVariant = 0;

let hiResponsePressed = false;
/*
PAGE STATUS LEGENDA
pagestatus == 01 -> welcome page e tutorial
pagestatus == 02 -> kids story start
pagestatus == 03 -> kids story place page
pagestatus == 04 -> kids story clean cuby
pagestatus == 05 -> kids story cuby thank you
pagestatus == 06 -> kids story walk with cuby
pagestatus == 07 -> kids story select old toy
pagestatus == 08 -> kids story old toy speak
pagestatus == 09 -> kids story old toy speak
pagestatus == 10 -> kids story cuby speak
pagestatus == 11 -> kids story select new toy
pagestatus == 12 -> kids story watch parade
pagestatus == 13 -> kids story stage parade
pagestatus == 14 -> kids story cuby on stage
pagestatus == 15 -> kids story final page
*/

let bubbleCreated = 0;
let touchStartY = 0;
let touchEndY = 0;

//aggiungo l'ascoltatore dell'evento scroll alla finestra, e per ogni scroll attiva la funzione pageScrollAnimation passandogli la posizione di scroll
window.addEventListener("scroll", function () {
        console.log(this.window.scrollY.toFixed(1));
        currentPosition = this.window.scrollY;
        pageScrollAnimation(currentPosition);
        document.documentElement.requestFullscreen().catch((err) => {
            console.log(`Errore durante l'attivazione del fullscreen: ${err.message} (${err.name})`);
        });
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
    //KIDS STORY WALK WITH CUBY
    kidsStoryWalkWithCuby();
    //KIDS STORY SELECT OLD TOY
    kidsStorySelectOldToyPageComponent();
    //KIDS STORY OLD TOY SPEAK PART 1
    kidsStoryOldToySpeakPageComponent();
    //KIDS STORY OLD TOY SPEAK PART 2
    kidsStoryOldToySpeakPageTwoComponent();
    //KIDS STORY CUBY SPEAK
    CubySpeakPageComponent();
    //KIDS STORY SELECT NEW TOY
    kidsStorySelectNewToyPageComponent();
    //KIDS STORY WATCH THE PARADE
    kidsStoryWatchTheParadePageComponent();
    //KIDS STORY STAGE PARADE
    kidsStoryStageParadePageComponent();
    //KIDS STORY CUBY ON STAGE
    kidsStoryCubyOnStagePageComponent();
    //FINAL PAGE
    finalPageComponent();
}