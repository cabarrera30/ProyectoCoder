const navtoggle = document.querySelector(".nav-toggle")
const navmenu = document.querySelector(".navmenu")

navtoggle.addEventListener("click", ()=>{
    navmenu.classList.toggle("navmenu_visible")
})