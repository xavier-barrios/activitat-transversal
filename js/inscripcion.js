function validacionForm() {


    var dni = document.getElementById('dni').value
    var nombre = document.getElementById('nombre').value
    var cognom1 = document.getElementById('cognom1').value
    var email = document.getElementById('email').value

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var num = document.getElementById('dni').value.toUpperCase();
    var prin = num.charAt(0);
    var letra = num.charAt(8);

    console.log(prin);
    alert(letra);
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

    alert(letraCalculada);

    if (letraCalculada != letra) {
        alert('mal');

    } else {
        alert('bien');
    }


    if (dni == '') {
        document.getElementById("dni").style.border = "thick solid #FF0000";
    }
    if (nombre == '') {
        document.getElementById("nombre").style.border = "thick solid #FF0000";
    }
    if (cognom1 == '') {
        document.getElementById("cognom1").style.border = "thick solid #FF0000";
    }
    if (email == '') {
        document.getElementById("email").style.border = "thick solid #FF0000";
    }

    if (dni != '') {
        document.getElementById("dni").style.border = "white";
    }
    if (nombre != '') {
        document.getElementById("nombre").style.border = "white";
    }
    if (cognom1 != '') {
        document.getElementById("cognom1").style.border = "white";
    }
    if (email != '') {
        document.getElementById("email").style.border = "white";
    }

    if (dni == '' || nom == '' || cognom1 == '' || email == '') {
        document.getElementById('message').innerHTML = '<p style="color:red">Rellene los campos obligatorios.</p>';
        return false
    } else {
        if (letraCalculada != letra) {
            document.getElementById('message').innerHTML = '<p style="color:red">DNI incorrecto.</p>';
            return false
        } else {
            return true
        }
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