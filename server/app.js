// Preambulo: Ayuda a manejar errores http
import createError from 'http-errors';
// Ayuda a crear servidores web
import express from 'express';
// Nucleo de node, ayuda al manejo de las rutas
import path from 'path';
// Ayuda al manejo de las cookies
import cookieParser from 'cookie-parser';
// Maneja el log de peticiones http
import logger from 'morgan';

//Las rutas
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import aboutRouter from "./routes/about";

// Webpack Modules
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

// Consultar el modo en que se está ejecutando la aplicacion
const env = process.env.NODE_ENV || 'developement';

// Aquí se crea la instancia de express
//(req, res, next, err) => (...)
var app = express();

// Verificando el modo de ejecución de la aplicación
if(env === 'development') {
  console.log('> Executing in Development Mode: Webpack Hot Reloading');
  // Paso 1. Agregando la ruta del HMR
  // reload= true: Habilita la recarga del frontend cuando hay cambios en
  // el código fuente del frontend
  // timeout=1000: Tiempo de espera entre recarga y recarga de la página
  webpackConfig.entry = ['webpack-hot-middleware/client?reload=true&timeout=1000', webpackConfig.entry];

  // Paso 2. Agregamos el plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // Paso 3. Crear el compilador de webpack
  const compiler = webpack(webpackConfig);

  // Paso 4. Agregando el Middleware a la cadena de Middlewares de nuestra aplicacion
  app.use(webpackDevMiddleware(compiler,{
    publicPath: webpackDevConfig.output.publicPath
  }));

  // Paso 5. Agregando el webpack Hot Middleware
  app.use(WebpackHotMiddleware(compiler));
}
else{
  console.log('> Executing in Production Mode...');
}

// Configuración del motor de plantillas (template engine)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Todos los middleware globales
// van primero que cualquier otro middleware de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Middleware de archivos estáticos
app.use(express.static(path.join(__dirname,"..", "public")));

//Registrando las rutas en la APP
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

//ctrl + k + c ---- Sirve para comentar en bloque
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ?
 err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});
//Exportando instancia de app usando JS moderno
export default app;
