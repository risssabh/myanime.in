const MenuBtn = document.getElementById("Menu-Btn")
const OtherNavbar = document.getElementById("Other-Navbar")
MenuBtn.onclick = ()=>{
    if (OtherNavbar.classList.contains("show")) {
        OtherNavbar.classList.remove("show")
    }
    else{
        OtherNavbar.classList.add("show")
    }
}