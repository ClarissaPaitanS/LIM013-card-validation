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

//Pagar.onclick llamará función realizarPago.
const pagar=document.getElementById("pagar");
pagar.onclick=realizarPago;


document.getElementById("CreditCard").onclick=limpiarCampos;



/* Función para Realizar Pago: */
function realizarPago() {
    //Variables:
        const creditCard = document.getElementById("CreditCard").value;
        const nameClient=document.getElementById("NameClient").value;
        const descargar = document.getElementById("detalle");

        const mensajeA= document.getElementById("mensajeA");
        const mensajeC= document.getElementById("mensajeC");


if (validarDatos()!==false) {

        if ( validator.isValid(creditCard)!==false) {
            mensajeA.style.display="none";
            mensajeC.style.display="inline";
            alert("Número de tarjeta es Válido");
            
            setTimeout(() => {
                modalPago.style.display="none";
                modalDetalle.style.display="block"
            }, 2000);
        


            descargar.innerHTML=
            '<h1>¡Tu Pago se Realizo con Éxito!</h1>'+
            '<br/><img src="img/gracias.gif" alt="gracias">'+
            '<p>Gracias <b>'+ nameClient +', </b> por tu compra.</p>'+ 
            '<p><b> Nro. Tarjeta: </b>'+ validator.maskify(creditCard) +'</p>'+
            '<p><b> Puedes Iniciar la Descarga de la Imagen en Alta Calidad.</b></p>'+
            '<p> Esperamos volver a verte <b>¡Pronto! </b></p>'+
            '<p><a href="img/fotografia.jpg" download>'+
            '<img src="img/download.png" alt="download" width="32" height="32" onclick="location.reload();">'+
            '</a></p>';
            }
            else{
                mensajeA.style.display="inline";
                alert("Número de tarjeta no es Válido");
            }

       // console.log(validator.maskify(creditCard)); /*4137894711755904*/
       // eslint-disable-next-line no-console
        console.log(validator.maskify(creditCard));
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


