var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function(i,key ) {
      items.push( "<li id='" + data[i]. + "'>" + data[i].title + "</li>" );
    });
   console.log(items);
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});