var products = document.querySelector("#products");


$.getJSON( , function( data ) {
    var items = [];
    console.log(item);

    $.each( item, function( key, val ) {
        console.log(key);
        console.log(val);
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $('#products').append(item.join(''));
  });