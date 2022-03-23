"use strict";// Importamos Express
var express=require("express"),router=express.Router();// Importamos el enrutador de Express
/* GET home page. */router.get("/",function(a,b){//render manda a renderizar (generar y entregar)
b.render("about",// Este es el View_Model
{name:"Gloria Arias Utrera",email:"ariasutreragloria@gmail.com",url:"www.itgam.com/gloria.arias"})}),module.exports=router;