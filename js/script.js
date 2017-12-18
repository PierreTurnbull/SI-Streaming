//document.addEventListener("DOMContentLoaded", function()
//{
  var player = document.querySelector('.player');
  var catbutt = document.querySelector('.catbutt');
  var categories = document.querySelector('.categories');
  var cat_list = document.querySelectorAll(".cat");
  var movies = document.querySelector('.movies');

  load_films("See All");

  function shorten_text(str, nb)
  {
    str = str.slice(0, nb).concat("...");
    return str;
  }

  function add_film(film)
  {
    movies.innerHTML +=
    "<article class=\"film\">" +
    "<h2 class=\"film_title\">" + film.title + "</h2>" +
    "<p class=\"film_description\">" + shorten_text(film.description, 40) + "</p>";
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

  catbutt.addEventListener('click', function() {
    categories.classList.toggle('open');
  });

  for (let i = 0; i < cat_list.length; i++)
  {
    cat_list[i].addEventListener("click", function()
    {
      load_films(cat_list[i].textContent);
    });
  }

  /*film.addEventListener('mouseover', function() {
    film.classList.add('syno');
  });

  film.addEventListener('mouseout', function() {
    film.classList.remove('syno');
  });*/

  // film.addEventListener('click', function() {
  //   player.classList.toggle('block');
  // });
//});
