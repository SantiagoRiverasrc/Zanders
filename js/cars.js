const images = [
    "img/car1.jpg",
    "img/car2.jpg",
    "img/car3.jpg",
];




let index = 0
let intervalo;


const conten = document.querySelector('.contenedor');



const mostrarFoto = () => {
    conten.style.backgroundImage = `url(${images[index]})`
}



const seguirFoto = () => {
    if(index >= images.length - 1){
        index = 0
    }else{
        index++;
    }
    mostrarFoto()
}


const carrousel = () => {
    intervalo = setInterval(seguirFoto, 8000)
}






carrousel();


