<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require '../vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once '/clases/cd.php';
require_once './clases/AutentificadorJWT.php';


$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);

  $app->get('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("GET => Bienvenido!!! ,a SlimFramework");
    return $response;
  });

  $app->get('/crearToken/', function (Request $request, Response $response) {
      $datos = array('usuario' => 'rogelio@agua.com','perfil' => 'Administrador', 'alias' => "PinkBoy");
     //$datos = array('usuario' => 'rogelio@agua.com','perfil' => 'profe', 'alias' => "PinkBoy");
      
      $token= AutentificadorJWT::CrearToken($datos); 
      $newResponse = $response->withJson($token, 200); 
      return $newResponse;
  });

  $app->get('/devolverPayLoad/', function (Request $request, Response $response) { 
      $datos = array('usuario' => 'rogelio@agua.com','perfil' => 'Administrador', 'alias' => "PinkBoy");
      $token= AutentificadorJWT::CrearToken($datos); 
      $payload=AutentificadorJWT::ObtenerPayload($token);
      $newResponse = $response->withJson($payload, 200); 
      return $newResponse;
  });

  $app->get('/devolverDatos/', function (Request $request, Response $response) {
      $datos = array('usuario' => 'rogelio@agua.com','perfil' => 'Administrador', 'alias' => "PinkBoy");
      $token= AutentificadorJWT::CrearToken($datos); 
      $payload=AutentificadorJWT::ObtenerData($token);
      $newResponse = $response->withJson($payload, 200); 
      return $newResponse;
  });

  $app->get('/verificarTokenNuevo/', function (Request $request, Response $response) { 
      $datos = array('usuario' => 'rogelio@agua.com','perfil' => 'Administrador', 'alias' => "PinkBoy");
      $token= AutentificadorJWT::CrearToken($datos); 
      $esValido=false;
      try 
      {
        AutentificadorJWT::verificarToken($token);
        $esValido=true;      
      }
      catch (Exception $e) {      
        //guardar en un log
        echo $e;
      }
      if( $esValido)
      {
          /* hago la operacion del  metodo */
          echo "ok";
      }   
      return $response;
  });

  $app->get('/verificarTokenViejo/', function (Request $request, Response $response) {    
      
      $esValido=false;

      try {
        AutentificadorJWT::verificarToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTczMTM0NTEsImV4cCI6MTQ5NzMxMzUxMSwiYXVkIjoiMTU3NDQzNzc4MzUzNGEzMDNjYzExY2YzNGI0OTc1ODAxMTNkMDBiOSIsImRhdGEiOnsibm9tYnJlIjoicm9nZWxpbyIsImFwZWxsaWRvIjoiYWd1YSIsImVkYWQiOjQwfSwiYXBwIjoiQVBJIFJFU1QgQ0QgMjAxNyJ9.DZ1LC0BTl5YKHWr7NjWY6r2EDKvVBeOTZiNEv4CXaN0");
        $esValido=true;
        
      } catch (Exception $e) {      
        //guardar en un log
        echo $e;
      }
      if( $esValido)
      {
          /* hago la operacion del  metodo
          */
          echo "ok";
      }   
      return $response;

  });
  $app->get('/verificarTokenError/', function (Request $request, Response $response) {    
      
      $esValido=false;
      // cambio un caracter de un token valido
      try {
        AutentificadorJWT::verificarToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTczMTM0NTEsImV4cCI6MTQ5NzMxMzUxMSwiYXVkIjoiMTU3NDQzNzc4MzUzNGEzMDNjYzExY2YzNGI0OTc1ODAxMTNkMDBiOSIsImRhdGEiOnsibm9tYnJlIjoicm9nZWxpbyIsImFwZWxsaWRvIjoiYWd1YSIsImVkYWQiOjQwfSwiYXBwIjoiQVBJIFJFU1QgQ0QgMjAxNyJ9.DZ1LC0BTl5YKHWr7NjWY6r2EDKvVBeOTZiNEv4CXaN");
        $esValido=true;
        
      } catch (Exception $e) {      
        //guardar en un log
        echo $e;
      }
      if( $esValido)
      {
          /* hago la operacion del  metodo
          */
          echo "ok";
      }   
      return $response;

  });


$app->run();