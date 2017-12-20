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
  var after = document.getElementById('play');
  var after = document.getElementById('after');
  var before = document.getElementById('before');
  var fullscreen = document.getElementById('fullScreen');
  var playButton = document.getElementById('play');
  var slideContainer = document.getElementById('myRange');
  var stopButton = document.getElementById('stop');
  var progressBar = document.getElementById('progressBar');
  progressBar.value = 0;



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
      playButton.src = './icon/pause.png';
      playing = true;
      }else {
      vid.pause();
      playButton.src = './icon/play-1.png';
      playing = false;
      }

  });

  // Fonctionnalité Stop
  stopButton.addEventListener('click', function(){
      vid.currentTime = 0;
  });

  // Fonctionnalité avancer de 10s
  after.addEventListener('click', function(){
      vid.currentTime += 10;
  });

  // Fonctionnalité reculer de 10s
  before.addEventListener('click', function(){
      vid.currentTime -= 10;
  });

  // Ajout de la fonctionnaités fullScreen
  fullscreen.addEventListener('click', function(){
      launchIntoFullscreen(vid);
      launchIntoFullscreen(document.documentElement);
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
var p = new Player('movie', 'movie.mp4','movie.mp4');
