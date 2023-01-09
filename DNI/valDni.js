
function verTipo(str) {
    let string = str.toLowerCase();
    let primerCaracter = string[0];


    switch (primerCaracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            validarDni(str);
            break;
        case 'x':
        case 'y':
        case 'z':
            validarNie(str);
            break;
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'p':
        case 'q':
        case 's':
        case 'k':
        case 'l':
        case 'n':
        case 'r':
        case 'u':
        case 'v':
        case 'w':
        case 'm':
            validarCif(str);
            break;
        default:
            break;
    }

}

function validarDni(dni) {
    var DNI = dni.toLowerCase();
    let regexDNI = /^\d{8}[A-Z]$/;
    let numerosDni = dni.substring(0, dni.length - 1);
    var resto = numerosDni % 23;
    var control = letraControl(resto);

    if (dni.toUpperCase().match(regexDNI)) {

        if (DNI[8] === control) {
            document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + dni + " corresponde a un DNI y es correcto";
        } else {
            document.getElementById("mensajeValidacion").innerHTML =  "El numero introducido " + dni + " corresponde a un DNI y es incorrecto. La letra de control no corresponde a ese numero";
        }
    }else{
        document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + dni + " no corresponde a un DNI/CIF/NIE";
    }

}

function validarCif(cif) {
    var CIF = cif.toLowerCase();
    let regexCIF = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;
    var numerosCif = cif.substring(1, cif.length - 1);
    var control = numeroControlCif(numerosCif);
    
    if (cif.toUpperCase().match(regexCIF)) {
        if (CIF[0] == 'n' || CIF[0] == 'p' || CIF[0] == 'q' || CIF[0] == 'r' || CIF[0] == 's' || CIF[0] == 'w') {
            var ultimoCaracter = letrasCif(control);
            if(cif[8] == ultimoCaracter){
                document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + cif + " corresponde a un CIF y es correcto";
            }else{
                document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + cif + " corresponde a un DNI y no es correcto. La letra de control o bien no corresponde o ha puesto un numero";
            }
        }else{
            if(cif[8] == control){
                document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + cif + " corresponde a un CIF y es correcto";
            }else{
                document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + cif + " corresponde a un DNI y no es correcto. El numero de control no corresponde o bien ha puesto una letra";
            }
        }
    }else{
        document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + cif + " no corresponde a un DNI/CIF/NIE";
    }

}

function validarNie(nie) {
    var NIE = nie.toLowerCase();
    let regexNIE = /^[X-Z]\d{7}[A-Z]$/;
    var numerosNie = "" + primeraLetraNie(NIE[0]) + nie.substring(1, nie.length - 1);
    var resto = numerosNie % 23;
    var control = letraControl(resto);
    if (nie.toUpperCase().match(regexNIE)) {
        if (NIE[8] === control) {
            document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + nie + " corresponde a un NIE y es correcto";;
        } else {
            document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + nie + " corresponde a un NIE y no es correcto. La letra de control no corresponde con ese numero";
        }
    }else{
        document.getElementById("mensajeValidacion").innerHTML = "El numero introducido " + dni + " no corresponde a un DNI/CIF/NIE";
    }
}

function letraControl(numero) {
    switch (numero) {
        case 0:
            return 't'; 
        case 1:
            return'r';
        case 2:
            return 'w';
        case 3:
            return 'a';
        case 4:
            return 'g';
        case 5:
            return 'm';
        case 6:
            return 'y';
        case 7:
            return 'f';
        case 8:
            return 'p';
        case 9:
            return 'd';
        case 10:
            return 'x';
        case 11:
            return 'b';
        case 12:
            return 'n';
        case 13:
            return 'j';
        case 14:
            return 'z';
        case 15:
            return 's';
        case 16:
            return 'q';
        case 17:
            return 'v';
        case 18:
            return 'h';
        case 19:
            return 'l';
        case 20:
            return 'c';
        case 21:
            return 'k';
        case 22:
            return 'e';
        default:
            return '';

    }
}

function primeraLetraNie(letra) {
    switch (letra) {
        case 'x':
            return 0;
        case 'y':
            return 1;
        case 'z':
            return 2;
        default:
            return;
    }
}

function numeroControlCif(numero) {

    var pares = calculoPares(numero);
    var impares = calculoImpares(numero);
    var suma = pares + impares;
    sumaStr = suma.toString();
    var resultado = 10 - parseInt(sumaStr[1]);

    return resultado;

}

function calculoPares(numero) {
    numAux = 0;
    result = 0;
    for (var i = 1; i < numero.length; i += 2) {
        result = parseInt(numero[i]) + numAux;
        numAux = result;
    }
    return result;
}

function calculoImpares(numero) {
    result = 0;
    for (var i = 0; i < numero.length; i += 2) {
        var numAux = parseInt(numero[i]) * 2;
        numAux2 = numAux.toString();
        
        for(var j = 0; j < numAux2.length; j++){
            result += parseInt(numAux2[j]);
        }
    }

    return result;
}

function letrasCif(numero) {
    switch (numero) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
        case 4:
            return 'd';
        case 5:
            return 'e';
        case 6:
            return 'f';
        case 7:
            return 'g';
        case 8:
            return 'h';
        case 9:
            return 'i';
        case 10:
        case 0:
            return 'j';
        default:
        return;
    }
}

