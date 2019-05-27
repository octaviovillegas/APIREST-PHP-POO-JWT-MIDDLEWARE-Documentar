# APIREST-ORM

## Illuminate Database

 "Illuminate Database component" es un conjunto de herramientas de base de datos completo para PHP, que proporciona un generador de consultas expresivo, un ORM de estilo ActiveRecord y un generador de esquemas. Actualmente es compatible con MySQL, Postgres, SQL Server y SQLite. También sirve como la capa de base de datos del marco PHP Laravel.


```console

composer require illuminate/database

```

Se puede usar un Object Relational Mapper (ORM) para conectar la aplicación SlimPHP. Esto significa que cada una de las tablas de base de datos del servidor es un objeto. Por lo tanto, debe escribir una nueva clase para una tabla específica . 

Después de eso, cree una nueva instancia de la clase, ahora puede:
   - crear
   - recuperar
   - actualizar 
   - eliminar el registro de la tabla

 por lo que no necesitas escribir ninguna consulta de SQL. Los beneficios de usar ORM en su proyecto  es no necesitar  escribir consultas de SQL complejas y le permiten escribir una sintaxis simple para controlar la base de datos. 




Ahora, veamos un ejemplo de modelo de "cd", que usaremos para recuperar y almacenar información de nuestra tabla de la base de datos de "cds".

Por convención, el "snake_case", nombre plural de la clase se utilizará como nombre de la tabla a menos que se especifique explícitamente otro nombre. Por lo tanto, en este caso, Eloquent asumirá que el modelo de "cd" almacena registros en la tabla de "cds".

Si desea mencionar el nombre de la tabla manualmente, puede hacerlo con la propiedad $table en la clase modelo.

```PHP

 protected $table = 'mi_cds';


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

en el subdirectorio /app/models/

```PHP

<?php  
namespace App\Models;
 
class cd extends \Illuminate\Database\Eloquent\Model {  
  
}

?>

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

