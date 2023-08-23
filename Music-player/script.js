
let songs = [
    {title: 'Flying', artist: 'artista 1', src: 'Songs/Flying.mp3', img: 'Images/Image-Flying.jpg'},
    {title: 'Guess-I-will-Never-Know', artist: 'artista 2', src: 'Songs/Guess-I-will-Never-Know.mp3', img: 'Images/Image-Guess-I-will-Never-Know.jpg'},
    {title: 'Is-This-Really-Happening', artist: 'artista 3', src: 'Songs/Is-This-Really-Happening.mp3', img: 'Images/Image-Is-This-Really-Happening.jpg'}
];

let music = document.querySelector('audio');
let musicIndex = 0;

let image = document.querySelector('img'); 
let musicName = document.querySelector('.description h2');
let artisName = document.querySelector('description i');

renderMusic(musicIndex);

document.querySelector('#start-icon').addEventListener('click',playMusic);
document.querySelector('#pause-icon').addEventListener('click',pauseMusic);

document,querySelector('#previus-icon').addEventListener('click', () => {
    musicIndex--;
    if(musicIndex < 0){
        musicIndex = 2;
    }
    renderMusic(musicIndex); 
});

document,querySelector('#next-icon').addEventListener('click', () => {
    musicIndex++;
    if(musicIndex > 2){
        musicIndex = 0;
    }
    renderMusic(musicIndex);
});

music.addEventListener('timeupdate', updateBarr );

function renderMusic(index){
    music.setAttribute('src', songs[index].src);
    songs.addEventListener('loadeddate', () => {
        musicName.textContent = songs[index].title;
        artisName.textContent = songs[index].artist;
        image.src = songs[index].img;
    });
}

function playMusic(){
    music.play();
    document.querySelector('#pause-icon').style.display = 'block';
    document.querySelector('#start-icon').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('#start-icon').style.display = 'block';
    document.querySelector('#pause-icon').style.display = 'none';
}


function updateBarr(){
    let barr = document.querySelector('progress');
    barr.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

/*
function secondsToMinutes(pseconds){
    let minutes = Math.floor(pseconds / 60);
    let seconds = segundos % 60;

    if (minutes < 10){
        minutes = '0' + seconds;
    }

    return minutes + ':' + seconds;
}
*/
