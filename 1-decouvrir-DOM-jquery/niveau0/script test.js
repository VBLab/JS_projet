$.each(donnée, function(index, value ){



// clement
var list = [];
$(document).ready(function () {
 
    $.get("playlist.txt", function (data) {
        
        splitFile(data);
        htmlDivElement();
        
    }, "text");
});
    function htmlDivElement(){
        for (i = 0; i < list.length; i++) {
            $("#list > ul").append('<li class="film">' + list[i] + '</li></div>');
        }
    }
    function splitFile(a){
        list = a.split("\n");
    }


