// decaler var
const navbar=document.querySelector("nav"),
    home=document.querySelector('.home'),
    about=document.querySelector('.about'),
    cursor=document.querySelector(".cursor"),
    cursor2=document.querySelector(".cursor2"),
    a = document.querySelectorAll("a");
// decaler var End 
// cursor
window.addEventListener('mousemove',(e)=> {
    cursor.style.cssText=cursor2.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;`
})
//  loop for add hover animate
for (let x of a) {
    x.addEventListener('mousemove',()=>{
        cursor.classList.add('active')
        cursor2.classList.add('active')
        
    })
    x.addEventListener('mouseout',()=>{
        cursor.classList.remove('active')
        cursor2.classList.remove('active')
    })

}
// cursor End
// add function to Nav bar 
window.onscroll=()=>ShowNav()
function ShowNav(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add("animate")
    }else{
        navbar.classList.remove("animate")
    }
}
// addEventListener scroll
window.addEventListener('scroll',()=> changeclass())
// addEventListener scroll End 
//  check is viwe in element
function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= -100 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right-100 <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
//  chenge class in nav
function changeclass(){
    let home_nav=document.querySelector(".home-nav"),
    about_nav=document.querySelector(".about-nav")
    // contact_nav=document.querySelector(".contact-nav");
    if(isInViewport(home)){
        // add class
        home_nav.classList.add('active')
        // remove class
        about_nav.classList.remove('active')
    }else if(isInViewport(about)){
        // add class 
        about_nav.classList.add('active')
        // remove class 
        home_nav.classList.remove('active')
    }

}


// add function to Nav bar  END
// typing 

class TypingText {
    constructor(TextElement,words,wait=300){
        this.TextElement=TextElement;
        this.words=words;
        this.wait=parseInt(wait,10);
        this.tex='';
        this.wordindex=0;
        this.typing();
        this.isDeleting;
    }
    typing(){
        const current=this.wordindex % this.words.length;
        // get Fulltext 
        const fulltext=this.words[current]
        // check deleting 
        if(this.isDeleting){
            // remove char
            this.tex=fulltext.substring(0,this.tex.length -1)
        }else{
             // add char
            this.tex=fulltext.substring(0,this.tex.length +1)
        }
        // Insert txt into element
        this.TextElement.innerHTML = `<span class="txt">${this.tex}</span>`;
        // Initial Type Speed
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed/=2;
        }
        // If word is complete
        if(!this.isDeleting && this.tex===fulltext){
            // Make pause at end
            typeSpeed = this.wait;
            this.isDeleting=true;
        }else if(this.isDeleting && this.tex === '') {
            this.isDeleting=false;
            // move to next text
            this.wordindex++;
             // Pause before start typing
            typeSpeed = 500;
        }
        setTimeout(()=>this.typing(),typeSpeed)
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    // changeclass nav bar
    changeclass()
    // rol-job
    const txtElement = document.querySelector('.rol-job .dynamic-text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
    new TypingText(txtElement, words, wait);
  // About
    const aboutElement=document.querySelector(".about .dynamic-text"),
    aboutwords = JSON.parse(aboutElement.getAttribute('data-words')),
    aboutwait = aboutElement.getAttribute('data-wait');
    new TypingText(aboutElement, aboutwords, aboutwait);
}
