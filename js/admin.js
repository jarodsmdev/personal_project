let inputName = document.getElementById("form__user-name");
let alertName = document.getElementById("alert_name");

let inputLastName = document.getElementById("form__user_last-name");
let alertLastName = document.getElementById("alert_lastName");

let inputPhone = document.getElementById("form__user-phone");
let alertPhone = document.getElementById("alert_phone");

let inputEmail = document.getElementById("form__user-email");
let alertEmail = document.getElementById("alert_email");

let btnGuardar = document.getElementById("btnGuardar");

let mensajeError = "Este campo no puede estar vacío."


btnGuardar.addEventListener("click", function(){

    if (inputName.value == ""){
        alertName.innerText = mensajeError;
    }else{
        alertName.innerText = "";
    }

    if (inputLastName.value == ""){
        alertLastName.innerText = mensajeError;
    }else{
        alertLastName.innerText = ""
    }

    if (inputPhone.value == ""){
        alertPhone.innerText = mensajeError;
    }else{
        alertPhone.innerText = ""
    }

    if (inputEmail.value == ""){
        alertEmail.innerText = mensajeError;
    }else{
        alertEmail.innerText = ""
    }
    
})

