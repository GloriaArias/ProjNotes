"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _httpErrors=_interopRequireDefault(require("http-errors")),_express=_interopRequireDefault(require("express")),_path=_interopRequireDefault(require("path")),_cookieParser=_interopRequireDefault(require("cookie-parser")),_morgan=_interopRequireDefault(require("morgan")),_index=_interopRequireDefault(require("./routes/index")),_users=_interopRequireDefault(require("./routes/users")),_about=_interopRequireDefault(require("./routes/about"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}// Preambulo: Ayuda a manejar errores http
// Ayuda a crear servidores web
// Nucleo de node, ayuda al manejo de las rutas
// Ayuda al manejo de las cookies
// Maneja el log de peticiones http
//Las rutas
// Aquí se crea la instancia de express
//(req, res, next, err) => (...)
const app=(0,_express.default)();// Configuración del motor de plantillas (template engine)
// view engine setup
app.set("views",_path.default.join(__dirname,"views")),app.set("view engine","hbs"),app.use((0,_morgan.default)("dev")),app.use(_express.default.json()),app.use(_express.default.urlencoded({extended:!1})),app.use((0,_cookieParser.default)()),app.use(_express.default.static(_path.default.join(__dirname,"public"))),app.use("/",_index.default),app.use("/users",_users.default),app.use("/about",_about.default),app.use((a,b,c)=>{c((0,_httpErrors.default)(404))}),app.use((a,b,c)=>{// set locals, only providing error in development
// render the error page
c.locals.message=a.message,c.locals.error="development"===b.app.get("env")?a:{},c.status(a.status||500),c.render("error")});//Exportando instancia de app usando JS moderno
var _default=app;exports.default=_default;