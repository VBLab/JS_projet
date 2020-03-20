$(document).ready(function(){
    $("#ui").children("button").click(function(){
        $("#list").empty();
        $.get('./playlist.txt', function(data){
         var monString = (data.split('\n'));
         $.each(monString, function(index,value){
             $("#list").append("<li>"+value+"</li>");
         })   
           // console.log(data.split('\n'));
        });
   });
});