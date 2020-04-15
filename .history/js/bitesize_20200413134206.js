var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function(key) {
      items.push( "<li id='" + data[key].key + "'>" + data[key].title + "</li>" );
    });
   console.log(items.lenght);
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});