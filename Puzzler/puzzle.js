/**
 * Created by liond on 05/12/2016.
 */
$( function() {
    $( ".ui-widget-content" ).draggable({ revert: "invalid", containment: "#container-wrapper", scroll: false});
    $( ".ui-widget-header" ).droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        }
    });
} );

var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono(){
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var min = diff.getMinutes();
    var sec = diff.getSeconds();
    var msec = diff.getMilliseconds();

    document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec;
    timerID = setTimeout("chrono()", 1);
}

function Start(){
    document.chronoForm.startstop.value = "stop!";
    document.chronoForm.startstop.onclick = Stop;
    document.chronoForm.reset.onclick = Reset;
    start = new Date();
    chrono();
}
function Reset(){
    start = new Date();
}
function StopReset(){
    document.getElementById("chronotime").innerHTML = "00:00:00";
    document.chronoForm.startstop.onclick = Start;
}
function Stop(){
    document.chronoForm.reset.onclick = StopReset;
    clearTimeout(timerID);
    document.chronoForm.startstop.onclick = function () {
        document.write(min + ":" + sec + ":" + msec)
    };
}

window.alert("If you want to play with the chronometer, double click or click on play. Good luck and have fun !");

//Voila le code pour avoir une image aleatoire au lancement de la page, venant d'un panel d'image
/*function randomImg(){

    var tabImg = [];
    tabImg[0]  = "https://cestlepetitunivers.files.wordpress.com/2015/03/m35_ciel_et_espace.jpg";
    tabImg[1]  = "http://www.w3schools.com/css/img_fjords.jpg";
    tabImg[2]  = "https://cestlepetitunivers.files.wordpress.com/2015/03/m35_ciel_et_espace.jpg";
    tabImg[3]  = "http://www2.mes-coloriages-preferes.biz/colorino/Images/Large/Nature-Fruits-Orange-23006.png";
    tabImg[4]  = "https://www.anivetvoyage.com/images/pays/Inde-1.jpg";

    document.getElementsByClassName('image').src += tabImg[Math.round(Math.random()*4)];
}*/
