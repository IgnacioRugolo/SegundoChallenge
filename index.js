const share = document.getElementById('divClic') 
const funcion= document.getElementById('cuadroGris')
const segundaFuncion = document.getElementById('divSegundoShare')
const click= document.getElementById('click')

share.addEventListener("click", function (){

funcion.classList.toggle("clicked")
if(funcion.classList == "cuadroGris clicked")
    funcion.setAttribute ("style", "display:block")
  click.setAttribute("style", "fill: #ffffff !important;")  
}
)


share.addEventListener("click", function(){
    if(funcion.classList == "cuadroGris")
    funcion.setAttribute ("style", "display:none")

})


segundaFuncion.addEventListener('click', function(){
    funcion.classList.toggle("clicked")
    funcion.setAttribute("style", "display:none;")
    
  
})




