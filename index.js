const share = document.getElementById('divClic') 
const funcion= document.getElementById('cuadroGris')
const segundaFuncion = document.getElementById('divSegundoShare')

share.addEventListener('click', function(){
funcion.setAttribute("style", "display:block;")
})


segundaFuncion.addEventListener('click', function(){
    funcion.setAttribute("style", "display:none;")
})


