var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function(key) {
      items.push( "<li id='" + data[key].id + "'>" + data[key].title + "</li>"
      <div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div></div>' );
    });
   console.log(data);
    $( "<div/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});