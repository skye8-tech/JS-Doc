const menu = document.querySelector(".menu-btn")
const sidebar = document.querySelector(".sidebar")
const main = document.querySelector("main")

let width = document.querySelector("body").offsetWidth
console.log(width);
if (width <= 800){
  menu.classList.add("active")
  sidebar.style.display = "none"
  main.classList.add("main-active")
}else{
  menu.classList.remove("active")
  sidebar.style.display = "flex"
  main.classList.remove("main-active")
}
menu.addEventListener("click", function(){
  if (menu.classList.contains("active")){
    menu.classList.remove("active")
    sidebar.style.display = "flex"
    main.classList.remove("main-active")
  }else{
    menu.classList.add("active")
    sidebar.style.display = "none"
    main.classList.add("main-active")
  }
})