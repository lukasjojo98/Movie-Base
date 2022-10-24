let baseImageURL = "https://image.tmdb.org/t/p/";
let imageSize = "w185";
const APIKEY = "716411d2408e8f1a9b5e8ac9747cf475";
let imageURL = null;
let trendingMovies = [];
let url = null;
let fetchSth = async function() {
url = "".concat("https://api.themoviedb.org/3/list/1?api_key=",APIKEY,"&language=en-US");
await fetch(url)
.then(result=>result.json())
.then((data)=>{
    trendingMovies = data["items"];
    console.log(trendingMovies);
});
var divElement = document.getElementById("layoutMovies");
for (var i = 0; i < 12; i++){
    var inputElement = document.createElement("input");
    var hiddenInput = document.createElement("input");
    var formElement = document.createElement("form");
    inputElement.name = "moviename";
    inputElement.type = "image";
    inputElement.value = trendingMovies[i]["title"];
    formElement.setAttribute("action","/movie");
    formElement.method = "post";
    imageURL = "".concat(baseImageURL,imageSize,trendingMovies[i]["poster_path"]);
    inputElement.src = imageURL;
    formElement.append(inputElement);
    divElement.append(formElement);

}
}
document.addEventListener('DOMContentLoaded', fetchSth);