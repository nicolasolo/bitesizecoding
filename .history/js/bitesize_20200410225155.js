var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");
var i;

  var xmlhttp = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts";
    function showData(arr) 
      {
        var out = "";
        for( i = 0; i < arr.length; i++) 
          {
            out += 
            ' ( <span> ' + arr[i].id + 
            ' </span> )<h5 class="title">' + arr[i].title + '</h5>' +
            '<p>' + arr[i].body + '</p>';
          }
        products.innerHTML = out;
      }



  
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemsPerPage = 6; // count of recors per page
      var currentPage = window.location.search.substring(6);
      console.log(currentPage);
      var items = JSON.parse(this.responseText);
      var allPages = Math.ceil(items.length/itemsPerPage);
      console.log(allPages);
      var products = [];//arrays for pages
      console.log(products);
      for (i = 0; i < Math.ceil(items.length/itemsPerPage); i++){
        products[i] = items.slice((i*itemsPerPage), (i*itemsPerPage) + itemsPerPage);
        $('<a>', { href: '?page='+(i+1)+'', text: ''+(i+1)+''}).appendTo(pagination);
      }
      showData(products[currentPage-1]);
    }
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
