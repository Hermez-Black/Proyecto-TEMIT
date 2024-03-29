
function scrollToElement(element){
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
};

if(window.scrollTo) {
    document.querySelector(".btn").addEventListener("click", (ev) => {
        ev.preventDefault()
        scrollToElement(document.querySelector(".controls"))
        }
    )
};

document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".menu-screen").classList.remove("active");
});

let links = document.querySelectorAll(".menu-screen a");  
links.forEach(link => {
    link.addEventListener('click', function(ev){ 
        document.querySelector(".menu-screen").classList.remove("active");

        let paths = this.href.split("/");
        
        const selector = paths[paths.length - 1];

        if(window.scrollTo) ev.preventDefault()
        

        scrollToElement(document.querySelector(selector));

        return !!window.scrollTo;
    })
});