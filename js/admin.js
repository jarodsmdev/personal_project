

window.addEventListener("DOMContentLoaded", () => {

    let inputEmail = document.getElementById("form__user-email");
    let alertEmail = document.getElementById("alert_email");

    let btnGuardar = document.getElementById("btnGuardar");

    let mensajeError = "Este campo no puede estar vacío."


    inputEmail.addEventListener("change", function(){
       
        if (validarEmail(inputEmail.value)){
            alertEmail.innerText = ""
        }else{
            alertEmail.innerText = "Email no válido, favor corregir."
        }

    })

    btnGuardar.addEventListener("click", function(){
        let inputEmail = document.getElementById("form__user-email");
        let inputName = document.getElementById("form__user-name");
        let alertName = document.getElementById("alert_name");
    
        let inputLastName = document.getElementById("form__user_last-name");
        let alertLastName = document.getElementById("alert_lastName");
    
        let inputPhone = document.getElementById("form__user-phone");
        let alertPhone = document.getElementById("alert_phone");
    
        
        

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
    
       
        
        if (inputName.value && inputLastName.value && inputPhone.value && inputEmail.value){
            // Limpiar los campos al enviar los datos
            inputName.value = ""
            inputLastName.value = ""
            inputPhone.value = ""
            inputEmail.value = ""
    
            
    
            Swal.fire({
                title: '¡Éxito!',
                text: 'Cambios realizados satisfactoriamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
                })


            
    
    
        
        }else{
            Swal.fire({
                title: 'Aviso',
                text: 'Falta ingresar información obligatoria.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
                })
        }
    })
})




function validarEmail(inputEmail){
                
	
	// Define our regular expression.
	let regex =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	// Using test we can check if the text match the pattern
	if(regex.test(inputEmail.value) ){

		return true;
	}else{
   
		return false;
	}
} 

