var products = document.querySelector("#products");


$.getJSON( "json/1.json", function( data ) {
    var items = [];
    console.log(items);

    $.each( data, function( key, val ) {
        console.log(data)
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "#products" );
  });