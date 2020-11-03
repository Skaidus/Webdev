
function comprobarCampos(user,password,NIA,nombre,email,fechaNacimiento,DNI){
    var bien = true;
    const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const niaRegEx = /100[0-9]{6}/;
    const passRegEx = /[a-z,A-Z,0-9]{8}/;
    const dateRegEx = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    if(user.value=""||user.value == null) {
        alert("Introduzca un nombre de usuario valido.");
        bien = false;
    }
    if(NIA.value=""||NIA.value == null||niaRegEx.test(NIA.value)==false) {
        alert("Introduzca un NIA valido.");
        bien = false;
    }
    if(password.value=""||password.value == null|| passRegEx.test(password.value)==false) {
        alert("Introduzca una contraseña valida.");
        bien = false;
    }
    if(nombre.value=""||nombre.value == null) {
        alert("Introduzca un nombre valido.");
        bien = false;
    }
    if(email.value=""||email.value == null|| emailRegEx.test(email.value)==false) {
        alert("Introduzca un email valido.");
        bien = false;
    }
    if(fechaNacimiento.value=""||fechaNacimiento.value == null||dateRegEx.test(fechaNacimiento.value)==false) {
        alert("Introduzca una fecha de nacimiento valida.");
        bien = false;
    }
    if(DNI.value=""||DNI.value == null) {
        alert("Introduzca un id valido.");
        bien = false;
    }
    return bien;
}

    document.getElementById('rolselect').addEventListener('selectionchange', showGrado);
function showGrado(){
    var rol = document.getElementById("rolselect").value

    if(rol == 'Estudiante'){
        document.getElementById("grado").style.display = 'block'
        document.getElementById("gradoselect").style.display = 'block'
    }
    else{
        document.getElementById("grado").style.display = 'none'
        document.getElementById("gradoselect").style.display = 'none'
    }
}

    document.getElementById('RegistroCompleto').addEventListener("click", crearCookies);
    document.getElementById('BorrarRegistro').addEventListener("click", borrarCampos);


    function crearCookies(){
            usuario =document.getElementById('edit-user').value;
            password =document.getElementById('edit-password').value;
            NIA =document.getElementById('edit-NIA').value;
            nombre =document.getElementById('edit-nomap').value;
            email =document.getElementById('edit-email').value;
            fechaNacimiento =document.getElementById('edit-fecha').value;
            DNI =document.getElementById('edit-DNI').value;

        if(comprobarCampos(usuario,password,NIA,nombre,email,fechaNacimiento,DNI)){
            var person ={
                usuario:document.getElementById('edit-user').value,
                password:document.getElementById('edit-password').value,
                NIA:document.getElementById('edit-NIA').value,
                nombre:document.getElementById('edit-nomap').value,
                email:document.getElementById('edit-email').value,
                fechaNacimiento:document.getElementById('edit-fecha').value,
                DNI:document.getElementById('edit-DNI').value,
                rol:document.getElementById('rolselect').value,
                //grado:document.getElementById('edit-grado').value,
                universidad:document.getElementById('edit-uni').value
            }
            document.cookie = 'person = ' + JSON.stringify(person);
        }

    }
    function borrarCampos(){
        document.getElementById('edit-user').value = "";
        document.getElementById('edit-password').value = "";
        document.getElementById('edit-NIA').value = "";
        document.getElementById('edit-nomap').value = "";
        document.getElementById('edit-email').value = "";
        document.getElementById('edit-fecha').value = "";
        document.getElementById('edit-DNI').value = "";
    }
