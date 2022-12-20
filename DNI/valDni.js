function validarDni(dni){
    let regexDNI = /^\d{8}[A-Z]$/;
    let regexNIE = /^[X-Z]\d{7}[A-Z]$/
    let regexCIF = /^[A-HPQSK-M]\d{8}/ 
    console.log(dni);
    console.log(dni.match(regexDNI));
    if(dni.match(regexDNI)){
        document.getElementById("mensajeValidacion").innerHTML = "Si es un DNI";
    }else{
        document.getElementById("mensajeValidacion").innerHTML = "No es un DNI";
    }

}