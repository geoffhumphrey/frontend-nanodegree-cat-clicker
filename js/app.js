$(document).ready(function(){

    var counterCat1 = 0;
    var counterCat1Name = "Mike";
    $("#cat-clicker-name-1").append(counterCat1Name.toString());
    $("#cat-counter-1").append(counterCat1.toString());
    $("#cat-clicker-1").click(function() {
        counterCat1 += 1;
        $("#cat-counter-1").empty();
        $("#cat-counter-1").append(counterCat1.toString());
    });

    var counterCat2 = 0;
    var counterCat2Name = "Jorge";
    $("#cat-clicker-name-2").append(counterCat2Name.toString());
    $("#cat-counter-2").append(counterCat2.toString());
    $("#cat-clicker-2").click(function() {
        counterCat2 += 1;
        $("#cat-counter-2").empty();
        $("#cat-counter-2").append(counterCat2.toString());
    });

});