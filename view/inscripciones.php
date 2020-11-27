<!DOCTYPE html>
<html lang="es">

<head>
    <title>CSS Website Layout</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">
    <script src="../js/inscripcion.js"></script>
    <?php
  require_once '../model/userDAO.php'; ?>
</head>

<body>



    <div class="header">
        <div class="topnav">
            <p style="float: left;">Cursa Bellvitge</p>
            <div>
                <a href="../index.php">Inici</a>
                <a href="#">Clasificacions</a>
                <a href="./inscripciones.php">Inscripcions</a>
                <a href="#">Noticies</a>
                <a href="#">Galeria</a>
                <input style="float: right;" type="submit" value="Enviar">
                <select style="float: right;">
                    <option value='Español'>Español</option>
                    <option value='Ingles'>Ingles</option>
                </select>
            </div>
        </div>
    </div>

    <div class="formulario">
        <form action="./inscripciones.php" method="POST" onsubmit="return validacionForm() && validarDNI()">
            <input type="text" name="dni" id="dni" placeholder="DNI">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre...">
            <br>
            <input type="text" id="cognom1" name="cognom1" placeholder="Primer cognom...">
            <input type="date" id="fecha" name="fecha" placeholder="...">
            <br>
            <input type="email" id="email" name="email" placeholder="Email...">
            <br>
            <select id="sexo" name="sexo">
                <option value="Home">Home</option>
                <option value="Dona">Dona</option>
                <option value="Indefinido">Indefinido </option>
            </select>
            <select id="categoria" name="categoria">
                <option value="infantil">infantil (0-10)</option>
                <option value="junior">junior (11-15)</option>
                <option value="senior">senior (16-20)</option>
                <option value="veteranos">veteranos (21-65)</option>
                <option value="jubilados">jubilados (mayor de 66)</option>
                <option value="discapacitado">discapacitado</option>
            </select>
            <div id="message"></div><br>
            <!-- <input type="submit" id="submit" name="submit" value="Registrarse"> -->
            <button type="submit" id="submit" name="submit" value="Registrarse" >Registrarse</button>
        </form>
        <?php

    // if (isset($_POST['submit'])) {
    //   $insc =  new userDAO();
    //   $insc->inscripcion();
    // }

    ?>
    </div>

</body>

</html>