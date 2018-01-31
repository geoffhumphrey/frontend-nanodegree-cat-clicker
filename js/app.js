$(document).ready(function(){
    var counter = 0;
    $("#counter").append(counter.toString());
    $("#cat-clicker-1").click(function() {
        counter += 1;
        $("#counter").empty();
        $("#counter").append(counter.toString());
    });
});