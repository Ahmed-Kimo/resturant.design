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
show.style.display = "none"
deleted.style.display = "block"
})

deleted.addEventListener("click" ,() => {
show.style.display = "block"
deleted.style.display = "none"
links_nav.classList.remove("show_links")
})

let heart = document.querySelectorAll(".sec1 strong h2")
heart.forEach((heart)=>{
heart.onclick = ()=>{
heart.style.color = "red"

}
})

let sec1 = document.querySelector(".sec1")
let to_sec1 = document.querySelector("nav .to-sec1")
to_sec1.onclick = () =>{
    window.scrollTo({top:sec1.offsetTop , behavior:"smooth"})
}