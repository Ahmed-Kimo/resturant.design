let icon_search = document.querySelector(".icon-search")
let hide_search = document.querySelector(".hide_search")
let icon_exit = document.querySelector("nav .icon_exit")
let input_search = document.querySelector("nav .input-search")
icon_search.addEventListener("click" , () => {
hide_search.style.display = "block" ;
exitSearch.style.display = "block"
})

let about = document.querySelector("nav .about")
about.onclick = () =>{
    window.scrollTo({top:sec1.offsetTop , behavior:"smooth"})
}

input_search.addEventListener("input" , () => {
    icon_exit.style.display = "block"
})

icon_exit.addEventListener("click" , () => {
    input_search.value = "" ;
    icon_exit.style.display = "none"
})

let exitSearch = document.querySelector("nav .end-nav .exitSearch")
exitSearch.onclick = ()=>{
hide_search.style.display = "none"
card.style.top = "-400px"
icon_exit.style.display = "none"
input_search.value = ""
exitSearch.style.display = "none"
}

let nav = document.querySelector("nav")
let sec1 = document.querySelector(".sec1")
let part1_sec1 = document.querySelector(".sec1 .part1-sec1")
let part2_sec1 = document.querySelector(".sec1 .part2-sec1")
let sec2 = document.querySelector(".sec2")
let photo = document.querySelectorAll(".sec2 .photo")
let sec3 = document.querySelector(".sec3")
let div1 = document.querySelector(".sec3 .content div:nth-child(1)")
let div2 = document.querySelector(".sec3 .content div:nth-child(2)")
window.onscroll = () => {

    if(window.scrollY >= nav.offsetTop + 500){
        nav.style.backgroundColor = "white"
        nav.style.border = "1px solid transparent"
    }
    if(window.scrollY == nav.offsetTop){
        nav.style.backgroundColor = "transparent"
    }
   
    if(window.scrollY >= sec1.offsetTop - 200){
        part1_sec1.style.left = "0"
        part2_sec1.style.right = "0px"
    } else {
        part1_sec1.style.left = "-1800px"
        part2_sec1.style.right = "-1800px"
    }

    if(window.scrollY >= sec2.offsetTop - 200){
      photo.forEach((photos) => {
        photos.style.top = "50px"
      })
    } else {
        photo.forEach((photos) => {
            photos.style.top = "500px"
          })
    }

    if(window.scrollY >= sec3.offsetTop - 200){
        div1.style.top = "0"
        div2.style.top = "0"
    } else {
        div1.style.top = "400px"
        div2.style.top = "-700px"
    }
   
}

let cart_sec2 = document.querySelector(".cart-sec2")
let content_cart = document.querySelector(".cart-sec2 .content-cart")
let link_cart = document.querySelectorAll(".description .link-cart")
let link1 = document.querySelector(".container-images .link1")
let link2 = document.querySelector(".container-images .link2")
let link3 = document.querySelector(".container-images .link3")
let link4 = document.querySelector(".container-images .link4")
let ph = document.querySelectorAll("sec-2 .photo")
let h2 = document.querySelector("sec-2 .photo .description h2")
let img = document.querySelector("sec-2 .photo img")
let b = document.querySelector("sec-2 .photo .description b")
let p = document.querySelector(".sec2 .photo .description p")
let close = document.querySelector( ".cart-sec2 .close-cart")




link1.onclick = ()=>{
cart_sec2.style.display = "block"
content_cart.innerHTML = `
<div class="child1-cart">
    <div>
        <img src="assets/images/images (1).jpg">
    </div>
</div>
<div class="child2-cart">
    <h1>Shawrma</h1>
    <p>Lorem ipsum dolor sit amet consectetur, <br> adipisicing elit. Laborum, fugit?</p>
    <div>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars-empty fa-solid fa-star"></i>
        <b>Add To Cart <i class="search fa-solid fa-cart-shopping"></i></b>
    </div>
</div>`
}

link2.onclick = ()=>{
cart_sec2.style.display = "block"
content_cart.innerHTML = `
<div class="child1-cart">
    <div>
        <img src="assets/images/images.jpg">
    </div>
</div>
<div class="child2-cart">
    <h1>Pizza</h1>
    <p>Lorem ipsum dolor sit amet consectetur, <br> adipisicing elit. Laborum, fugit?</p>
    <div>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i>
        <b>Add To Cart <i class="search fa-solid fa-cart-shopping"></i></b>
    </div>
</div>`
}

