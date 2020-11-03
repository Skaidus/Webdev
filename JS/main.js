var jsonuser = JSON.parse(document.cookie)
var nombre = jsonuser.nombre
var rol = jsonuser.rol


if(rol == "Estudiante"){
    document.getElementById('botonEstudiantes').style.display = 'none';

}

document.getElementById('irAInicioDeSesion').addEventListener("click", irAlLogin)
function irAlLogin(){
    document.getElementById('páginaDeInicio').style.display = 'block'
    document.getElementById('Admin').style.display = 'none'
}
function pulsarBotonEstudiantes(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('foro').style.display = 'none'
    document.getElementById('calificaciones').style.display = 'none'
    document.getElementById('estudiantes').style.display = 'block'
    document.getElementById('botonEstudiantes').style.display = 'none'
    document.getElementById('botonCurso').style.display = 'block'
    document.getElementById('botonForo').style.display = 'block'
    document.getElementById('botonCalificaciones').style.display = 'block'
}
function pulsarBotonPrincipal(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('foro').style.display = 'none'
    document.getElementById('calificaciones').style.display = 'none'
    document.getElementById('estudiantes').style.display = 'block'
    document.getElementById('botonEstudiantes').style.display = 'none'
    document.getElementById('botonCurso').style.display = 'block'
    document.getElementById('botonForo').style.display = 'block'
    document.getElementById('botonCalificaciones').style.display = 'block'
}
function pulsarBotonCalificaciones(){
    document.getElementById('principal').style.display = 'none'
    document.getElementById('foro').style.display = 'none'
    document.getElementById('calificaciones').style.display = 'none'
    document.getElementById('estudiantes').style.display = 'block'
    document.getElementById('botonEstudiantes').style.display = 'none'
    document.getElementById('botonCurso').style.display = 'block'
    document.getElementById('botonForo').style.display = 'block'
    document.getElementById('botonCalificaciones').style.display = 'block'
}
