document.addEventListener('DOMContentLoaded', function(){


let imagenes = [
    {img: 'img/IMG/land minnnig/land min (1).jpg'},
    {img: 'img/IMG/land minnnig/land min (2).jpg'},
    {img: 'img/IMG/land minnnig/land min (3).jpg'},
    {img: 'img/IMG/land minnnig/land min (4).jpg'}
]

let contador = 0
const contenedor =document.querySelector('.slideshow')
const overlay =document.querySelector('.overlay')
const galeria_img =document.querySelectorAll('.galeria_carrusel img')
const img_slideshow =document.querySelector('.slideshow img')


contenedor.addEventListener('click', function(event){

    let atras =contenedor.querySelector('.atras'),
        adelante=contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt =event.target

        if(tgt==atras){
            if(contador>0){
                img.src=imagenes[contador-1].img
                contador--
            } else {
                img.src=imagenes[imagenes.length-1].img
                contador=imagenes.length-1
            }
        }else if (tgt==adelante){
            if (contador<imagenes.length-1){
                img.src=imagenes[contador+1].img
                contador++
            } else{
                img.src=imagenes[0].img
                contador=0
            }
        }



})

Array.from(galeria_img).forEach(img=>{
    img.addEventListener('click',event =>{
        const imagen_seleccionada=+event.target.dataset.imgMostrar
        img_slideshow.src=imagenes[imagen_seleccionada].img
        contador =imagen_seleccionada
        overlay.style.opacity=1
        overlay.style.visibility='visible'        
    })
})




})