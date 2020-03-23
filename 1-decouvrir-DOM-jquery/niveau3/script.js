var listOfMovie = []; // création de la variable de la liste des films, sous forme de tableau
$(document).ready(function(){
  $("button").click(function(){ // affiche quand on clique sur le bouton
    $("#list ul").empty();
    listOfMovie = [];
    $.get('./playlist.txt', function(data){ // va chercher la liste de films (fichier txt), affiche dans un tableau
      var splited = splitFile(data)
        $.each(splited, function(index,movie){
          var i = movie[0];
          var n = movie[1];
          var d = movie[2];
          var movieobjet = createMovie(i,n,d);
            $('#list ul').append(htmlDivElement(movieobjet));
        });
      });
    });
  });
function htmlDivElement(movie){         // prend un objet comme argument(movie) et renvoie un ensemble de balises (div)
  var html =`<div class ='divFilm'>     
  <div class = 'divIndex'>
  `+movie.index+`
  </div>
  <div class = 'divTitle'>
  `+movie.name+'('+movie.duree+')'+`
  </div>
  </div>`;
  
  return html;          // retourne un string contenant tout le bloc HTML
}
function createMovie(i, n, d){    // prend en entrée (nom, durée, index)
  var movie = {};                     
  movie.name = n;
  movie.index = i;
  movie.duree = d;
  return movie;                 // et retourne un objet
}
function splitFile(data){             // fonction qui lit le fichier txt et renvoie un tableau avec chaque titre
  var resultat = [];
  var film = data.split('\n');
    film.forEach(ligne => {
      var tableauLigne = ligne.split(',');
      resultat.push(tableauLigne);
  });

  console.log(resultat);  // affichage dans la console..."Vérification"

  return resultat;
}
function addMovie(m){   //  grace à la fonction AdMovie
                        //chaque nouvel objet film (creatMovie) est stocké (push)
  listOfMovie.push(m); // dans listOfmovie.
}