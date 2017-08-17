# APIREST-PHP-POO-JWT-MIDDLEWARE-Documentar
API REST  en PHP con SlimFramework, POO + JSON Web Token + MiddleWare

<br>
También tengo un archivo .htaccess en mi directorio src / public; Esto depende del módulo de reescritura de Apache que está habilitado y simplemente hace que todas las peticiones de la web vayan a index.php para que Slim pueda manejar todo el enrutamiento para nosotros. Aquí está mi archivo .htaccess:
<br>
<br>
<br>
<br>

<p>RewriteEngine on</p>
<p>RewriteCond %{REQUEST_FILENAME} !-d </p>
<p>RewriteCond %{REQUEST_FILENAME} !-f </p>
<p>RewriteRule . index.php [L] </p>
