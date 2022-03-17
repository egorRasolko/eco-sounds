const menuBtn = document.querySelectorAll(".nav-item");
const mainBg = document.querySelector(".main");
const startBtn = document.querySelector(".start");
const audio = document.querySelector('audio');
function birdStyle() {
    menuBtn.forEach(item =>{
        item.addEventListener('click', ()=> {
            menuBtn.forEach(item => {
                item.classList.remove('active')
            });

            item.classList.add('active')
            changeBg(item);
        })
    });
}
birdStyle();

function changeBg(data) {
   console.log( data.getAttribute('data-button'));
   if (data.getAttribute('data-button') === 'drozd'){
       mainBg.style.backgroundImage='url("assets/img/drozd.jpg")'
       audio.src='assets/audio/drozd.mp3'
   }
   else if (data.getAttribute('data-button') === 'malinovka'){
    mainBg.style.backgroundImage='url("assets/img/zarynka.jpg")'
       audio.src='assets/audio/assets_audio_zarynka.mp3'
   }
    else if (data.getAttribute('data-button') === 'javoronok'){
       mainBg.style.backgroundImage='url("assets/img/javoronok.jpg")';
       audio.src='assets/audio/javoronok.mp3'
    }
    else if (data.getAttribute('data-button') === 'slavka'){
       mainBg.style.backgroundImage='url("assets/img/zarynka.jpg")';
       audio.src='assets/audio/slavka.mp3'
    }
   else if (data.getAttribute('data-button') === 'solovey'){
       mainBg.style.backgroundImage='url("assets/img/solovey.jpg")';
       audio.src='assets/audio/assets_audio_solovey.mp3'
   }
}

startBtn.addEventListener('click', () => {
    audio.classList.toggle('play');
    if (!audio.classList.contains('play')){
        playAudio();
    } else {
        pauseAudio();
    }
});

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
}
