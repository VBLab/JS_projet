
// il faut d'abord avec la bonne fonction....inséer la liste des films...= ouvrir le fichier playlist.txt

$(document).ready(function(){
        $("#ui").children("button").click(function(){
            $.get('./playlist.txt', function(data){
                spiltFile(data);
                htmlDivElement();

                console.log(data.split('\n'));
            });
       });
    });


    
    //$.each(donnée, function(index, value ){






















