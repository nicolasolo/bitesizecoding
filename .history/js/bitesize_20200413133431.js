var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function (data) {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function(id, key, title ) {
      items.push( "<li id='" + id + "'>" + title + "</li>" );
    });
   console.log(items);
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});