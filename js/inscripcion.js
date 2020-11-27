window.onload = function() {
    document.getElementById('dni').addEventListener('focusout', validarDNI);
}

function validacionForm() {
    // alert('hola');

    var inputs = document.getElementsByTagName("input");
    var vali = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
            vali = false;
        } else if (inputs[i].type == 'email' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
            vali = false;
        } else if (inputs[i].type == 'date' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
            vali = false;
        } else {
            inputs[i].style.borderColor = 'grey';
        }
        // console.log(inputs[i].type);
    }
    if (!validarDNI() || !vali) {
        event.preventDefault()
    }
}

function validacionFor() {
    // alert('hola');
    var inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'text' && inputs[i].value == '') {
            inputs[i].style.borderColor = 'red';
        } else {
            input[i].style.borderColor = 'transparent';
        }
        // console.log(inputs[i].type);
    }
    return false;
}




/* validarDNI */
function validarDNI() {

    // var dni = document.getElementById('dni');
    var dni = document.getElementById('dni');
    if (dni.value.length == 9) {
        //console.log('DNI válido');
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var num = document.getElementById('dni').value.toUpperCase();
        var prin = num.charAt(0);
        var letra = num.charAt(8);

        console.log(prin);
        // alert(letra);
        if (prin == "X") {
            var numero = num.replace("X", "0");
        } else if (prin == "Y") {
            var numero = num.replace("Y", "1");
        } else if (prin == "Z") {
            var numero = num.replace("Z", "2");
        } else {
            var numero = num;
        }

        console.log(numero);
        var numeros = numero.substring(0, numero.length - 1);

        console.log(numeros);

        var letraCalculada = letras[numeros % 23];

        // alert(letraCalculada);

        if (letraCalculada != letra) {
            // alert('mal');
            dni.style.border = "solid red 5px";
        } else {
            // alert('bien');
            dni.style.border = "solid green 5px";
        }

        // dni.style.border = "solid green 5px";

    } else {
        dni.style.border = "solid red 5px";
    }

}
/* Mostrar categoría a partir de la fecha de nacimiento */
function categoria() {
    var nacimiento = document.getElementById('nac').value;
    var nac = new Date(nacimiento);
    var msg = document.getElementById('msg');
    var fecha = new Date();

    console.log(nac);
    console.log(fecha);

    // si la fecha de nacimiento es inferior a 30 de nov. 2020 va a indicarnos que somos viejos
    if (nac < fecha) {
        msg.innerHTML = 'somos viejos';
    }

}