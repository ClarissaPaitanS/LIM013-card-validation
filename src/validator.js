const validator = {

  isValid: function isValid(numero_tarjeta) {  
    const cadena = numero_tarjeta.toString();
    const longitud = cadena.length;
    let cifra = 0;
    let cifra_cad=0;
    let suma=0;
    
    if ((longitud%2)===0) {
      for (let i=0; i < longitud; i+=2){
        cifra = parseInt(cadena.charAt(i))*2;
  
        if (cifra > 9){ 
          cifra_cad = cifra.toString();
          cifra = parseInt(cifra_cad.charAt(0)) + 
            parseInt(cifra_cad.charAt(1));
        }
            suma+=cifra;
      }
  
      for (let i=1; i < longitud; i+=2){
        suma += parseInt(cadena.charAt(i));
      }
    
    }else{
      for (let i=1; i < longitud; i+=2){
        cifra = parseInt(cadena.charAt(i))*2;
  
        if (cifra > 9){ 
          cifra_cad = cifra.toString();
          cifra = parseInt(cifra_cad.charAt(0)) + 
            parseInt(cifra_cad.charAt(1));
        }
            suma+=cifra;
      }
  
      for (let i=0; i < longitud; i+=2){
        suma += parseInt(cadena.charAt(i));
      }
    }







    if ((suma % 10) === 0){ 
    return true;
  } else {
      return false;
      }
    },

maskify: function maskify (numero_tarjeta) {
  numero_tarjeta= numero_tarjeta.replace(/.(?=.{4})/g, "#");
  return numero_tarjeta;
}


};

export default validator;
