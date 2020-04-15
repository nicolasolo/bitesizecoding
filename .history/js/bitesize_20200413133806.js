var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function (data) {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data,items, function(i,item ) {
      items.push( "<li id='" + item[i].id + "'>" + data[i].title + "</li>" );
    });
   console.log(items);
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});