var products = document.querySelector("#products");


$.getJSON( "json/1.json", function( data ) {
    var items = [];
    console.log(data);

    $.each( data, function( key, val ) {
        console.log(key);
        console.log(val.lenght);
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).append( "#products" );
  });