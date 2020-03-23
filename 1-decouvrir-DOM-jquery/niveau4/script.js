//ajouter un bouton PLAY devant chaque film
// creation DESIGN
var listOfMovie = [];
$(document).ready(function(){
  $("button").click(function(){
    $("#list").empty();
    listOfMovie = [];
    $.get('./playlist.txt', function(data){
      var splited = splitFile(data)
      $.each(splited, function(index,movie){
        var i = movie[0]; 
        var n = movie[1]; 
        var d = movie[2]; 
        var star = movie[3]; // ajout de  la var etoile = notation de 1 à 5
        var movieobjet = createMovie(i,n,d,star);
        $('#list').append(htmlDivElement(movieobjet));
       createPlayCallback(movieobjet); // appel fonction  btn play
      });
    });
  });
});
function htmlDivElement(movie){  // la même mais avec l'ajout du btn play
          var html =`<div class ='divFilm'>
          <div class ='play'>               <!----ajout bouton PLAY---->
          <button class = 'btn' id="play`+movie.index+`">
          Play</button>
          </div>
          <div class = 'divIndex'>
          `+movie.index+`
          </div>
          <div class = 'divTitle'>
          `+ movie.name +': (' + movie.duree + ')'+`
          <div class = 'divEtoile'>
          `+ movie.note +': (' + movie.note + ')'+`
          </div>
          </div>
          </div>`;
          return html;
        }
function createPlayCallback(movie){ // execute le btn une fois cliqué...
        $('#play'+ movie.index).click(function(){
        console.log('lecture du film :'+movie.name+' , note='+ movie.note); // affiche dans la console titre + note
        });
        }
         
function createMovie(i, n, d, star){
          var movie = {};
          movie.name = n;
          movie.index = i;
          movie.duree = d;
          movie.note = star;
          return movie;
        }
function splitFile(data){
          var resultat = [];
          var film = data.split('\n');
          film.forEach(ligne => {
            var tableauLigne = ligne.split(',');
            resultat.push(tableauLigne);
          });
// console.log(resultat);
          return resultat;
        }
function addMovie(m){
          listOfMovie.push(m);
        }



