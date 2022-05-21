<?php
/**
 * conexion.
 * 
 */
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

abstract class Connect{

    public $servername;
    public $username ;
    public $password ;
    public $dbname ;

    public function __construct(){

        $this->servername = "localhost";
        //$this->username  = "regWeb";
        $this->username  = "root";
        //$this->password  = "_12Mcgz01";
        $this->password  = "";
        $this->dbname    = "reg_";
        
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
        
    }
}

class Registro extends Connect{
    
    public function agregaProspecto( $args= array()){

        $this->conn = parent::__construct();
        
        $sql = "INSERT INTO prospectos
        (nombre, apellido_paterno, apellido_materno, telefono, celular, email, periodoEscolar, id_empresa, clave_nivel, clave_carrera, clave_turno, origen_id, utpsource, descrip_camp_publicidad, campaignMedium, campaignTerm, campaignContent)
        VALUES ('".$args['pNombre']."', '".$args['pApPaterno']."', '".$args['pApMaterno']."', '".$args['pTelefono']."', '".$args['pCelular']."', '".$args['pCorreo']."', '".$args['pPeriodoEscolar']."', '".$args['pPlantel']."', '".$args['pNivel_Estudio']."', '".$args['pCarrera']."', '".$args['pHorario']."', '".$args['pOrigen']."', '".$args['utpsource']."', '".$args['descripPublicidad']."', '".$args['campaignMedium']."', '".$args['campaignTerm']."', '".$args['campaignContent']."')";

        if ($this->conn->query($sql) === TRUE) {
            return ['status' => 'ok', 'message' => 'Registro exitoso'];
        } else {
            //return false;
            return ['status' => 'error', 'message' => 'Error: ' . $sql . "<br>" . $this->conn->error];
        }
        
    
    }
    
}

?>