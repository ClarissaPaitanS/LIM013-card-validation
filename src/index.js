import validator from './validator.js';

const modalDetalle = document.getElementById("modalDetalle");
const modalPago = document.getElementById("modalPago");
const btnAdquirir = document.getElementById("btnAdquirir");
const span = document.getElementsByClassName("close")[0];

// Abrir la ventana modal - Formulario Pago
    btnAdquirir.onclick = function() {
        modalPago.style.display = "block";
    }
// Cerrar la ventana modal - Pago
    span.onclick = function() {
        modalPago.style.display = "none";
    }

  // Cliquear fuera y cerrar ventana modal - Pago
    window.onclick = function(event) {
        if (event.target == modalPago) {
    modalPago.style.display = "none";
        }
    }



document.getElementById("pagar").onclick=realizarPago;
document.getElementById("CreditCard").onclick=limpiarCampos;


/* Función para Realizar Pago: */
function realizarPago() {
    //Variables:
        const creditCard = document.getElementById("CreditCard").value;
        const nameClient=document.getElementById("NameClient").value;
        const descargar = document.getElementById("detalle");

    if (validarDatos()!==false) {

        if ( validator.isValid(creditCard)!==false) {
            
            modalPago.style.display="none";
            modalDetalle.style.display="block";
            console.log(validator.maskify(creditCard)); /*4137894711755904*/

        }
        
        
    }

}

/* Función para Validar Campos: */
function validarDatos() {
    //Variables:
    const  creditCard = document.getElementById("CreditCard").value;
    const  nameClient=document.getElementById("NameClient").value;
    const  mesExpira=document.getElementById("MesExpira").value;
    const  yearExpira=document.getElementById("YearExpira").value;
    const  codCVV=document.getElementById("CVV").value;
    
    if (nameClient==="" || creditCard==="" || mesExpira==="" || yearExpira==="" || codCVV==="") {
        alert("Todos los Campos son Obligatorios");
        return false;
    }
    else if (nameClient.length>120) {
        alert("El Nombre del Titular es Muy Largo");
        return false;
    }
    else if (creditCard.length!==16) {
        alert("El Nro. de Tarjeta debe Contener 16 Digitos");
        return false; 
    }
    else if (mesExpira.length!==2 || yearExpira.length!==2) {
        alert("El Mes y Año debe Contener 2 Digitos.");
        return false; 
    }
    else if (codCVV.length!==3) {
        alert("El CVV debe Contener 3 Digitos.");
        return false; 
    }
    else if (isNaN(creditCard) || isNaN(mesExpira) || isNaN(yearExpira) || isNaN(codCVV)) {
        alert("El Dato Ingresado no es un Número");
        return false; 
    }
    else if (mesExpira<0 || mesExpira>12) {
        alert("El Mes Ingresado, no es Correcto");
        return false; 
    }
    else if (yearExpira<20) {
        alert("El Año Ingresado, no es Correcto o su Tarjeta ya Expiró");
        return false; 
    }
    
    }


/* Función para Limpiar Campos: */
function limpiarCampos() {
    document.getElementsByName("CreditCard")[0].value="";
    document.getElementsByName("NameClient")[0].value="";
    document.getElementsByName("MesExpira")[0].value="";
    document.getElementsByName("YearExpira")[0].value="";
    document.getElementsByName("CVV")[0].value="";
}


