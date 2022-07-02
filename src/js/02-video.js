import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
// console.log(player);

function onPlayerTimeupdate(currentTime) {
  console.log(currentTime);

  const timeStamp = JSON.stringify(currentTime.seconds);

  localStorage.setItem('videoplayer-current-time', timeStamp);
};

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

const savedTimeStr = localStorage.getItem('videoplayer-current-time');
const savedTime = Number(savedTimeStr);

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
      seconds = savedTime;
      
    // console.log(savedTime);

  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Current time stamp error');
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        console.log('Error');
        // some other error occurred
        break;
    }
  });
