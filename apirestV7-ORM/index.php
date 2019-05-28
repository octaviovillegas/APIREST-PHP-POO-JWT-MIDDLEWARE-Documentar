<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require '../vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './clases/cdApi.php';
require_once './clases/AutentificadorJWT.php';
require_once './clases/MWparaCORS.php';
require_once './clases/MWparaAutentificar.php';
use \App\Models\cd as cdORM;

require_once './app/models/cd.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$config['db']= [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'cdcol',
            'username' => 'root',
            'password' => '',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ];

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


$container = $app->getContainer();
$dbSettings = $container->get('settings')['db'];

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection($dbSettings);
$capsule->bootEloquent();
$capsule->setAsGlobal();

//http://www.slimframework.com/docs/v3/handlers/error.html
$c =$container ;
$c['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        return $response->withStatus(500)
            ->withHeader('Content-Type', 'text/html')
            ->write('Un error no controlado!');
    };
};
$c['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        return $response->withStatus(404)
            ->withHeader('Content-Type', 'text/html')
            ->write('No es una ruta correcta');
    };
};
$c['notAllowedHandler'] = function ($c) {
    return function ($request, $response, $methods) use ($c) {
        return $response->withStatus(405)
            ->withHeader('Allow', implode(', ', $methods))
            ->withHeader('Content-type', 'text/html')
            ->write('solo se puede por: ' . implode(', ', $methods));
    };
};

$c['phpErrorHandler'] = function ($c) {
    return function ($request, $response, $error) use ($c) {
        return $response->withStatus(500)
            ->withHeader('Content-Type', 'text/html')
            ->write('Algo paso con tu PHP!');
    };
};


/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/cd', function () {
 
  $this->get('/', \cdApi::class . ':traerTodos')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
 
  $this->get('/{id}', \cdApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

  $this->post('/', \cdApi::class . ':CargarUno');

  $this->delete('/', \cdApi::class . ':BorrarUno');

  $this->put('/', \cdApi::class . ':ModificarUno');
     
})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');

/*LLAMADA a funciones del ORM*/
$app->group('/orm', function () {

  $this->get('/', function () {
    

    echo  "Traer todos los cds <br>";
    $cds = cdORM::all();
    echo $cds->toJson();

   
    //die();
    echo "<br><br><br>";
    echo "Agregar un cd<br>";
    $cd = new \App\Models\cd();
    $cd->titel="Album negri";
    $cd->interpret="Matalico";
    $cd->jahr=2020;
    
    $cd->save();

    echo $cd->toJson();
    echo "<br><br><br>";
    echo "Traer un cd<br>";

    $otroCd =$cd->find(5);
    echo $otroCd->toJson();

    echo "<br><br><br>";
     echo 'Modificar un cd<br>';
    $otroCd->titel="cambiado";
    $otroCd->interpret="Matalico";
    $otroCd->jahr=2666;

    $otroCd->save();
    echo $otroCd->toJson();
    echo "<br><br><br>";
    echo 'buscar los  cds<br>';
    $respuesta= $cd->where('titel', "=","Album negri")->get();
    echo $respuesta->toJson();

     echo "<br><br><br>";
    echo 'buscar el primero un cd<br>';
    $respuesta= $cd->where('titel', "=","Album negri")->first();
    echo $respuesta->toJson();
    
    echo "<br><br><br>";
    echo 'buscar el primero un cd $cd->where(titel,Album negri)->first() <br>';
    $respuesta= $cd->where('titel',"Album negri")->first();
    echo $respuesta->toJson();

     echo "<br><br><br>";
    echo 'buscar el wheretitel <br>';
    $respuesta= $cd->wheretitel("Album negri")->first();
    echo $respuesta->toJson();



     echo "<br><br><br>";
    echo 'borrar un cd<br>';

    $respuesta->delete();
    echo $respuesta->toJson();
  });

 
 
     
})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');



$app->run();