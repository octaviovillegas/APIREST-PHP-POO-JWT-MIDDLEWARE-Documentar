<?php
class usuario
{
	public $id;
 	public $nombre;
  	public $clave;
  	public $perfil;



	public static function TraerUnUsuario($clave,$nombre) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM `usuarios` WHERE clave='$clave'");
			$consulta->execute();
			$Buscado= $consulta->fetchObject('usuario');
			
			return $Buscado;				

			
	}

}