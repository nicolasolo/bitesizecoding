var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");



 $(function(){
   
    function showData(arr){
        var out = "";
        for( var i = 0; i < arr.lenght; i++) 
          {
            out += 
'<div class="card">'+
  '<div class="view overlay">'+
    '<img class="card-img-top" src="" alt="Card image cap">'+
    '<a>'+
      '<div class="mask rgba-white-slight"></div>'+
    '</a>'+
  '</div>'+
  '<a class="btn-floating btn-action ml-auto mr-4 mdb-color lighten-3"><i class="fas fa-chevron-right pl-1"></i></a>'+
  '<div class="card-body">'+
    '<h4 class="card-title">'+ arr[i].title +'</h4>'+
    '<hr>'+
    '<p class="card-text"></p>'+
  '</div>'+
  '<div class="rounded-bottom mdb-color lighten-3 text-center pt-3">'+
    '<ul class="list-unstyled list-inline font-small">'+
      '<li class="list-inline-item pr-2 white-text"><i class="far fa-clock pr-1"></i>05/10/2015</li>'+
      '<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="far fa-comments pr-1"></i>12</a></li>'+
      '<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1"></i>21</a></li>'+
      '<li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"> </i>5</a></li>'+
    '</ul>'+
  '</div>'+

'</div>'+
'</div>';
          }
        products.innerHTML = out;
        
      }


      var xmlhttp = new XMLHttpRequest();
      var url = "/json/1.json";
    

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemsPerPage = 10; // count of recors per page
      var currentPage = window.location.search.substring(6);
      console.log(currentPage);
      var items = JSON.parse(this.responseText);
      console.log(Array);
      var allPages = Math.ceil(items.length/itemsPerPage);
      console.log(allPages);
      var itemsOnPage = [];//arrays for pages
      console.log(itemsOnPage);
      for (i = 0; i < Math.ceil(items.length/itemsPerPage); i++){
        itemsOnPage[i] = items.slice((i*itemsPerPage), (i*itemsPerPage) + itemsPerPage);
        $('<a>', { href: '?page='+(i)+'', text: ''+(i+1)+''}).appendTo(pagination);
      }
      showData(itemsOnPage[currentPage-1]);
      console.log(showData(arr));
    }
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
 });