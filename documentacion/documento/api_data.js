define({ "api": [
  {
    "version": "0.1.0",
    "name": "grupo_para_CD",
    "group": "API",
    "permission": [
      {
        "name": "Todos"
      }
    ],
    "description": "<p>Con el GET obtendremos el listado completo de CD que estan en la base.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "listado",
            "description": "<p>Listado de CDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Nohaycds",
            "description": "<p>No hay CDs en la base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoHayCds\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/   --por GET",
        "type": "json"
      }
    ],
    "type": "",
    "url": "",
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "API"
  },
  {
    "type": "any",
    "url": "/HabilitarCORS4200/",
    "title": "HabilitarCORS4200",
    "version": "0.1.0",
    "name": "HabilitarCORS4200",
    "group": "MIDDLEWARE",
    "description": "<p>Por medio de este MiddleWare habilito que se pueda acceder desde http://localhost:4200</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ServerRequestInterface",
            "optional": false,
            "field": "request",
            "description": "<p>El objeto REQUEST.</p>"
          },
          {
            "group": "Parameter",
            "type": "ResponseInterface",
            "optional": false,
            "field": "response",
            "description": "<p>El objeto RESPONSE.</p>"
          },
          {
            "group": "Parameter",
            "type": "Callable",
            "optional": false,
            "field": "next",
            "description": "<p>The next middleware callable.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "->add(\\verificador::class . ':HabilitarCORS4200')",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/clases/MWparaCORS.php",
    "groupTitle": "MIDDLEWARE"
  },
  {
    "type": "any",
    "url": "/HabilitarCORS8080/",
    "title": "HabilitarCORS8080",
    "version": "0.1.0",
    "name": "HabilitarCORS8080",
    "group": "MIDDLEWARE",
    "description": "<p>Por medio de este MiddleWare habilito que se pueda acceder desde http://localhost:8080</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ServerRequestInterface",
            "optional": false,
            "field": "request",
            "description": "<p>El objeto REQUEST.</p>"
          },
          {
            "group": "Parameter",
            "type": "ResponseInterface",
            "optional": false,
            "field": "response",
            "description": "<p>El objeto RESPONSE.</p>"
          },
          {
            "group": "Parameter",
            "type": "Callable",
            "optional": false,
            "field": "next",
            "description": "<p>The next middleware callable.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "->add(\\verificador::class . ':HabilitarCORS8080')",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/clases/MWparaCORS.php",
    "groupTitle": "MIDDLEWARE"
  },
  {
    "type": "any",
    "url": "/HabilitarCORSTodos/",
    "title": "HabilitarCORSTodos",
    "version": "0.1.0",
    "name": "HabilitarCORSTodos",
    "group": "MIDDLEWARE",
    "description": "<p>Por medio de este MiddleWare habilito que se pueda acceder desde cualquier servidor</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ServerRequestInterface",
            "optional": false,
            "field": "request",
            "description": "<p>El objeto REQUEST.</p>"
          },
          {
            "group": "Parameter",
            "type": "ResponseInterface",
            "optional": false,
            "field": "response",
            "description": "<p>El objeto RESPONSE.</p>"
          },
          {
            "group": "Parameter",
            "type": "Callable",
            "optional": false,
            "field": "next",
            "description": "<p>The next middleware callable.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "->add(\\verificador::class . ':HabilitarCORSTodos')",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/clases/MWparaCORS.php",
    "groupTitle": "MIDDLEWARE"
  },
  {
    "type": "any",
    "url": "/MWparaAutenticar/",
    "title": "Verificar Usuario",
    "version": "0.1.0",
    "name": "VerificarUsuario",
    "group": "MIDDLEWARE",
    "description": "<p>Por medio de este MiddleWare verifico las credeciales antes de ingresar al correspondiente metodo</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ServerRequestInterface",
            "optional": false,
            "field": "request",
            "description": "<p>El objeto REQUEST.</p>"
          },
          {
            "group": "Parameter",
            "type": "ResponseInterface",
            "optional": false,
            "field": "response",
            "description": "<p>El objeto RESPONSE.</p>"
          },
          {
            "group": "Parameter",
            "type": "Callable",
            "optional": false,
            "field": "next",
            "description": "<p>The next middleware callable.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "->add(\\MWparaAutenticar::class . ':VerificarUsuario')",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/clases/MWparaAutentificar.php",
    "groupTitle": "MIDDLEWARE"
  },
  {
    "type": "delete",
    "url": "/cd/",
    "title": "Borra un  CD",
    "version": "0.1.0",
    "name": "DeleteCD",
    "group": "cd",
    "permission": [
      {
        "name": "administrador - usuario"
      }
    ],
    "description": "<p>Por medio de este DELETE Borramos un  CD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de CD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "borrado",
            "description": "<p>true o false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"borrado\": \"OK\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSePudoBorrar",
            "description": "<p>No se borro de la base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se pudo Borrar el CD\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/   --por DELETE",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "cd"
  },
  {
    "type": "get",
    "url": "/cd/{id}",
    "title": "Traer un CD por ID",
    "version": "0.1.0",
    "name": "GETUnCD",
    "group": "cd",
    "permission": [
      {
        "name": "Administrador/Usuario"
      }
    ],
    "description": "<p>Con el GET obtendremos el CD que corresponda con el ID Ingresado</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de CD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "unCD",
            "description": "<p>el CD encontrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoEstaElCd",
            "description": "<p>No esta el CD en la Base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoEStaElCD\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/666   --por GET",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "cd"
  },
  {
    "type": "get",
    "url": "/cd/",
    "title": "Traer todos los CDs",
    "version": "0.1.0",
    "name": "GetCD",
    "group": "cd",
    "permission": [
      {
        "name": "Todos"
      }
    ],
    "description": "<p>Con el GET obtendremos el listado completo de CD que estan en la base.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "listado",
            "description": "<p>Listado de CDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"},\n {\"titulo\": \"Ejemplo\",\"interprete\": \"Walter\",\"anio\": \"2017\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Nohaycds",
            "description": "<p>No hay CDs en la base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoHayCds\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/   --por GET",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "cd"
  },
  {
    "type": "PUT",
    "url": "/cd/",
    "title": "Modifica un  CD",
    "version": "0.1.0",
    "name": "PUTCD",
    "group": "cd",
    "permission": [
      {
        "name": "administrador"
      }
    ],
    "description": "<p>Por medio de este PUT modificamos un  CD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>El ID del CD</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "anio",
            "description": "<p>El año del CD, si no lo ingresa se pone el actual</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Titulo",
            "description": "<p>El titulo del CD.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Interprete",
            "description": "<p>El interprete del CD.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Modifico",
            "description": "<p>true o false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DatosModificados",
            "description": "<p>Ultimos datos modificados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"Modificacion\": \"OK\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSePudoModificar",
            "description": "<p>No se modifico en la base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se pudo Modificar el CD\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/   --por PUT",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "cd"
  },
  {
    "type": "post",
    "url": "/cd/",
    "title": "Carga un nuevo CD",
    "version": "0.1.0",
    "name": "PostCD",
    "group": "cd",
    "permission": [
      {
        "name": "Administrador/Usuario"
      }
    ],
    "description": "<p>Por medio de este POST ingresamos un nuevo CD</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "anio",
            "description": "<p>El año del CD, si no lo ingresa se pone el actual</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Titulo",
            "description": "<p>El titulo del CD.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Interprete",
            "description": "<p>El interprete del CD.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ingreso",
            "description": "<p>true o false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ULtimoId",
            "description": "<p>ultimo ID ingresado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"Ingreso\": \"OK\",\"UltimoID\": \"33\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSePudoGuardar",
            "description": "<p>No se guardo en la base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta con error:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se pudo Guardar el CD\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Como usarlo:",
        "content": "http://localhost/cd/   --por POST",
        "type": "json"
      }
    ],
    "filename": "apirestV7-DOC/index.php",
    "groupTitle": "cd"
  }
] });
