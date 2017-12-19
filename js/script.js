//document.addEventListener("DOMContentLoaded", function()
//{
  var search          = document.querySelector(".search");
  var search_text     = document.querySelector(".search_text");
  var search_submit   = document.querySelector(".search_submit");

  var category        = document.querySelector('.category_container');
  var category_title  = document.querySelector('.category_selection_title');
  var category_list   = document.querySelector(".category_selection_list");
  var category_item   = document.querySelectorAll(".category_selection");

  var year            = document.querySelector('.year_container');
  var year_title      = document.querySelector('.year_selection_title');
  var year_list       = document.querySelector(".year_selection_list");
  var year_item       = document.querySelectorAll(".year_selection");

  var films = document.querySelector('.films');

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

  category_title.addEventListener('click', function() {
    category.classList.toggle('open');
  });

  year_title.addEventListener('click', function() {
    year.classList.toggle('open');
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
