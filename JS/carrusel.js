const carousel =document.querySelector(".fotos-carrusel"),
firstImg=carousel.querySelectorAll("img")[0];
arraowIcons =document.querySelectorAll("#banner i");

let isDragStart=false, prevPageX, prevScrollLeft;
let firstImgWidth=firstImg.clientWidth+1;

arraowIcons.forEach(icon =>{
    icon.addEventListener("click",()=>{
        carousel.scrollLeft+=icon.id=="left" ? -firstImgWidth : firstImgWidth;
    });
});
 
const dragStart = (e) => {  
    isDragStart =true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff=e.pageX- prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
}

const dragStop = () =>{
    isDragStart =false;  
}

carousel.addEventListener("mousedown",dragStart); 
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);  