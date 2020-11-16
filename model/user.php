<?php
require_once 'user.php';
    class user{
        private $dni;
        private $nombre;
        private $fecha;
        private $email;

        function __construct($dni, $nombre, $fecha, $email){
            $this->dni=$dni;
            $this->nombre=$nombre;
            $this->fecha=$fecha;
            $this->email=$email;
        }

        public function getDni(){
            return $this->dni;
        }

        public function setDni($dni){
            $this->dni = $dni;
            return $this;
        }

        public function getNombre(){
            return $this->nombre;
        }
 
        public function setNombre($nombre){
            $this->nombre = $nombre;
            return $this;
        }

        /**
         * Get the value of fecha
         */ 
        public function getFecha()
        {
            return $this->fecha;
        }

        /**
         * Set the value of fecha
         *
         * @return  self
         */ 
        public function setFecha($fecha)
        {
            $this->fecha = $fecha;

            return $this;
        }

        /**
         * Get the value of email
         */ 
        public function getEmail()
        {
            return $this->email;
        }

        /**
         * Set the value of email
         *
         * @return  self
         */ 
        public function setEmail($email)
        {
            $this->email = $email;

            return $this;
        }
    }
?>