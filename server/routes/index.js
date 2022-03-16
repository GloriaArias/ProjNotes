var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let emojieDataset = ['😎','😛','🤩','👼','🎈','🎄','🎀','⏱','🥩','🏍','🚩','🌤','🌚','🌟','⚡','🌈','💙','🕳','💨','♻'];
  let emojie = emojieDataset[Math.floor(Math.random()* emojieDataset.length)];
  res.render('index',
   { 
     title: 'Express' ,
     author: 'Arias Utrera Gloria',
     emojie
    });
}); 

module.exports = router;
