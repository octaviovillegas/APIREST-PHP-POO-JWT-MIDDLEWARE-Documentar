# APIREST-ORM

## Illuminate Database

The Illuminate Database component is a full database toolkit for PHP, providing an expressive query builder, ActiveRecord style ORM, and schema builder. It currently supports MySQL, Postgres, SQL Server, and SQLite. It also serves as the database layer of the Laravel PHP framework.

```PHP

composer require illuminate/database

```

** configurar la conexión Eloquent ORM**


```PHP
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

```
** Crear la clase  de la entidad Eloquent ORM**


```PHP

<?php  
namespace App\Models;
 
class cd extends \Illuminate\Database\Eloquent\Model {  
  
}


```

** referenciar la clase y usar un alias para el namespace de la entidad Eloquent ORM**


```PHP

use \App\Models\cd as cdorm;

require_once './app/models/cd.php';

```




** configurar Eloquent ORM**

In your dependencies.php or wherever you add your Service Factories:

```PHP

$app = new \Slim\App(["settings" => $config]);
// Service factory for the ORM
$container = $app->getContainer();
$dbSettings = $container->get('settings')['db'];

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection($dbSettings);
$capsule->bootEloquent();
$capsule->setAsGlobal();


```


** Usar Eloquent ORM**


```PHP

$app->group('/orm', function () {

  $this->get('/', function () {
    

    echo  "Traer todos los cds <br>";
    $cds = cdorm::all();
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

 
 
     
});


```

