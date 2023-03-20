import Vimeo from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
    

function onPlay(data){
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}
player.on('timeupdate', throttle(onPlay, 1000));
    // data is an object containing properties specific to that event

const savedTime = localStorage.getItem("videoplayer-current-time");

const parsedTime = JSON.parse(savedTime);

if(savedTime){
    player.setCurrentTime(parsedTime.seconds) 
};