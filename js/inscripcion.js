window.onload = function() {
    document.getElementById('dni').addEventListener('focusout', validarDNI);
    document.getElementById('fecha').addEventListener('focusout', categoria);
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
    var nacimiento = document.getElementById('fecha').value;
    var nac = new Date(nacimiento);
    var msg = document.getElementById('msg');
    var fecha = new Date();
    var anoactual = fecha.getFullYear();
    var fechanac = nac.getFullYear();
    var result = anoactual - fechanac;

    if (result >= 0 && result <= 10) {
        msg.innerHTML = 'categoria: infantil de (0-10 años)';
    } else if (result >= 11 && result <= 15) {
        msg.innerHTML = 'categoria: junior (11-15 años)';
    } else if (result >= 16 && result <= 20) {
        msg.innerHTML = 'categoria: senior (16-20 años)';
    } else if (result >= 21 && result <= 65) {
        msg.innerHTML = 'categoria: veteranos (21-65 años)';
    } else if (result >= 66 && result <= 90) {
        msg.innerHTML = 'categoria: jubilados (mayor de 66 años)';
    } else {
        msg.innerHTML = 'si su edad es correcta no deberia hacer una cursa o directamente esta usted muerto';
    }

    // console.log(nac);
    // console.log(fecha);

    // si la fecha de nacimiento es inferior a 30 de nov. 2020 va a indicarnos que somos viejos
    // if (nac < fecha) {
    //     msg.innerHTML = 'somos viejos';
    // }

}