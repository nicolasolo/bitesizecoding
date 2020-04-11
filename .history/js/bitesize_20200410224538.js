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
      var numPage = window.location.search.substring(6);
      console.log(numPage);
      var items = JSON.parse(this.responseText);
      var allPages = Math.ceil(items.length/itemsPerPage);
      console.log(allPages);
      var subArrays = [];//arrays for pages
      console.log(subArrays);
      for (i = 0; i < Math.ceil(items.length/itemsPerPage); i++){
        subArrays[i] = items.slice((i*itemsPerPage), (i*itemsPerPage) + itemsPerPage);
        $('<a>', { href: '?page='+(i)+'', text: ''+(i)+''}).appendTo(pagination);
      }
      showData(subArrays[numPage-1]);
    }
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 