let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let icon_hamburguer = true;

/*######################### Investigar metodos y eventos de js[[[[[]]]]] ###########*/

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(icon_hamburguer){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        icon_hamburguer = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        icon_hamburguer = true;
    }

    enlaces_header.classList.toogle("hamburgueropen")

    document.querySelector(".enlaces-header")[0].addEventListener("click", function(){
        enlaces_header.classList.toogle("hamburgueropen");
        document.querySelectorAll(".hamburguer")[0].style.color="#000"
    })
})

