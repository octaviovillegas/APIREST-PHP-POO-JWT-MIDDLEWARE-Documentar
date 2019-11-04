<?php

require_once 'usuario.php';
require_once 'IApiUsable.php';

class login
{
	
	public  function hacerLogin($request, $response, $args) 
	{

		$objDelaRespuesta= new stdclass();
        $ArrayDeParametros = $request->getParsedBody();
        //var_dump($ArrayDeParametros);
        $nombre= $ArrayDeParametros['nombre'];
        $clave= $ArrayDeParametros['clave'];
        $miUsuario = usuario::TraerUnUsuario($clave, $nombre);

        //var_dump( $miUsuario);

		$datos = array('usuario' => $miUsuario->nombre,'perfil' => $miUsuario->perfil);
    
     	 $token= AutentificadorJWT::CrearToken($datos); 
     	 $response->withStatus(200)
            ->withHeader('Content-Type', 'text/html')
            ->write("{token:$token}");
    
			
	}

}