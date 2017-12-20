function Player (id, movie, src){
    
/*data.films[].forEach(function(element){
    console.log(element.src) ;
})
*/
var dureeFilm;
this.src = src;
for(var i = 0; i<19; i++){
    if(data.films[i].src == this.src) dureeFilm = data.films[i].duration ;
}
     

var vid = document.getElementById(id);
// Set the location of movie
vid.src = './'+ movie;
vid.load();

this.data = data;
var source  = document.createElement('src');
var after = document.getElementById('after');
var before = document.getElementById('before');
var fullscreen = document.getElementById('fullScreen');
var playButton = document.getElementById('play');
var slideContainer = document.getElementById('myRange');
var stopButton = document.getElementById('stop');
var progressBar = document.getElementById('progressBar');
var moviePlayer = document.querySelector('.moviePlayer');
var containernavBar = document.querySelector('.containerNavBar');
progressBar.value = 0;

var fullscreenValue = false;
// Set the slider
 slideContainer.value = 50;

var playing = false;
vid.volume = 0.5;
// Fonctionnalité volume

slideContainer.addEventListener('change', function(){
    var sliderValue = slideContainer.value;
    vid.volume = sliderValue*0.01;
    console.log(vid.volume);
});


// Fonctionnalité play
playButton.addEventListener('click', function(){
    if(playing == false){
      vid.play();
    playButton.src ='./icon/pause.png';  
    playing = true;
    }else {
    vid.pause();
    playButton.src ='./icon/play-1.png';
    playing = false;
    }
      
});

var moove = true;
// Disparition curseur
if(moove = true){
   window.setInterval(() => {
    vid.style.cursor = 'none';
    moove = false;
    
containernavBar.style.display = 'none'; 

}, 2500); 
}
 
vid.addEventListener('mousemove', function(){

containernavBar.style.display = 'block';
       vid.style.cursor = 'pointer'; 
       moove = true;
    
})



// Fonctionnalité Stop 
stopButton.addEventListener('click', function(){
    vid.pause();
    vid.currentTime = 0;
    playButton.src = './icon/play-1.png';
});

// Fonctionnalité avancer de 10s
after.addEventListener('click', function(){
    vid.currentTime += 10; 
});

// Fonctionnalité reculer de 10s
before.addEventListener('click', function(){
    vid.currentTime -= 10; 
});

// Si la vidéo n'est pas en fullscreen
if(fullscreenValue == false){
    vid.style.width = '800px';
    moviePlayer.style.width = '800px';
}

// Ajout de la fonctionnaité fullScreen
fullscreen.addEventListener('click', function(){
    if(fullscreenValue == false){
    launchIntoFullscreen(document);
    launchIntoFullscreen(document.documentElement); 
    
    moviePlayer.style.width = '100%';
    moviePlayer.style.height = '100%';
    moviePlayer.style.padding = 0;
    moviePlayer.style.margin = 0;
    vid.style.width = '100%';
    containernavBar.style.width = '90%';
    containernavBar.style.top = '90%';
   
    fullscreenValue = true;
    }  

    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
         vid.style.width = '800px';
        moviePlayer.style.width = '800px';
        moviePlayer.style.height = 'auto';
        moviePlayer.style.margin = '0px auto';
        moviePlayer.style.marginTop = '7%';
        fullscreenValue = false;
        }
});



function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

    // Fonctionnalité Temps
  setInterval(time, 1000);
  function time(){

  var filmDuration =  dureeFilm.split(":");
  var filmMinutes = filmDuration[0];
  var filmSeconds = filmDuration[1];
  if(filmSeconds[1] == '' || filmSeconds[1] == null || filmSeconds[1] == undefined){
      filmSeconds += 0;
  }
  // Durée totale film
  var finalDuration = parseInt(filmMinutes)*60 + parseInt(filmSeconds);

  // Durée actuelle du film
  var currentTime = Math.floor(vid.currentTime);
  var currentMinutes = Math.floor(currentTime/60);
  var currentSeconds = Math.floor(currentTime % 60);
  var currentSecondsString = currentSeconds.toString();
  if(currentSecondsString[1] == null || currentSecondsString[1] == undefined || currentSecondsString[1] == '' ){
      currentSecondsString = 0 + currentSecondsString;
  }
  console.log(currentSecondsString);
  document.getElementById('time').innerHTML = '<p>' + currentMinutes + ':'+ currentSecondsString  +'/'+ dureeFilm  + '</p>';

  var remainingTime = finalDuration - currentTime;
  var remainingMinutes = Math.floor(remainingTime/60);
  var remainingSeconds = Math.floor(remainingTime % 60);

  // ProgressBar
  progressBar.max = finalDuration;
  progressBar.value = currentTime;

  // Durée restante du film
  // var remainingFinal = remainingMinutes + ':' + remainingSeconds;

  }

}

// 2eme argument => chemin du film
var p = new Player('movie', 'movie.mp4','TIE+Fighter+-+short+film(720p).mp4');
