//document.addEventListener("DOMContentLoaded", function()
//{

// ANIMATIONS
  var logo       = document.querySelector('.logo');
  var logo2      = document.querySelector('.logo2');

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

  logo.addEventListener('mouseenter', function() {
    logo2.classList.add('on');
    logo.style.display = "none";
  });

  logo.addEventListener('mouseleave', function() {
    logo2.classList.remove('on');
    logo.style.display = "block";
  });

  // logo2.addEventListener('mouseenter', function() {
  //   logo.classList.add('on');
  // });
  //
  // logo2.addEventListener('mouseleave', function() {
  //   logo.classList.remove('on');
  // });



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
    for (let i = 0; document.querySelectorAll('.film')[i] != undefined; i++)
    {
      let tmp = document.querySelectorAll(".film")[i];
      tmp.classList.remove("film");
      tmp.classList.add("film");
    }
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
  var category_item   = document.querySelectorAll(".cat");

  var year            = document.querySelector('.year_container');
  var year_title      = document.querySelector('.year_selection_title');
  var year_list       = document.querySelector(".year_selection_list");
  var year_item       = document.querySelectorAll(".year_selection");

  var films           = document.querySelector('.movies');
  var films_sel       = document.querySelectorAll(".film");
  load_films("See All", "", "");

  function shorten_text(str, nb)
  {
  str = str.slice(0, nb).concat("...");
  return str;
  }

  function add_film(film, index)
  {
    films.innerHTML +=
    "<article class=\"film\" data-index=\"" + index + "\">" +
    "<img src=\""+film.image_url+"\" class=\"film_img\">" +
    "<h2 class=\"film_title\">" + film.title + "</h2>" +
    "<p class=\"film_description\">" + shorten_text(film.description, 40) + "</p>";
  }

  function load_films(category, year, keyword)
  {
    movies.innerHTML = "";
    if (category == "See All" || year == "See All")
    {
      for (let i = 0; i < data.films.length; i++)
      {
        add_film(data.films[i], i);
      }
    }
    else
    {
      for (let i = 0; i < data.films.length; i++)
      {
        if (data.films[i].category == category)
          add_film(data.films[i], i);
      }
    }
    if (year!= "")
    {
      for (let i = 0; i < data.films.length; i++)
      {
        if (data.films[i].year == Number(year))
          add_film(data.films[i], i);
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
            add_film(data.films[i], i);
      }
    }
    films_sel = document.querySelectorAll('.film');
    for (let i = 0; i < films_sel.length; i++) {
      films_sel[i].addEventListener('click', function(){
        display_modal(Number(films_sel[i].dataset.index));
      });
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



// CLICK ON VIDEO To SHOW DESCRIPTION AND FILM

var modal = document.querySelector(".modal");

function scroll_top()
{
  document.querySelector(".modal").scroll(0, 0);
}

function play_video()
{
  document.querySelector(".modal_player_play").style.display = "none";
  document.querySelector(".modal_player_img").style.display = "none";
  // TODO: VIDEO DISPLAYING TO BE DONE
}

function close_modal()
{
  modal.innerHTML = "";
  modal.style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

function put_star(nb, index)
{
  if      (data.films[index].rating - nb >= 0)
    return 'img/star_full.png';
  else if (data.films[index].rating - nb == -0.5)
    return 'img/star_semi.png';
  else if (data.films[index].rating - nb <= -1)
    return 'img/star_empty.png';
}

function display_modal(index)
{
  document.querySelector("body").style.overflow = "hidden";
  modal.style.display = "block";
  modal.innerHTML =
  '<span class="close_btn">' +
    '<span class="close_btn_bar"></span>' +
    '<span class="close_btn_bar"></span>' +
  '</span>' +
  '<div class="modal_container">' +
    '<div class="modal_player">' +
      '<img src="' + data.films[index].image_url + '" class="modal_player_img">' +
      '<img src="img/player_play_btn.png" title="Watch now!" class="modal_player_play">' +
      '</div>' +
    '<div class="modal_info">' +
      '<div class="modal_first_line">' +
        '<h2 class="modal_title">' + data.films[index].title + '</h2>' +
        '<p class="modal_year">' + data.films[index].year + '</p>' +
        '</div>' +
      '<div class="modal_rating">' +
        '<div class="modal_rating_star_container">' +
          '<img src="' + put_star(1, index) + '" alt="star rating" title="Star rating" class="modal_rating_star">' +
          '<img src="' + put_star(2, index) + '" alt="star rating" title="Star rating" class="modal_rating_star">' +
          '<img src="' + put_star(3, index) + '" alt="star rating" title="Star rating" class="modal_rating_star">' +
          '<img src="' + put_star(4, index) + '" alt="star rating" title="Star rating" class="modal_rating_star">' +
          '<img src="' + put_star(5, index) + '" alt="star rating" title="Star rating" class="modal_rating_star">' +
          '</div>' +
        '<div class="modal_rating_number">' + data.films[index].rating + ' / 5</div>' +
        '</div>' +
      '<div class="modal_author">By ' + data.films[index].author + '</div>' +
      '<div class="modal_description">' + data.films[index].description + '</div>' +
      '<div class="modal_social">' +
        '<a class="modal_social_link" href="' + data.films[index].author_url + '">' +
          '<img class="modal_social_img" src="img/social_logo.png" alt="social logo" title="Youtube"></img>' +
        '</a>' +
        '<a class="modal_social_link" href="' + data.films[index].author_url + '">' +
          '<img class="modal_social_img" src="img/social_logo2.png" alt="social logo" title="Facebook"></img>' +
        '</a>' +
        '<a class="modal_social_link" href="' + data.films[index].author_url + '">' +
          '<img class="modal_social_img" src="img/social_logo3.png" alt="social logo" title="Tipeee"></img>' +
        '</a>' +
        '</div>' +
        '<div class="modal_playnow">' +
          '<p class="modal_playnow_text">PLAY NOW</p>' +
          '<img src="img/playnow_btn.png" alt="" class="modal_playnow_img">' +
        '</div>' +
      '</div>' +
    '</div>';
    document.querySelector(".close_btn").addEventListener("click", function()
    {
      close_modal();
    });
    document.querySelector(".modal_player_play").addEventListener("click", function()
    {
      play_video();
    });
    document.querySelector(".modal_playnow").addEventListener("click", function()
    {
      play_video();
      scroll_top();
    });
}

for (let i = 0; i < films_sel.length; i++)
{
  films_sel[i].addEventListener("click", function()
  {
    display_modal(i);
  });
}
