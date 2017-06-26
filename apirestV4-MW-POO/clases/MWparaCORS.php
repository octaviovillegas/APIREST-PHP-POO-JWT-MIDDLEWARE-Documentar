<?php


class MWparaCORS
{
	/**
   * @api {any} /HabilitarCORSTodos/  HabilitarCORSTodos
   * @apiVersion 0.1.0
   * @apiName HabilitarCORSTodos
   * @apiGroup MIDDLEWARE
   * @apiDescription  Por medio de este MiddleWare habilito que se pueda acceder desde cualquier servidor
   *
   * @apiParam {ServerRequestInterface} request  El objeto REQUEST.
 * @apiParam {ResponseInterface} response El objeto RESPONSE.
 * @apiParam {Callable} next  The next middleware callable.
   *
   * @apiExample Como usarlo:
   *   ->add(\verificador::class . ':HabilitarCORSTodos')
   */
	public function HabilitarCORSTodos($request, $response, $next) {
		/*
		al ingresar no hago nada
		*/
		 $response = $next($request, $response);
		 //solo afecto la salida con los header
		 $response->getBody()->write('<p>habilitado HabilitarCORSTodos</p>');
   		 return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	}

	/**
   * @api {any} /HabilitarCORS8080/  HabilitarCORS8080
   * @apiVersion 0.1.0
   * @apiName HabilitarCORS8080
   * @apiGroup MIDDLEWARE
   * @apiDescription  Por medio de este MiddleWare habilito que se pueda acceder desde http://localhost:8080
   *
   * @apiParam {ServerRequestInterface} request  El objeto REQUEST.
   * @apiParam {ResponseInterface} response El objeto RESPONSE.
   * @apiParam {Callable} next  The next middleware callable.
   *
   * @apiExample Como usarlo:
   *   ->add(\verificador::class . ':HabilitarCORS8080')
   */
	public function HabilitarCORS8080($request, $response, $next) {

		/*
		al ingresar no hago nada
		*/
		 $response = $next($request, $response);
		 $response->getBody()->write('<p>habilitado HabilitarCORS8080</p>');
   		 return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	}

		/**
   * @api {any} /HabilitarCORS4200/  HabilitarCORS4200
   * @apiVersion 0.1.0
   * @apiName HabilitarCORS4200
   * @apiGroup MIDDLEWARE
   * @apiDescription  Por medio de este MiddleWare habilito que se pueda acceder desde http://localhost:4200
   *
   * @apiParam {ServerRequestInterface} request  El objeto REQUEST.
   * @apiParam {ResponseInterface} response El objeto RESPONSE.
   * @apiParam {Callable} next  The next middleware callable.
   *
   * @apiExample Como usarlo:
   *   ->add(\verificador::class . ':HabilitarCORS4200')
   */
	public function HabilitarCORS4200($request, $response, $next) {

		/*
		al ingresar no hago nada
		*/
		 $response = $next($request, $response);
		 $response->getBody()->write('<p>habilitado HabilitarCORS4200</p>');
   		 return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	}

}