link3.onclick = ()=>{
cart_sec2.style.display = "block"
content_cart.innerHTML = `
<div class="child1-cart">
    <div>
        <img src="assets/images/crepe.webp">
    </div>
</div>
<div class="child2-cart">
    <h1>Crepe</h1>
    <p>Lorem ipsum dolor sit amet consectetur, <br> adipisicing elit. Laborum, fugit?</p>
    <div>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i>
        <i class="stars-empty fa-solid fa-star"></i> <i class="stars-empty fa-solid fa-star"></i> <i class="stars-empty fa-solid fa-star"></i>
        <b>Add To Cart <i class="search fa-solid fa-cart-shopping"></i></b>
    </div>
</div>`
}

link4.onclick = ()=>{
cart_sec2.style.display = "block"
content_cart.innerHTML = `
<div class="child1-cart">
    <div>
        <img src="assets/images/sandwich4.jpg">
    </div>
</div>
<div class="child2-cart">
    <h1>Burger</h1>
    <p>Lorem ipsum dolor sit amet consectetur, <br> adipisicing elit. Laborum, fugit?</p>
    <div>
        <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i> <i class="stars fa-solid fa-star"></i>
        <i class="stars fa-solid fa-star"></i> <i class="stars-empty fa-solid fa-star"></i> <i class="stars-empty fa-solid fa-star"></i>
        <b>Add To Cart <i class="search fa-solid fa-cart-shopping"></i></b>
    </div>
</div>`
}


