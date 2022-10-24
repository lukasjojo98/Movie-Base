var modal2 = document.getElementById("myModal2");
window.onclick = function(event) {
    if(event.target == document.getElementById("addListButton")){
    modal2.style.display = "block";
    }
    else if( event.target == modal2){
    modal2.style.display = "none";
    }
}