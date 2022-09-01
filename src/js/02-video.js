import '../css/common.css';
import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const VIMEO_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


function onPlay (evt) {
    const stringifyOnPlay = JSON.stringify(evt);
    localStorage.setItem(VIMEO_KEY, stringifyOnPlay)
}

   player.on('timeupdate', throttle(onPlay, 1000));

function playerBack() {
    if (JSON.parse(localStorage.getItem(VIMEO_KEY)) === null){
        return;
    }
    const paused = JSON.parse(localStorage.getItem(VIMEO_KEY))['seconds'];

    if (paused) {
        player
        .setCurrentTime(paused)
        .then(function (seconds){})
        .catch(function (error){
            switch (error.name) {
                case 'Error':
                    break;
                    default:
                    break;
            }
        })
    }
}

playerBack();


    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
