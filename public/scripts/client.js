var app = angular.module('myApp', []);

app.controller('GifController', function(GifGetter){
  console.log("connected?");
  var vm = this;

//search Query will be from text input
  // vm.searchQuery = "UPsilon"
vm.randomGif = function(){
  GifGetter.randomGif().then(function(res){
    console.log("from the controller", res);
    vm.randomGifUrl = res.data.image_url;
  });
}


// console.log("test:", GifGetter.randomGif());

//searching gifs
vm.searchGif = function(searchQuery){
  GifGetter.searchGif(searchQuery).then(function(res){
    //store array of gifs in searchGifUrl
    vm.searchGifUrl = res.data;
  })
}






});
