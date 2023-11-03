

let nav = document.querySelector("nav")
window.onscroll = () => {

    if(window.scrollY >= nav.offsetTop + 500){
        nav.style.border = "1px solid transparent"
    }
    if(window.scrollY == nav.offsetTop){
        nav.style.backgroundColor = "transparent"
    }
}


let show = document.querySelector("nav .show")
let links_nav = document.querySelector("nav .links-nav")
let links = document.querySelector("nav .links-nav ul a")
let deleted = document.querySelector("nav .delete")
show.addEventListener("click" , () => {
links_nav.classList.add("show_links")
links_nav.style.left = "0"
show.style.display = "none"
deleted.style.display = "block"
})

deleted.addEventListener("click" ,() => {
show.style.display = "block"
deleted.style.display = "none"
links_nav.classList.remove("show_links")
links_nav.style.left = "600px"
})

let imagelist = document.querySelector(".sec2 .container2 .image-list")
let btns = document.querySelectorAll(".sec2 .container2 button")
btns.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const direct = button.id === "prev-slide" ? -1 : 1;
        const scroll = imagelist.clientWidth * direct ;
        imagelist.scrollBy({left:scroll , behavior:"smooth"})
    })
})

let sec2 = document.querySelector(".sec2")
let menu_list = document.querySelector(".menu-list")
menu_list.onclick = () =>{
    window.scrollTo({top:sec2.offsetTop - 100 , behavior:"smooth"})
}

let plus = document.querySelector("footer .footer-child .plus")
let minus = document.querySelector("footer .footer-child .minus")
let hidden = document.querySelector("footer .footer-parent .hidden")
let star = document.querySelector("footer .footer-parent .hidden .star")
plus.onclick = () =>{
  plus.style.display = "none"
  minus.style.display = "block"
  star.style.top = "400px"
}


minus.onclick = () =>{
    minus.style.display = "none"
    plus.style.display = "block"
    star.style.top = "0"
}

  
  let footer_child2 = document.querySelector("footer .footer-child2")
  let plus2 = document.querySelector("footer .footer-child2 .plus2")
let minus2 = document.querySelector("footer .footer-child2 .minus2")
let hidden2 = document.querySelector("footer .footer-parent .hidden2")
let star2 = document.querySelector("footer .footer-parent .hidden2 .star2")
plus2.onclick = () =>{
  plus2.style.display = "none"
  minus2.style.display = "block"
  star2.style.top = "400px"
}

minus2.onclick = () =>{
    minus2.style.display = "none"
    plus2.style.display = "block"
    star2.style.top = "0"
  }