close.onclick = () =>{
cart_sec2.style.display = "none"
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

let up = document.querySelector("footer .up")
up.onclick = ()=>{
    window.scrollTo({top:0 , behavior:"smooth"})
}

let sec4 = document.querySelector(".sec4")
let ord = document.getElementById("order")
ord.onclick = () => {
    window.scrollTo({top:sec4.offsetTop - 100 , behavior:"smooth"})
}
let card = document.querySelector(".card")
let login = document.querySelector("nav .end-nav .login")
let exit_login = document.querySelector("nav .end-nav .exit-login")
let number_stacker = document.querySelector("nav .end-nav .login .number-stacker")
login.onclick = () => {
card.style.top = "60px"
login.style.display = "none"
exit_login.style.display = "block"
}
exit_login.onclick = () =>{
    
    card.style.top = "-400px"
    login.style.display = "block"
    exit_login.style.display = "none"
}


let message = document.querySelector(".message")
let input1 = document.querySelector(".sec4 .input-1")
let input2 = document.querySelector(".sec4 .input-2")
let input3 = document.querySelector(".sec4 .input-3")
let input4 = document.querySelector(".sec4 .input-4")
let send = document.querySelector(".sec4 .form form .btn")
let container = JSON.parse(localStorage.getItem("addition")) || [] ;
let empty = [];

if(localStorage.getItem("number_stacker.textContent") !== null){
    number_stacker.textContent = Number(container.length) ;
    localStorage.setItem("number_stacker.textContent" , `${Number(container.length)}`)
}


send.onclick = ()=>{
    number_stacker.textContent = Number(container.length) ;
    localStorage.setItem("number_stacker.textContent" , `${Number(container.length)}`)

    if(input1.value == "" || input2.value == "" || input3.value == "" || input4.value == ""){
        message.style.backgroundColor = "red"
        message.style.opacity = 1 ;
        message.innerHTML = `Invalid Message <b> <i class="fa-solid fa-circle-xmark"></i></b>`
        setTimeout(()=>{
            message.style.opacity = 0
        },1500)
        input1.value = "" ; input2.value = "" ; input3.value = "" ; input4.value = "" ;
        empty.push(product)
       localStorage.setItem("addition" , JSON.stringify(empty))    
    }

    let product = {Name : input1.value ,
                  Location : input2.value,
                  Phone : input3.value ,
                   Order : input4.value }
                   
   
    container.push(product)
    localStorage.setItem("addition" , JSON.stringify(container))
    display()
    input1.value = "" ; input2.value = "" ; input3.value = "" ; input4.value = "" ;
    message.style.opacity = 1 ;
    message.innerHTML = `Your Order Saved  <i class="thumbs fa-solid fa-thumbs-up"></i>`
    message.style.backgroundColor = "blue"
    setTimeout(()=>{
        message.style.opacity = 0
    },1500)
    
    number_stacker.textContent = Number(container.length) ;
    localStorage.setItem("number_stacker.textContent" , `${Number(container.length)}`)
}

function display(){
let zo = "" ;
    for (let i = 0; i < container.length; i++) {
        zo += `<div><h2>Name : ${container[i].Name} <br> <b>Location :  ${container[i].Location}</b> <br>
       <b>Phone :  ${container[i].Phone}</b> <br>  <b>Order :  ${container[i].Order}</b></h2> 
         <button class = "edit" onclick = "editing(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
         <button class = "deleteit" onclick="deleteproduct(${i})"><i class="fa-solid fa-xmark"></i></button>
       
        </div>`
    }
    card.innerHTML = zo;
    
}
display()


let deleteit = document.querySelector(".card .deleteit")
let update = document.querySelector(".sec4 .form .update")

function deleteproduct(deleteIndex){

    message.style.opacity = 1 ;
message.style.backgroundColor = "red" ;
message.innerHTML = `You Deleted Order<b> <i class="fa-solid fa-circle-xmark"></i></b>`
setTimeout(()=>{
    message.style.opacity = 0 ;
},1500)

  container.splice(deleteIndex , 1)
  localStorage.setItem("addition" , JSON.stringify(container))
display()

number_stacker.textContent = Number(container.length) ;
    localStorage.setItem("number_stacker.textContent" , `${Number(container.length)}`)

}

let edit = document.querySelector(".card .edit")
let x = 0 ;
function editing(editIndex){
    x = editIndex ;
        display()
        input1.value = container[editIndex].Name
        input2.value = container[editIndex].Location
        input3.value = container[editIndex].Phone
        input4.value = container[editIndex].Order
        send.style.display = "none"
        update.style.display = "block"
        window.scrollTo({top:sec4.offsetTop - 100 , behavior:"smooth"})
  
}


function updateproduct(){
    container[x].Name = input1.value
    container[x].Location = input2.value
    container[x].Phone = input3.value
    container[x].Order = input4.value
   
    localStorage.setItem("addition" , JSON.stringify(container))

    display()
}
update.addEventListener("click" , () => {
    updateproduct() ;
    send.style.display = "block"
    update.style.display = "none"
    send.style.left = "35%"
    send.style.position = "relative"
    input1.value = "" ; input2.value = "" ; input3.value = "" ; input4.value = "" ;
    message.style.opacity = 1 ;
    message.style.backgroundColor = "blue" ;
    message.innerHTML = `You Updated ${container[x].Name}’s Order <b><i class="fa-regular fa-thumbs-up"></i></b>`
    setTimeout(()=>{
        message.style.opacity = 0
    },1500)
})



let card2 = document.querySelector(".card2")
let Subscribe = document.querySelector("nav .end-nav .Subscribe")
let exit_Subscribe = document.querySelector("nav .end-nav .exit-Subscribe")
Subscribe.onclick = () => {
    card2.style.top = "60px"
    Subscribe.style.display = "none"
    exit_Subscribe.style.display = "block"
    }
    exit_Subscribe.onclick = () =>{
        
        card2.style.top = "-400px"
        Subscribe.style.display = "block"
        exit_Subscribe.style.display = "none"
    }

    let send2 = document.querySelector("footer .child2-footer1 .send2")
    let input_subscribe = document.querySelector("footer .child2-footer1 .input-subscribe")
    let container2 = JSON.parse(localStorage.getItem("messages")) ?? [] ;
    send2.onclick = ()=>{
        let product2 = {Messages : input_subscribe.value 
             }
container2.push(product2)
localStorage.setItem("messages" , JSON.stringify(container2))
input_subscribe.value = "" ; 
showMessage()


    }

    function showMessage(){
        let po = "" ;
            for (let index = 0; index < container2.length; index++) {
                po += `<div><h2>  ${container2[index].Messages} </h2> </div>`
            }
            card2.innerHTML = po ;   
        }
showMessage()

input_search.addEventListener("input" , () => {
    card.style.top = "70px"
})
function setinput(term){
    
    let zo = "" ;
    for (let i = 0; i < container.length; i++) {
      if(container[i].Name.toLowerCase().includes(term.toLowerCase())){
        zo += `<div><h2>Name : ${container[i].Name} <br> <b>Location :  ${container[i].Location}</b> 
        <b>Phone :  ${container[i].Phone}</b> <br>  <b>Order :  ${container[i].Order}</b></h2> 
         <button class = "edit" onclick = "editing(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
         <button class = "deleteit" onclick="deleteproduct(${i})"><i class="fa-solid fa-xmark"></i></button>
       
        </div>`
      }
    }
    card.innerHTML = zo;
}

input_search.addEventListener("input" , () => {
    setinput(input_search.value)
})

