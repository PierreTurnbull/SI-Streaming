//document.addEventListener("DOMContentLoaded", function()
//{

// ANIMATIONS
  var loupe      = document.querySelector('.lp');
  var look       = document.querySelector('.search');

  var player     = document.querySelector('.player');

  var catbutt    = document.querySelector('.catbutt');
  var yearbutt   = document.querySelector('.yearbutt');

  var arrow      = document.querySelector('.arrow');
  var arrow2     = document.querySelector('.arrow2');

  var categories = document.querySelector('.categories');
  var yearcont   = document.querySelector('.year_container');

  var cat_list   = document.querySelectorAll(".cat");

  var movies     = document.querySelector('.movies');
  var films      = document.querySelectorAll('.film');
  var loadmore   = document.querySelector('.loadmore');



  loupe.addEventListener('click', function() {
    look.classList.toggle('on');
  });

  catbutt.addEventListener('click', function() {
    categories.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });

  arrow.addEventListener('click', function() {
    categories.classList.toggle('open');
    arrow.classList.toggle('rotate');
  });


  yearbutt.addEventListener('click', function() {
    yearcont.classList.toggle('open');
    arrow2.classList.toggle('rotate');
  });

  arrow2.addEventListener('click', function() {
    yearcont.classList.toggle('open');
    arrow2.classList.toggle('rotate');
  });

  loadmore.addEventListener('click', function(){
    movies.style.height    = '100%';
    loadmore.style.display = 'none';
  });

    var burger = document.querySelector('.burger');
    var bar0   = document.querySelector('.bar0');
    var bar1   = document.querySelector('.bar1');
    var bar2   = document.querySelector('.bar2');
    var nav    = document.querySelector('.nav');
    var body   = document.querySelector('.body');

    burger.addEventListener('click', function() {
      nav.classList.toggle('on');
      body.classList.toggle('hid');
      bar0.classList.toggle('cross0');
      bar1.classList.toggle('cross1');
      bar2.classList.toggle('cross2');
    });

// ANIMATIONS END






// FILTER
  var search          = document.querySelector(".search");
  var search_text     = document.querySelector(".search_text");
  var search_submit   = document.querySelector(".search_submit");

  var category        = document.querySelector('.categories');
  var category_title  = document.querySelector('.category_selection_title');
  var category_list   = document.querySelector(".category_selection_list");
  var category_item   = document.querySelectorAll(".category_selection");

  var year            = document.querySelector('.year_container');
  var year_title      = document.querySelector('.year_selection_title');
  var year_list       = document.querySelector(".year_selection_list");
  var year_item       = document.querySelectorAll(".year_selection");

  var films = document.querySelector('.movies');

  load_films("See All", "", "");

  function shorten_text(str, nb)
  {
  str = str.slice(0, nb).concat("...");
  return str;
  }

  function add_film(film)
  {

  films.innerHTML +=
  "<article class=\"film\">" +
  "<img src=\""+film.image_url+"\" class=\"film_img\">" +
  "<h2 class=\"film_title\">" + film.title + "</h2>" +
  "<p class=\"film_description\">" + shorten_text(film.description, 40) + "</p>";
  }

  function load_films(category, year, keyword)
  {
  films.innerHTML = "";
  if (category == "See All" || year == "See All")
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
  if (year!= "")
  {
    for (let i = 0; i < data.films.length; i++)
    {
      if (data.films[i].year == Number(year))
        add_film(data.films[i]);
    }
  }
  if (keyword != "")
  {
    for (let i = 0; i < data.films.length; i++)
    {
      if (String(data.films[i].year).toLowerCase().search(keyword.toLowerCase()) >= 0 ||
          data.films[i].title.toLowerCase().search(keyword.toLowerCase()) >= 0 ||
          data.films[i].description.toLowerCase().search(keyword.toLowerCase()) >= 0 ||
          data.films[i].author.toLowerCase().search(keyword.toLowerCase()) >= 0 ||
          data.films[i].category.toLowerCase().search(keyword.toLowerCase()) >= 0)
          add_film(data.films[i]);
    }
  }
  }

  search.addEventListener("submit", function(event)
  {
  event.preventDefault();
  if (search_text.value != "")
    load_films("", "", search_text.value);
  });

  for (let i = 0; i < category_item.length; i++)
  {
  category_item[i].addEventListener("click", function()
  {
    load_films(category_item[i].textContent, "", "");
  });
  }

  for (let i = 0; i < year_item.length; i++)
  {
  year_item[i].addEventListener("click", function()
  {
    load_films("", year_item[i].textContent, "")
  });
  }
// FILTER END








  // //document.addEventListener("DOMContentLoaded", function()
  // //{
  //

  //
  //
  //   for (let i = 0; i < film.length; i++) {
  //     film[i].addEventListener('mouseover', function() {
  //       film[i].classList.add('syno');
  //     });
  //
  //     film.addEventListener('mouseout', function() {
  //       film.classList.remove('syno');
  //     });
  //
  //     film[i].addEventListener('click', function() {
  //       player.classList.toggle('block');
  //     });
  //   }
