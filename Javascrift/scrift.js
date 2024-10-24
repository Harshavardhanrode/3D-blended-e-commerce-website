
const images = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");


let n=0;
function changeslide(){
    for(let image_no of images){
        image_no.style.display = 'none';
    }
    images[n].style.display = 'block';
}
changeslide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n =images.length-1; 
    }
    changeslide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n++;
    }else{
        n=0; 
    }
    changeslide();
})

//for scrolling images
const scrollcontainer = document.querySelectorAll('.products');
for(const ele of scrollcontainer){
    ele.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        ele.scrollLeft += evt.deltaY;
    })
}


// connection between three.js and website
function redirect(img_no){

    sessionStorage.setItem('img_no', img_no);
    window.location.href = 'threejs/index2.html'; // Redirect to index.html

  }


