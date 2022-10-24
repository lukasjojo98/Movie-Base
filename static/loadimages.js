let baseURL = 'https://api.themoviedb.org/3/';
let baseImageURL = "https://image.tmdb.org/t/p/";
let imageSize = "w185";
const APIKEY = "716411d2408e8f1a9b5e8ac9747cf475";

    function formatMovieName(name){
        let movienameArray = name.split(/(\s+)/);
        for (var i = 1; i < movienameArray.length; i = i + 2){
            movienameArray[i] = "+";
        }
        let moviename = movienameArray.join("");
        return moviename;
    }
    
    let Images = async function loadImages(){
    var images = document.getElementsByClassName("images");
    for (var i = 0; i < images.length; i++){
    let moviename = formatMovieName(images[i].name);
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', moviename);
    await fetch(url)
    .then(result=>result.json())
        .then((data)=>{
        try{
        var posterPath = data["results"][0]["poster_path"];
        var imageURL =  "".concat(baseImageURL,imageSize,posterPath);
        images[i].src = imageURL;
        }
        catch(err){
        images[i].src = "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg?forcejpeg=true";
        images[i].style.width = "185px";
        }
        });
    }
    }
document.addEventListener('DOMContentLoaded', Images);