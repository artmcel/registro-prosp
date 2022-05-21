<?php


// Funcion para obtener los datos de una peticion
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

/**
 * request url
 */

$url = $_GET['obtener'];

$guardaDatos = function( $args= array() ){

    //echo json_encode($args);
    require('./service.php');
    $ws = new Registro();
    $resultado = $ws->agregaProspecto( $args );
    echo json_encode($resultado);
    

};

if( $url == "guardaDatos" ){
    
    $recibeJson = json_decode(file_get_contents('php://input'), false);
    $datos      = (array)$recibeJson;

    if( !empty($datos['utm_source']) || !empty($datos['utm_campaign']) || !empty($datos['utm_medium']) || !empty($datos['utm_id']) || !empty($datos['utm_content']) ) {
        $datos['utm_source']= $datos['utm_source'];
        $datos['utm_campaign']= $datos['utm_campaign'];
        $datos['utm_medium']= $datos['utm_medium'];
        $datos['utm_id']= $datos['utm_id'];
        $datos['utm_content']= $datos['utm_content'];
        
    }else{
        $datos['utm_source']= "organico";
        $datos['utm_campaign']= "0";
        $datos['utm_medium']= "0";
        $datos['utm_id']= "0";
        $datos['utm_content']= "0";             
    }

    $args = array(

	    'pNombre'           => $datos['nombre'],
        'pApPaterno'        => $datos['apaterno'],
        'pApMaterno'        => $datos['amaterno'],
        'pTelefono'         => $datos['telefono'],
        'pCelular'          => $datos['celular'],
        'pCorreo'           => $datos['email'],
        'pPeriodoEscolar'   => $datos['periodo'],
        'pPlantel'          => $datos['plantel'],
        'pNivel_Estudio'    => $datos['nivel'],
        'pCarrera'          => $datos['carrera'],
        'pHorario'          => 0,
        'pOrigen'           => '13',
        'utpsource'         => $datos['utm_source'],
        'descripPublicidad' => $datos['utm_campaign'],
        'campaignMedium'    => $datos['utm_medium'],
        'campaignTerm'      => $datos['utm_id'],
        'campaignContent'   => $datos['utm_content'],             
    );

    //print_r($args);
    $guardaDatos($args);

}



?>