var videoStart;
var videoKtae;
var videoSunEnter;
var videoSunExit;
var videoSputnik;
var videoLanding;

window.onload = function () {
    videoStart = document.getElementById('vidStart');
    videoKtae = document.getElementById('vidKtae');
    videoSunEnter = document.getElementById('vidSunEnter');
    videoSunExit = document.getElementById('vidSunExit');
    videoSputnik = document.getElementById('vidSputnik');
    videoLanding = document.getElementById('vidLanding');
};

function playKtae() {
    if (videoKtae.paused){
        videoKtae.play();
    }
    else {
        videoKtae.pause();
    }
}

function playStart() {
    if (videoStart.paused){
        videoStart.play();
    }
    else {
        videoStart.pause();
    }
}

function playSunEnter() {
    if (videoSunEnter.paused){
        videoSunEnter.play();
    }
    else {
        videoSunEnter.pause();
    }
}

function playSunExit() {
    if (videoSunExit.paused){
        videoSunExit.play();
    }
    else {
        videoSunExit.pause();
    }
}

function playSputnik() {
    if (videoSputnik.paused){
        videoSputnik.play();
    }
    else {
        videoSputnik.pause();
    }
}

function playLanding() {
    if (videoLanding.paused){
        videoLanding.play();
    }
    else {
        videoLanding.pause();
    }
}