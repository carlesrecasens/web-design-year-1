let ubication = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let displacement = window.pageYOffset; //180
    if(ubication >= displacement){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubication = desplazamientoActual; //200

})

// Menu

let linksHeader = document.querySelectorAll(".links-header")[0];
let light = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(light){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        light= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        light= true;
    }

    linksHeader.classList.toggle("menudos")
})