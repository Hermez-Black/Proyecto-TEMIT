
// Vamos a crear una función para hacer la animación para dirigirnos a cualquier seccion de la página web

function scrollToElement(element){
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
};
// element.offsetTop tiene todas las medidas de cada componente del archivo html, que le des 

// Este condicional, este pedazo de código es para que cuando le demos al boton de ver más haga la animacion
if(window.scrollTo) {
    document.querySelector(".btn").addEventListener("click", (ev) => {
        ev.preventDefault()
        scrollToElement(document.querySelector(".controls"))
        }
    )
};

// Para abrir y cerrar el menu, podemos usar el archivo entry
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".menu-screen").classList.add("active");
});
// Del documento selecciona el que tiene la clase menu, luego cuando haya un click, ejecuta la funcion 
// Que selecciona la etiqueta que tiene la clase menu-screen y la añade active

// Lo mismo para cerrar el menu
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".menu-screen").classList.remove("active");
});

// Aqui seleccionamos el close y cuando de click quitamos la clase active.



// Para dirigirnos a nuestras secciones de la página web
// Aqui obtenemos nuestros links

let links = document.querySelectorAll(".menu-screen a");  // -> Esto nos trae un json o una lista?

// Para hacer la animación de una seccion a otra usaremos algo del objeto window es una api scrollTO, mover el scroll

// window.scrollTo({
//     'behavior': 'smooth',
// })

// Esto es para cuando hacemos click se quite el menu cuando nos lleva a la section que queremos
links.forEach(link => {
    link.addEventListener('click', function(ev){ //ev es un evento
        document.querySelector(".menu-screen").classList.remove("active");

        let paths = this.href.split("/");

        // Para que no nos redireccione colocamos un 
        
        const selector = paths[paths.length - 1];

        if(window.scrollTo) ev.preventDefault()
        
        // ev.preventDefault();

        scrollToElement(document.querySelector(selector))

        return !!window.scrollTo;
    })
});