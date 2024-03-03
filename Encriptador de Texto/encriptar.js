function encriptarTexto() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var clave = 3; // Clave predefinida
    var textoEncriptado = ""; // Inicializar como cadena vacía

    for (var i = 0; i < textoOriginal.length; i++) {
        var charCode = textoOriginal.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            textoEncriptado += String.fromCharCode((charCode - 65 + clave) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            textoEncriptado += String.fromCharCode((charCode - 97 + clave) % 26 + 97);
        } else {
            textoEncriptado += textoOriginal.charAt(i); // No es una letra, mantener sin cambios
        }
    }

    document.getElementById("resultado").value = textoEncriptado;
}


function desencriptarTexto() {
    var textoEncriptado = document.getElementById("resultado").value;
    var clave = 3; // Clave predefinida
    var textoDesencriptado = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        var charCode = textoEncriptado.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            textoDesencriptado += String.fromCharCode((charCode - 65 - clave + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            textoDesencriptado += String.fromCharCode((charCode - 97 - clave + 26) % 26 + 97);
        } else {
            textoDesencriptado += textoEncriptado.charAt(i); // No es una letra, mantener sin cambios
        }
    }

    document.getElementById("resultado").value = textoDesencriptado;
}

function copiarTexto() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto encriptado copiado al portapapeles.");
}

function limpiar() {
    document.getElementById("textoOriginal").value = "";
    document.getElementById("resultado").value = "";
}
