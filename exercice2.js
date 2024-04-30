document.addEventListener('DOMContentLoaded', function(){
    // Constantes
    const images = document.getElementsByClassName('img_miniature')
    const imageCible = document.getElementById('imgCible');

    // Listener
    for (let index = 0; index < images.length; index++) {
       images[index].addEventListener('click' , function(){
        
         imageCible.src = images[index].src;
       })        
    }
})