//document.addEventListener("DOMContentLoaded", function()
//{
  var player = document.querySelector('.player');
  var catbutt = document.querySelector('.catbutt');
  var arrow = document.querySelector('.arrow');
  var categories = document.querySelector('.categories');
  var cat_list = document.querySelectorAll(".cat");
  var movies = document.querySelector('.movies');
  var film = document.querySelectorAll('.film');
  var loadmore = document.querySelector('.loadmore');

  catbutt.addEventListener('click', function() {
    categories.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });

  arrow.addEventListener('click', function() {
    categories.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });

  load_films("See All");

  function shorten_text(str, nb)
  {
    str = str.slice(0, nb).concat("...");
    return str;
  }

  function add_film(newfilm)
  {
    movies.innerHTML +=
    "<article class=\"film\" style=\"background:url("+newfilm.image_url+");\">" +
    "<h2 class=\"film_title\">" + newfilm.title + "</h2>" +
    "<p class=\"film_description\">" + shorten_text(newfilm.description, 40) + "</p>";
  }

  function load_films(category)
  {
    movies.innerHTML = "";
    if (category == "See All")
    {
      for (let i = 0; i < data.films.length; i++)
      {
        add_film(data.films[i]);
      }
    }
    else
    {
      for (let i = 0; i < data.films.length; i++)
      {
        if (data.films[i].category == category)
          add_film(data.films[i]);
      }
    }
  }



  for (let i = 0; i < cat_list.length; i++)
  {
    cat_list[i].addEventListener("click", function()
    {
      load_films(cat_list[i].textContent);
    });
  }

  loadmore.addEventListener('click', function(){
    movies.style.height = '100%';
    loadmore.style.display = 'none';
  });

  document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger');
    var bar0 = document.querySelector('.bar0');
    var bar1 = document.querySelector('.bar1');
    var bar2 = document.querySelector('.bar2');
    var nav = document.querySelector('.nav');
    var body = document.querySelector('.body');

    burger.addEventListener('click', function() {
      nav.classList.toggle('on');
      body.style.overflow = 'hidden';
      bar0.classList.toggle('cross0');
      bar1.classList.toggle('cross1');
      bar2.classList.toggle('cross2');
    });
  });

  // for (let i = 0; i < film.length; i++) {
  //   film[i].addEventListener('mouseover', function() {
  //     film[i].classList.add('syno');
  //   });
  //
  //   film.addEventListener('mouseout', function() {
  //     film.classList.remove('syno');
  //   });
  //
  //   film[i].addEventListener('click', function() {
  //     player.classList.toggle('block');
  //   });
  // }
