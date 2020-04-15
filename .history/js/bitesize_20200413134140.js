var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function() {
      items.push( "<li id='" + data[i].key + "'>" + item[i].title + "</li>" );
    });
   console.log(items.lenght);
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});