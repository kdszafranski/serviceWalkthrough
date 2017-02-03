var app = angular.module('myApp', []);

app.controller('GifController', function(GifGetter){
  console.log("connected?");
  var vm = this;

//search Query will be from text input
vm.randomGif = function(){
  GifGetter.randomGif().then(function(res){
//set url for image tag:
    vm.randomGifUrl = res.data.image_url;
  });
}

//searching gifs
vm.searchGif = function(searchQuery){
  if(searchQuery === undefined){
    searchQuery = "Beyonce";
  }

  GifGetter.searchGif(searchQuery).then(function(res){
    //store array of gifs in searchGifUrl
    vm.searchGifUrl = res.data;
  })
}






});
