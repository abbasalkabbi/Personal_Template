// decaler var
const navbar=document.querySelector("nav")
// decaler var End 

// add function to Nav bar 
window.onscroll=()=>ShowNav()
function ShowNav(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add("animate")
    }else{
        navbar.classList.remove("animate")
    }
   
}
// add function to Nav bar  END