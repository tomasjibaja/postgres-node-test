let buttonEnviar = document.getElementById('btn-enviar-datos');
let buttonLimpiar = document.getElementById('btn-limpiar-datos');
let inputNombre = document.getElementById('input-nombre');
let inputCorreo = document.getElementById('input-correo');
let pMensajeErr = document.getElementById('mensaje-error');
let pMensajeCon = document.getElementById('mensaje-confirmacion');

buttonEnviar.addEventListener('click', function() {
if(inputNombre.value.length < 5) {
    pMensajeErr.innerHTML = "El nombre está vacío o es muy corto.";
} else if(inputCorreo.value.length < 5) {
    pMensajeErr.innerHTML = "El correo está vacío o es muy corto.";
} else if(inputNombre.value.length > 20) {
    pMensajeErr.innerHTML = "El nombre es demasiado largo.";
} else if(inputCorreo.value.length > 20) {
    pMensajeErr.innerHTML = "El correo es demasiado largo.";
} else {
    pMensajeErr.innerHTML = "";
    pMensajeCon.innerHTML = "Los datos se enviaron correctamente.";
}



});

buttonLimpiar.addEventListener('click', function() {
    inputNombre.value = "";
    inputCorreo.value = "";
    pMensajeErr.innerHTML = "";
    pMensajeCon.innerHTML = "";
});