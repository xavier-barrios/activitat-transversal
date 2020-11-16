<?php
class userDAO{
private $pdo;
    public function __construct(){
        include '../model/connection.php';
        $this->pdo=$pdo;
    }

    function inscripcion(){
        
        $dni = $_POST['dni'];
        $nombre = $_POST['nombre'];
        $cognom1 = $_POST['cognom1'];
        $fecha = $_POST['fecha'];
        $email = $_POST['email'];
        $categoria = $_POST['categoria'];
  
        $query = "INSERT INTO `tbl_participantes` (`dni_part`, `nom_part`, `apellidos_part`, `fecha_nac`, `email_part`) VALUES (?, ?, ?, ?, ?)";
        $sentencia=$this->pdo->prepare($query);
        $sentencia->bindParam(1,$dni);
        $sentencia->bindParam(2,$nombre);
        $sentencia->bindParam(3,$cognom1);
        $sentencia->bindParam(4,$fecha);
        $sentencia->bindParam(5,$email);
        $sentencia->execute();

        $query1 = "SELECT id_cat FROM `tbl_categoria` WHERE nom_cat = ?";
        $sentencia1=$this->pdo->prepare($query1);
        $sentencia->bindParam(1,$categoria);
        $sentencia1->execute();
        $id_categoria=$sentencia1->fetch(PDO::FETCH_ASSOC);

        $query2 = "INSERT INTO `tbl_inscripcion` (`id_insc`, `fecha_insc`, `dorsal_insc`, `id_cat`, `dni_part`, `id_cursa`, `pagado_insc`) VALUES (NULL, ?, '123', ?, ?, '1', '0');";
        $sentencia2=$this->pdo->prepare($query2);
        $sentencia2->bindParam(1,$fecha);
        $sentencia2->bindParam(2,$id_categoria);
        $sentencia2->bindParam(3,$dni);
        $sentencia2->execute();


    }
}
?>